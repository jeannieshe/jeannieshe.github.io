import React from 'react';

export interface ProjectNode {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  tech: string[];
  keywords: string[];
  links?: { text: string; url: string }[];
  images?: string[];
}

export const projectsData: ProjectNode[] = [
  {
    id: "multimodal-ai-clinical",
    title: "Multimodal AI for clinical decision making",
    subtitle: "with Professor Paul Liang and David Dai @ MIT Media Lab's Multisensory Intelligence Group | Sep 2025 - Present",
    description: (
      <>
        <p className="mb-8">Multimodal reasoning based foundation models hold considerable promise for addressing key challenges in medical practice, yet their readiness for real-world deployment remains insufficiently explored. To bridge this gap, I am working on two foundation models that aim to excel in clinical generalizability and accuracy. I am researching entropy collapse over the course of RL training.</p>

        <p className="mb-8">In this work, I've preprocessed EHR data from MIMIC-IV and used it in model training, analyzed model performance before and after supervised finetuning, and evaluated model robustness to hallucinations and likelihood of perpetuating clinical inequities with LLM-as-a-judge.</p>

        <p className="mb-8 underline decoration-[#B33E6D] decoration-3">Second author on a manuscript submitted to npj Digital Medicine.</p>
      </>
    ),
    tech: ["Python", "Bash", "PyTorch", "VLLM", "DeepEval", "HPC (SLURM)"],
    keywords: [
      "Multimodal AI", "reasoning", "LLM-as-a-judge", "hallucination analysis", 
      "large-scale data preprocessing", "finetuning", "reinforcement learning"
    ],
  },
  {
    id: "protein-evolution-rl",
    title: "In silico protein evolution with reinforcement learning",
    subtitle: "6.7920 Reinforcement Learning Final Project | Dec 2025 - Present",
    description: (
      <>
        <p className="mb-8">Protein fitness landscapes are high-dimensional, discrete, and rugged: single amino acid substitutions can dramatically alter stability and activity, yet exhaustive experimental characterizationis intractable.</p>
        
        <p className='mb-8'>In this work, we utilize deep mutational scanning data as a set of ground truth labels that help define a small fraction of the extensive protein mutational space. We additionally apply foundation protein language model ESM-2 to represent protein sequences in a high dimensional, descriptive latent space for modeling.</p>

        <p className="mb-8">Reinforcement learning provides an apt framework for efficient exploration under sparse, delayed rewards: protein sequencesdefine states, mutations define actions, and experimental stability and activity provide reward. By honing in on the protein AAV2 and RL algorithms A2C and PPO, we found that A2C explores more novel variants than PPO during training, while PPO exploits actionswith high reward. Our models demonstrate learned biological significance as their generated variants contain point mutations which align with those identified in literature to improve AAV2 fitness.</p>
      </>
    ),
    tech: ["Python", "Bash", "Stable Baselines-3", "ESM-2", "HPC (SLURM)"],
    keywords: [
      "Protein evolution", "Reinforcement learning end-to-end pipeline design", "A2C", "PPO", "ESM-2",
      "Structural and functional landscape prediction"
    ],
    links: [
      { text: "View the repo", url: "https://github.com/jeannieshe/protein-evolution" },
      { text: "Contact me for the Report!", url: "mailto:jeanshe@mit.edu" },
    ],
    images: ["/images/projects/rl-protein/labeledbestPPO.png"],
  },
  {
    id: "multiretnet",
    title: "Multimodal vision model to predict diabetic retinopathy",
    subtitle: "6.4300 Computer Vision Final Project | May 2025",
    description: (
      <>
        <p className="mb-8">{`MultiRetNet is a novel multimodal deep learning pipeline integrating retinal imaging, socioeconomic factors, and comorbidity data to accurately stage diabetic retinopathy. I led the design of the model and the evaluation pipeline, sparked my by interest in prioritizing safety with AI in healthcare.`}</p>

        <p className="mb-8">{`I evaluated 3 multimodal fusion strategies in PyTorch (cross-attention, fully-connected layer, concatenation) and demonstrated that multimodal approaches reduced false negatives compared to unimodal baselines. Our results demonstrated state-of-the-art diagnostic accuracy (AUROC > 0.98) and potential for improving early detection and healthcare equity in underserved populations.`}</p>
      </>
    ),
    tech: ["Python", "Pytorch"],
    keywords: [
      "Interpretability", "Human-in-the-loop Deferral system", "Safe AI for Healthcare", "Shapley scores",
      "Convolutional neural networks", "Cross attention", "Multimodal fusion"
    ],
    links: [
      { text: "View the repo", url: "https://github.com/jeannieshe/multiretnet" },
      { text: "View the preprint on arxiv", url: "https://arxiv.org/abs/2507.14738" },
    ],
    images: [
      "/images/projects/multiretnet/pipeline1.jpg",
      "/images/projects/multiretnet/pipeline2.png",
    ],
  },
  {
    id: "hacking-med-lois",
    title: "Lois, an on-demand callable AI agent to assist ER doctors",
    subtitle: "MIT Hacking Medicine GrandHack | March 2025",
    description: (
      <>
        <p className="mb-8">Every year, 24 million patients go untreated for alcohol addiction, costing the healthcare system $340 billion. One major reason is the lack of real-time access to addiction treatment beds and medication guidance for ER patients.</p>

        <p className="mb-8">Alongside teammates with diverse life experiences, we set out to challenge this status quo — and in just 24 hours, we laid the foundation for a solution: a Poison Control hotline equivalent for alcohol addiction instead of toxicity. Introducing Lois — a callable AI agent that provides 24/7 addiction medication guidance and real-time treatment bed availability. Lois is named for the wife of Bill Wilson, founder of Alcoholics Anonymous.</p>

        <p className="mb-8">In this project, I was the technical lead, first leading the technical design of our application, then later building and integrating the different components together into one workflow. I learned a lot from my teammates about the exigence for this problem, about not being afraid or guilty to outsource work to AI, and about how strangers' stories can be all that is needed to motivate a problem being solved.</p>

      </>
    ),
    tech: ["Python", "API Design", "Twilio API", "Vapi AI", "Webscraping", "Node.js"],
    keywords: [
      "Hackathon", "Callable Voice Agent", "Healthcare", "Mental Health and Addiction Recovery"
    ],
    links: [
      { text: "View the post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7309308849671274497/?originTrackingId=AuYzfS810GAEX9LAe17icg%3D%3D" },
    ],
    images: [
      "/images/projects/hackingmed/hackingmedteam.jpg",
      "/images/projects/hackingmed/lois.jpg",
    ],
  },

  {
    id: "masld-prognosis",
    title: "Early prognosis of metabolic dysfunction associated fatty liver disease",
    subtitle: "6.7930 Machine Learning for Healthcare Final Project | May 2025",
    description: (
      <>
        <p className="mb-2">Metabolic dysfunction-associated fatty liver disease (MAFLD) affects 25% of adults in the United States and affects those with Type 2 diabetes and class III obesity at disproportionately higher rates. We present a deep learning-based framework for early prognosis of MAFLD in adults using structured clinical data from Mass General Brigham. Our approach utilizes binary classification, neural network prediction, linear and logistic regression, and survival modeling, as well as experimentation with addressing class imbalance. The study supports early clinical risk stratification and reveals predictive biomarkers using SHAP interpretation.</p>
      </>
    ),
    tech: ["Python", "HPC (SLURM)"],
    keywords: [
      "EHR Data Preprocessing", "Addressing Class Imbalance", "Interpretability", "Time-to-event prediction", "Shapley scores",
    ],
    links: [
      { text: "View the code", url: "https://github.com/jeannieshe/mlhc-masld" },
      { text: "View the report", url: "/She_Song_Zhang_MASLD_2025.pdf" },
    ],
  },
  {
    id: "mash-transcriptomics",
    title: "Transcriptomics based histological scoring for metabolic-associated steatohepatitis using machine learning",
    subtitle: "with Professor Doug Lauffenburger and Nikos Meimetis @ MIT Department of Biological Engineering | Feb 2024 - June 2025",
    description: (
      <>
        <p className="mb-2">MASH, the advanced stage of metabolic-associated steatosis liver disease, is characterized by severe accumulation of fat in the liver. The effort towards developing accurate in vitro liver models is crucial for better understanding disease progression and therapy development. A patient's disease severity is determined by a doctor's histological scoring of a liver biopsy, which produces two clinical scores: a fibrosis stage score and a NASH Activity Score (NAS). In this lab, I created various machine learning models (k-nearest neighbor, random forest, linear regression) to histologically score transcriptomic data with fibrosis stage score and NAS, allowing us to interpret in vitro liver-on-a-chip models using in vivo clinical language. 
</p>
      </>
    ),
    tech: ["Python", "Bash", "Pytorch", "HPC (SLURM)"],
    keywords: [
      "Machine learning", "Transcriptomics", "Bulk RNA-seq", "Model benchmarking"
    ],
    links: [
      { text: "View the repo", url: "https://github.com/jeannieshe/mash-fa24/tree/main" },
      { text: "View the poster", url: "https://github.com/jeannieshe/mash-fa24/blob/main/NEET_Poster_Dec_2024.pdf"},
    ],
  },
  {
    id: "igem-car-macrophages",
    title: "Engineering and modeling chimeric antigen receptor macrophages to tackle cancer cachexia",
    subtitle: "MIT iGEM 2023 | Jan 2023 - Nov 2023",
    description: (
      <>
        <p className="mb-2">iGEM, an international synthetic biology competition for undergraduates, was my first exposure to entrepreneurship and research in academia. I led a three-person team to identify a new therapeutic target for cancer cachexia using synthetic biology. We developed a proof-of-concept for a novel immunotherapy: utilizing macrophages to express IL-6 specific chimeric antigen receptors, taking inspiration from CAR-T cell therapy and  
          <a className="underline decoration-[#B33E6D] ml-1" href="https://elifesciences.org/articles/36688">Morrissey, et al. (2018)</a>. 
          
          </p>
          <p className="mb-2">I came back to the project a few semesters afterwards to apply newfound computational modeling knowledge to model the ADME (Absorption, Distribution, Metabolism, and Excretion) behavior of a CAR-macrophage therapy in a real patient. Using differential equations to model the projected behavior, we quantified the expected therapy volume to achieve the desired biological response while also minimizing off-target effects.
          </p>
          <p className="mb-2 underline decoration-[#B33E6D] decoration-3">First author on a 
          manuscript under review at Frontiers of Systems Biology.</p>
          <p className="mb-2 underline decoration-[#B33E6D] decoration-3">Awarded a silver 
          medal at the 2023 iGEM Grand Jamboree.</p>

      </>
    ),
    tech: ["Python", "Cell culture", "Plasmid design", "Gel electrophoresis", "SDS-PAGE", "Transforming e. coli and transfecting HEK293",
      "Fluorescent microscopy", "Flow cytometry",
    ],
    keywords: [
      "Synthetic biology", "Differential equation modeling",
      "Project management and leadership"
    ],
    links: [
      { text: "View the report", url: "https://murj-assets.s3.amazonaws.com/assets/issues/Vol_47_Published.pdf#page=19" },
      { text: "View the team wiki", url: "https://2023.igem.wiki/mit/" },
      { text: "View the poster", url: "/MIT_iGEM_2023_Poster.pdf" },
    ],
    images: [
      "/images/projects/igem/igem1.jpg",
      "/images/projects/igem/igem3.jpg",
    ],
  },
];

// Generate edges based on shared keywords/tech/categories
export interface ProjectEdge {
  source: string;
  target: string;
  strength: number; // 0-1, based on similarity
}

export function generateEdges(projects: ProjectNode[]): ProjectEdge[] {
  const edges: ProjectEdge[] = [];
  
  for (let i = 0; i < projects.length; i++) {
    for (let j = i + 1; j < projects.length; j++) {
      const project1 = projects[i];
      const project2 = projects[j];
      
      // Calculate similarity
      const sharedKeywords = project1.keywords.filter(k => 
        project2.keywords.includes(k)
      ).length;
      
      const sharedTech = project1.tech.filter(t => 
        project2.tech.includes(t)
      ).length;
            
      // Calculate strength (0-1)
      const totalShared = sharedKeywords * 2 + sharedTech;
      
      // Only create edge if there's meaningful connection
      if (totalShared > 2) {
        edges.push({
          source: project1.id,
          target: project2.id,
          strength: Math.min(totalShared / 10, 1)
        });
      }
    }
  }
  
  return edges;
}

