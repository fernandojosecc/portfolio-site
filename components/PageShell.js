"use client";

import { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import Footer from "./Footer";

/** Shared chrome for sub-pages: nav, cursor, footer and scroll reveal. */
export default function PageShell({ children, narrow = false }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className={`pg-wrap${narrow ? " pg-narrow" : ""}`}>{children}</main>
      <Footer />
    </>
  );
}
