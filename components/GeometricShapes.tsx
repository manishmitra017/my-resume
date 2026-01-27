"use client";

import { motion } from "framer-motion";

interface ShapeProps {
  size: number;
  color: "teal" | "coral" | "navy" | "golden";
  type: "quarter-tl" | "quarter-tr" | "quarter-bl" | "quarter-br" | "semi-t" | "semi-b" | "semi-l" | "semi-r";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay?: number;
  animate?: boolean;
  hideOnMobile?: boolean;
}

const colorMap = {
  teal: "bg-teal-400",
  coral: "bg-coral-400",
  navy: "bg-navy-500",
  golden: "bg-golden-400",
};

const radiusMap = {
  "quarter-tl": "rounded-tl-full",
  "quarter-tr": "rounded-tr-full",
  "quarter-bl": "rounded-bl-full",
  "quarter-br": "rounded-br-full",
  "semi-t": "rounded-t-full",
  "semi-b": "rounded-b-full",
  "semi-l": "rounded-l-full",
  "semi-r": "rounded-r-full",
};

const Shape = ({ size, color, type, top, bottom, left, right, delay = 0, animate = false, hideOnMobile = false }: ShapeProps) => {
  const style: React.CSSProperties = {
    width: size,
    height: type.startsWith("semi") ? size / 2 : size,
    top,
    bottom,
    left,
    right,
  };

  // For semi circles, adjust height
  if (type === "semi-l" || type === "semi-r") {
    style.height = size;
    style.width = size / 2;
  }

  const mobileClass = hideOnMobile ? "hidden md:block" : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute pointer-events-none ${colorMap[color]} ${radiusMap[type]} ${animate ? "animate-float-slow" : ""} ${mobileClass}`}
      style={style}
    />
  );
};

const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left - Large coral quarter circle (partially off-screen like reference) */}
      <Shape
        size={180}
        color="coral"
        type="quarter-br"
        top="-40px"
        left="-40px"
        delay={0.1}
      />

      {/* Top Left - Small navy quarter */}
      <Shape
        size={80}
        color="navy"
        type="quarter-br"
        top="180px"
        left="60px"
        delay={0.3}
        animate
        hideOnMobile
      />

      {/* Top Right Cluster - Main shapes like reference */}
      {/* Large teal quarter */}
      <Shape
        size={120}
        color="teal"
        type="quarter-bl"
        top="40px"
        right="280px"
        delay={0.2}
        hideOnMobile
      />

      {/* Coral + Golden combo (stacked like reference) */}
      <Shape
        size={100}
        color="coral"
        type="quarter-bl"
        top="80px"
        right="120px"
        delay={0.25}
        hideOnMobile
      />
      <Shape
        size={100}
        color="golden"
        type="quarter-tl"
        top="180px"
        right="120px"
        delay={0.3}
        hideOnMobile
      />

      {/* Navy + Teal combo */}
      <Shape
        size={80}
        color="navy"
        type="quarter-br"
        top="60px"
        right="40px"
        delay={0.35}
        hideOnMobile
      />
      <Shape
        size={80}
        color="teal"
        type="quarter-tl"
        top="140px"
        right="40px"
        delay={0.4}
        hideOnMobile
      />

      {/* Golden accent near cluster */}
      <Shape
        size={60}
        color="golden"
        type="quarter-bl"
        top="180px"
        right="240px"
        delay={0.45}
        animate
        hideOnMobile
      />

      {/* Mid-right area */}
      <Shape
        size={100}
        color="coral"
        type="quarter-tl"
        top="380px"
        right="60px"
        delay={0.5}
        hideOnMobile
      />
      <Shape
        size={100}
        color="navy"
        type="quarter-br"
        top="280px"
        right="60px"
        delay={0.55}
        hideOnMobile
      />

      {/* Teal accent mid-right */}
      <Shape
        size={70}
        color="teal"
        type="quarter-bl"
        top="450px"
        right="180px"
        delay={0.6}
        animate
        hideOnMobile
      />

      {/* Lower right scattered */}
      <Shape
        size={60}
        color="golden"
        type="quarter-tr"
        bottom="200px"
        right="100px"
        delay={0.65}
        hideOnMobile
      />
      <Shape
        size={50}
        color="teal"
        type="quarter-bl"
        bottom="120px"
        right="200px"
        delay={0.7}
        animate
        hideOnMobile
      />

      {/* Bottom right corner - small shapes trailing off */}
      <Shape
        size={80}
        color="navy"
        type="quarter-tl"
        bottom="40px"
        right="40px"
        delay={0.75}
        hideOnMobile
      />
      <Shape
        size={40}
        color="coral"
        type="quarter-br"
        bottom="80px"
        right="140px"
        delay={0.8}
        hideOnMobile
      />
    </div>
  );
};

export default GeometricShapes;
