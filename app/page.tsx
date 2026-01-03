import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        hi there! i'm jeannie.
      </h1>
      <p className="mb-4">
        {`I'm an undergraduate student at MIT studying AI and bioengineering.
        I hope to live a life where I deliver significant impact on causes I care deeply about.
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

      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          coursework
      </h2>
      <p className="mb-4">
        {`Coming into MIT as a first-gen, low-income student, browsing the course
        catalog made me feel as though I
        suddenly had the entire world at my fingertips. My limiting reagents became
        my time and the battery on my Apple Pencil. I cannot overstate my gratitude towards MIT
        for providing me a world-class, holistic education, which is least of all 
        described by the smattering of classes I took during my time here.`}
      </p>
      <p className="mb-4">
        {`(G) indicates a graduate level course.`}
      </p>
      <ul className="space-y-4">
        <li>
          <strong>Computer Science & Machine Learning</strong>
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>6.7920 Reinforcement Learning (G)</li>
            <li>6.7930 Machine Learning for Healthcare (G)</li>
            <li>6.4300 Computer Vision</li>
            <li>6.390 Machine Learning</li>
            <li>6.C57 Optimization Methods</li>
            <li>6.1210 Algorithms</li>
            <li>6.1010 Fundamentals of Programming</li>
          </ul>
        </li>
        <li>
          <strong>Mathematics</strong>
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>18.06 Linear Algebra</li>
            <li>6.3700 Probability & Statistics</li>
          </ul>
        </li>
        <li>
          <strong>Biology & Chemistry</strong>
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>5.12 Organic Chemistry</li>
            <li>7.05 Biochemistry</li>
            <li>7.03 Genetics</li>
            <li>7.06 Cell Biology</li>
          </ul>
        </li>
        <li>
          <strong>Biological Engineering</strong>
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>20.110 Thermodynamics</li>
            <li>20.309 Bioinstrumentation and Measurement</li>
            <li>20.320 Analysis of Biomolecular and Cellular Systems</li>
            <li>20.260 Computational Analysis of Biological Data</li>
          </ul>
        </li>
        <li>
          <strong>Other Academic Pursuits</strong>
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>21G.715 Topics in Medicine and Public Health in the Hispanic World</li>
            <li>15.373 Venture Engineering</li>
            <li>6.4590 Foundations of Information Policy</li>
            <li>24.05 Philosophy of Religion</li>
            <li>2.00B Toy Product Design</li>
          </ul>
        </li>
      </ul>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
