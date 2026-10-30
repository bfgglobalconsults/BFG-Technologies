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
        description:
          "We start by understanding your business goals and challenges.",
      },
      {
        number: "02",
        title: "Research",
        description:
          "We analyze your audience, competitors and market landscape.",
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
      subtitle:
        "Let's build a digital strategy that moves your business forward.",
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
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div {...fadeIn} className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            {...fadeIn}
            className="text-xl text-gray-700 leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      {service.sections.map((section, index) => (
        <section key={index} className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {section.content}
            </motion.p>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#0066CC] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Benefits
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0066CC] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-4">
            {service.cta.title}
          </motion.h2>
          <motion.p {...fadeIn} className="text-xl mb-8">
            {service.cta.subtitle}
          </motion.p>
          <Link
            href="/#contact"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-orange-600 font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
