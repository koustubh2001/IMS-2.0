import React, { useState, useRef, useEffect } from "react";
import "./RegistrationOTP.css";

import LOGO_IMG from "../assets/Auth/logo.png";
import ILLUSTRATION_IMG from "../assets/Auth/registration-illustration.png";
import SHIELD_ICON from "../assets/Auth/shield-icon.png";
import BACK_ICON from "../assets/Auth/registration-back-icon.png";

const OTP_INPUT_IDS = ["first", "second", "third", "fourth", "fifth", "sixth"];

export const RegistrationOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(55);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    const val = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasteData) return;

    const newOtp = [...otp];
    pasteData.split("").forEach((char, idx) => {
      newOtp[idx] = char;
    });
    setOtp(newOtp);

    const focusIdx = Math.min(pasteData.length, 5);
    inputRefs.current[focusIdx]?.focus();
  };

  const formatTimer = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="ims-registration-otp-page-wrapper">
      <div className="ims-registration-otp-container">
        {/* LEFT SIDE  */}
        <section className="ims-registration-left-side-content">
          <div className="ims-registration-left-inner-wrapper">
            <div className="ims-registration-logo-and-header-layout">
              <div className="ims-registration-logo-box">
                <img
                  src={LOGO_IMG}
                  alt="Logo"
                  className="ims-registration-header-logo"
                />
              </div>
              <div className="ims-registration-header-text-block">
                <h2 className="ims-registration-brand-title">
                  Internship Management System
                </h2>
                <p className="ims-registration-brand-tagline">
                  Learn • Grow • Build Your Future
                </p>
              </div>
            </div>

            <div className="ims-registration-below-content-layout">
              <h1 className="ims-registration-main-title">
                Verify your student email to
                <br />
                activate your account
              </h1>
              <p className="ims-registration-sub-description">
                Verify your institutional credentials to gain access to
                accredited corporate
                <br></br>
                internships, Dean-approved academic credits, and top-tier
                mentorship programs.
              </p>
            </div>

            {/* Hero Image*/}
            <div className="ims-registration-illustration-wrapper">
              <img
                src={ILLUSTRATION_IMG}
                alt="Student Verification"
                className="ims-registration-main-illustration"
              />
            </div>

            {/* Glassmorphic Quote Card */}
            <div className="ims-registration-under-content-card">
              <div className="ims-registration-under-logo-box">
                <img
                  src={SHIELD_ICON}
                  alt="Verified"
                  className="ims-registration-under-logo-icon"
                />
              </div>
              <div className="ims-registration-under-text-layout">
                <p className="ims-registration-quote-text">
                  “Institutional email verification secures university credit
                  transfer and immediate
                  <br></br>
                  eligibility for Fortune 500 placements.”
                </p>
                <div className="ims-registration-authority-line">
                  <span className="ims-registration-auth-bold">
                    Academic Partnerships Office
                  </span>
                  <span className="ims-registration-auth-sep"> — </span>
                  <span className="ims-registration-auth-light">
                    Verified University Gateway
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="ims-registration-right-side-layout">
          <div className="ims-registration-right-inside-content">
            <div className="ims-registration-right-header-content">
              <h2 className="ims-registration-otp-heading">
                Enter Verification Code
              </h2>
              <p className="ims-registration-otp-subheading">
                We've sent a 6-digit code to your registered Email and phone
                number. The code will expire in 09:59 minutes.
              </p>
            </div>

            {/* 6 Digit Input Boxes */}
            <div
              className="ims-registration-code-box-main-layout"
              onPaste={handlePaste}
            >
              {otp.map((digit, idx) => (
                <input
                  key={`otp-digit-${OTP_INPUT_IDS[idx]}`}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  className={`ims-registration-otp-digit-box ${digit ? "ims-registration-filled" : ""}`}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                />
              ))}
            </div>

            {/* Verify Identity Button */}
            <button
              type="button"
              className="ims-registration-btn-verify-identity"
            >
              Verify Identity &rarr;
            </button>

            {/* Resend and Countdown */}
            <div className="ims-registration-resend-content-layout">
              <span className="ims-registration-resend-label">
                Didn't receive the code?
              </span>
              <button
                type="button"
                className="ims-registration-resend-btn"
                disabled={timer > 0}
                onClick={() => setTimer(55)}
              >
                Resend{" "}
                {timer > 0 && (
                  <span className="ims-registration-timer-text">
                    (in {formatTimer(timer)})
                  </span>
                )}
              </button>
            </div>

            {/* Footer Navigation */}
            <div className="ims-registration-footer-action-links">
              <a href="#back" className="ims-registration-back-options-link">
                <img
                  src={BACK_ICON}
                  alt="Back"
                  className="ims-registration-back-icon"
                />{" "}
                Back to verification options
              </a>

              <a href="#support" className="ims-registration-support-link">
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
