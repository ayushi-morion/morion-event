import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";

interface FormData {
  fullName: string;
  company: string;
  email: string;
  attendees: string;
}

function SuccessCard({ data, onBack }: { data: FormData; onBack: () => void }) {
  const eventDate = "20260429T193000";
  const eventEnd = "20260429T233000";
  const eventTitle = encodeURIComponent("Business Networking Night 2026 – Morion");
  const eventLocation = encodeURIComponent("True Tramm Trunk BKC, Bandra East, Mumbai, Maharashtra 400098");
  const eventDetails = encodeURIComponent("Join us for an exclusive evening of premium business networking. Curated crowd of serious professionals, founders, and growth leaders.");

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate}/${eventEnd}&details=${eventDetails}&location=${eventLocation}`;

  const outlookUrl = `https://outlook.live.com/calendar/0/action/compose?startdt=2026-04-29T19:30:00&enddt=2026-04-29T23:30:00&subject=${eventTitle}&location=${eventLocation}&body=${eventDetails}`;

  const icsContent = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nDTSTART:20260429T190000Z\r\nDTEND:20260429T230000Z\r\nSUMMARY:Business Networking Night 2026 – Morion\r\nLOCATION:True Tramm Trunk BKC, Bandra East, Mumbai, Maharashtra 400098\r\nDESCRIPTION:Join us for an exclusive evening of premium business networking.\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  const downloadICS = () => {
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "morion-networking-night-2026.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
      style={{
        background: "rgba(6,13,31,0.92)",
        border: "1px solid rgba(255,107,0,0.25)",
        borderRadius: "4px",
        padding: "48px 40px",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #FF6B00, rgba(255,107,0,0.4), transparent)",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid #FF6B00", borderLeft: "2px solid #FF6B00" }} />
      <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: "2px solid #FF6B00", borderRight: "2px solid #FF6B00" }} />
      <div className="absolute bottom-0 left-0 w-8 h-8" style={{ borderBottom: "2px solid rgba(255,107,0,0.4)", borderLeft: "2px solid rgba(255,107,0,0.4)" }} />
      <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: "2px solid rgba(255,107,0,0.4)", borderRight: "2px solid rgba(255,107,0,0.4)" }} />

      {/* Success icon */}
      <div className="flex flex-col items-center text-center mb-10">
        <div
          className="relative flex items-center justify-center mb-6"
          style={{ width: 80, height: 80 }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(255,107,0,0.3)",
              background: "rgba(255,107,0,0.06)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid rgba(255,107,0,0.15)",
              transform: "scale(1.3)",
            }}
          />
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M8 18l7 7 13-14"
              stroke="#FF6B00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.3em",
            color: "#FF6B00",
            marginBottom: 12,
          }}
        >
          REGISTRATION CONFIRMED
        </div>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(22px, 4vw, 32px)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "#ffffff",
            lineHeight: 1.1,
            margin: "0 0 12px 0",
          }}
        >
          Thank you, your registration
          <br />has been received
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
            maxWidth: 400,
          }}
        >
          We're looking forward to seeing you at Business Networking Night 2026.
          A confirmation will be sent to your email shortly.
        </p>
      </div>

      {/* Event summary card */}
      <div
        className="mb-8"
        style={{
          background: "rgba(255,107,0,0.05)",
          border: "1px solid rgba(255,107,0,0.18)",
          borderRadius: "2px",
          padding: "24px 28px",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "#FF6B00",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          YOUR BOOKING SUMMARY
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Name", value: data.fullName },
            { label: "Company", value: data.company },
            { label: "Email", value: data.email },
            { label: "Attendees", value: `${data.attendees} person${parseInt(data.attendees) > 1 ? "s" : ""}` },
            { label: "Event", value: "Business Networking Night 2026" },
            { label: "Date", value: "29 April 2026 · 7:30 PM – 11:30 PM" },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 4,
                }}
              >
                {item.label.toUpperCase()}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 500,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar buttons */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 10,
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.35)",
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        ADD TO YOUR CALENDAR
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {[
          {
            label: "Google Calendar",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 2v4M16 2v4M3 9h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
            action: () => window.open(googleCalUrl, "_blank"),
            primary: true,
          },
          {
            label: "Outlook Calendar",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 8l6-4v16l-6-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="9" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ),
            action: () => window.open(outlookUrl, "_blank"),
          },
          {
            label: "Download ICS",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v13M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
            action: downloadICS,
          },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.action}
            className="flex items-center justify-center gap-2 flex-1 transition-all"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.08em",
              color: btn.primary ? "#fff" : "rgba(255,255,255,0.7)",
              background: btn.primary ? "#FF6B00" : "rgba(255,255,255,0.04)",
              border: btn.primary ? "1px solid #FF6B00" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: "3px",
              padding: "12px 16px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              if (btn.primary) {
                e.currentTarget.style.background = "#e55e00";
              } else {
                e.currentTarget.style.borderColor = "rgba(255,107,0,0.4)";
                e.currentTarget.style.color = "#FF6B00";
              }
            }}
            onMouseLeave={(e) => {
              if (btn.primary) {
                e.currentTarget.style.background = "#FF6B00";
              } else {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }
            }}
          >
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </div>

      {/* Venue reminder */}
      <div
        className="flex items-center gap-3"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "2px",
          padding: "14px 18px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="#FF6B00" strokeWidth="1.5" />
          <circle cx="12" cy="8" r="2" stroke="#FF6B00" strokeWidth="1.5" />
        </svg>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          True Tramm Trunk BKC, Bandra East, Mumbai, Maharashtra 400098
        </span>
      </div>
    </motion.div>
  );
}

