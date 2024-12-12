import BoxSection from "@/components/box-section";
import BuyNow from "@/components/buy-now";
import DifferentSection from "@/components/different-section";
import DressCode from "@/components/dress-code";
import Footer from "@/components/footer";
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
      <section id="overview">
        <HeroSection />
        <WatchSection />
        <GetToKnow />
        <DifferentSection />
        <DressCode />
        <WatchFaces />
      </section>
      <section id="specs">
        <Specs />
      </section>
      <section id="box">
        <InTheBox />
        <BoxSection />
      </section>
      <section id="review">
        <Review />
      </section>
      <BuyNow />
      <Footer />
    </main>
  );
}
