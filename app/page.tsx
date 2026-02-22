import Link from 'next/link'
import Card from './components/card'
import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export const runtime = 'edge'

export default function Page() {
  return (
    <section>
          
      <div className="flex flex-row gap-10">
        <div className="md:w-[70%]">
          <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
            hi! i'm jeannie.
          </h1>
          <p className="mb-8">
            {`The most important problem I want to solve in my lifetime is for every individual to be able to access a complete, granular understanding of their health, on demand.
            `}
          </p>
          <p className="mb-8">
            {`I'm a student at MIT studying AI and bioengineering (currently on leave). I conduct research on, build,
            and engineer highly ethical, explainable AI to remove human-made bottlenecks.
            `}
          </p>
          <p className="mb-8">
            I believe time, attention, and joy are our most valuable assets as humans. They, amongst <Link className="underline decoration-[#B33E6D] ml-0.5" href="/about">other life experiences</Link>, have made me who I am today.
          </p>
          
          {/* <p className="mb-8">
          {`I enjoy reading, weightlifting, playing 
          Bananagrams, playing tennis, running 5Ks, admiring sunsets, 
          exploring new cities, hiking, taking risks on my peers (see: pioneering the MIT Biotech Group's Consulting Initiative), 
          and anything where I get to cherish and share joy with people I adore.`}
          </p>
          <p className="mb-8">
          {`On an average day, you're more likely than not to find me with my beloved Kindle and journal, listening to Men I Trust :)`}
          </p> */}
          {/* <p className="mb-8">
          My email is <Link className="underline decoration-[#B33E6D] ml-0.5" href="mailto:jeanshe@mit.edu">jeanshe at mit dot edu</Link>. Feel free to reach out!
          </p> */}
        </div>
        <div className="md:w-[30%] flex justify-center items-start">
          <Image 
            className="rounded-full object-cover w-full aspect-square" 
            src="/images/happy-on-killian.jpg" 
            alt="A headshot of Jeannie She" 
            width="500" 
            height="500"
            style={{ objectPosition: "40% center" }}
          />
        </div>

      </div>

      {/* <h2 className="mb-5 text-3xl font-semibold tracking-tighter">
          what i'm up to this month
      </h2>
      <div className="flex flex-col gap-y-4">

        <Card
            title={`Software and AI Engineer Intern @ Nasdaq`}
            subtitle={`Jan 2025`}
            // description={`More to come soon...`}
          />
        <Card
          title={`Hacking away at the OpenADMET x ExpansionRx Blind Challenge`}
          subtitle={`Nov 2025 - Present`}
          description={
            <>
              <p className="mb-2">Applying reinforcement learning to predict ADMET endpoints
              with high accuracy in this <Link className="underline decoration-[#B33E6D] ml-1" 
              href="https://huggingface.co/spaces/openadmet/OpenADMET-ExpansionRx-Challenge">
                OpenADMET-hosted challenge.</Link></p>
            </>
          }
        />
        <Card
            title={`Teaching Assistant @ MIT 6.S191 Introduction to Deep Learning`}
            subtitle={`Jan 2025`}
          />
      </div>
      <div className='mb-10'>

      </div>
      <h2 className="mb-5 text-3xl font-semibold tracking-tighter">
          what i've been up to recently
      </h2>
      <div className="flex flex-col gap-y-4">

        <Card
            title={`Software Engineer Intern @ Stealth Healthtech Startup`}
            subtitle={`June 2025 - August 2025`}
            description={`Building the MVP from the ground-up, focusing on RAG functionality.`}
          />
        <Card
          title={`Process Development Intern @ Moderna`}
          subtitle={`June 2025 - August 2025`}
          description={
            `Engineering lipid nanoparticles in the wet lab and through computational analysis towards better vaccines and therapeutics.`
          }
        />
      </div> */}

      {/* <div className='mb-10'>

      </div>
      <h2 className="mb-5 text-3xl font-semibold tracking-tighter">
        blogposts
      </h2>

      <div className="my-8">
        <BlogPosts />
      </div> */}
      
    </section>
  )
}
