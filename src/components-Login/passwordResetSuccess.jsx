import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccess.css";

import logoImg from "../assets/Login/logo.png";
import heroIllustration from "../assets/Login/passwordresetsuccess-hero-illustration.png";
import checkIconImg from "../assets/Login/white-check-icon.png";
import lockIconImg from "../assets/Login/lock-icon.png";
import securityCardIconImg from "../assets/Login/shield-icon.png";

export const PasswordResetSuccess = ({ onBackToLogin }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="ims-passwordresetsuccess-page-wrapper">
      <div className="ims-passwordresetsuccess-scale-stage" ref={containerRef}>
        <main className="ims-passwordresetsuccess-main-container">
          {/*   LEFT SIDE VISUAL  */}
          <section className="ims-passwordresetsuccess-left-section">
            <div className="ims-passwordresetsuccess-left-intro-block">
              <div className="ims-passwordresetsuccess-logo-header-group">
                <div className="ims-passwordresetsuccess-app-logo-badge">
                  <div className="ims-passwordresetsuccess-app-logo-inner-box">
                    <img
                      src={logoImg}
                      alt="IMS Logo"
                      className="ims-passwordresetsuccess-app-logo-img"
                    />
                  </div>
                </div>

                <div className="ims-passwordresetsuccess-app-title-wrapper">
                  <h1 className="ims-passwordresetsuccess-app-title">
                    Internship Management System
                  </h1>
                  <span className="ims-passwordresetsuccess-app-tagline">
                    Learn • Grow • Build Your Future
                  </span>
                </div>
              </div>

              <div className="ims-passwordresetsuccess-headline-group">
                <h2 className="ims-passwordresetsuccess-main-heading">
                  Account Secured &amp; Access
                  <br />
                  Restored
                </h2>
                <p className="ims-passwordresetsuccess-main-subtext">
                  Quickly regain access to your verified internship credentials,
                  university approvals, and active corporate placements.
                </p>
              </div>
            </div>

            {/* Central Hero Graphic & Glassmorphism Trust Card */}
            <div className="ims-passwordresetsuccess-illustration-container">
              <div className="ims-passwordresetsuccess-hero-image-wrapper">
                <img
                  src={heroIllustration}
                  alt="Account Secured Illustration"
                  className="ims-passwordresetsuccess-hero-image"
                />
              </div>

              {/* Bottom Glassmorphism Trust & Verification Card */}
              <div className="ims-passwordresetsuccess-glass-card">
                <div className="ims-passwordresetsuccess-glass-card-icon-box">
                  <div className="ims-passwordresetsuccess-shield-icon-container">
                    <img
                      src={securityCardIconImg}
                      alt="Shield Icon"
                      className="ims-passwordresetsuccess-shield-icon-img"
                    />
                  </div>
                </div>

                <div className="ims-passwordresetsuccess-glass-card-content">
                  <p className="ims-passwordresetsuccess-glass-card-quote">
                    “Credential change verified across university registrars,
                    Dean approvals, and enterprise partner portals.”
                  </p>
                  <p className="ims-passwordresetsuccess-glass-card-badge">
                    Enterprise IAM &amp; Security Operations — Zero Trust
                    Protocol Active
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE SUCCESS CARD */}
          <section className="ims-passwordresetsuccess-right-section">
            <div className="ims-passwordresetsuccess-success-panel">
              <div className="ims-passwordresetsuccess-success-card-body">
                <div className="ims-passwordresetsuccess-check-mark-badge">
                  <div className="ims-passwordresetsuccess-check-icon-container">
                    <img
                      src={checkIconImg}
                      alt="Success Check"
                      className="ims-passwordresetsuccess-check-icon-img"
                    />
                  </div>
                </div>

                {/* Status Content Group */}
                <div className="ims-passwordresetsuccess-status-content-group">
                  <div className="ims-passwordresetsuccess-encryption-pill">
                    <div className="ims-passwordresetsuccess-lock-icon-container">
                      <img
                        src={lockIconImg}
                        alt="Lock Icon"
                        className="ims-passwordresetsuccess-lock-icon-img"
                      />
                    </div>
                    <span className="ims-passwordresetsuccess-encryption-pill-text">
                      RECOVERY COMPLETED • 256-BIT ENCRYPTED
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="ims-passwordresetsuccess-status-title">
                    Password Reset Successful!
                  </h3>

                  {/* Subtitle / Confirmation Text */}
                  <p className="ims-passwordresetsuccess-status-description">
                    Your account credentials have been securely updated. All
                    active enterprise and university sessions have been
                    refreshed.
                  </p>
                </div>
              </div>

              {/* Back to Login Action Button */}
              <button
                type="button"
                className="ims-passwordresetsuccess-button-back-login"
                onClick={handleBackToLogin}
              >
                Back to Login
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
