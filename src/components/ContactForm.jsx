import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState(null);
  const accessKey = "c740db9a-d1ed-4588-87fc-565035ab6ed9";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Meu Portfólio",
      subject: "Nova mensagem do site",
    },
    onSuccess: () => {
      setStatus("success");
      reset();
    },
    onError: () => {
      setStatus("error");
    },
  });

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          placeholder="Pedro Pires..."
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="john@gmail.com"
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          placeholder="Hello, I'd like to talk about..."
          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
      >
        Send Message
        <Send size={16} />
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600">Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Ocorreu um erro. Tente novamente.</p>
      )}
    </form>
  );
};