import { HeroSection } from "./components/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { EventDetailsSection } from "./components/EventDetailsSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060d1f",
        overflowX: "hidden",
      }}
    >
      <HeroSection onRegisterClick={scrollToRegister} />
      <HighlightsSection />
      <EventDetailsSection />
      <RegistrationSection />
      <SponsorsSection />
      <FooterSection />
    </div>
  );
}
