import Link from 'next/link'
import Card from './components/card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        hi there! i'm jeannie.
      </h1>
      <p className="mb-8">
        {`I'm an undergraduate student at MIT studying AI and bioengineering. I conduct research on, build,
        and engineer highly ethical, explainable AI to remove human-made bottlenecks.
        I'm crafting my life to contribute meaningful impact towards causes I care deeply about.
        `}
        </p>
        <p className="mb-8">
        {`I believe time is our most valuable asset. I enjoy reading, weightlifting, playing 
        Bananagrams, admiring sunsets, 
        exploring new cities, hiking, taking risks on my peers (see: pioneering the MIT Biotech Group's Consulting Initiative), 
        and anything where I get to cherish and share joy with people I adore.`}
        </p>
        <p className="mb-8">
        {`On an average day, you're more likely than not to find me with my beloved Kindle and journal, listening to Men I Trust :)`}
        </p>

      <h2 className="mb-5 text-3xl font-semibold tracking-tighter">
          what i'm up to this month
      </h2>
      {/* <p className="mb-4">
        {`Text text text
        `}
      </p> */}
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
      </div>
    </section>
  )
}
