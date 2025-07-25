import {Code} from "lucide-react";
import {User} from "lucide-react";
import {Briefcase} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className = "container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Passionate Developer and Tech Enthusiast
                </h3>

                <p className="text-muted-foreground">
                    I recently graduated with a degree in Information Systems Engineering and Management and am now exploring diverse areas of technology. I quickly adapt to new concepts and consistently strive for excellence in every project I undertake. My passion for problem-solving and collaboration drives my strong performance.
                </p>

                <p className="text-muted-foreground">
                    During my studies, I developed a strong interest in Data Engineering and Backend Development, as well as Infrastructure and System Architecture.
                </p>



                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch

                    </a>

                    <a href="/PedroPires_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="__blank">
                        Download CV Here!
                    </a>


                </div>

            </div>

            <div className="grid grid-cols-1 gap-6">

                <div className="gradient-border px-6 py-3 card-hover border border-[rgb(124,109,217)] rounded-2xl">
                    <div className="flex items-start gap-4">
                        {/* Círculo 40×40, crop central e recorte em círculo */}
                        <div
                        className="
                            w-10 h-10 
                            rounded-full
                            bg-center 
                            bg-cover 
                            bg-[url('/uminhoLogo.jpeg')]
                            bg-primary/10
                        "
                        />
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Uminho - Master Degree </h4>
                        <p className="text-muted-foreground">
                            Information Systems Engineering.
                        </p>
                        <p className="text-muted-foreground">
                            Current Grade: 17/20
                        </p>
                        </div>
                    </div>
                </div>




                <div className="gradient-border px-6 py-3 card-hover border border-[rgb(124,109,217)] rounded-2xl">
                    <div className="flex items-start gap-4">
                        {/* Círculo 40×40, crop central e recorte em círculo */}
                        <div
                        className="
                            w-10 h-10 
                            rounded-full
                            bg-center 
                            bg-cover 
                            bg-[url('/uminhoLogo.jpeg')]
                            bg-primary/10
                        "
                        />
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Uminho - Bachelor Degree </h4>
                        <p className="text-muted-foreground">
                            Information Systems Engineering and Management.
                        </p>
                        <p className="text-muted-foreground">
                            Final Grade: 16/20
                        </p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border px-6 py-3 card-hover border border-[rgb(124,109,217)] rounded-2xl">
                    <div className="flex items-start gap-4">
                        {/* Círculo 40×40, crop central e recorte em círculo */}
                        <div
                        className="
                            w-10 h-10 
                            rounded-full
                            bg-center 
                            bg-cover 
                            bg-[url('/esas.jpeg')]
                            bg-primary/10
                        "
                        />
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">ESAS - High Scool Degree </h4>
                        <p className="text-muted-foreground">
                            Science and Technology.
                        </p>
                        <p className="text-muted-foreground">
                            Final Grade: 17/20
                        </p>
                        </div>
                    </div>
                </div>

                
            </div>


        </div>

        </div>
    </section>;
};