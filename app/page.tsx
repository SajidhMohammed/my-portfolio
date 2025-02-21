"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Code,
  BookOpen,
  Server,
  Database,
  Cloud,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import Header from "@/components/Home/Header";
import Skills from "@/components/Home/Skills";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "Cloud-based Task Manager",
      image: "/Banner.png?height=400&width=600",
      description: "A scalable task management system built on AWS.",
      category: "cloud",
    },
    {
      title: "IoT Data Visualization Dashboard",
      image: "/Banner.png?height=400&width=600",
      description:
        "Real-time data visualization for IoT devices using React and D3.js.",
      category: "frontend",
    },
    {
      title: "Microservices-based E-commerce Platform",
      image: "/Banner.png?height=400&width=600",
      description:
        "A modular e-commerce solution using microservices architecture.",
      category: "backend",
    },
    {
      title: "Real-time Chat Application",
      image: "/Banner.png?height=400&width=600",
      description: "A WebSocket-based chat app with end-to-end encryption.",
      category: "fullstack",
    },
    {
      title: "Blockchain-based Voting System",
      image: "/Banner.png?height=400&width=600",
      description:
        "A secure and transparent voting system using Ethereum blockchain.",
      category: "blockchain",
    },
    {
      title: "AI-powered Image Recognition App",
      image: "/Banner.png?height=400&width=600",
      description:
        "Mobile app for real-time image recognition using TensorFlow.",
      category: "ai",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <TooltipProvider>
      <motion.div
        className={`min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#2b1055] text-white ${theme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-purple-500 z-50"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-4 py-8">
          <Header />

          <main className="mt-8">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-purple-900/20 rounded-full p-1">
                <TabsTrigger
                  value="about"
                  className="rounded-full data-[state=active]:bg-purple-600"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="rounded-full data-[state=active]:bg-purple-600"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="rounded-full data-[state=active]:bg-purple-600"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="rounded-full data-[state=active]:bg-purple-600"
                >
                  Experience
                </TabsTrigger>
              </TabsList>
              <TabsContent value="about">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-purple-900/20 border-purple-500/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400 flex items-center text-2xl">
                        <Code className="mr-2" /> About Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-4">
                        <Image
                          src="/Banner.png"
                          alt="Profile Picture"
                          width={150}
                          height={150}
                          className="rounded-full"
                        />
                        <p className="text-purple-100 leading-relaxed">
                          I am a passionate software engineer with a focus on
                          cloud technologies and full-stack development. My
                          journey began with a 6-month internship at AMEZcloud,
                          where I honed my skills in cloud computing and
                          software development. Now, as a Junior Developer at
                          AMEZcloud, I continue to expand my expertise in
                          creating efficient, scalable, and innovative
                          solutions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="skills">
                <Skills />
              </TabsContent>
              <TabsContent value="projects">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-purple-900/20 border-purple-500/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400 flex items-center text-2xl">
                        <ExternalLink className="mr-2" /> Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-8">
                        <Button
                          variant={filter === "all" ? "default" : "outline"}
                          onClick={() => setFilter("all")}
                          className="mr-2"
                        >
                          All
                        </Button>
                        <Button
                          variant={
                            filter === "frontend" ? "default" : "outline"
                          }
                          onClick={() => setFilter("frontend")}
                          className="mr-2"
                        >
                          Frontend
                        </Button>
                        <Button
                          variant={filter === "backend" ? "default" : "outline"}
                          onClick={() => setFilter("backend")}
                          className="mr-2"
                        >
                          Backend
                        </Button>
                        <Button
                          variant={
                            filter === "fullstack" ? "default" : "outline"
                          }
                          onClick={() => setFilter("fullstack")}
                          className="mr-2"
                        >
                          Full Stack
                        </Button>
                        <Button
                          variant={filter === "cloud" ? "default" : "outline"}
                          onClick={() => setFilter("cloud")}
                          className="mr-2"
                        >
                          Cloud
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                          <motion.div
                            key={index}
                            className="relative group overflow-hidden bg-purple-900/20 rounded-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image
                              src={project.image || "/Banner.png"}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <h3 className="text-xl font-bold text-white mb-2">
                                {project.title}
                              </h3>
                              <p className="text-purple-200 mb-4">
                                {project.description}
                              </p>
                              <Button
                                variant="outline"
                                className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
                              >
                                View Project
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="experience">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-purple-900/20 border-purple-500/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-purple-400 flex items-center text-2xl">
                        <BookOpen className="mr-2" /> Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Badge className="mr-4 bg-purple-600 text-white">
                            2024
                          </Badge>
                          <div>
                            <h3 className="text-lg font-semibold text-purple-200">
                              Internship at AMEZcloud
                            </h3>
                            <p className="text-purple-300">
                              Developed cloud-based solutions and contributed to
                              full-stack projects.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Badge className="mr-4 bg-purple-600 text-white">
                            2025
                          </Badge>
                          <div>
                            <h3 className="text-lg font-semibold text-purple-200">
                              Junior Developer at AMEZcloud
                            </h3>
                            <p className="text-purple-300">
                              Continued to expand expertise in cloud computing
                              and software development.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>

            {/* Technical Skills Section */}
            <section className="relative py-24 before:absolute before:inset-0 before:bg-purple-500/5 before:-skew-y-3">
              <div className="relative container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  TECHNICAL EXPERTISE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Full-Stack Development",
                      icon: Code,
                      description:
                        "Proficient in building end-to-end web applications using modern frameworks and technologies",
                    },
                    {
                      title: "Cloud Computing",
                      icon: Cloud,
                      description:
                        "Experience with AWS and Azure services for deploying and managing scalable applications",
                    },
                    {
                      title: "Database Management",
                      icon: Database,
                      description:
                        "Skilled in designing and optimizing both SQL and NoSQL database systems",
                    },
                    {
                      title: "DevOps Practices",
                      icon: Server,
                      description:
                        "Familiar with CI/CD pipelines, containerization, and infrastructure as code",
                    },
                    {
                      title: "API Development",
                      icon: ExternalLink,
                      description:
                        "Experienced in designing and implementing RESTful APIs and GraphQL services",
                    },
                    {
                      title: "Agile Methodologies",
                      icon: BookOpen,
                      description:
                        "Proficient in working with Agile and Scrum frameworks for efficient project management",
                    },
                  ].map((skill) => (
                    <Card
                      key={skill.title}
                      className="bg-purple-900/40 border-purple-500/20 backdrop-blur-sm p-6 hover:bg-purple-800/40 transition-colors"
                    >
                      <skill.icon className="h-12 w-12 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-purple-300">{skill.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Portfolio Gallery */}
            <section className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Cloud-based Task Manager",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "A scalable task management system built on AWS.",
                  },
                  {
                    title: "IoT Data Visualization Dashboard",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "Real-time data visualization for IoT devices using React and D3.js.",
                  },
                  {
                    title: "Microservices-based E-commerce Platform",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "A modular e-commerce solution using microservices architecture.",
                  },
                  {
                    title: "Real-time Chat Application",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "A WebSocket-based chat app with end-to-end encryption.",
                  },
                  {
                    title: "Blockchain-based Voting System",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "A secure and transparent voting system using Ethereum blockchain.",
                  },
                  {
                    title: "AI-powered Image Recognition App",
                    image: "/Banner.png?height=400&width=600",
                    description:
                      "Mobile app for real-time image recognition using TensorFlow.",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden bg-purple-900/20 rounded-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={project.image || "/Banner.png"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-purple-200 mb-4">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
                      >
                        View Project
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* New Image Section with Animation */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/Banner.png"
                    alt="Description of image 1"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/Banner.png"
                    alt="Description of image 2"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/Banner.png"
                    alt="Description of image 3"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
                {/* Add more images as needed */}
              </div>
            </section>

            {/* Social Media Links with Accessibility */}
            <section className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 text-purple-400 hover:text-purple-300" />
                </a>
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-purple-400 hover:text-purple-300" />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-purple-400 hover:text-purple-300" />
                </a>
              </div>
            </section>
          </main>

          <motion.footer
            className="mt-12 text-center bg-purple-800 text-white py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm">
              © Mohammed Sajid {new Date().getFullYear()}
            </p>
            <div className="mt-4 space-x-4">
              <a href="#about" className="hover:text-purple-300">
                About
              </a>
              <a href="#projects" className="hover:text-purple-300">
                Projects
              </a>
            </div>
          </motion.footer>

          {isVisible && (
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-20 right-4 bg-purple-900/20 text-purple-400 border-purple-500/50 hover:bg-purple-800/30 backdrop-blur-sm"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          )}
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
