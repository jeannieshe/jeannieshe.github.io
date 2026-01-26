"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Map, List } from "lucide-react";
import { projectsData } from 'app/projects/projectsData'
import Card from "app/components/card";


export default function Projects() {

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold tracking-tighter">
          projects
        </h1>
        </div>

      <p className="mb-6">
        {`My project work ranges the full gamut from machine learning and artificial intelligence to healthcare and biology to biological engineering.
        I am eternally grateful for all of my mentors and collaborators who have helped me grow and strengthen my research muscle.`}
      </p>
      
      <div className="mb-10" />

      <div className="flex flex-col gap-y-4">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tech={project.tech}
            keywords={project.keywords}
            links={project.links}
            images={project.images}
            imageHeight={project.imageHeight}
          />
        ))}
      </div>

    </section>

    
  );
}