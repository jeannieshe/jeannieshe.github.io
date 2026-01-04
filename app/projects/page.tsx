import Card from "app/components/card"
import ImageSlider from "app/components/imageslider"

export const metadata = {
  title: 'projects',
  description: 'Select list of projects.',
}

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        projects
      </h1>

      <p className="mb-4">
        {`My project work ranges the spectrum from biological engineering to `}
      </p>

      <div className="flex flex-col gap-y-4">
        <Card
          title={`Multimodal AI for clinical decision making`}
          subtitle={`with Professor Paul Liang and David Dai @ MIT Media Lab's Multisensory Intelligence Group | Sep 2025 - Present`}
          description={
            <>
              <p className="mb-2">Multimodal reasoning based foundation models hold considerable promise for addressing key challenges in medical
                  practice, yet their readiness for real-world deployment remains insufficiently explored. To bridge this gap, I am working on
                  two foundation models that aim to excel in clinical generalizability and accuracy. In this work, I've preprocessed EHR data 
                  from MIMIC-IV and used it in model training, analyzed model performance before and after supervised finetuning,
                  and evaluated model robustness to hallucinations and likelihood of perpetuating clinical inequities with LLM-as-a-judge.</p>
              <p className="mb-2 underline decoration-[#B33E6D] decoration-4">Second author on a manuscript submitted to npj Digital Medicine.</p>
            </>
          }
          tech={["Python", "Bash", "PyTorch", "VLLM", "DeepEval", "HPC (SLURM)", 
              ]}
          keywords={[
            "Multimodal AI", "reasoning", "LLM-as-a-judge", "hallucination analysis", 
            "large-scale data preprocessing", "finetuning", "reinforcement learning"]}
        />
        <Card
          title={`In silico protein evolution with reinforcement learning`}
          subtitle={`6.7920 Reinforcement Learning Final Project | Dec 2025 - Present`}
          description={
            <>
              <p className="mb-2">Protein fitness landscapes are high-dimensional, 
                discrete, and rugged: single amino acid substitutions can dramatically 
                alter stability and activity, yet exhaustive experimental characterization
                is intractable. In this work, we utilize deep mutational scanning data as 
                a set of ground truth labels that help define a small fraction of the 
                extensive protein mutational space. We additionally apply foundation 
                protein language model ESM-2 to represent protein sequences 
                in a high dimensional, descriptive latent space for modeling.
                Reinforcement learning (RL) provides an apt framework for efficient exploration 
                under sparse, delayed rewards: protein sequences
define states, mutations define actions, and experimental stability and activity provide 
reward. By honing in on the protein AAV2 and RL algorithms A2C and PPO, we found
that A2C explores more novel variants than PPO during training, while PPO exploits actions
with high reward. Our models demonstrate learned biological significance as their generated variants 
contain point mutations which align with those identified in literature to improve AAV2 fitness.</p>
            </>
          }
          tech={["Python", "Bash", "Stable Baselines-3", "ESM-2", "HPC (SLURM)", 
              ]}
          keywords={[
            "Protein evolution", "Reinforcement learning end-to-end pipeline design", "A2C", "PPO", "ESM-2",
            "Structural and functional landscape prediction"]}
          links={[
            { text: "View the repo", url: "https://github.com/jeannieshe/protein-evolution" },
            { text: "Contact me for the Report!", url: "mailto:jeanshe@mit.edu" },
          ]}
        />
        <Card
          title={`Multimodal vision model to predict diabetic retinopathy`}
          subtitle={`6.4300 Computer Vision Final Project | May 2025`}
          description={
            <>
              <p className="mb-2">{`MultiRetNet is a novel multimodal 
                deep learning pipeline integrating retinal imaging, socioeconomic
factors, and comorbidity data to accurately stage diabetic retinopathy. I 
led the design of the model and the evaluation pipeline, sparked my by interest in prioritizing safety
with AI in healthcare. I evaluated 3 multimodal 
fusion strategies in PyTorch (cross-attention, fully-connected layer, concatenation) and demonstrated that
multimodal approaches reduced false negatives compared to unimodal baselines.
Our results demonstrated state-of-the-art diagnostic accuracy (AUROC > 0.98) 
and potential for improving early detection and
healthcare equity in underserved populations.`}</p>
            </>
          }
          tech={["Python", "Pytorch", 
              ]}
          keywords={[
            "Interpretability", "Human-in-the-loop Deferral system", "AI Safety for Healthcare", "Shapley scores",
            "Convolutional neural networks", "Cross attention", "Multimodal fusion"]}
          links={[
            { text: "View the repo", url: "https://github.com/jeannieshe/multiretnet" },
            { text: "View the preprint on arxiv", url: "https://arxiv.org/abs/2507.14738" },
          ]}
        />
        <Card
          title={`Early prognosis of metabolic dysfunction associated fatty liver disease`}
          subtitle={`6.7930 Machine Learning for Healthcare Final Project | May 2025`}
          description={
            <>
              <p className="mb-2">Metabolic dysfunction-associated fatty liver disease (MAFLD) affects 25% of
adults in the United States and affects those with Type 2 diabetes and class III obesity
 at disproportionately higher rates. We present a deep learning-based framework for early 
 prognosis of MAFLD in adults using structured clinical data from Mass General Brigham. 
 Our approach utilizes binary classification, neural network prediction, linear and 
 logistic regression, and survival modeling, as well as experimentation with addressing 
 class imbalance. The study supports early clinical risk stratification and reveals 
 predictive biomarkers using SHAP interpretation.</p>
            </>
          }
          tech={["Python", "Pytorch", "Stable Baselines-3", "ESM-2", "HPC (SLURM)", 
              ]}
          keywords={[
            "Protein evolution", "Reinforcement learning end-to-end pipeline design", "A2C", "PPO", "ESM-2",
            "Structural and functional landscape prediction"]}
          links={[
            { text: "View the code", url: "https://github.com/jeannieshe/protein-evolution" },
            { text: "View the report", url: "/app/externalContent/She_Song_Zhang_MASLD_2025.pdf#page=1" },
          ]}
        />
        <Card
          title={`In silico protein evolution with reinforcement learning`}
          subtitle={`with Professor Doug Lauffenburger and Nikos Meimetis @ MIT Department of Biological Engineering | Feb 2024 - June 2025`}
          description={
            <>
              <p className="mb-2">Protein fitness landscapes are high-dimensional, 
                discrete, and rugged: single amino acid substitutions can dramatically 
                alter stability and activity, yet exhaustive experimental characterization
                is intractable. In this work, we utilize deep mutational scanning data as 
                a set of ground truth labels that help define a small fraction of the 
                extensive protein mutational space. We additionally apply foundation 
                protein language models (PLMs), namely ESM-2, to represent protein sequences 
                in a high dimensional, descriptive latent space for modeling.
                Reinforcement learning (RL) provides an apt framework for efficient exploration 
                under sparse, delayed rewards: protein sequences
define states, mutations define actions, and experimental stability and activity provide 
reward. By experimenting with hyperparameters and the A2C and PPO algorithms, we find
that A2C explores more novel variants than PPO during training, while PPO exploits actions
with high reward. Our models learn biological significance as their generated variants 
lie in the top 99.6–100th percentile of our reward function distribution.</p>
            </>
          }
          tech={["Python", "Bash", "Stable Baselines-3", "ESM-2", "HPC (SLURM)", 
              ]}
          keywords={[
            "Protein evolution", "Reinforcement learning end-to-end pipeline design", "A2C", "PPO", "ESM-2",
            "Structural and functional landscape prediction"]}
          links={[
            { text: "Code", url: "https://github.com/jeannieshe/protein-evolution" },
          ]}
        />
        <Card
          title={`Engineering and modeling chimeric antigen receptor macrophages to tackle cancer cachexia`}
          subtitle={`MIT iGEM 2023 | Jan 2023 - Nov 2023`}
          description={
            <>
              <p className="mb-2">Protein fitness landscapes are high-dimensional, 
                discrete, and rugged: single amino acid substitutions can dramatically 
                alter stability and activity, yet exhaustive experimental characterization
                is intractable. In this work, we utilize deep mutational scanning data as 
                a set of ground truth labels that help define a small fraction of the 
                extensive protein mutational space. We additionally apply foundation 
                protein language models (PLMs), namely ESM-2, to represent protein sequences 
                in a high dimensional, descriptive latent space for modeling.
                Reinforcement learning (RL) provides an apt framework for efficient exploration 
                under sparse, delayed rewards: protein sequences
define states, mutations define actions, and experimental stability and activity provide 
reward. By experimenting with hyperparameters and the A2C and PPO algorithms, we find
that A2C explores more novel variants than PPO during training, while PPO exploits actions
with high reward. Our models learn biological significance as their generated variants 
lie in the top 99.6–100th percentile of our reward function distribution.</p>
            </>
          }
          tech={["Python", "Bash", "Stable Baselines-3", "ESM-2", "HPC (SLURM)", 
              ]}
          keywords={[
            "Protein evolution", "Reinforcement learning end-to-end pipeline design", "A2C", "PPO", "ESM-2",
            "Structural and functional landscape prediction"]}
          links={[
            { text: "Code", url: "https://github.com/jeannieshe/protein-evolution" },
          ]}
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
