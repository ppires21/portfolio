

export const HeroSection = () => {
    return <section id="hero" className = "relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10"> 
            <div className = "space-y-6">
                <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
                    <span className = "opacity-0  animate-fade-in"> Hi, I'm </span>
                    <span className = "text-primary opacity-0  animate-fade-in-delay-1"> Pedro </span>
                    <span className = "text-gradient ml-2 opacity-0  animate-fade-in-delay-2"> Pires </span>
                </h1>

            <p className = "text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Hi, I'm Pedro Pires, a passionate developer and engineer navigating the tech cosmos from Braga, Portugal. Thriving on solving complex problems and crafting stellar software solutions, I enjoy collaborating with fellow explorers and continuously orbit around new learning opportunities—currently pursuing a Master's in Information Systems Engineering at the University of Minho while venturing into freelance projects. Embark on a voyage through my portfolio to discover the exciting projects I've launched into the digital universe!
            </p>

            <div className = "pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className = "cosmic-button">
                    View my Work
                </a>
            </div>


            </div>


        </div>

    </section>
}