export function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyd4F_PbjfgpjJYirOpkMEX-nly65Qiz6T8tVoPsyJo7EBcX-39hnAb40JPZS-o_tBMLA/exec", {
        method: "POST",
        body: JSON.stringify({
          name: data.fullName,
          company: data.company,
          email: data.email,
          people: data.attendees,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmittedData(data);
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  const inputStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "3px",
    padding: "14px 16px",
    width: "100%",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.2em",
    color: "rgba(255,255,255,0.4)",
    display: "block",
    marginBottom: "8px",
  };

  const errorStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "11px",
    color: "#FF6B00",
    marginTop: "5px",
  };

  return (
    <section
      id="register"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: "#060d1f" }}
    >
      {/* Background overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255,107,0,0.015) 0px,
            rgba(255,107,0,0.015) 1px,
            transparent 1px,
            transparent 100px
          )`,
        }}
      />
      {/* Side vertical accents */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,107,0,0.15), transparent)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
              SECURE YOUR SEAT
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
            REGISTER{" "}
            <span style={{ color: "#FF6B00" }}>NOW</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              marginTop: 14,
              lineHeight: 1.6,
            }}
          >
            Limited seats available. Reserve your place before it fills up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {submitted && submittedData ? (
              <SuccessCard
                key="success"
                data={submittedData}
                onBack={() => setSubmitted(false)}
              />
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden"
                style={{
                  background: "rgba(8,15,40,0.85)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "4px",
                  padding: "48px 40px",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,107,0,0.04)",
                }}
              >
                {/* Corner + top accents */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(255,107,0,0.5), rgba(255,107,0,0.5), transparent)",
                  }}
                />
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid #FF6B00", borderLeft: "2px solid #FF6B00" }} />
                <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: "2px solid #FF6B00", borderRight: "2px solid #FF6B00" }} />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div>
                    <label style={labelStyle}>FULL NAME *</label>
                    <input
                      {...register("fullName", { required: "Full name is required" })}
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,107,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.fullName ? "rgba(255,107,0,0.6)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label style={labelStyle}>COMPANY / ORGANISATION *</label>
                    <input
                      {...register("company", { required: "Company is required" })}
                      placeholder="Your company or organization"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,107,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.company ? "rgba(255,107,0,0.6)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.company && <p style={errorStyle}>{errors.company.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS *</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      placeholder="your@email.com"
                      type="email"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,107,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? "rgba(255,107,0,0.6)" : "rgba(255,255,255,0.1)")}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>

                  {/* Attendees */}
                  <div>
                    <label style={labelStyle}>NUMBER OF PEOPLE ATTENDING (INCLUDING YOU) *</label>
                    <select
                      {...register("attendees", { required: "Please select number of attendees" })}
                      style={{
                        ...inputStyle,
                        appearance: "none" as const,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23FF6B00' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "40px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,107,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.attendees ? "rgba(255,107,0,0.6)" : "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#080f28", color: "rgba(255,255,255,0.4)" }}>Select number of attendees</option>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n} style={{ background: "#080f28" }}>
                          {n} {n === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                    {errors.attendees && <p style={errorStyle}>{errors.attendees.message}</p>}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden transition-all"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 16,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: isSubmitting ? "rgba(255,107,0,0.5)" : "#FF6B00",
                        border: "none",
                        borderRadius: "3px",
                        padding: "18px 40px",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.background = "#e55e00";
                          e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,107,0,0.35)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#FF6B00";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          PROCESSING...
                        </span>
                      ) : (
                        "CONFIRM REGISTRATION"
                      )}
                    </button>
                  </div>

                  {/* Trust note */}
                  <div className="flex items-center justify-center gap-2">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <rect x="1" y="5" width="10" height="9" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <path d="M4 5V4a2 2 0 0 1 4 0v1" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.25)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      Your details will only be used for event registration and confirmation.
                    </span>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}