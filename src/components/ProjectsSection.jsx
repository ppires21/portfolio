import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Volleyball Team Management System",
    description: "A comprehensive web platform for volleyball teams offering real-time match event tracking via live camera streaming. Enables an operator to tag in-game actions, generates post‐match performance statistics and stores all analytics for detailed review.",
    image: "/projects/project1.png",
    tags: ["Java", "Java SpringBoot", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/ppires21/Voleibol-Team-Management-System"
  },

  {
    id: 2,
    title: "Microservices-Based Online Bookstore",
    description: "A monolithic Java Spring Boot bookstore refactored into a distributed microservices architecture. Implements independent services for authentication, catalog, cart and orders, leverages CQRS and Saga patterns, containerised with Docker and was deployed on Oracle Cloud Infrastructure in the past for scalability and resilience (not currently running).",
    image: "/projects/project2.png",
    tags: ["Java", "Java SpringBoot", "JavaScript", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/ppires21/MicroServices_Bookstore"
  },

  {
    id: 3,
    title: "Beach & River Cleanup and Reforestation Platform",
    description: "GoHelp is a collaborative platform for environmental initiatives, allowing users to create clean-up and reforestation projects, allocate materials and field professionals, monitor ongoing efforts in real time and track overall progress to maximise impact.",
    image: "/projects/project3.png",
    tags: ["HTML", "Bootstrap", "JavaScript", "Vue.JS", "GoogleAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/ppires21/GoHelp"
  }
];

export const ProjectsSection = () => {
    return (
        <section id = "projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                    >
                        <div className="h-48 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        </div>

                        <div className="p-6 flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        </div>

                        {/* Ícone GitHub centrado em baixo */}
                        <div className="mt-auto flex justify-center pb-6">
                        <a
                            href={project.githubUrl}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={24} />
                        </a>
                        </div>
                    </div>
                    ))}

                </div>

                <div className= "text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/ppires21" target="_blank">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
                
            </div>
        </section>
    );
};