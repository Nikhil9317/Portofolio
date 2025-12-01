import { motion } from "framer-motion";
import { Code2, Terminal, Laptop, BookOpen, Github, Mail, Twitter, ExternalLink, Send, User, Briefcase, Cpu, Phone } from "lucide-react";
import avatarImage from "@assets/generated_images/3d_minimalist_developer_avatar_icon.png";
import bgImage from "@assets/generated_images/dark_abstract_mesh_gradient_background.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Background Texture */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter">
            <span className="text-primary">&lt;</span>
            Nikhil
            <span className="text-primary">/&gt;</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-foreground transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-foreground transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-foreground transition-colors">Contact</button>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex border-white/10 hover:bg-white/5" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </Button>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[calc(100vh-100px)] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start md:flex-row gap-10 mb-24"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src={avatarImage} 
                alt="Nikhil Koundal" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for projects
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-gradient-primary">Nikhil Koundal</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                A passionate developer and student at <span className="text-foreground font-medium">Lovely Professional University</span>. 
                I build accessible, pixel-perfect, performant, and responsive web experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="flex gap-4">
                  <SocialLink icon={<Github size={20} />} href="#" label="GitHub" />
                  <SocialLink icon={<Twitter size={20} />} href="#" label="Twitter" />
                  <SocialLink icon={<Mail size={20} />} href="#" label="Email" />
                </div>
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => scrollToSection('projects')}>
                  View Work
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-primary" />
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillCard name="Python" icon={<Terminal size={24} />} color="text-yellow-400" description="Data & Scripting" />
            <SkillCard name="HTML5" icon={<Code2 size={24} />} color="text-orange-500" description="Structure" />
            <SkillCard name="CSS3" icon={<Laptop size={24} />} color="text-blue-500" description="Styling" />
            <SkillCard name="JavaScript" icon={<BookOpen size={24} />} color="text-yellow-300" description="Interaction" />
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" />
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Lovely Professional University</h3>
                  <p className="text-primary font-mono text-sm mt-1">Bachelor of Technology</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded border border-white/10">Present</span>
              </div>
              <p className="text-muted-foreground">
                Specializing in Computer Science and Engineering. Focusing on advanced algorithms, data structures, and full-stack development.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-300 opacity-80 hover:opacity-100">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">DAV MANAI</h3>
                  <p className="text-primary font-mono text-sm mt-1">Secondary Education</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded border border-white/10">Past</span>
              </div>
              <p className="text-muted-foreground">
                Completed foundational studies with a focus on Science and Mathematics.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Portfolio V1" 
              description="A minimalist developer portfolio built with React, Tailwind CSS, and Framer Motion. Features dark mode and smooth animations."
              tags={["React", "Tailwind", "Framer Motion"]}
            />
            <ProjectCard 
              title="Task Master" 
              description="A productivity application for managing daily tasks and todos. Includes local storage persistence and categorization."
              tags={["JavaScript", "CSS3", "HTML5"]}
            />
            <ProjectCard 
              title="Weather Dashboard" 
              description="Real-time weather tracking application consuming public APIs to display forecast data for any city worldwide."
              tags={["Python", "API", "Data"]}
            />
            <ProjectCard 
              title="Code Snippets" 
              description="A collection of useful Python and JavaScript utility scripts for automating daily development workflows."
              tags={["Python", "Automation", "Scripts"]}
            />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Mail className="text-primary" />
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-6 text-lg">
                I'm currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  <span>unknown93177@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Phone size={18} />
                  </div>
                  <span>+91 9317751056</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <User size={18} />
                  </div>
                  <span>LPU, Student</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Cpu size={18} />
                  </div>
                  <span>Open to collaborations</span>
                </div>
              </div>
            </div>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <Input placeholder="john@example.com" className="bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                  <Textarea placeholder="Hello, I'd like to talk about..." className="min-h-[120px] bg-white/5 border-white/10 focus-visible:ring-primary" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

      </main>
      
      <footer className="py-8 text-center text-sm text-muted-foreground/60 font-mono border-t border-white/5">
        <p>© {new Date().getFullYear()} Nikhil Koundal. Crafted with Code.</p>
      </footer>
    </div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a 
      href={href}
      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-all duration-200 border border-transparent hover:border-primary/20"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function SkillCard({ name, icon, color, description }: { name: string, icon: React.ReactNode, color: string, description: string }) {
  return (
    <div className="group p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-4 text-center hover:-translate-y-1">
      <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300 ${color} ring-1 ring-white/5`}>
        {icon}
      </div>
      <div>
        <span className="font-medium font-mono block mb-1">{name}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <Card className="bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {title}
          <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
