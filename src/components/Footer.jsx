import { ArrowUp } from "lucide-react";

export const Footer = () => {

    return (
       <footer className="p-2 px-2 bg-card relative border-t border-border mt-4 pt-2 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} araujopires.pt. All rights reserved.
            </p>
            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};