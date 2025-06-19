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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/spinner";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  language: "pt" | "en";
  translations: any;
  variant?: "full" | "simple";
}

type BaseFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FullFormData = BaseFormData & {
  subject: string;
};

export function ContactForm({
  language,
  translations,
  variant = "full",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[language];

  const phoneRegex =
    language === "pt"
      ? /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/
      : /^\(?\d{3}\)?[\s-]?\d{3}-?\d{4}$/;

  const formSchema = z.object({
    name: z
      .string()
      .min(
        2,
        t.contact.form.errorMessages?.name ||
          "Name must be at least 2 characters",
      ),
    email: z
      .string()
      .email(t.contact.form.errorMessages?.email || "Invalid email address"),
    phone: z
      .string()
      .regex(
        phoneRegex,
        t.contact.form.errorMessages?.phone || "Invalid phone number",
      ),
    subject: z.string().optional(),
    message: z
      .string()
      .min(10, t.contact.form.errorMessages?.message || "Message too short"),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
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
        title: t.contact.form.successMessages?.onSubmit?.title || "Success!",
        description:
          t.contact.form.successMessages?.onSubmit?.description ||
          "Message sent successfully!",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: t.contact.form.errorMessages?.title || "Error!",
        description:
          t.contact.form.errorMessages?.error || "Failed to send message",
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
          {t.contactPage?.form?.name || t.contact.form.name} *
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="mt-1 contact-form-field"
          placeholder={
            language === "pt" ? "Seu nome completo" : "Your full name"
          }
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          {t.contactPage?.form?.email || t.contact.form.email} *
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 contact-form-field"
          placeholder={language === "pt" ? "seu@email.com" : "your@email.com"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          {t.contactPage?.form?.phone || t.contact.form.phone} *
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          className="mt-1 contact-form-field"
          placeholder={language === "pt" ? "(11) 99999-9999" : "(555) 123-4567"}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Subject (only for full variant) */}
      {variant === "full" && (
        <div>
          <Label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700"
          >
            {t.contactPage?.form?.subject} *
          </Label>
          <Select onValueChange={(value) => setValue("subject", value)}>
            <SelectTrigger className="mt-1 contact-form-field">
              <SelectValue
                placeholder={
                  language === "pt"
                    ? "Selecione um assunto"
                    : "Select a subject"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {(t.contactPage?.form?.subjects || []).map(
                (subject: string, index: number) => (
                  <SelectItem key={index} value={subject}>
                    {subject}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
      )}

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          {t.contactPage?.form?.message || t.contact.form.message} *
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1 contact-form-field min-h-[120px]"
          placeholder={
            t.contactPage?.form?.placeholder?.message ||
            t.contact.form.placeholder
          }
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#E1893D] hover:to-[#D86C1F] text-white font-semibold px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <Spinner size={16} />
            {t.contactPage?.form?.sending || "Sending..."}
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="w-4 h-4 mr-2" />
            {t.contactPage?.form?.submit || t.contact.form.submit}
          </div>
        )}
      </Button>

      {/* Security Notice */}
      <p className="text-xs text-gray-500 text-center">
        {t.contact?.security ||
          (language === "pt"
            ? "Suas informações são seguras e confidenciais."
            : "Your information is safe and confidential.")}
      </p>
    </motion.form>
  );
}
