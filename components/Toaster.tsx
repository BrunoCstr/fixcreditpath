"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useToast, type Toast } from "@/hooks/use-toast";
import {
  Toast as RadixToast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "@/components/ui/toast";
import { CheckCircle, AlertCircle, XCircle, X } from "lucide-react";

// ▸ Type augmentation - adiciona variantes modernas
declare module "@/hooks/use-toast" {
  interface Toast {
    variant?: "default" | "destructive" | "success" | "warning" | "info";
  }
}

// Configuração de estilos modernos por variante
const VARIANT_CONFIG: Record<
  NonNullable<Toast["variant"]>,
  {
    styles: string;
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
  }
> = {
  default: {
    styles:
      "bg-white/90 border border-gray-200/50 text-gray-900 shadow-xl shadow-gray-900/10 dark:bg-gray-900/90 dark:border-gray-700/50 dark:text-gray-100 dark:shadow-black/20",
    icon: AlertCircle,
    iconColor: "text-gray-600 dark:text-gray-400",
  },
  destructive: {
    styles:
      "bg-gradient-to-br from-red-50/95 to-red-100/95 border border-red-200/60 text-red-900 shadow-xl shadow-red-900/15 dark:from-red-950/90 dark:to-red-900/90 dark:border-red-800/60 dark:text-red-100 dark:shadow-red-900/30",
    icon: XCircle,
    iconColor: "text-red-600 dark:text-red-400",
  },
  success: {
    styles:
      "bg-gradient-to-br from-emerald-50/95 to-green-100/95 border border-emerald-200/60 text-emerald-900 shadow-xl shadow-emerald-900/15 dark:from-emerald-950/90 dark:to-emerald-900/90 dark:border-emerald-800/60 dark:text-emerald-100 dark:shadow-emerald-900/30",
    icon: CheckCircle,
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    styles:
      "bg-gradient-to-br from-amber-50/95 to-yellow-100/95 border border-amber-200/60 text-amber-900 shadow-xl shadow-amber-900/15 dark:from-amber-950/90 dark:to-amber-900/90 dark:border-amber-800/60 dark:text-amber-100 dark:shadow-amber-900/30",
    icon: AlertCircle,
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  info: {
    styles:
      "bg-gradient-to-br from-blue-50/95 to-blue-100/95 border border-blue-200/60 text-blue-900 shadow-xl shadow-blue-900/15 dark:from-blue-950/90 dark:to-blue-900/90 dark:border-blue-800/60 dark:text-blue-100 dark:shadow-blue-900/30",
    icon: AlertCircle,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => {
        const variant = toast.variant ?? "default";
        const config = VARIANT_CONFIG[variant];
        const Icon = config.icon;

        return (
          <RadixToast
            key={toast.id}
            open={toast.open}
            onOpenChange={toast.onOpenChange}
            className={cn(
              // Layout base
              "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-2xl p-5 pr-12 transition-all duration-300 ease-out",
              // Backdrop blur moderno
              "backdrop-blur-xl backdrop-saturate-150",
              // Animações
              "data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full",
              // Hover effects
              "hover:scale-[1.02] hover:shadow-2xl",
              // Estilos da variante
              config.styles,
              toast.className
            )}
            {...toast}
          >
            {/* Ícone da variante */}
            <div className={cn("flex-shrink-0 mt-0.5", config.iconColor)}>
              <Icon className="h-5 w-5" />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 space-y-1">
              {toast.title && (
                <ToastTitle className="text-base font-semibold leading-tight tracking-tight">
                  {toast.title}
                </ToastTitle>
              )}
              {toast.description && (
                <ToastDescription className="text-sm leading-relaxed opacity-90">
                  {toast.description}
                </ToastDescription>
              )}

              {/* Ação customizada */}
              {toast.action && (
                <div className="mt-3">
                  <ToastAction
                    asChild
                    altText="Executar ação"
                    className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-black/10 px-3 text-sm font-medium transition-colors hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    {toast.action}
                  </ToastAction>
                </div>
              )}
            </div>

            {/* Botão fechar moderno */}
            <ToastClose className="absolute right-3 top-3 rounded-full p-1 text-current opacity-60 transition-all hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-current/20">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </ToastClose>

            {/* Barra de progresso sutil (opcional) */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-current/20 to-transparent" />
          </RadixToast>
        );
      })}
    </div>
  );
}