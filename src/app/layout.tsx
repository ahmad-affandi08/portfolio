"use client";

import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/bits/Animations/ClickSpark/ClickSpark";
import SmoothScroll from "@/components/SmoothScroll";
import dynamic from "next/dynamic";
import Noise from "@/components/bits/Animations/Noise/Noise";

const Antigravity = dynamic(() => import("@/components/bits/Backgrounds/Antigravity/Antigravity"), {
  ssr: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <title>Ahmad Affandi — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer yang membangun solusi digital cepat, modern, dan berkesan. Bekerja di RSUD dr. Soeratno Gemolong Sragen." />
        <meta name="author" content="Ahmad Affandi" />

      </head>
      <body className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <Antigravity
            count={600}
            particleShape="capsule"
            magnetRadius={20}
            ringRadius={20}
            waveSpeed={0.05}
            waveAmplitude={1}
            particleSize={1.0}
            lerpSpeed={0.05}
            autoAnimate={true}
            fieldStrength={10}
          />
          <ClickSpark
            sparkColor="#000000"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              {children}
            </div>
          </ClickSpark>
        </SmoothScroll>
      </body>
    </html>
  );
}
