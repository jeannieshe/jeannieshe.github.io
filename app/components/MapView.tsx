"use client";

import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectNode, ProjectEdge } from "../projects/projectsData";

interface MapViewProps {
  projects: ProjectNode[];
  edges: ProjectEdge[];
}

interface SimulationNode extends d3.SimulationNodeDatum {
  id: string;
  title: string;
  category: string;
  project: ProjectNode;
  x?: number;
  y?: number;
}

interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  source: string | SimulationNode;
  target: string | SimulationNode;
  strength: number;
}

export default function MapView({ projects, edges }: MapViewProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoveredNode, setHoveredNode] = useState<ProjectNode | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const simulationRef = useRef<d3.Simulation<SimulationNode, SimulationLink> | null>(null);
  
  // Category colors
  const categoryColors: Record<string, string> = {
    "AI/ML": "#8B5CF6",
    "Healthcare": "#EC4899",
    "Bio-Engineering": "#10B981",
  };

  useEffect(() => {
    // Handle responsive sizing
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = dimensions;

    // Create nodes with proper typing
    const nodes: SimulationNode[] = projects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      project: project,
    }));

    // Create links with proper typing
    const links: SimulationLink[] = edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
      strength: edge.strength,
    }));

    // Create force simulation
    const simulation = d3
      .forceSimulation<SimulationNode>(nodes)
      .force(
        "link",
        d3
          .forceLink<SimulationNode, SimulationLink>(links)
          .id((d) => d.id)
          .distance(150)
          .strength((d) => d.strength * 0.5)
      )
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40))
      .alphaDecay(0.02)
      .velocityDecay(0.6); // High damping for smooth, slow movement

    simulationRef.current = simulation;

    // Create container group
    const g = svg.append("g");

    // Draw links
    const link = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#334155")
      .attr("stroke-opacity", (d) => 0.2 + d.strength * 0.3)
      .attr("stroke-width", (d) => 1 + d.strength * 2);

    // Create node groups
    const nodeGroup = g
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(
        d3
          .drag<SVGGElement, SimulationNode>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // Draw node circles
    nodeGroup
      .append("circle")
      .attr("r", 20)
      .attr("fill", (d) => categoryColors[d.category] || "#6366f1")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("class", "node-circle transition-all duration-300");

    // Add node labels
    nodeGroup
      .append("text")
      .text((d) => {
        // Truncate long titles
        const words = d.title.split(" ");
        return words.slice(0, 3).join(" ") + (words.length > 3 ? "..." : "");
      })
      .attr("text-anchor", "middle")
      .attr("dy", 35)
      .attr("class", "text-xs fill-gray-300 pointer-events-none")
      .style("user-select", "none");

    // Hover effects
    nodeGroup
      .on("mouseenter", function (event, d) {
        // Scale up the node
        d3.select(this)
          .select("circle")
          .transition()
          .duration(200)
          .attr("r", 28)
          .attr("stroke-width", 3);

        // Get node position in screen coordinates
        const nodeX = d.x || 0;
        const nodeY = d.y || 0;
        
        setCardPosition({ x: nodeX, y: nodeY });
        setHoveredNode(d.project);
      })
      .on("mouseleave", function () {
        // Scale back down
        d3.select(this)
          .select("circle")
          .transition()
          .duration(200)
          .attr("r", 20)
          .attr("stroke-width", 2);

        setHoveredNode(null);
      });

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as SimulationNode).x || 0)
        .attr("y1", (d) => (d.source as SimulationNode).y || 0)
        .attr("x2", (d) => (d.target as SimulationNode).x || 0)
        .attr("y2", (d) => (d.target as SimulationNode).y || 0);

      nodeGroup.attr("transform", (d) => `translate(${d.x || 0},${d.y || 0})`);
    });

    // Drag functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, SimulationNode, SimulationNode>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, SimulationNode, SimulationNode>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, SimulationNode, SimulationNode>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [projects, edges, dimensions]);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !simulationRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      // Apply subtle parallax to center force
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      
      const offsetX = (x - centerX) * 0.05; // Subtle offset
      const offsetY = (y - centerY) * 0.05;

      // Update center force gradually
      const simulation = simulationRef.current;
      if (simulation) {
        simulation
          .force("center", d3.forceCenter(centerX + offsetX, centerY + offsetY))
          .alpha(0.1)
          .restart();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg overflow-hidden"
    >
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />

      {/* Hover Detail Card */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
            style={{
              left: cardPosition.x + 40,
              top: cardPosition.y - 40,
              maxWidth: "360px",
            }}
          >
            <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-2xl">
              <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                {hoveredNode.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {hoveredNode.subtitle}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {hoveredNode.keywords.slice(0, 4).map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              {hoveredNode.links && hoveredNode.links.length > 0 && (
                <div className="text-xs text-purple-400">
                  Click to view full details →
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3">
        <h4 className="text-xs font-semibold text-white mb-2">Categories</h4>
        <div className="space-y-1">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-300">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

