"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/i18n/translations";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function SimpleContactForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Esse e-mail não parece válido"),
    phone: z.string().min(10, "Telefone inválido"),
    message: z.string().min(10, "Mensagem muito curta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual webhook/API call
      await delay(2000);
      console.log("Form data:", data);

      toast({
        title: "Sucesso!",
        description:
          "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro!",
        description: "Falha ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome Completo *
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
          placeholder="Seu nome completo"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Telefone/WhatsApp *
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
          placeholder="(11) 99999-0000"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors min-h-[120px]"
          placeholder="Conte-nos mais sobre sua situação ou dúvidas específicas..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy notice */}
      <div className="flex items-start">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 text-[#D86C1F] focus:ring-[#D86C1F] border-gray-300 rounded"
          required
        />
        <label className="ml-3 text-sm text-gray-600">
          Concordo em receber contato da Fix Path Credit e aceito os{" "}
          <a href="/legal" className="text-[#D86C1F] hover:underline">
            termos de uso e política de privacidade
          </a>
          . *
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D86C1F] hover:bg-[#E1893D] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Enviando...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Send className="w-4 h-4 mr-2" />
            Solicitar Consulta Gratuita
          </div>
        )}
      </Button>

      {/* Security Notice */}
      <p className="text-xs text-gray-500 text-center">
        Suas informações são seguras e confidenciais.
      </p>
    </motion.form>
  );
}
