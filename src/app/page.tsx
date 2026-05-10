import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DoctorProfile from "./components/DoctorProfile";
import Services from "./components/Services";
import Verification from "./components/Verification";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <DoctorProfile />
      <Services />
      <Gallery />
      <Verification />
      <Footer />
    </main>
  );
}
