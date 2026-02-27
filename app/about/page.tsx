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
        {`Like toppings on an everything bagel, a handful of life experiences peppered throughout 
        my years have shaped who I am today. I share a select few below which may shed more light on why I find time, attention, and joy invaluable.`}
      </p>
      <p className="mb-4">
        {`___`}
      </p>

      <p className="mb-4">
        <>
        1. Before I matriculated to MIT, I took a gap year, motivated by mental burnout, political activism, and physical illness.
        I spent a few months doing a homestay program in Barcelona with my best friend S, eating the best fresh purple tomatoes 
        native to Spain and teaching English to my host family's children. I had the privilege of interning as a grassroots leader with {' '}
        <Link className="underline decoration-[#B33E6D]" href="https://www.everytown.org/">
                Everytown
        </Link>, where I turned emotion into action every day. I spent the rest of my time in doctors' offices and on yoga mats,
        relentlessly trying to get my chronic autoimmune condition under control.
        </>
      </p>

      <p className="mb-4">
        {`2. My chronic illness coaches me to developing mental resilience, patience, and to never take a moment for granted. If you, too, find yourself on 
        an elimination diet, sleeping on allergy patch tests, or rehashing your experience repeatedly to so many doctors you develop your own "pitch" complete with an album
        of photos to present, I see you and send love.`}
      </p>

      <p className="mb-4">
        {`3. As a daughter of Chinese immigrants, the pride I feel for and inspiration I feel from my parents trumps any fear I could ever ever experience when taking risks.`}
      </p>

      <p className="mb-4">
        {`4. Amidst the chaos, the moments I cherish the absolute most coincide with laughing until I keel over, playing Bananagrams with close friends and strangers alike, eating the world's panoply of delectable foods with interesting people, and any activity where I get to cherish and share joy with people I adore.`}
      </p>

      {/* <p className="mb-4">
        <>
            4. A few of my cherished hobbies include creative reading playing Bananagrams,, various forms of exercise (weightlifting, playing tennis, running 5Ks, hiking), admiring sunsets, 
            exploring new cities, knitting and junk journaling, hiking, taking risks on my peers (see: {' '}
              <Link className="underline decoration-[#B33E6D]" href="/coursework">
                pioneering the MIT Biotech Group's Consulting Initiative
              </Link>), 
          and anything where I get to cherish and share joy with people I adore.
            </>
      </p> */}


    </section>
  )
}
