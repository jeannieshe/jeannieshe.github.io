'use client'

import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { useState, useMemo } from 'react'

export function BlogPosts() {
  let allBlogs = getBlogPosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    allBlogs.forEach(post => {
      const postTags = (post.metadata as any).tags || []
      postTags.forEach((tag: string) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [allBlogs])

  // Filter posts
  const filteredBlogs = useMemo(() => {
    return allBlogs
      .sort((a, b) => {
        if (
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ) {
          return -1
        }
        return 1
      })
      .filter((post) => {
        const postTags = (post.metadata as any).tags || []
        const matchesTag = !selectedTag || postTags.includes(selectedTag)
        const matchesSearch = !searchQuery ||
          post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.metadata.summary.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTag && matchesSearch
      })
  }, [allBlogs, selectedTag, searchQuery])

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
    setSearchQuery('') // Clear search when filtering by tag
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setSelectedTag(null) // Clear tag filter when searching
          }}
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tag Filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              Clear filter
            </button>
          )}
        </div>
      )}

      {/* Posts List */}
      <div>
        {filteredBlogs.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400">No posts found.</p>
        ) : (
          filteredBlogs.map((post) => {
            const postTags = (post.metadata as any).tags || []
            return (
              <div key={post.slug} className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800 last:border-0">
                <Link
                  className="block group"
                  href={`/blog/${post.slug}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-2 mb-2">
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm md:w-[100px] tabular-nums flex-shrink-0">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                    <div className="flex-1">
                      <h2 className="text-neutral-900 dark:text-neutral-100 font-medium tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.metadata.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                        {post.metadata.summary}
                      </p>
                      {postTags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {postTags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
