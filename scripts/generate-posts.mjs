import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) {
    throw new Error('No frontmatter found')
  }
  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes

    // Handle tags as an array
    if (key.trim() === 'tags') {
      metadata[key.trim()] = value.split(',').map(tag => tag.trim())
    } else {
      metadata[key.trim()] = value
    }
  })

  return { metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

// Generate the posts
const postsDir = path.join(__dirname, '..', 'app', 'blog', 'posts')
const outputFile = path.join(__dirname, '..', 'app', 'blog', 'generated', 'posts.ts')
const posts = getMDXData(postsDir)

// Ensure the generated directory exists
const generatedDir = path.dirname(outputFile)
if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true })
}

// Write the output file
const fileContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)}\n`
fs.writeFileSync(outputFile, fileContent, 'utf-8')

console.log(`✓ Generated ${posts.length} blog posts to ${outputFile}`)
