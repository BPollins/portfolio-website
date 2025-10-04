import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Download, MapPin, Mail, Globe, Github, Linkedin } from 'lucide-react';
import { personalInfo, summary, technologies, skills, experience, education, interests } from '../data/mock';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Header */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-white font-mono tracking-wider">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-xl text-gray-300 font-mono tracking-wide mt-2">
                    {personalInfo.title}
                  </h2>
                </div>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {personalInfo.website}
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <Button 
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Ben Pollins CV.docx";
                    link.download = "Ben Pollins CV.docx";
                    link.click();
                  }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-500 hover:to-blue-600 font-mono text-sm tracking-wider uppercase px-6 py-3 rounded-none font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD CV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Summary */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">
              {summary}
            </p>
          </CardContent>
        </Card>
        
        {/* Technologies & Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-1 text-xs font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 hover:border-gray-500 px-3 py-1 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Experience */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-400 font-mono text-xs w-fit">
                    {job.period}
                  </Badge>
                </div>
                
                {job.description && (
                  <p className="text-gray-400 text-sm">{job.description}</p>
                )}
                
                <ul className="space-y-2 text-sm text-gray-300">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Education */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{edu.title}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                    {edu.grade && (
                      <p className="text-gray-400 text-sm">Grade: {edu.grade}</p>
                    )}
                  </div>
                  <Badge variant="outline" className="border-gray-600 text-gray-400 font-mono text-xs w-fit">
                    {edu.period}
                  </Badge>
                </div>
                
                {edu.description && (
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                )}
                
                {edu.courses && (
                  <ul className="space-y-1 text-sm text-gray-300 ml-4">
                    {edu.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {edu.projects && (
                  <ul className="space-y-1 text-sm text-gray-300 ml-4">
                    {edu.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Interests */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white font-mono tracking-wider uppercase text-sm">Interests & Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-300">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CV;