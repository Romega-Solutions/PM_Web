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
    <div className="min-h-screen bg-[#170f22] font-dm-sans-regular">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Header Component */}
      <Header />

      <main id="main-content" tabIndex={-1}>
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
      <Footer />
    </div>
  );
}

export default App;
