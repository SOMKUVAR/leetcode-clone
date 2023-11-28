"use client"

import "./globals.css";
import "ui/styles.css";
import { Navbar } from "ui";
import { useRouter } from "next/navigation";



export default function RootLayout({children,}: {children: React.ReactNode;}): JSX.Element {

  const router = useRouter();

  const LINKS = [{
    name : "Register",
    onClick : () => router.push('/signup')
  },
  {
    name : "Sign in",
    onClick : () => router.push('/login')
  }]

  return (
    <html lang="en">
      <body >
        <Navbar links = {LINKS}/>
        {children}
      </body>
    </html>
  );
}
