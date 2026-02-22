import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  title: 'about',
  description: 'Core parts of my story.',
}

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        about me
      </h1>

      <p className="mb-4">
        {`Like toppings on an everything bagel, a handful of diverse life experiences peppered throughout 
        my years have shaped who I am today. I share the iceberg tips of a select few below.`}
      </p>

      <p className="mb-4">
        {`Before I matriculated to MIT, I took a gap year, motivated by mental burnout and physical illness.
        I spent a few months doing a homestay program in Barcelona with my best friend S, eating the best fresh purple tomatoes 
        native to Spain and teaching English to my host family's children. I spent the rest of the time in doctors' offices and on yoga mats,
        relentlessly trying to get my chronic autoimmune condition under control.`}
      </p>

      <p className="mb-4">
        {`My chronic illness coached me into developing mental resilience, patience, and to never take a moment for granted. If you, too, find yourself on 
        an elimination diet, sleeping on allergy patch tests, or rehashing your experience to so many doctors you develop your own "pitch" complete with an album
        of photos to present, I see you and send love.`}
      </p>

      <p className="mb-4">
        {`As a daughter of Chinese immigrants, the pride I feel for and inspiration I feel from my parents trumps any fear I could ever ever experience when taking risks.`}
      </p>

      <p className="mb-4">
        {`Amidst everything, the moments I cherish the absolute most coincide with laughing until I keel over and eating
        the world's panoply of delectable foods.`}
      </p>

      <p className="mb-4">
        <>
              I enjoy reading, weightlifting, playing Bananagrams, playing tennis, running 5Ks, admiring sunsets, 
          exploring new cities, hiking, taking risks on my peers (see: {' '}
              <Link className="underline decoration-[#B33E6D]" href="/coursework">
                pioneering the MIT Biotech Group's Consulting Initiative
              </Link>), 
          and anything where I get to cherish and share joy with people I adore.
            </>
      </p>


    </section>
  )
}
