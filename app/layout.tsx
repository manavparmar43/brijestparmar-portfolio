import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brijesh Parmar | MERN Stack Developer",
  description:
    "Fresh MERN Stack Developer (2025 Graduate) with hands-on internship experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Open to junior developer and full-stack roles in Ahmedabad and remote.",
  keywords: [
    "Brijesh Parmar",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Ahmedabad",
    "Gujarat",
    "Fresh Graduate",
    "Junior Developer",
  ],
  authors: [{ name: "Brijesh Parmar" }],
  openGraph: {
    title: "Brijesh Parmar | MERN Stack Developer",
    description:
      "Fresh MERN Stack Developer open to junior developer roles. Skilled in React, Node.js, Express, MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0d0d14] text-white antialiased font-grotesk">
        {children}
      </body>
    </html>
  );
}
