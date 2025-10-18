import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Ecosystem from "./components/Ecosystem";
import HowItWorks from "./components/HowItWorks";
import WhyDifferent from "./components/WhyDifferent";
import Results from "./components/Results";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Problem />
        <Solution />
        <Ecosystem />
        <HowItWorks />
        <WhyDifferent />
        <Results />
        <Community />
      </main>
      <Footer />
    </div>
  );
}