'use client';
import React, { useState, useEffect } from 'react';

// Hide scrollbar styles
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

interface VideoSection {
  id: string;
  name: string;
  videoUrl: string; // Placeholder for video URL
  products: string[];
  backgroundImage: string;
  color: string;
}

const videoSections: VideoSection[] = [
  {
    id: 'herbicydy',
    name: 'HERBICYDY',
    videoUrl: '/video/niebieski.mp4',
    products: [
      'Produkt1'
    ],
    backgroundImage: '/tloetykiety/niebieski.jpeg',
    color: '#03A9F4'
  },
  {
    id: 'fungicydy',
    name: 'FUNGICYDY',
    videoUrl: '/video/zielony.mp4',
    products: [
      'Produkt2'
    ],
    backgroundImage: '/tloetykiety/zielony.jpeg',
    color: '#10b981'
  },
  {
    id: 'insektycydy',
    name: 'INSEKTYCYDY',
    videoUrl: '/video/czerwony.mp4',
    products: [
      'Produkt3'
    ],
    backgroundImage: '/tloetykiety/czerowny.jpeg',
    color: '#EF4444'
  },
  {
    id: 'aduiwanty',
    name: 'ADIUWANTY',
    videoUrl: '/video/zolty.mp4',
    products: [
      'OLECON 84 EC', 'RICARION 95 EC', 'AGRILEON 96 EC', 'AGRICON MAX', 'AGRILEUS TURBO',
      'AGRILEUS POWER', 'Polimery silikonowe', 'Roztwór soli sodowej', 'Trójsiloksan 75%', 'Etoksylowany alkohol 90%',
      'Estry metylowe 82,5%', 'Trisiloksan modyfikowany', 'Adiuwant do upraw rolniczych', 'Koncentrat emulsyjny', 'Adiuwant do fungicydów miedziowych'
    ],
    backgroundImage: '/tloetykiety/zolty.jpeg',
    color: '#F59E0B'
  },
  {
    id: 'inne',
    name: 'INNE',
    videoUrl: '/video/fioletowy.mp4',
    products: [
      'Produkt4'
    ],
    backgroundImage: '/tloetykiety/fioletowy.jpeg',
    color: '#9333EA'
  }
];

export default function VideoWheel() {
  const [activeSection, setActiveSection] = useState(0); // Start with herbicydy
  const [targetRotation, setTargetRotation] = useState(0); // Target rotation angle
  const [isClient, setIsClient] = useState(false);
  const [videoTransition, setVideoTransition] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSectionClick = (index: number) => {
    if (index === activeSection) return;

    // Calculate rotation needed to bring clicked section to top
    const currentAngle = activeSection * 72;
    const targetAngle = index * 72;
    const rotationDiff = targetAngle - currentAngle;
    
    // Rotate the wheel
    setTargetRotation(prev => prev - rotationDiff);

    // Video transition effect
    setVideoTransition(true);
    setTimeout(() => {
      setActiveSection(index);
      setVideoTransition(false);
    }, 300);
  };

  // Helper function to get icon for each section
  const getIcon = (sectionId: string, size: number = 48) => {
    const strokeWidth = size === 48 ? "2" : "2";
    
    switch(sectionId) {
      case 'herbicydy':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
          </svg>
        );
      case 'fungicydy':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        );
      case 'insektycydy':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        );
      case 'aduiwanty':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        );
      case 'inne':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={strokeWidth}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
      <div className="relative h-screen overflow-hidden mt-5">
        {/* Hexagon Background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse z-0" style={{animationDelay: '1s'}}></div>

        {/* Full-screen Video Background */}
        <div className="absolute inset-0 z-0">
          {videoSections[activeSection].videoUrl ? (
            <video
              key={activeSection}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                videoTransition ? 'opacity-0' : 'opacity-100'
              }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSections[activeSection].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className={`w-full h-full bg-gray-800 flex items-center justify-center transition-opacity duration-300 ${
              videoTransition ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
                <p className="text-lg">Video will be added here</p>
                <p className="text-sm opacity-75">({videoSections[activeSection].name})</p>
              </div>
            </div>
          )}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-between px-16">
          {/* LEFT SIDE - 5 Rotating Circles */}
          <div className="relative w-[500px] h-[700px] flex items-center justify-center">
            {videoSections.map((section, index) => {
              const isActive = index === activeSection;
              // All circles rotate around the center - only on click
              const angle = (index * 72 + (isClient ? targetRotation : 0)) * Math.PI / 180; // 360/5 = 72 degrees
              const radius = 200; // Smaller radius: 280 -> 200
              const x = 250 + radius * Math.cos(angle);
              const y = 350 + radius * Math.sin(angle);

              return (
                <div key={section.id}>
                  {/* Circle and content wrapper - moves together with smooth animation */}
                  <div
                    className="absolute cursor-pointer"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: isActive ? 20 : 10,
                      transition: 'left 0.6s ease-in-out, top 0.6s ease-in-out'
                    }}
                    onClick={() => handleSectionClick(index)}
                  >
                    {/* Circle Background - bigger circles */}
                    <div
                      className={`rounded-full border-4 flex flex-col items-center justify-center ${
                        isActive ? 'w-48 h-48' : 'w-40 h-40'
                      }`}
                      style={{
                        backgroundColor: isActive ? section.color : '#6B7280',
                        borderColor: isActive ? '#fff' : '#9CA3AF',
                        boxShadow: isActive ? `0 0 40px ${section.color}80` : 'none',
                        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s, width 0.3s, height 0.3s'
                      }}
                    >
                      {/* Icon and Text - inside circle */}
                      <div className={isActive ? 'w-14 h-14 mb-2' : 'w-10 h-10 mb-1'}>
                        {getIcon(section.id, isActive ? 56 : 40)}
                      </div>
                      <div className={`font-bold text-center leading-tight text-white ${
                        isActive ? 'text-lg' : 'text-sm'
                      }`}>
                        {section.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - Products List */}
          <div className={`${videoSections[activeSection].products.length > 8 ? 'w-[680px]' : 'w-[340px]'} max-h-[85vh] overflow-y-auto scrollbar-hide pt-10 transition-all duration-300`}>
            <div className="bg-black/80 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/10">
              {/* Header */}
              <div className="mb-4 pb-3 border-b border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ 
                      backgroundColor: videoSections[activeSection].color,
                      boxShadow: `0 4px 20px ${videoSections[activeSection].color}40`
                    }}
                  >
                    {getIcon(videoSections[activeSection].id, 24)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {videoSections[activeSection].name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {videoSections[activeSection].products.length} {videoSections[activeSection].products.length === 1 ? 'produkt' : 'produktów'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className={`${videoSections[activeSection].products.length > 8 ? 'grid grid-cols-2 gap-2' : 'space-y-2'}`}>
                {videoSections[activeSection].products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group border border-transparent hover:border-white/20"
                    onClick={() => {
                      const productSlug = product.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                      window.location.href = `/produkty/${productSlug}`;
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white font-bold flex-shrink-0 shadow-md"
                      style={{
                        backgroundColor: videoSections[activeSection].color
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-white text-xs flex-1 font-medium">{product}</span>
                    <div 
                      className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                      style={{ color: videoSections[activeSection].color }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}