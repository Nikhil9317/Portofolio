import { motion } from "framer-motion";
import { Code2, Terminal, Laptop, BookOpen, Github, Mail, Twitter } from "lucide-react";
import avatarImage from "@assets/generated_images/3d_minimalist_developer_avatar_icon.png";
import bgImage from "@assets/generated_images/dark_abstract_mesh_gradient_background.png";

export default function Home() {
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Hero Section */}
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
            
            <p className="text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed">
              A passionate developer and student at <span className="text-foreground font-medium">DAV MANAI</span>. 
              Building digital experiences with code and creativity.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <SocialLink icon={<Github size={20} />} href="#" label="GitHub" />
              <SocialLink icon={<Twitter size={20} />} href="#" label="Twitter" />
              <SocialLink icon={<Mail size={20} />} href="#" label="Email" />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-24"
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-primary" />
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillCard name="Python" icon={<Terminal size={24} />} color="text-yellow-400" />
            <SkillCard name="HTML5" icon={<Code2 size={24} />} color="text-orange-500" />
            <SkillCard name="CSS3" icon={<Laptop size={24} />} color="text-blue-500" />
            <SkillCard name="JavaScript" icon={<BookOpen size={24} />} color="text-yellow-300" />
          </div>
        </motion.section>

        {/* Education / About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-mono font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" />
            Education
          </h2>
          
          <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
              <h3 className="text-xl font-bold">DAV MANAI</h3>
              <span className="text-sm text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded">Present</span>
            </div>
            <p className="text-muted-foreground">
              Currently pursuing studies with a focus on Computer Science and Mathematics. 
              Exploring the world of programming and software development.
            </p>
          </div>
        </motion.section>

      </main>
      
      <footer className="py-8 text-center text-sm text-muted-foreground/60 font-mono">
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

function SkillCard({ name, icon, color }: { name: string, icon: React.ReactNode, color: string }) {
  return (
    <div className="group p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-3 text-center">
      <div className={`p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300 ${color}`}>
        {icon}
      </div>
      <span className="font-medium font-mono text-sm">{name}</span>
    </div>
  );
}
