import { motion } from "motion/react";

export function EventDetailsSection() {
  return (
    <section
      id="schedule"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060d1f 0%, #080f26 50%, #060d1f 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255,107,0,0.02) 0px,
            rgba(255,107,0,0.02) 1px,
            transparent 1px,
            transparent 80px
          ), repeating-linear-gradient(
            0deg,
            rgba(255,107,0,0.02) 0px,
            rgba(255,107,0,0.02) 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ width: 40, height: 1, background: "#FF6B00" }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#FF6B00",
              }}
            >
              EVENT DETAILS
            </span>
            <div style={{ width: 40, height: 1, background: "#FF6B00" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 60px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              lineHeight: 1,
              margin: 0,
            }}
          >
            DATE, TIME &{" "}
            <span style={{ color: "#FF6B00" }}>LOCATION</span>
          </h2>
        </motion.div>

        {/* Info cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "DATE",
              value: "29 APR",
              sub: "Wednesday, 2026",
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="17" rx="2" stroke="#FF6B00" strokeWidth="1.5" />
                  <path d="M8 2v4M16 2v4M3 9h18" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="7" y="13" width="2" height="2" rx="0.5" fill="#FF6B00" />
                  <rect x="11" y="13" width="2" height="2" rx="0.5" fill="#FF6B00" />
                  <rect x="15" y="13" width="2" height="2" rx="0.5" fill="#FF6B00" />
                </svg>
              ),
            },
            {
              label: "TIME",
              value: "7:30 PM",
              sub: "Until 11:30 PM",
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="#FF6B00" strokeWidth="1.5" />
                  <path d="M12 7v5l3 3" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              label: "VENUE",
              value: "BKC, Mumbai",
              sub: "True Tramm Trunk, Bandra East",
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="#FF6B00" strokeWidth="1.5" />
                  <circle cx="12" cy="8" r="2" stroke="#FF6B00" strokeWidth="1.5" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2px",
                padding: "36px 32px",
              }}
            >
              {/* Left orange accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "#FF6B00" }}
              />
              <div className="mb-4">{card.icon}</div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  color: "#FF6B00",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: 36,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {card.value}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {card.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full address card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden"
          style={{
            background: "rgba(255,107,0,0.04)",
            border: "1px solid rgba(255,107,0,0.2)",
            borderRadius: "2px",
            padding: "32px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  color: "#FF6B00",
                  fontWeight: 600,
                }}
              >
                FULL ADDRESS
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 26px)",
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                }}
              >
                True Tramm Trunk BKC
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Bandra East, Mumbai, Maharashtra 400098
              </span>
            </div>

            {/* Timeline / event flow */}
            <div className="flex items-center gap-4 flex-wrap">
              {[
                { time: "7:30 PM", label: "Doors Open" },
                { time: "8:00 PM", label: "Networking Begins" },
                { time: "9:30 PM", label: "Keynote Moments" },
                { time: "11:30 PM", label: "Event Closes" },
              ].map((slot, i, arr) => (
                <div key={slot.time} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        color: "#FF6B00",
                      }}
                    >
                      {slot.time}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.06em",
                        marginTop: 2,
                      }}
                    >
                      {slot.label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: 24,
                        height: 1,
                        background: "rgba(255,107,0,0.3)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
