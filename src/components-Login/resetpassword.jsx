import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resetpassword.css";

import leftIllustration from "../assets/Login/resetpassword-left-illustration.png";
import resetBadgeIcon from "../assets/Login/reset-badge.png";
import lockIcon from "../assets/Login/lock-icon.png";
import shieldIcon from "../assets/Login/resetpassword-protest-icon.png";
import checkIcon from "../assets/Login/passwordresetsuccess-check-icon.png";

import logoIcon from "../assets/Login/logo.png";
import complianceIcon from "../assets/Login/shield-icon.png";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMinLength = newPassword.length >= 8;
  const isMatching = newPassword.length > 0 && newPassword === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isMinLength) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!isMatching) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password updated successfully!");
  };

  return (
    <div className="ims-reset-password-container">
      {/*LEFT PANEL */}
      <div className="ims-reset-password-left-panel">
        <div className="ims-reset-password-brand-header">
          <div className="ims-reset-password-brand-icon-wrapper">
            <img
              src={logoIcon}
              alt="Logo"
              className="ims-reset-password-brand-logo-img"
            />
          </div>

          <div className="ims-reset-password-brand-text">
            <h3>Internship Management System</h3>
            <p>Learn • Grow • Build Your Future</p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="ims-reset-password-hero-text-block">
          <h1>Set a Strong Master Password</h1>

          <p>
            Protect your internship credentials, academic clearance records, and
            enterprise communication channels.
          </p>
        </div>

        {/* Illustration Image */}
        <div className="ims-reset-password-illustration-wrapper">
          <img
            src={leftIllustration}
            alt="Security Master Key Illustration"
            className="ims-reset-password-hero-illustration-img"
          />
        </div>

        {/* Compliance Card */}
        <div className="ims-reset-password-compliance-card">
          <div className="ims-reset-password-compliance-icon-box">
            <img
              src={complianceIcon}
              alt="Security Check"
              className="ims-reset-password-compliance-icon-img"
            />
          </div>

          <div className="ims-reset-password-compliance-text">
            <p className="ims-reset-password-compliance-quote">
              "Automated credential audit enforces strict NIST 800-63B password
              guidelines and institutional SSO policies."
            </p>

            <p className="ims-reset-password-compliance-author">
              Dr. Elena Vance —{" "}
              <span>Dean of Experiential Education & IAM Security Lead</span>
            </p>
          </div>
        </div>
      </div>

      {/*  RIGHT PANEL  */}
      <div className="ims-reset-password-right-panel">
        <div className="ims-reset-password-form-card">
          <div className="ims-reset-password-reset-badge">
            <img
              src={resetBadgeIcon}
              alt="Reset"
              className="ims-reset-password-reset-badge-img"
            />
          </div>

          {/* Heading */}
          <h2 className="ims-reset-password-form-heading">Set New Password</h2>

          <p className="ims-reset-password-form-subheading">
            Your new password must be different from previous passwords.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="ims-reset-password-form">
            <div className="ims-reset-password-form-group">
              <label htmlFor="newPassword">New Password</label>

              <div className="ims-reset-password-input-wrapper">
                <span className="ims-reset-password-input-icon">
                  <img
                    src={lockIcon}
                    alt="Password"
                    className="ims-reset-password-field-icon-img"
                  />
                </span>

                <input
                  id="newPassword"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="ims-reset-password-form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>

              <div className="ims-reset-password-input-wrapper">
                <span className="ims-reset-password-input-icon">
                  <img
                    src={shieldIcon}
                    alt="Confirm"
                    className="ims-reset-password-field-icon-img"
                  />
                </span>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="ims-reset-password-requirements-box">
              <div
                className={`ims-reset-password-requirement-row ${
                  isMinLength
                    ? "ims-reset-password-completed"
                    : "ims-reset-password-pending"
                }`}
              >
                <div className="ims-reset-password-status-indicator">
                  {isMinLength ? (
                    <img
                      src={checkIcon}
                      alt="Verified"
                      className="ims-reset-password-check-icon-img"
                    />
                  ) : (
                    <span className="ims-reset-password-unfulfilled-dot" />
                  )}
                </div>

                <span className="ims-reset-password-requirement-label">
                  At least 8 characters
                </span>
              </div>

              {/* Password Match */}
              <div
                className={`ims-reset-password-requirement-row ${
                  isMatching
                    ? "ims-reset-password-completed"
                    : "ims-reset-password-pending"
                }`}
              >
                <div className="ims-reset-password-status-indicator">
                  {isMatching ? (
                    <img
                      src={checkIcon}
                      alt="Verified"
                      className="ims-reset-password-check-icon-img"
                    />
                  ) : (
                    <span className="ims-reset-password-unfulfilled-dot" />
                  )}
                </div>

                <span className="ims-reset-password-requirement-label">
                  Passwords match
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="ims-reset-password-submit-btn">
              <span>Update Password</span>
              <span className="ims-reset-password-btn-arrow">&rarr;</span>
            </button>
          </form>

          {/* Back to Login */}
          <div className="ims-reset-password-login-footer">
            <Link to="/login" className="ims-reset-password-back-link">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
