import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Faqs from "./components/sections/Faqs";
import Download from "./components/sections/Download";
import Footer from "./components/sections/Footer";
import Membership from "./components/sections/Membership";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#120a1b] font-dm-sans-regular">
      <div className="pm-ambient-stage" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Header Component */}
      <Header />

      <main id="main-content" tabIndex={-1} className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Trust Section */}
        <About />

        {/* Features Section */}
        <Features />

        {/* Membership Interest */}
        <Membership />

        {/* FAQ Section */}
        <Faqs />

        {/* Waitlist Section */}
        <Download />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
