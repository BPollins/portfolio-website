import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Code, Cloud, BarChart3 } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Architecture",
      description: "AWS certified solutions architect with expertise in scalable cloud infrastructure"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Science",
      description: "Machine learning and data analysis for business-driven insights and automation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineering",
      description: "Full-stack development with modern frameworks and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white leading-tight">
                WELCOME
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.welcomeMessage}
              </p>
              
              <p className="text-gray-400 font-mono text-sm">
                {personalInfo.signature}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-500 hover:to-blue-600 font-mono text-sm tracking-wider uppercase px-8 py-6 rounded-none transition-all duration-200 hover:scale-105 font-semibold"
              >
                <Link to="/portfolio">
                  VIEW PROJECTS
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black font-mono text-sm tracking-wider uppercase px-8 py-6 rounded-none transition-all duration-200"
              >
                <Link to="/cv">
                  VIEW CV
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative lg:justify-self-center">
            <div className="relative z-10 group">
              <img 
                src={personalInfo.headshot} 
                alt="Ben Pollins" 
                className="w-full max-w-md mx-auto rounded-none shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-gray-700 -z-10 rounded-none opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white font-mono tracking-wider uppercase">
              EXPERTISE
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center text-white">
                    {highlight.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;