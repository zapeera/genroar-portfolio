"use client";
import { useEffect } from "react";

export function ErrorHandler() {
  useEffect(() => {
    // Handle potential errors from external scripts or browser extensions
    const handleError = (event: ErrorEvent) => {
      // Suppress errors from share-modal.js or similar external scripts
      if (event.filename?.includes("share-modal") || 
          event.message?.includes("share-modal") ||
          event.message?.includes("addEventListener")) {
        event.preventDefault();
        console.warn("Suppressed error from external script:", event.message);
        return true;
      }
      return false;
    };

    window.addEventListener("error", handleError);

    // Also handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes("share-modal") ||
          event.reason?.toString().includes("share-modal")) {
        event.preventDefault();
        console.warn("Suppressed promise rejection from external script:", event.reason);
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}

