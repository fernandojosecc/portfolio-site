"use client";

import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observer.observe(el);
      // Check if element is already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
