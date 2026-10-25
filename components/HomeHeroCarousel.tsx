"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/site";

const slides = [
  {
    image: "/images/home-hero-city.png",
    alt: "Illustrative winter look with a camel coat and cream knit on a city street",
    eyebrow: "THE WINTER EDIT",
    title: "Five looks.\nMore ways to wear what you own.",
    description: "Simple outfit ideas for a wardrobe that feels like you.",
    href: "/articles/5-winter-styles-2026/",
    action: "Explore the looks",
    note: "STYLE INSPIRATION · ITEMS MAY DIFFER",
  },
  {
    image: "/images/editorial-cover.png",
    alt: "Illustrative editorial portrait in a camel coat and neutral knit",
    eyebrow: "THE CAPSULE GUIDE",
    title: "A smaller wardrobe.\nMore outfit possibilities.",
    description: "Start with the pieces you reach for every week.",
    href: "/articles/a-12-piece-winter-wardrobe/",
    action: "Build your wardrobe",
    note: "STYLE INSPIRATION · ITEMS MAY DIFFER",
  },
  {
    image: "/images/winter-flatlay.png",
    alt: "Illustrative winter wardrobe flat lay with coat, sweater, denim, scarf, and boots",
    eyebrow: "THE SMART SHOPPING GUIDE",
    title: "Choose the coat\nyou will wear on repeat.",
    description: "Check fit, warmth, care, and the details that matter.",
    href: "/articles/what-to-check-before-buying-a-winter-coat/",
    action: "Read the coat guide",
    note: "STYLE INSPIRATION · ITEMS MAY DIFFER",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const paused = hovered || focused || userPaused;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);
    return () => media.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const slide = slides[activeIndex];
  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <section
      className="home-hero home-hero-carousel"
      aria-label="Featured style stories"
      aria-roledescription="carousel"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      {slides.map((item, index) => (
        <div className={`hero-slide${index === activeIndex ? " is-active" : ""}`} key={item.image} aria-hidden={index !== activeIndex}>
          <Image src={assetPath(item.image)} alt={item.alt} fill priority={index === 0} sizes="100vw" className="hero-image" />
        </div>
      ))}
      <div className="hero-shade hero-shade-dark" />
      <div className="shell hero-content">
        <div className="hero-copy hero-copy-light" aria-live={paused ? "polite" : "off"}>
          <p className="eyebrow hero-eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1>
          <p className="hero-deck">{slide.description}</p>
          <Link className="button button-light" href={slide.href}>{slide.action}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-controls" aria-label="Carousel controls">
          <button className="hero-arrow" type="button" onClick={() => move(-1)} aria-label="Previous slide">←</button>
          <div className="hero-dots" role="group" aria-label="Choose a featured story">
            {slides.map((item, index) => <button type="button" key={item.eyebrow} className={`hero-dot${index === activeIndex ? " is-active" : ""}`} onClick={() => setActiveIndex(index)} aria-label={`Show slide ${index + 1}: ${item.eyebrow}`} aria-pressed={index === activeIndex} />)}
          </div>
          <button className="hero-arrow" type="button" onClick={() => move(1)} aria-label="Next slide">→</button>
          <span className="hero-count">{String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}</span>
          {!reducedMotion && <button className="hero-pause" type="button" onClick={() => setUserPaused((value) => !value)} aria-label={userPaused ? "Play carousel" : "Pause carousel"} aria-pressed={userPaused}>{userPaused ? "▶" : "Ⅱ"}</button>}
        </div>
        <span className="hero-image-label">{slide.note}</span>
      </div>
    </section>
  );
}
