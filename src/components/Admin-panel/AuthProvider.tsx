"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
interface PropsTypes {
  children: ReactNode;
}
export default function AuthProvider({ children }: PropsTypes) {
  return <SessionProvider>{children}</SessionProvider>;
}
