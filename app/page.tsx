import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        hi there! i'm jeannie.
      </h1>
      <p className="mb-4">
        {`I'm an undergraduate student at MIT studying AI and bioengineering.
        I hope to live a life where I contribute meaningful impact towards causes I care deeply about.
        `}
      </p>

      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          Title
      </h2>
      <p className="mb-4">
        {`Text text text
        `}
      </p>

      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          teaching
      </h2>
      <p className="mb-4">
        {`Text text text
        `}
      </p>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
