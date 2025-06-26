"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Algo deu errado
        </h1>
        <p className="text-gray-600 mb-4">
          Ocorreu um erro inesperado. Nossa equipe foi notificada e está
          trabalhando para resolver o problema.
        </p>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            Tentar novamente
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="w-full"
          >
            Voltar ao início
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <details className="mt-4 p-4 bg-red-50 rounded-lg text-left">
            <summary className="font-semibold text-red-800 cursor-pointer">
              Detalhes do erro (desenvolvimento)
            </summary>
            <pre className="mt-2 text-xs text-red-700 overflow-auto">
              {error.message}
              {error.stack && "\n\n" + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
