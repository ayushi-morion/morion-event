import { motion } from "motion/react";
import { WireframeGlobe } from "./WireframeGlobe";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

function CountdownTimer() {
  const eventDate = new Date("2026-04-29T19:30:00+05:30");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4 md:gap-6">
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div
            className="text-white rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(255,107,0,0.12)",
              border: "1px solid rgba(255,107,0,0.25)",
              width: "64px",
              height: "60px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {String(value).padStart(2, "0")}
          </div>
          <div
            className="text-center mt-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [globeSize, setGlobeSize] = useState(480);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setGlobeSize(280);
      else if (window.innerWidth < 1024) setGlobeSize(360);
      else setGlobeSize(480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#060d1f" }}
    >
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" style={{ height: 36 }} />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Schedule", "Register"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onRegisterClick}
          className="hidden md:block transition-all"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.12em",
            color: "#fff",
            background: "rgba(255,107,0,0.15)",
            border: "1px solid rgba(255,107,0,0.5)",
            borderRadius: "4px",
            padding: "8px 20px",
            cursor: "pointer",
          }}
        >
          REGISTER NOW
        </button>
      </nav>

      {/* Hero Content (unchanged) */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 pb-12 pt-8 gap-8">
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[55%]">
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(44px, 7vw, 88px)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            BUSINESS <br />
            <span style={{ color: "#FF6B00" }}>NETWORKING</span> <br />
            NIGHT <span style={{ WebkitTextStroke: "2px #FF6B00", color: "transparent" }}>2026</span>
          </h1>

          <CountdownTimer />

          <div className="flex gap-4">
            <button
              onClick={onRegisterClick}
              style={{
                background: "#FF6B00",
                color: "#fff",
                padding: "16px 40px",
                borderRadius: 4,
                border: "none",
              }}
            >
              REGISTER NOW
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("highlights");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "16px 32px",
                color: "#fff",
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <WireframeGlobe size={globeSize} />
        </div>
      </div>
    </section>
  );
}