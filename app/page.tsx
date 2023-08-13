import { Sidebar } from "./components/sidebar";
import { NavBar } from "./components/navbar";
import { Pricing } from "./components/pricing";
import { Carousel } from "./components/carousel";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import Contact from "./components/contacts";
import { Important } from "./components/important";
import { About } from "./components/about";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="z-[-10] w-auto min-w-full min-h-full max-w-none fixed object-contain md:block hidden"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-[-10] w-auto min-w-full min-h-full max-w-none fixed object-contain md:hidden bg-[url('/background.jpg')]"></div>
      <NavBar />
      <Sidebar />
      <main className=" mx-auto flex min-h-screen z-30 flex-col items-center justify-between md:pt-96 pb-24 no-scrollbar">
        <div className="w-full md:mt-96 md:px-16 px-6 bg-opacity-50 md:bg-gray-500">
          <About />
        </div>
        <Pricing />
        <Carousel />
        <Gallery />
      </main>
      <Important />
      <Contact />
      <Footer />
    </>
  );
}
