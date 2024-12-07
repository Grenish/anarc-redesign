import DifferentSection from "@/components/different-section";
import DressCode from "@/components/dress-code";
import GetToKnow from "@/components/get-to-know";
import HeroSection from "@/components/hero-section";
import InTheBox from "@/components/in-the-box";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import Specs from "@/components/specs";
import WatchFaces from "@/components/watch-faces";
import WatchSection from "@/components/watch-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WatchSection />
      <GetToKnow />
      <DifferentSection />
      <DressCode />
      <WatchFaces />
      <Specs />
      <InTheBox />
      <Review />
    </main>
  );
}
