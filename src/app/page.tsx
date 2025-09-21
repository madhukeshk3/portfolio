'use client';

import { portfolioConfig } from '../../config/portfolio';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Download, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { Experience } from '../../types/portfolio';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

function ExperienceCard({ company, position, duration, location, description, projects }: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {position}
            </h4>
            <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
              {company}
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {isExpanded ? 'Collapse' : 'Expand'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
          <span className="text-gray-600 dark:text-gray-200 font-medium">
            {duration}
          </span>
          <span className="text-gray-500 dark:text-gray-300">
            {location}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
      </div>
      
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
          <h6 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Key Projects
          </h6>
          <div className="space-y-4">
            {projects.map((project, index: number) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h6>
                <ul className="text-gray-700 dark:text-gray-200 text-sm mb-3 space-y-1">
                  {project.description.map((line, lineIndex) => (
                    <li key={lineIndex} className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { personal, social, skills, experience = [] } = portfolioConfig;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                className="rounded-full object-contain bg-black shadow-lg"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {personal.name}
          </h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-200 mb-6">
            {personal.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {personal.bio}
          </p>

          {/* Resume Download Button */}
          <div className="mb-8">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {Object.entries(social).map(([platform, config]) => {
              if (!config.enabled) return null;
              const IconComponent = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={config.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{personal.email}</span>
            </a>
            <a 
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{personal.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h3>
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; 2024 {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}