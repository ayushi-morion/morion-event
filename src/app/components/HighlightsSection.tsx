import { motion } from "motion/react";

const highlights = [
  {
    icon: "◈",
    title: "Curated Crowd of Serious Professionals",
    desc: "Connect with vetted founders, executives, and growth leaders who mean business. No filler — pure value.",
  },
  {
    icon: "◈",
    title: "High-Value Networking",
    desc: "Structured and unstructured opportunities designed to create genuine, lasting business relationships.",
  },
  {
    icon: "◈",
    title: "Collaborations, Clients & Partnerships",
    desc: "Walk away with real leads, potential partners, and collaborators aligned with your growth goals.",
  },
  {
    icon: "◈",
    title: "Premium Food & Refreshments",
    desc: "Enjoy a curated spread of gourmet food and beverages throughout the evening.",
  },
  {
    icon: "◈",
    title: "Meaningful Conversations",
    desc: "In an intimate, premium setting designed to spark depth over small talk.",
  },
  {
    icon: "◈",
    title: "Exclusive Insights & Thought Leadership",
    desc: "Brief keynote moments and perspectives shared by industry leaders in the room.",
  },
];

export function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: "#060d1f" }}
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(20,30,100,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,107,0,0.2), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div style={{ width: 50, height: 1, background: "#FF6B00" }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#FF6B00",
              }}
            >
              WHAT TO EXPECT
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              lineHeight: 1,
              margin: 0,
            }}
          >
            LOOK FORWARD{" "}
            <span style={{ color: "#FF6B00" }}>TO</span>
          </h2>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                padding: "32px 28px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,107,0,0.3)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,107,0,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.025)";
              }}
            >
              {/* Top orange bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(to right, #FF6B00, transparent)",
                  opacity: 0.6,
                }}
              />
              <div className="flex items-start gap-4">
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28,
                    color: "#FF6B00",
                    lineHeight: 1,
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      margin: "0 0 10px 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
              {/* Item number */}
              <div
                className="absolute bottom-4 right-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: 56,
                  color: "rgba(255,107,0,0.05)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{
            background: "rgba(255,107,0,0.15)",
            border: "1px solid rgba(255,107,0,0.15)",
          }}
        >
          {[
            { value: "500+", label: "Professionals" },
            { value: "1 Night", label: "of Pure Networking" },
            { value: "100%", label: "Curated Crowd" },
            { value: "∞", label: "Opportunities" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ background: "#060d1f" }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: 32,
                  color: "#FF6B00",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.08em",
                  marginTop: 6,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
