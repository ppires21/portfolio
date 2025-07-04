import { useState } from "react";
import { cn } from '@/lib/utils';

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "Vue.js", level: 75, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Figma", level: 70, category: "frontend" },

    // Backend
    { name: "Java", level: 90, category: "backend" },
    { name: "Spring Boot", level: 85, category: "backend" },
    { name: "C", level: 65, category: "backend" },
    { name: "C++", level: 60, category: "backend" },
    { name: "Prolog", level: 50, category: "backend" },
    { name: "SQL", level: 85, category: "backend" },
    { name: "MySQL", level: 80, category: "backend" },
    { name: "Assembly", level: 40, category: "backend" },
    { name: "Go", level: 50, category: "backend" },

    // Data & BI
    { name: "Python", level: 80, category: "data" },
    { name: "R", level: 70, category: "data" },
    { name: "Spark", level: 65, category: "data" },
    { name: "Tableau", level: 70, category: "data" },
    { name: "Power BI", level: 70, category: "data" },
    { name: "Talend", level: 60, category: "data" },
    { name: "RapidMiner", level: 50, category: "data" },
    { name: "Hive", level: 50, category: "data" },
    { name: "Hadoop HDFS", level: 60, category: "data" },
    { name: "SQL", level: 80, category: "data" },
    { name: "PostgreSQL", level: 80, category: "data" },
    { name: "Apache Cassandra", level: 70, category: "data" },
    { name: "Neo4j", level: 70, category: "data" },
    { name: "MongoDB", level: 50, category: "data" },

    // Tools (Devops oriented)
    { name: "Linux", level: 85, category: "tools" },
    { name: "Docker", level: 80, category: "tools" },
    { name: "Github", level: 85, category: "tools" },
    { name: "Core (Network Simulator)", level: 55, category: "tools" },
    { name: "Outsystems", level: 50, category: "tools" },
    { name: "NGINX", level: 70, category: "tools" },
    { name: "XigmaNAS", level: 65, category: "tools" },

    // Segurança
    //{ name: "Wireshark", level: 70, category: "security" },
    //{ name: "OpenSSL", level: 60, category: "security" },
    //{ name: "pfSense", level: 60, category: "security" },
    //{ name: "Suricata", level: 50, category: "security" },
    //{ name: "BLP Model", level: 40, category: "security" },
    //{ name: "ISO/IEC 27005", level: 40, category: "security" },
    //{ name: "RSA+SHA256", level: 40, category: "security" },
    //{ name: "X.509", level: 40, category: "security" },

    // Machine Learning & AI
    //{ name: "XGBoost", level: 70, category: "ml" },
    //{ name: "Random Forest", level: 70, category: "ml" },
    //{ name: "ARIMA/ARIMAX", level: 60, category: "ml" },
    //{ name: "Holt-Winters", level: 60, category: "ml" },
    //{ name: "Scikit-learn", level: 70, category: "ml" },
    //{ name: "shiny", level: 65, category: "ml" },
    //{ name: "Simulated Annealing", level: 60, category: "ml" },
    //{ name: "Hill Climbing", level: 60, category: "ml" },
    //{ name: "Monte Carlo", level: 60, category: "ml" },
    //{ name: "PSO", level: 60, category: "ml" },
    //{ name: "NSGA-II", level: 50, category: "ml" },
    //{ name: "Neural Networks (NN)", level: 60, category: "ml" },
    //{ name: "Decision Tree", level: 65, category: "ml" },
    //{ name: "K-Means", level: 65, category: "ml" },
    //{ name: "DBSCAN", level: 55, category: "ml" },
    //{ name: "SVM", level: 55, category: "ml" },
    //{ name: "KNN", level: 55, category: "ml" },
    //{ name: "PCA", level: 55, category: "ml" },
];

const categories = ["frontend", "backend", "data", "tools"];
// const categories = ["all", "frontend", "backend", "data", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("data");
    const filteredSkills = skills.filter(
        (skill) => skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
