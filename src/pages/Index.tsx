import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const skills = [
    "Kubernetes", "Linux", "Google Cloud Platform", "Golang", "Docker", 
    "Terraform", "CI/CD", "Microservices", "Service Mesh", "Cloud Native"
  ];

  const projects = [
    {
      title: "CNCF Meshery Contributor",
      description: "Contributing to the cloud native management plane for visual workloads and configuration management.",
      tech: ["Go", "Kubernetes", "Azure","GCP","AWS", "CNCF"]
    },
    {
      title: "Guatemala Tech Meetup",
      description: "Organizing and running local meetups to foster the tech community in Guatemala.",
      tech: ["Community", "Speaking", "Workshops"]
    },
    {
      title: "MeshMate",
      description: "I am a Layer5 MeshMate. I am an advocate for infrastructure management and visualization using <a href='docs.kanvas.new'>Kanvas</a> for cloud native applications.",
      tech: ["Kanvas", "Infrastructure", "Visualization"]
    }
  ];

  const blogTopics = [
    "Hiking Adventures in Mexico",
    "Managing Infrastructure with Kanvas",
    "Contributing to Open Source Projects",
    "Kubernetes Best Practices",
    "Life with Dogs & Tech"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-500/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
              Mericio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Infrastructure Engineer
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Kubernetes • Linux • Google Cloud Platform • Open Source Contributor
            </p>
            <p className="text-base text-blue-300 mt-2">
              📍 Guatemala • 🐕 Dog Lover • 🥾 Hiking Enthusiast
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://github.com/simihablo', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
              onClick={() => window.location.href = '/blog'}
            >
              Read Blog
            </Button>
          </div>
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-orange-500/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-blue-100 leading-relaxed">
                I'm an infrastructure engineer based in beautiful Guatemala, passionate about 
                building robust, scalable systems using cutting-edge cloud native technologies.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                As a contributor to the CNCF project <span className="text-yellow-400 font-semibold">Meshery</span> and 
                an advocate for <span className="text-orange-400 font-semibold">Layer5</span> projects like Kanvas, 
                I'm deeply involved in the cloud native ecosystem.
              </p>
              <p>But life’s not all code and containers.</p>
              <p className="text-lg text-blue-100 leading-relaxed">
                When I'm not managing Kubernetes clusters or writing Go code, you'll find me 
                hiking through Mexico's stunning landscapes or sharing my adventures with my beloved dogs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/50 to-orange-900/30 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">What I Do</h3>
              <ul className="space-y-3 text-blue-100">
                <p>When I’m not deep in YAML or container logs...</p>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Run local tech meetup groups
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Conduct workshops and training sessions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Contribute to open source projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Write technical blog posts
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Share hiking adventures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Technical Expertise</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-lg py-3 px-6 border-orange-500/50 text-orange-200 hover:bg-orange-500/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Key Projects & Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 border-blue-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-yellow-400">{project.title}</CardTitle>
                  <CardDescription className="text-blue-200">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-orange-500/20 text-orange-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Topics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Blog Topics I Love Writing About</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {blogTopics.map((topic, index) => (
              <div 
                key={topic}
                className="bg-gradient-to-r from-blue-800/30 to-orange-900/20 p-6 rounded-xl border border-blue-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  {topic}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">Let's Connect</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Whether you want to discuss Kubernetes, open source contributions, or share hiking stories, 
            I'd love to hear from you!
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/simihablo', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
{/*             <Button 
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://linkedin.com/in/mericio', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-300">
            © 2025 Mericio • Infrastructure Engineer • Guatemala 🇬🇹
          </p>
          <p className="text-sm text-blue-400 mt-2">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
