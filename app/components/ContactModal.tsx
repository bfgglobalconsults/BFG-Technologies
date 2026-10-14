"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-[#0066CC] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-200 text-2xl"
        >
          ×
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build something that moves?
          </h2>
          <p className="text-blue-100 text-lg">
            Tell us what you want today - we&apos;ll map the fastest route to
            where you want to be.
          </p>
        </div>

        <form className="bg-white rounded-2xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jordan Avery"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Business Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+234 000 0000 0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Service you&apos;re interested in
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-500">
                <option>select service</option>
                <option>Digital Strategy</option>
                <option>SEO & Search</option>
                <option>Paid Ads</option>
                <option>Social Media Marketing</option>
                <option>Content Marketing</option>
                <option>Email Marketing</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Country
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-500">
                <option>select country</option>
                <option>Tanzania</option>
                <option>Kenya</option>
                <option>Nigeria</option>
                <option>South Africa</option>
                <option>Ghana</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="enter company name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your goals, timeline and what success looks like"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-orange-600 font-semibold inline-flex items-center gap-2"
          >
            Talk to us <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
