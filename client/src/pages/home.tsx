import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code2, Terminal, Laptop, BookOpen, Github, Mail, Twitter, ExternalLink, Send, User, Briefcase, Cpu, Phone, ArrowRight, ChevronDown, Mouse, Award } from "lucide-react";
import avatarImage from "@assets/generated_images/3d_glowing_letter_n_logo.png";
import bgImage from "@assets/generated_images/dark_abstract_mesh_gradient_background.png";
import googleVidsCert from "@assets/9496859_97799081764448398942_1764566731812.pdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse follower effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundGlow = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.15), transparent 80%)`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Texture */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Mouse Glow Effect */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: backgroundGlow
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-lg tracking-tighter cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-primary">&lt;</span>
            Nikhil
            <span className="text-primary">/&gt;</span>
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.button>
            ))}
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
            <motion.div 
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src={avatarImage} 
                alt="Nikhil Koundal" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-4 hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for projects
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-gradient-primary animate-gradient bg-[length:200%_200%]">Nikhil Koundal</span>
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={() => scrollToSection('projects')}>
                    View Work <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-primary" />
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillCard name="Python" icon={<Terminal size={24} />} color="text-yellow-400" description="Data & Scripting" variants={itemVariants} />
            <SkillCard name="HTML5" icon={<Code2 size={24} />} color="text-orange-500" description="Structure" variants={itemVariants} />
            <SkillCard name="CSS3" icon={<Laptop size={24} />} color="text-blue-500" description="Styling" variants={itemVariants} />
            <SkillCard name="JavaScript" icon={<BookOpen size={24} />} color="text-yellow-300" description="Interaction" variants={itemVariants} />
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" />
            Education
          </motion.h2>
          
          <div className="space-y-6">
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2)" }}
              className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Lovely Professional University</h3>
                    <p className="text-primary font-mono text-sm mt-1">Bachelor of Technology</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded border border-white/10">Present</span>
                </div>
                <p className="text-muted-foreground">
                  Specializing in Computer Science and Engineering. Focusing on advanced algorithms, data structures, and full-stack development.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2)" }}
              className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 opacity-80 hover:opacity-100 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Dav Sr Sec Public School Manai</h3>
                    <p className="text-primary font-mono text-sm mt-1">Secondary Education</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded border border-white/10">Past</span>
                </div>
                <p className="text-muted-foreground">
                  Completed foundational studies with a focus on Science and Mathematics.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              variants={itemVariants}
              title="Number Guessing Game" 
              description="A classic beginner Python project where the computer picks a random number and the user has to guess it with hints."
              tags={["Python", "CLI", "Logic"]}
            />
            <ProjectCard 
              variants={itemVariants}
              title="Simple Calculator" 
              description="A basic web-based calculator that performs arithmetic operations. Built to understand DOM manipulation and event handling."
              tags={["HTML", "CSS", "JavaScript"]}
            />
            <ProjectCard 
              variants={itemVariants}
              title="Digital Clock" 
              description="A real-time digital clock interface that updates every second. Features a dark mode toggle and date display."
              tags={["JavaScript", "Date API", "CSS"]}
            />
            <ProjectCard 
              variants={itemVariants}
              title="Basic To-Do List" 
              description="A simple list application to add and remove tasks. Uses local storage to save your tasks even after refreshing."
              tags={["JavaScript", "LocalStorage", "HTML"]}
            />
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Award className="text-primary" />
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <CertificationCard 
              variants={itemVariants}
              title="Create Engaging Video with Google Vids" 
              issuer="Lovely Professional University"
              date="Nov 2025"
              link={googleVidsCert}
            />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Mail className="text-primary" />
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground mb-6 text-lg">
                I'm currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  <span>unknown93177@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                      <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus-visible:ring-primary transition-all focus:bg-white/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                      <Input placeholder="john@example.com" className="bg-white/5 border-white/10 focus-visible:ring-primary transition-all focus:bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                    <Textarea placeholder="Hello, I'd like to talk about..." className="min-h-[120px] bg-white/5 border-white/10 focus-visible:ring-primary transition-all focus:bg-white/10" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <Send size={16} className="mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

      </main>
      
      <footer className="py-8 text-center text-sm text-muted-foreground/60 font-mono border-t border-white/5">
        <p>© {new Date().getFullYear()} Nikhil Koundal.</p>
      </footer>
    </div>
  );
}

function CertificationCard({ title, issuer, date, link, variants }: { title: string, issuer: string, date: string, link: string, variants?: any }) {
  return (
    <motion.div variants={variants} whileHover={{ y: -8, scale: 1.02 }}>
      <Card className="h-full bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <CardHeader className="relative z-10 pb-2">
          <CardTitle className="flex justify-between items-start">
            <span className="group-hover:text-primary transition-colors text-lg leading-tight">{title}</span>
            <Award size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex-1 flex flex-col justify-end pt-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-medium text-foreground">{issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{date}</p>
            </div>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
              title="View Certificate"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <motion.a 
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-colors duration-200 border border-transparent hover:border-primary/20"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

function SkillCard({ name, icon, color, description, variants }: { name: string, icon: React.ReactNode, color: string, description: string, variants?: any }) {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.3)" }}
      className="group p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-primary/50 transition-colors duration-300 flex flex-col items-center gap-4 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300 ${color} ring-1 ring-white/5 shadow-lg shadow-primary/5 relative z-10`}>
        {icon}
      </div>
      <div className="relative z-10">
        <span className="font-medium font-mono block mb-1">{name}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, tags, variants }: { title: string, description: string, tags: string[], variants?: any }) {
  return (
    <motion.div variants={variants} whileHover={{ y: -8, scale: 1.02 }}>
      <Card className="h-full bg-black/20 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <CardHeader className="relative z-10">
          <CardTitle className="flex justify-between items-center">
            <span className="group-hover:text-primary transition-colors text-lg">{title}</span>
            <ExternalLink size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between relative z-10">
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal transition-colors border border-white/5 group-hover:border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
