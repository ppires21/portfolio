import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {

    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description:"Thank you for your message. I'll get back to you soon.."
            });
        },1500);
    };


  return (
    <div className="container mx-auto max-w-5xl">
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {/* Texto opcional */}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-e2l font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:pedro@araujopires.pt"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pedro@araujopires.pt
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="fonte-medium">Phone</h4>
                  <a
                    href="tel:+351934678153"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +(351) 934678153
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="fonte-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Braga, Portugal
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ppires21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/ppirs21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/p.pires21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs border border-[rgb(124,109,217)] rounded-2xl" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};