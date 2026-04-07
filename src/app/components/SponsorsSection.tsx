import { motion } from "motion/react";

const partners = [
  {
    name: "KNX",
    logo: "/KNX_Logo.png",
  },
  {
    name: "MDT",
    logo: "/MDT_Logo.png",
  },
  {
    name: "Trivum",
    logo: "/Trivum_Logo.png",
  },
  {
    name: "Earthquake",
    logo: "/Earthquake-logo.png",
  },
  {
    name: "Fasttel",
    logo: "/Fasttel_logo.png",
  },
  {
    name: "Discipline",
    logo: "/DISCIPLINE-LOGO.png",
  },
  {
    name: "Blauberg",
    logo: "/blauberg-logo-white.png",
  },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="relative flex items-center justify-center px-6 py-7 group"
      style={{
        minHeight: 108,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,107,0,0.12) 0%, rgba(255,107,0,0.04) 35%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,107,0,0.18)",
          borderRadius: "16px",
        }}
      />

      <img
        src={logo}
        alt={name}
        className="relative z-10 h-8 w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
      />
    </motion.div>
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
      <div
        className="absolute top-0 left-20 right-20 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(20,30,100,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            BRANDS WE <span style={{ color: "#FF6B00" }}>DEAL WITH</span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <LogoCard {...partner} />
            </motion.div>
          ))}
        </motion.div>

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