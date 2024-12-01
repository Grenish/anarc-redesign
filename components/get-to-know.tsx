"use client";

import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function GetToKnow() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800">
        Get to know your Anarc
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const MotionContent = () => {
  const contentData = [
    {
      title: "Real-Time Performance Tracking",
      description:
        "Track your fitness journey with precision. Monitor your heart rate in real-time, track calories burned, measure distance, and stay informed about your current workout zone, all displayed in an intuitive, easy-to-read interface. Designed for efficiency, this smart companion keeps you focused and motivated with every step, ride, or run.",
      imageSrc: "/anarc42.png",
    },
    {
      title: "Customizable Workout Modes",
      description:
        "Switch effortlessly between activities with our versatile workout selector. Whether you're walking, running, cycling, or swimming, customize your training to fit your goals. The streamlined design ensures a seamless user experience, letting you focus on your fitness without interruptions.",
      imageSrc: "/anarc43.png",
    },
    {
      title: "Goal-Oriented Fitness",
      description:
        "Stay motivated by setting your fitness goals with ease. Whether it's a specific distance or a set duration, this feature allows you to tailor your workouts to meet personal milestones. Progress tracking has never been this simple, ensuring you achieve every goal you set.",
      imageSrc: "/anarc44.png",
    },
  ];

  return (
    <>
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h2 className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 md:text-2xl font-sans max-w-3xl mx-auto">
            {content.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-5"
          />
        </div>
      ))}
    </>
  );
};

const BatteryContent = () => {
  const contentData = [
    {
      title: "Battery That Matches Your Pace",
      description:
        "Enjoy extended usage with our advanced battery technology, designed to keep you going all day and beyond. Whether you're tracking workouts, staying connected, or managing daily tasks, this feature ensures reliable performance without frequent recharges. Focus on what matters, and let the power last as long as you do.",
      imageSrc: "/anarc38.png",
    },
    {
      title: "Endless Beats, Non-Stop Energy",
      description:
        "Immerse yourself in up to 17 hours* of continuous music playback on a single charge. With our advanced 350 mAh battery, enjoy your favorite tunes all day without missing a beat. Perfect for workouts, commutes, or relaxing vibes, this smartwatch powers your rhythm while keeping you connected to everything else. Stay energized, stay in sync, and let the music play!",
      imageSrc: "/anarc47.png",
    },
    {
      title: "Crystal-Clear Calls, All Day Long",
      description:
        "Stay connected with up to 15 hours* of uninterrupted calling on a single charge. Equipped with advanced environmental noise cancellation (ENC), every conversation is crystal-clear, even in the busiest environments. Whether you're catching up with loved ones or taking business calls on the go, this smartwatch ensures you're heard loud and clear, all while delivering unbeatable battery life and comfort.",
      imageSrc: "/anarc48.png",
    },
  ];
  return (
    <>
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h2 className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 md:text-2xl font-sans max-w-3xl mx-auto">
            {content.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-5"
          />
        </div>
      ))}
    </>
  );
};

const BrightnessContent = () => {
  const contentData = [
    {
      title: "Shine Bright Anywhere",
      description:
        "Experience unmatched clarity with a stunning 700 nits of display brightness that keeps your screen vivid and readable, even under direct sunlight. Whether you're tracking workouts outdoors or navigating on the go, enjoy crystal-clear visuals in any environment. Designed to enhance your viewing experience, this smartwatch ensures every detail shines bright, wherever life takes you.",
      imageSrc: "/anarc88.png",
    },
    {
      title: "Seamless Smoothness in Every Swipe",
      description:
        "Enjoy a buttery-smooth experience with a 60Hz refresh rate that makes every swipe, scroll, and interaction effortlessly fluid. Whether you're navigating menus, tracking workouts, or checking notifications, the high refresh rate ensures responsiveness and precision. Elevate your smartwatch experience with visuals that move as fast as you do.",
      imageSrc: "/anarc87.png",
    }
  ];
  return (
    <>
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h2 className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 md:text-2xl font-sans max-w-3xl mx-auto">
            {content.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-5"
          />
        </div>
      ))}
    </>
  );
};

const ChipsetContent = () => {
  const contentData = [
    {
      title: "Unleash the Power Within",
      description:
        "Experience performance like never before with our cutting-edge chipset delivering 2x faster speeds and seamless multitasking. Powered by a 2.5D GPU, enjoy lightning-fast responsiveness, stunning graphics, and rock-solid connectivity wherever you go. Say goodbye to lags and hello to unparalleled power, designed to keep up with your every move. Get ready to elevate your smartwatch experience to the next level!",
      imageSrc: "/anarc35.png",
    },
    {
      title: "Powered by HiSilicon: Performance Redefined",
      description:
        "Experience the brilliance of the HiSilicon chipset, engineered for unmatched speed, efficiency, and power. Enjoy seamless multitasking, rapid response times, and ultra-smooth performance tailored to keep up with your pace. Designed for innovation, this chipset ensures your smartwatch is smarter, faster, and more reliable—taking your everyday tech experience to a whole new level.",
      imageSrc: "/anarc34.png",
    }
  ];
  return (
    <>
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h2 className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 md:text-2xl font-sans max-w-3xl mx-auto">
            {content.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-5"
          />
        </div>
      ))}
    </>
  );
};

const StainlessContent = () => {
  const contentData = [
    {
      title: "Timeless Elegance in Stainless Steel",
      description:
        "Crafted with precision, the stainless steel design brings a sleek, premium look to your wrist while offering unmatched durability. Combining style and substance, this smartwatch is built to withstand your daily adventures while complementing any outfit—be it casual or formal. Elevate your fashion game with a timepiece that's as strong as it is stunning.",
      imageSrc: "/anarc85.png",
    }
  ];
  return (
    <>
      {contentData.map((content, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <h2 className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 md:text-2xl font-sans max-w-3xl mx-auto">
            {content.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {content.description}
          </p>
          <Image
            src={content.imageSrc}
            alt={content.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-5"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Precision in Motion",
    title: "Track every move with a 6-axis motion sensor.",
    src: "/anarc86.jpeg",
    content: <MotionContent />,
  },
  {
    category: "Power That Lasts",
    title: "7 days of non-stop energy with a 350 mAh battery.",
    src: "/anarc37.jpeg",
    content: <BatteryContent />,
  },
  {
    category: "Brilliance Anywhere",
    title: "A vivid 700 nits display with 60Hz refresh rate.",
    src: "/anarc41.jpeg",
    content: <BrightnessContent />,
  },

  {
    category: "Performance Redefined",
    title: "Effortless transitions with a flagship chipset.",
    src: "/anarc60.jpeg",
    content: <ChipsetContent />,
  },
  {
    category: "Built to Impress",
    title: "Stainless steel design with a tactile haptic crown.",
    src: "/anarc78.jpeg",
    content: <StainlessContent />,
  },
];
