import Card from "app/components/card"
import Link from 'next/link'

export const runtime = "edge";

export const metadata = {
  title: 'coursework',
  description: 'Select list of MIT coursework.',
}

export default function Coursework() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        teaching
      </h1>

      <p className="mb-4">
        {`Teaching has pushed me beyond my comfort zone and taught me that the best
        student does not necessarily make the best teacher. I'm grateful for the
        opportunities to be able to share my perspective with others in the pursuit
        of achieving understanding.`}
      </p>

      <div className="flex flex-col gap-y-4">
        <Card
          title={`MIT Biotech Group Consulting Initiative`}
          subtitle={`Co-director | Sep 2025 - Jan 2026`}
          description={
            <>
              I pioneered a new branch of the MIT Biotech Group focused on life science consulting
              to fill an unseen gap in these resources on campus. I recruited and trained a
              20-student team spanning undergraduates, graduate students and postdocs to deliver analyses for local startups and research labs.
              I prioritized contributing to future MIT classes, leaving a meaningful legacy, and empowering my peers with the faith
              that they can learn and achieve whatever they put their minds to. 
            </>
          }
          images={["/images/coursework/consulting-initiative/first_meeting.jpg", "/images/coursework/consulting-initiative/seaport.jpg", "/images/coursework/consulting-initiative/dinner.jpg"]}
        />
        <Card
          title={`6.S191 Introduction to Deep Learning`}
          subtitle={`Teaching Assistant | Jan 2025`}
          description={
            <>
              I served as one of five TAs leading one of the most globally-watched and
              highly-subscribed week-long bootcamps on machine learning. This course exposes students from all
              backgrounds to key concepts in machine learning, including transformers, CNNs, RNNs,
              and bias removal in AI. I always champion democratizing education, and being able to lead this highly
              accessible course intended to reduce barriers to entry into ML was extremely gratifying. {' '}
              <Link className="underline decoration-[#B33E6D]" href="http://introtodeeplearning.com/">
                Check out the lab materials!
              </Link>
            </>
          }
        />
        <Card
          title="20.309 Bioinstrumentation & Measurement"
          subtitle="Teaching Assistant | Sep 2024 - Dec 2024"
          description={`As one of three teaching assistants of this lab-based class, I hosted lab hours
          and graded problem sets each week. I also provided exam review sessions to students
          and answered students questions asynchronously on Slack.
          Sitting next to students while they debugged 
          breadboards and built their own microscopes was incredibly fun; when the lightbulb went off,
          I felt just as gratified as the student. 20.309 covers quantitative biological measurement, 
          electronic and optical instrumentation, microscopy and imaging systems, signal 
          processing and noise analysis, and statistical interpretation of experimental data.`}
          images={["/images/coursework/bioinstrumentation/image1.jpg", "/images/coursework/bioinstrumentation/image2.jpg"]}
        />
        <Card
          title={`6.3700 Probability & Statistics`}
          subtitle={`Grader | Sep 2025 - Dec 2025`}
          description={`As one of five graders, I provided feedback to 120 students weekly through
            grading their problem sets. Having been one of the most challenging math courses I've
            ever taken, being given the chance to be a grader was validating and a great opportunity
            to continue reviewing course material. This course covers an introduction to probability 
            theory, modeling and analysis for probabilistic systems, and Bayesian inference.`}
        />
        
      </div>

      {/* make space */}
      <div className="mb-8">
      </div>
      {/* coursework */}
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        coursework
      </h1>

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
      <div className="flex flex-col gap-y-4">

        <Card
            title="Computer Science & Machine Learning"
            description={
            <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>6.7920 Reinforcement Learning (G)</li>
            <li>6.7930 Machine Learning for Healthcare (G)</li>
            <li>6.4300 Computer Vision</li>
            <li>6.390 Machine Learning</li>
            <li>6.C57 Optimization Methods</li>
            <li>6.1210 Algorithms</li>
            <li>6.1010 Fundamentals of Programming</li>
          </ul>}
        />
        <Card
            title="Mathematics"
            description={
            <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>18.06 Linear Algebra</li>
            <li>6.3700 Probability & Statistics</li>
          </ul>}
        />
        <Card
            title="Biology & Chemistry"
            description={
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>5.12 Organic Chemistry</li>
              <li>7.05 Biochemistry</li>
              <li>7.03 Genetics</li>
              <li>7.06 Cell Biology</li>
          </ul>}
        />
        <Card
            title="Biological Engineering"
            description={
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>20.110 Thermodynamics</li>
              <li>20.309 Bioinstrumentation and Measurement</li>
              <li>20.320 Analysis of Biomolecular and Cellular Systems</li>
              <li>20.260 Computational Analysis of Biological Data</li>
          </ul>}
        />
        <Card
            title="Tangential Academic Pursuits"
            description={
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>21G.715 Topics in Medicine and Public Health in the Hispanic World</li>
              <li>15.373 Venture Engineering</li>
              <li>6.4590 Foundations of Information Policy</li>
              <li>24.05 Philosophy of Religion</li>
              <li>2.00B Toy Product Design</li>
          </ul>}
        />
      </div>

    </section>
  )
}
