"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpandingImage() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div
        ref={containerRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            scale,
            width: "70%",
            height: "70%",
          }}
        >
          {isMounted && (
            <Image
              src="/anarc65.jpeg"
              alt="Anarc Watch"
              fill
              sizes="100vw"
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          )}
        </motion.div>
      </div>
      
    </div>
  );
}
