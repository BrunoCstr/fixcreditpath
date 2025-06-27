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

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function SimpleContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, "Name must have at least 2 characters"),
    email: z.string().email("This email doesn't seem valid"),
    phone: z.string().min(10, "Invalid phone number"),
    message: z.string().min(10, "Message too short"),
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
        title: "Success!",
        description:
          "Message sent successfully! We'll contact you soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
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
          Full Name *
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
          placeholder="Your full name"
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
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone/WhatsApp *
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors min-h-[120px]"
          placeholder="Tell us more about your situation or specific questions..."
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
          I agree to receive contact from Fix Path Credit and accept the{" "}
          <a href="/legal" className="text-[#D86C1F] hover:underline">
            terms of use and privacy policy
          </a>
          . *
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D86C1F] hover:bg-[#E1893D] text-white font-semibold px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Send className="w-4 h-4 mr-2" />
            Request Free Consultation
          </div>
        )}
      </Button>

      {/* Security Notice */}
      <p className="text-xs text-gray-500 text-center">
        Your information is secure and confidential.
      </p>
    </motion.form>
  );
}
