import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

// Custom component for indented paragraphs
function Indent({ children }: { children: React.ReactNode }) {
  return <div className="ml-8 my-4">{children}</div>
}

// Custom component for asterisk divider
function Divider() {
  return (
    <div className="flex justify-center my-8">
      <span className="text-2xl text-neutral-400">* * *</span>
    </div>
  )
}

// Custom component for image floated to the right
function ImageRight({ src, alt, caption, width = 300 }: { src: string; alt: string; caption?: string; width?: number }) {
  return (
    <figure className="float-right ml-6 mb-4" style={{ width: `${width}px` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="rounded-lg"
      />
      {caption && (
        <figcaption className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Custom component for centered image
function ImageCenter({ src, alt, caption, width = 600 }: { src: string; alt: string; caption?: string; width?: number }) {
  return (
    <figure className="flex flex-col items-center my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        className=""
      />
      {caption && (
        <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 text-center italic max-w-[600px]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Custom component for sidenotes/footnotes in the margin
function Sidenote({ children, side = 'right' }: { children: React.ReactNode; side?: 'left' | 'right' }) {
  const sideClass = side === 'right'
    ? 'md:absolute md:left-[calc(100%+3rem)] md:w-56'
    : 'md:absolute md:right-[calc(100%+3rem)] md:w-56'

  return (
    <span className="sidenote-wrapper">
      <sup className="sidenote-ref text-blue-600 dark:text-blue-400 cursor-help"></sup>
      <span className={`sidenote ${sideClass} hidden md:block text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed`}>
        <sup className="text-blue-600 dark:text-blue-400 mr-1 sidenote-number"></sup>
        {children}
      </span>
    </span>
  )
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Indent,
  Divider,
  ImageRight,
  ImageCenter,
  Sidenote,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
