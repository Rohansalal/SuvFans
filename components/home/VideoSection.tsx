'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const videos = [
  {
    id: 'hvls-demo',
    title: 'HVLS Fan in Action',
    subtitle: 'High-Volume Low-Speed fans at a 1.2L sq ft warehouse',
    // Replace with your actual YouTube video ID
    youtubeId: 'dQw4w9WgXcQ',
    duration: '2:45',
    tag: 'Product Demo',
  },
  {
    id: 'centrifugal-demo',
    title: 'Centrifugal Fan Installation',
    subtitle: 'Custom duct-mounted installation for factory ventilation',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '3:12',
    tag: 'Installation Guide',
  },
  {
    id: 'factory-tour',
    title: 'Manufacturing Facility Tour',
    subtitle: 'Inside our RIICO Bhiwadi production facility',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '4:30',
    tag: 'Company',
  },
];

const highlights = [
  'AMCA-compliant precision testing lab',
  'ISO 9001:2015 quality process walkthrough',
  'Custom impeller balancing demonstration',
  'Site installation best practices',
];

const VideoCard = ({ video, isActive, onClick }: { video: typeof videos[0]; isActive: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
      isActive
        ? 'border-[#F5A02E] bg-[#FFFBF0]'
        : 'border-gray-100 bg-white hover:border-gray-200'
    }`}
  >
    <div className="flex items-start gap-3">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-[#F5A02E]' : 'bg-[#0B2A3C]/5'}`}>
        <Play size={14} fill="currentColor" className={isActive ? 'text-[#0B2A3C]' : 'text-[#0B2A3C]/40'} />
      </div>
      <div className="min-w-0">
        <span className={`text-[9px] font-black uppercase tracking-widest block mb-0.5 ${isActive ? 'text-[#F5A02E]' : 'text-gray-400'}`}>
          {video.tag} · {video.duration}
        </span>
        <p className="text-sm font-black text-[#0B2A3C] leading-tight">{video.title}</p>
        <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{video.subtitle}</p>
      </div>
    </div>
  </button>
);

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = videos[activeVideo];

  return (
    <section className="py-24 bg-[#0B2A3C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E86B8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5A02E]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-[#F5A02E] font-black uppercase tracking-[0.25em] text-xs mb-4 block">
              See It In Action
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Product <span className="text-[#2E86B8]">Demonstrations</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group">
              {playing ? (
                <iframe
                  key={current.youtubeId}
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${current.youtubeId}/maxresdefault.jpg`}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/products/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#0B2A3C]/50" />

                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#F5A02E] flex items-center justify-center shadow-2xl shadow-[#F5A02E]/40 group-hover/play:scale-110 transition-transform duration-300">
                      <Play size={28} fill="white" className="text-white translate-x-1" />
                    </div>
                  </button>

                  {/* Video info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-[#F5A02E] text-[#0B2A3C] px-3 py-1 rounded-full mb-2">
                      {current.tag} · {current.duration}
                    </span>
                    <h3 className="font-heading text-xl font-black text-white">{current.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{current.subtitle}</p>
                  </div>
                </>
              )}
            </div>

            {/* Highlights strip */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#F5A02E] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-400 font-medium">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">More Videos</p>
            {videos.map((v, i) => (
              <VideoCard
                key={v.id}
                video={v}
                isActive={activeVideo === i}
                onClick={() => { setActiveVideo(i); setPlaying(false); }}
              />
            ))}

            <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white font-bold mb-1">Want a live demonstration?</p>
              <p className="text-xs text-gray-400 mb-4">Our engineers can visit your facility and demonstrate the right solution for your application.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#F5A02E] text-xs font-black uppercase tracking-widest hover:gap-3 transition-all group"
              >
                Request a Demo Visit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
