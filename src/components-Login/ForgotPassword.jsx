import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

import logoIcon from '../assets/Login/logo.png';
import shieldBadge from '../assets/Login/shield-icon.png';
import topIcon from '../assets/Login/top-icon.png';
import recoveryIllustration from '../assets/Login/recovery-illustration.png';
import emailIcon from '../assets/Login/email-icon.png';
import smsIcon from '../assets/Login/password-icon.png';

export function ForgotPassword() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('sms');

  return (
    <div className="ims-forgot-page">
      <div className="ims-forgot-left">
        <div>
          <div className="ims-forgot-brand-header">
            <div className="ims-forgot-brand-logo-icon">
              <img
                src={logoIcon}
                alt="Internship Management System Logo"
              />
            </div>
            <div className="ims-forgot-brand-text-block">
              <span className="ims-forgot-brand-title">Internship Management System</span>
              <span className="ims-forgot-brand-subtitle">Learn • Grow • Build Your Future</span>
            </div>
          </div>

          <div className="ims-forgot-hero-content">
            <h1 className="ims-forgot-hero-heading">
              Secure Account Recovery &amp;<br />Identity Protection
            </h1>
            <p className="ims-forgot-hero-description">
              Quickly regain access to your verified internship credentials, university approvals,<br />
              and active corporate placements.
            </p>
          </div>
        </div>

        <div className="ims-forgot-recovery-content">
          <img
            src={recoveryIllustration}
            alt="Secure Account Recovery Illustration"
            className="ims-forgot-recovery-image"
          />
        </div>

        <div className="ims-forgot-compliance-card">
          <div className="ims-forgot-compliance-icon-wrapper">
            <img
              src={shieldBadge}
              alt="Institutional IAM Security Shield"
              className="ims-forgot-compliance-badge-icon"
            />
          </div>
          <div className="ims-forgot-compliance-text-block">
            <p className="ims-forgot-compliance-text-primary">
              All password reset requests are cryptographically signed and logged according to institutional FERPA &amp; SOC-2 compliance standards.
            </p>
            <p className="ims-forgot-compliance-text-secondary">
              <span className="ims-forgot-highlight">Campus Identity &amp; Access Management (IAM) Protocol</span> • Verified Institutional Security
            </p>
          </div>
        </div>
      </div>

      <div className="ims-forgot-right">
        <div className="ims-forgot-verification-content">
          <div className="ims-forgot-top-icon-box">
            <img src={topIcon} alt="Reset Icon" className="ims-forgot-top-icon" />
          </div>

          <h2 className="ims-forgot-verification-heading">Forgot Password?</h2>
          <p className="ims-forgot-verification-desc">
            Choose your preferred method to receive a one-time verification code.
          </p>

          <div className="ims-forgot-verification-label">
            Verification Method
          </div>

          <div className="ims-forgot-verification-options" role="radiogroup" aria-label="Verification Method">
            <button
              type="button"
              className={`ims-forgot-verification-option ${selectedMethod === 'email' ? 'ims-forgot-selected' : ''}`}
              onClick={() => setSelectedMethod('email')}
              role="radio"
              aria-checked={selectedMethod === 'email'}
            >
              <div className="ims-forgot-verification-option-left">
                <div className="ims-forgot-verification-icon-box">
                  <img src={emailIcon} alt="Email verification" className="ims-forgot-verification-icon" />
                </div>
                <div className="ims-forgot-verification-details">
                  <span className="ims-forgot-verification-title">Email Verification</span>
                  <span className="ims-forgot-verification-subtitle">j***n@g***l.com</span>
                </div>
              </div>
              <div className="ims-forgot-verification-radio">
                <div className={`ims-forgot-radio-circle ${selectedMethod === 'email' ? 'ims-forgot-selected' : ''}`}>
                  {selectedMethod === 'email' && <div className="ims-forgot-radio-dot"></div>}
                </div>
              </div>
            </button>

            <button
              type="button"
              className={`ims-forgot-verification-option ${selectedMethod === 'sms' ? 'ims-forgot-selected' : ''}`}
              onClick={() => setSelectedMethod('sms')}
              role="radio"
              aria-checked={selectedMethod === 'sms'}
            >
              <div className="ims-forgot-verification-option-left">
                <div className="ims-forgot-verification-icon-box">
                  <img src={smsIcon} alt="SMS verification" className="ims-forgot-verification-icon" />
                </div>
                <div className="ims-forgot-verification-details">
                  <span className="ims-forgot-verification-title">SMS / Text Message</span>
                  <span className="ims-forgot-verification-subtitle">Send code to +91 9****-****-5678</span>
                </div>
              </div>
              <div className="ims-forgot-verification-radio">
                <div className={`ims-forgot-radio-circle ${selectedMethod === 'sms' ? 'ims-forgot-selected' : ''}`}>
                  {selectedMethod === 'sms' && <div className="ims-forgot-radio-dot"></div>}
                </div>
              </div>
            </button>
          </div>

          <button type="button" className="ims-forgot-verification-button">
            Send Verification Code &rarr;
          </button>

          <div className="ims-forgot-back-to-login" onClick={() => navigate('/login')}>
            &#8249; Back to Login
          </div>
        </div>
      </div>
    </div>
  );
}
