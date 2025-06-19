"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border p-6 pr-8 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full hover:scale-[1.02] hover:shadow-2xl",
  {
    variants: {
      variant: {
        default:
          "bg-white/90 border-gray-200/50 text-gray-900 shadow-xl shadow-gray-900/10 dark:bg-gray-900/90 dark:border-gray-700/50 dark:text-gray-100 dark:shadow-black/20",
        destructive:
          "bg-gradient-to-br from-red-50/95 to-red-100/95 border-red-200/60 text-red-900 shadow-xl shadow-red-900/15 dark:from-red-950/90 dark:to-red-900/90 dark:border-red-800/60 dark:text-red-100 dark:shadow-red-900/30",
        success:
          "bg-gradient-to-br from-emerald-50/95 to-green-100/95 border-emerald-200/60 text-emerald-900 shadow-xl shadow-emerald-900/15 dark:from-emerald-950/90 dark:to-emerald-900/90 dark:border-emerald-800/60 dark:text-emerald-100 dark:shadow-emerald-900/30",
        warning:
          "bg-gradient-to-br from-amber-50/95 to-yellow-100/95 border-amber-200/60 text-amber-900 shadow-xl shadow-amber-900/15 dark:from-amber-950/90 dark:to-amber-900/90 dark:border-amber-800/60 dark:text-amber-100 dark:shadow-amber-900/30",
        info:
          "bg-gradient-to-br from-blue-50/95 to-blue-100/95 border-blue-200/60 text-blue-900 shadow-xl shadow-blue-900/15 dark:from-blue-950/90 dark:to-blue-900/90 dark:border-blue-800/60 dark:text-blue-100 dark:shadow-blue-900/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-black/10 px-3 text-sm font-medium transition-colors hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-current/20 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/10 dark:hover:bg-white/20 group-[.destructive]:border-red-300/40 group-[.destructive]:hover:border-red-400/50 group-[.destructive]:hover:bg-red-500/20 group-[.destructive]:focus:ring-red-400/30 group-[.success]:hover:bg-emerald-500/20 group-[.success]:focus:ring-emerald-400/30 group-[.warning]:hover:bg-amber-500/20 group-[.warning]:focus:ring-amber-400/30 group-[.info]:hover:bg-blue-500/20 group-[.info]:focus:ring-blue-400/30",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-3 top-3 rounded-full p-1 text-current opacity-60 transition-all hover:opacity-100 hover:bg-black/10 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-current/20 dark:hover:bg-white/10 group-[.destructive]:text-red-600 group-[.destructive]:hover:text-red-700 group-[.destructive]:hover:bg-red-500/20 group-[.destructive]:focus:ring-red-400/30 dark:group-[.destructive]:text-red-400 dark:group-[.destructive]:hover:text-red-300 group-[.success]:text-emerald-600 group-[.success]:hover:text-emerald-700 group-[.success]:hover:bg-emerald-500/20 dark:group-[.success]:text-emerald-400 dark:group-[.success]:hover:text-emerald-300 group-[.warning]:text-amber-600 group-[.warning]:hover:text-amber-700 group-[.warning]:hover:bg-amber-500/20 dark:group-[.warning]:text-amber-400 dark:group-[.warning]:hover:text-amber-300 group-[.info]:text-blue-600 group-[.info]:hover:text-blue-700 group-[.info]:hover:bg-blue-500/20 dark:group-[.info]:text-blue-400 dark:group-[.info]:hover:text-blue-300",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-base font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm leading-relaxed opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}