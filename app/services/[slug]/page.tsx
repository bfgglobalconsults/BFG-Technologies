"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Service data
const servicesData = {
  "digital-marketing-strategy": {
    id: 1,
    title: "DIGITAL MARKETING STRATEGY",
    subtitle: "Every marketing decision needs a direction.",
    description:
      "We create integrated digital strategies that connect business objectives with audiences, channels, content and measurable outcomes.",
    heroImage: "/assets/services-hero.jpg",
    sections: [
      {
        title: "From business goals to a digital action plan.",
        content:
          "A digital marketing strategy is more than a list of tactics. It's a plan that connects what you want to achieve with how digital channels can help you get there.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Understand",
        description: "We start by understanding your business goals and challenges.",
      },
      {
        number: "02",
        title: "Research",
        description: "We analyze your audience, competitors and market landscape.",
      },
      {
        number: "03",
        title: "Plan",
        description: "We develop a strategy that connects goals to action.",
      },
      {
        number: "04",
        title: "Execute",
        description: "We implement and measure what works.",
      },
    ],
    benefits: [
      {
        title: "Clear Direction",
        description: "Know where you're going and how to get there.",
      },
      {
        title: "Aligned Teams",
        description: "Everyone works toward the same goals.",
      },
      {
        title: "Measurable Results",
        description: "Track progress and adjust based on data.",
      },
    ],
    cta: {
      title: "One strategy. Connected action.",
      subtitle: "Let's build a digital strategy that moves your business forward.",
    },
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
