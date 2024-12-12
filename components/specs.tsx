"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Spec {
  title: string;
  description: string;
  media: string; // Common field for both image and video
  type: "image" | "video"; // To differentiate between image and video
}

const specs: Spec[] = [
  {
    title: "Material and Finish",
    description:
      "Crafted with a robust industrial-grade stainless steel case and featuring a vibrant AMOLED display, this design ensures durability, elegance, and a stunning visual experience for your device.",
    media: "/anarc52.png",
    type: "image",
  },
  {
    title: "Size and Weight",
    description:
      "The watch dimensions are 4.39 cm in length, 3.99 cm in width, and 1.12 cm in thickness, offering a compact yet stylish design suitable for everyday wear.",
    media: "/anarc53.png",
    type: "image",
  },
  {
    title: "Chipset and Battery",
    description:
      "Equipped with a powerful Hisilicon chipset for seamless performance and a 350mAh battery for extended usage, this watch combines efficiency and durability in a sleek, modern package.",
    media: "/anarc35.png",
    type: "image",
  },
  {
    title: "Sensor",
    description:
      "Equipped with advanced sensors, including a 6-axis accelerometer, gyroscope, heart rate sensor, and SpO2 sensor, ensuring comprehensive health monitoring and precise activity tracking for your convenience.",
    media: "/anarc42.png",
    type: "image",
  },
  {
    title: "Health and Wellness",
    description:
      "Offers comprehensive health and wellness features, including heart rate monitoring, SpO2 measurement, sleep tracking, stress management, guided breathing exercises, and integration with the Layers Watch App for a personalized experience.",
    media: "/anarc50.png",
    type: "image",
  },
  {
    title: "Display",
    description:
      "Features a stunning 1.85-inch AMOLED display with a smooth 60Hz refresh rate and 700 nits of peak brightness, ensuring vibrant visuals and excellent readability in any lighting condition. IP68 water and dust resistance.",
    media: "/video4.webm",
    type: "video",
  },
  {
    title: "Audio",
    description:
      "Bluetooth 5.2 calling with noise cancellation for clear communication and seamless TWS connectivity, enhancing your experience with high-quality audio and convenient hands-free functionality.",
    media: "/anarc48.png",
    type: "image",
  },
  {
    title: "Compatibility",
    description:
      "Compatible with devices running iOS 13.0 or above and Android 9.0 or above, ensuring broad compatibility with most modern smartphones for a seamless user experience.",
    media: "/anarc90.jpeg",
    type: "image",
  },
];

export default function Specs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const debounce = (callback: () => void, delay: number) => {
      let timer: NodeJS.Timeout;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(), delay);
      };
    };

    const handleIntersection = debounce(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(Number(entry.target.id));
            }
          });
        },
        {
          threshold: window.innerWidth < 768 ? 0.8 : 0.5,
        }
      );

      const currentRefs = sectionRefs.current;
      currentRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        currentRefs.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
        observer.disconnect();
      };
    }, 100);

    handleIntersection();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Media Section */}
      <div className="w-full lg:w-1/2 sticky top-0 h-[50vh] lg:h-screen flex items-center justify-center p-4 overflow-hidden bg-gray-100 lg:bg-transparent">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={activeIndex !== index}
          >
            {spec.type === "image" ? (
              <Image
                src={spec.media}
                alt={spec.title}
                width={800}
                height={800}
                className="w-full h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain rounded-3xl"
              />
            ) : (
              <video
                src={spec.media}
                controls={false}
                autoPlay={true}
                loop
                muted
                className="w-full h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain rounded-3xl"
              />
            )}
          </div>
        ))}
      </div>
      {/* Content Section */}
      <div className="w-full lg:w-1/2 p-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            id={index.toString()}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              {spec.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              {spec.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
