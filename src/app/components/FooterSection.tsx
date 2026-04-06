import { motion } from "motion/react";

export function FooterSection() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#04091a" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,107,0,0.35), rgba(255,107,0,0.35), transparent)",
        }}
      />

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,107,0,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Upper footer */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded"
                style={{
                  width: 38,
                  height: 38,
                  background: "#FF6B00",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  M
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "0.2em",
                  color: "#fff",
                }}
              >
                MORION
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Building a premium ecosystem of business leaders, founders, and growth professionals in India.
            </p>

            {/* Social row */}
            <div className="flex gap-3 mt-1">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/morion-automation/",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 11v6M8 8v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 17v-4a2 2 0 0 1 4 0v4M12 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/morion.automation",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all"
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "3px",
                    background: "transparent",
                    color: "rgba(255,255,255,0.35)",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,107,0,0.4)";
                    e.currentTarget.style.color = "#FF6B00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Event col */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#FF6B00",
                marginBottom: 16,
              }}
            >
              THE EVENT
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "About the Event", href: "#highlights" },
                { label: "Event Schedule", href: "#schedule" },
                { label: "Location & Venue", href: "#schedule" },
                { label: "Register Now", href: "#register" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#FF6B00",
                marginBottom: 16,
              }}
            >
              CONTACT & SUPPORT
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                  }}
                >
                  EMAIL US
                </div>
                <a
                  href="mailto:hello@morion.in"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  hello@morion.in
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                  }}
                >
                  SUPPORT
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.6,
                  }}
                >
                  For queries, collaborations, or sponsorship opportunities, reach out to our team.
                </span>
              </div>

              {/* Event date reminder */}
              <div
                className="flex items-center gap-3 mt-1"
                style={{
                  background: "rgba(255,107,0,0.06)",
                  border: "1px solid rgba(255,107,0,0.15)",
                  borderRadius: "2px",
                  padding: "12px 14px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="17" rx="2" stroke="#FF6B00" strokeWidth="1.5" />
                  <path d="M8 2v4M16 2v4M3 9h18" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  29 April 2026 · 7:30 PM IST · BKC Mumbai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.08em",
            }}
          >
            © 2026 Morion. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <div style={{ width: 20, height: 1, background: "rgba(255,107,0,0.3)" }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "0.12em",
              }}
            >
              BUSINESS NETWORKING NIGHT 2026
            </span>
            <div style={{ width: 20, height: 1, background: "rgba(255,107,0,0.3)" }} />
          </div>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}