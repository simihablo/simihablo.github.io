import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const skills = [
    "Kubernetes", "Meshery", "Linux", "Google Cloud Platform", "Golang", "Docker", 
    "Terraform", "CI/CD", "Microservices", "Azure","AWS", "CNCF", "Cloud Native"
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
      title: "Tu primera red neuronal",
      description: "Este codigo, actualizado al 4 de marzo de 2021, sirve como soporte para el video Tu primera red neuronal: https://youtu.be/UNFFLJPW7KQ <br /> Si deja de funcionar por algun motivo, deja un issue en github o un comentario en el video. Ya no es necesario bajar la libreria jscolor, ya viene como parte del codigo usando un CDN :)",
      tech: ["Video", "Automation", "Encoding", "Networks"]
    },
    {
      title: "MeshMate",
      description: "I am a Layer5 MeshMate. I am an advocate for infrastructure management and visualization using Kanvas for cloud native applications.",
      tech: ["Kanvas", "Infrastructure", "Visualization"]
    }
  ];

  const blogTopics = [
    "Practical AI for Infrastructure Engineers",
    "Hiking Adventures in Mexico",
    "Managing Infrastructure with Kanvas",
    "Contributing to Open Source Projects",
    "Kubernetes Best Practices",
    "Life with Dogs",
    "Camping and hiking in Honduras countryside"
  ];

 // Function to render text with hyperlinks
  const renderDescriptionWithLinks = (description: string) => {
    // Split by <br /> tags first
    const parts = description.split('<br />');
    
    return parts.map((part, index) => (
      <span key={index}>
        {part.split(/(https?:\/\/[^\s]+)/g).map((segment, segIndex) => {
          if (segment.match(/https?:\/\/[^\s]+/)) {
            return (
              <a
                key={segIndex}
                href={segment}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
              >
                {segment}
              </a>
            );
          }
          return segment;
        })}
        {index < parts.length - 1 && <br />}
      </span>
    ));
  };
  
  return (
    <div className="site-home min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-amber-500/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-amber-300 to-sky-300 bg-clip-text text-transparent">
              Mericio
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-4">
              Infrastructure Engineer
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Kubernetes • Linux • Google Cloud Platform • Open Source Contributor
            </p>
            <p className="text-base text-emerald-200 mt-2">
              📍 Guatemala • 🐕 Dog Lover • 🥾 Hiking Enthusiast
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald-400/70 text-emerald-200 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300"
              onClick={() => window.open('https://github.com/simihablo', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-sky-400/70 text-sky-200 hover:bg-sky-300 hover:text-slate-950 transition-all duration-300"
              onClick={() => window.location.href = '/blog'}
            >
              Read Blog
            </Button>
          </div>
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-amber-300/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-sky-400/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-300">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-100 leading-relaxed">
                I'm an infrastructure engineer based in beautiful Guatemala, passionate about 
                building robust, scalable systems using cutting-edge cloud native technologies.
              </p>
              <p className="text-lg text-slate-100 leading-relaxed">
                As a contributor to the CNCF project <span className="text-amber-300 font-semibold"><a href="https://meshery.io">Meshery</a>,</span> and
                an advocate for <span className="text-emerald-300 font-semibold"><a href="https://layer5.io">Layer5</a></span> projects like <a className="text-sky-300" href="https://docs.kanvas.new">Kanvas</a>,
                I'm deeply involved in the cloud native ecosystem.
              </p>
              <p  className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">But life’s not all code and containers.</p>
              <p className="text-lg text-slate-100 leading-relaxed">
                When I'm not managing Kubernetes clusters or writing Go code, you'll find me 
                hiking through Mexico's stunning landscapes or sharing my adventures with my beloved dogs.
              </p>
            </div>
            <div className="bg-slate-950/40 p-8 rounded-3xl border border-emerald-400/20 shadow-2xl shadow-slate-950/20">
              <h3 className="text-2xl font-bold text-amber-300 mb-6">What I Do</h3>
              <p  className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed" >When I’m not deep in YAML or container logs...</p>

              <ul className="space-y-3 text-slate-100">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  Run local tech meetup groups
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  Conduct workshops and training sessions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-300 rounded-full"></div>
                  Contribute to open source projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  Write technical blog posts
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  Share hiking adventures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-950/25">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-300">Technical Expertise</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-lg py-3 px-6 border-emerald-400/40 text-emerald-100 hover:bg-emerald-400/15 transition-all duration-300 hover:scale-105"
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
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-300">Key Projects & Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-950/50 border-emerald-400/20 text-slate-100 shadow-lg shadow-slate-950/10 hover:-translate-y-1 hover:border-amber-300/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-amber-300">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-emerald-400/15 text-emerald-100">
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
      <section className="py-20 px-4 bg-slate-950/25">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-300">Blog Topics I Love Writing About</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {blogTopics.map((topic, index) => (
              <div 
                key={topic}
                className="bg-slate-950/45 p-6 rounded-2xl border border-emerald-400/20 hover:border-amber-300/60 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
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
          <h2 className="text-4xl font-bold mb-8 text-amber-300">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Whether you want to discuss Kubernetes, open source contributions, or share hiking stories, 
            ¡Me encantaría saber de usted!
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-all duration-300 hover:scale-105"
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
      <footer className="py-8 px-4 border-t border-emerald-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2025 Mericio • Infrastructure Engineer • Guatemala 🇬🇹
          </p>
          <p className="text-sm text-emerald-200 mt-2">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
