import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { projects } from '../data/mock';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white font-mono tracking-wider uppercase">
            PORTFOLIO
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of data science and machine learning projects showcasing automated solutions, 
            predictive modeling, and data-driven insights.
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex justify-center">
          <div className="flex gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "ghost"}
                className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-md transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-500 hover:to-blue-600 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-white text-black font-mono text-xs">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-gray-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-gray-600 text-gray-400 text-xs font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs font-mono">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <Button 
                    variant="ghost" 
                    className="text-gray-400 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase px-0 transition-colors"
                  >
                    READ MORE
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-white p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github className="w-4 h-4 hover:text-cyan-400 transition-colors" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <Badge className="mt-2 bg-white text-black font-mono text-xs">
                  {selectedProject.category}
                </Badge>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                {selectedProject.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-white font-semibold font-mono tracking-wider uppercase text-sm">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gray-800 text-gray-300 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                {selectedProject.github && (
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-500 hover:to-blue-600 font-mono text-sm tracking-wider uppercase px-6 py-3 rounded-none font-semibold"
                    onClick={() => window.open(selectedProject.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    VIEW CODE
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;