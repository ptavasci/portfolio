import { type ReactNode } from "react";
import { AppProvider } from "@/contexts/AppContext";

/**
 * Minimal test wrapper that provides AppContext.
 */
export function TestWrapper({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
