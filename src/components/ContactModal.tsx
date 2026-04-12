import { useState, useEffect, useRef } from "react";
import { Mail, Copy, Check, X, Send } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { lang } = useApp();
  const t = translations[lang];
  const modalRef = useRef<HTMLDivElement>(null);

  const email = "ptavasci@" + "gmail.com";

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactModal", handleOpen);
    return () => window.removeEventListener("openContactModal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Close on escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleSend = () => {
    window.location.href = `mailto:${email}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 w-full h-full border-none outline-none bg-zinc-900/40 dark:bg-black/60 backdrop-blur-md animate-fade-in-up cursor-default"
        style={{ animationDuration: "0.2s" }}
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{ animationDuration: "0.3s" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-border-dark">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Mail className="w-5 h-5" />
            </div>
            <h2
              id="contact-modal-title"
              className="text-xl font-bold font-display text-zinc-900 dark:text-white"
            >
              {t.contactMe}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-surface-dark-hover transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-zinc-50 dark:bg-bg-dark border border-zinc-200 dark:border-border-dark rounded-xl p-4 mb-6">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              Email
            </p>
            <p className="text-lg text-zinc-900 dark:text-white select-all break-all">
              {email}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-hover text-white py-3 px-4 rounded-xl font-medium transition-colors cursor-pointer active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              {t.sendEmail}
            </button>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-surface-dark-hover py-3 px-4 rounded-xl font-medium transition-colors cursor-pointer active:scale-[0.98]"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? t.emailCopied : t.copyEmail}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
