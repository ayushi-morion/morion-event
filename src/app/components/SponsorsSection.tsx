import { motion } from "motion/react";

const partners = [
  {
    name: "Apex Capital",
    abbr: "AC",
    tagline: "INVESTMENT PARTNERS",
  },
  {
    name: "Nexus Group",
    abbr: "NX",
    tagline: "STRATEGIC CONSULTING",
  },
  {
    name: "Vantage Corp",
    abbr: "VC",
    tagline: "GLOBAL VENTURES",
  },
  {
    name: "Meridian Co.",
    abbr: "MC",
    tagline: "ENTERPRISE SOLUTIONS",
  },
  {
    name: "Orion Labs",
    abbr: "OL",
    tagline: "INNOVATION STUDIO",
  },
  {
    name: "Summit Holdings",
    abbr: "SH",
    tagline: "PRIVATE EQUITY",
  },
];

function LogoPlaceholder({ name, abbr, tagline }: { name: string; abbr: string; tagline: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 py-8 px-6 transition-all duration-300 group"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "2px",
        cursor: "default",
        minHeight: 100,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,107,0,0.2)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,107,0,0.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.background = "transparent";
      }}
    >
      {/* Monochrome wordmark style */}
      <div className="flex items-baseline gap-1.5">
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: "0.05em",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1,
          }}
        >
          {abbr}
        </span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.2)",
            lineHeight: 1,
          }}
        >
          {name.split(" ")[1] || ""}
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 8,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.15)",
          fontWeight: 600,
        }}
      >
        {tagline}
      </span>
    </div>
  );
}

export function SponsorsSection() {
  return (
    <section
      className="relative py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060d1f 0%, #070e22 100%)",
      }}
    >
      {/* Top divider line */}
      <div
        className="absolute top-0 left-20 right-20 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(20,30,100,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ width: 50, height: 1, background: "rgba(255,107,0,0.4)" }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#FF6B00",
              }}
            >
              OUR ECOSYSTEM
            </span>
            <div style={{ width: 50, height: 1, background: "rgba(255,107,0,0.4)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              lineHeight: 1,
              margin: 0,
            }}
          >
            BRANDS WE{" "}
            <span style={{ color: "#FF6B00" }}>DEAL WITH</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.35)",
              marginTop: 14,
              letterSpacing: "0.03em",
            }}
          >
            A curated network of serious companies and investors.
          </p>
        </motion.div>

        {/* Partner logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ background: "#060d1f" }}
            >
              <LogoPlaceholder {...partner} />
            </motion.div>
          ))}
        </motion.div>

        {/* Descriptor note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div style={{ width: 24, height: 1, background: "rgba(255,107,0,0.3)" }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.15em",
            }}
          >
            AND MANY MORE JOINING THE NETWORK
          </span>
          <div style={{ width: 24, height: 1, background: "rgba(255,107,0,0.3)" }} />
        </motion.div>
      </div>
    </section>
  );
}
