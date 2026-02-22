import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold tracking-tighter">
          blog
        </h1>
        </div>
      
      <div className="mb-10" />

      <BlogPosts />
    </section>
  )
}
