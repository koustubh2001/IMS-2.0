import './Login.css'
import LoginHeader from '../assets/Login/header.png'
import Loginarrow from '../assets/Login/active-interns.png'
import Logincreditverifiedbox from '../assets/Login/credit-verified.png'
import LoginImage from '../assets/Login/Illustration-image.png'
import LoginTestimonialIcon from '../assets/Login/testimonial-icon.png'
import LoginMailIcon from '../assets/Login/email-icon.png'
import LoginLockIcon from '../assets/Login/password-icon.png'
import LoginEyeIcon from '../assets/Login/password-eye-open.png'
import LoginSigninArrow from '../assets/Login/signin-icon.png'
import LoginGoogleIcon from '../assets/Login/google-icon.png'
import { useState } from 'react'


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = (value) => {
    const trimmed = value.trim()
    if (!trimmed) return 'Please enter your email address'
    if (!trimmed.includes('@')) return 'Email must contain @'
    const parts = trimmed.split('@')
    if (parts.length !== 2 || !parts[0]) return 'Enter a valid email address'
    if (!parts[1]) return 'Enter the part after @ (example: name@gmail.com)'
    if (parts[1].toLowerCase() !== 'gmail.com') return 'Only Gmail is allowed. Use an email ending with @gmail.com'
    return ''
  }

  const validatePassword = (value) => {
    if (!value) return 'Please enter your password'
    if (value.length < 8) return 'Password must be at least 8 characters'
    return ''
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSignIn = () => {
    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    setEmailError(emailErr)
    setPasswordError(passwordErr)
    if (emailErr || passwordErr) return
  }

  return (
    <>
      <div className='ims-login-page'>
        <div className='ims-login-container'>

          <div className='ims-login-left'>
            <div className="ims-login-left-content">

              <div className='ims-login-header'>
                <div className='ims-login-header-icon'>
                  <img src={LoginHeader} alt="Login Header" />
                </div>

                <div className='ims-login-header-text'>
                  <div className='ims-login-header-text1'>
                    Internship Management System
                  </div>
                  <div className='ims-login-header-text2'>
                    Learn • Grow • Build Your Future
                  </div>
                </div>
              </div>

              <div className="ims-login-heading-container">
                <h1>
                  Connecting academic talent with
                  <br />
                  career-defining corporate internships
                </h1>

                <div className="ims-login-description">
                  <p>
                    The verified enterprise portal synchronizing university dean approvals,
                    experiential learning hours, and Fortune 500 mentorship agreements
                  </p>
                </div>
              </div>

              <div className="ims-login-stats-container">

                <div className="ims-login-stat-card">
                  <div className="ims-login-stat-value">14,200+</div>
                  <div className="ims-login-stat-title">ACTIVE INTERNS</div>
                  <div className="ims-login-stat-change">
                    <img src={Loginarrow} alt="" />
                    <span>+24% YoY</span>
                  </div>
                </div>

                <div className="ims-login-stat-card">
                  <div className="ims-login-stat-value">98.4%</div>
                  <div className="ims-login-stat-title">CREDIT VERIFIED</div>
                  <div className="ims-login-stat-change ims-login-stat-change-blue">
                    <img src={Logincreditverifiedbox} alt="" />
                    <span>Deans Approved</span>
                  </div>
                </div>

                <div className="ims-login-stat-card">
                  <div className="ims-login-stat-value">14,200+</div>
                  <div className="ims-login-stat-title">ACTIVE INTERNS</div>
                  <div className="ims-login-stat-change">
                    <img src={Loginarrow} alt="" />
                    <span>+24% YoY</span>
                  </div>
                </div>

              </div>

              <div className="ims-login-illustration-wrapper">

                <div className="ims-login-illustration-container">
                  <img
                    src={LoginImage}
                    alt="Internship illustration"
                  />
                </div>

                <div className="ims-login-testimonial-card">
                  <div className="ims-login-testimonial-icon">
                    <img src={LoginTestimonialIcon} alt="" />
                  </div>

                  <div className="ims-login-testimonial-content">
                    <div className="ims-login-testimonial-text">
                      “Automated audit trails cut academic credit clearance time from 14 days to under 48 hours.”
                    </div>
                    <div className="ims-login-testimonial-author">
                      Dr. Elena Vance — <span>Dean of Experiential Education, Northeastern Consortium</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="ims-login-right">

            <div className="ims-login-form-container">

              <div className="ims-login-form-heading">
                <h2>Welcome Back</h2>
                <p>Manage your career journey</p>
              </div>

              <div className="ims-login-input-group">
                <label htmlFor="ims-login-email">Email Address</label>

                <div className={`ims-login-input-wrapper ${emailError ? 'ims-login-input-error' : ''}`}>
                  <img className="ims-login-input-icon" src={LoginMailIcon} alt="" />
                  <input
                    id="ims-login-email"
                    type="text"
                    inputMode="email"
                    placeholder="Enter Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {emailError && <p className="ims-login-error-text">{emailError}</p>}
              </div>

              <div className="ims-login-input-group ims-login-input-group-password">
                <div className="ims-login-label-row">
                  <label htmlFor="ims-login-password">Password</label>
                  <a href="#" className="ims-login-forgot">Forgot Password?</a>
                </div>

                <div className={`ims-login-input-wrapper ${passwordError ? 'ims-login-input-error' : ''}`}>
                  <img className="ims-login-input-icon" src={LoginLockIcon} alt="" />
                  <input
                    id="ims-login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className={`ims-login-eye-button ${!showPassword ? 'ims-login-eye-closed' : ''}`} onClick={() => setShowPassword(!showPassword)}>
                    <img className="ims-login-eye-icon" src={LoginEyeIcon} alt="" />
                  </span>
                </div>
                {passwordError && <p className="ims-login-error-text">{passwordError}</p>}
              </div>

              <label className="ims-login-remember" htmlFor="ims-login-remember">
                <input id="ims-login-remember" type="checkbox" />
                <span>Keep me signed in</span>
              </label>

              <button type="button" className="ims-login-signin-button" onClick={handleSignIn}>
                Sign In
                <img className="ims-login-signin-arrow" src={LoginSigninArrow} alt="" />
              </button>

              <div className="ims-login-divider">
                <span>OR CONTINUE WITH</span>
              </div>

              <button type="button" className="ims-login-google-button">
                <img className="ims-login-google-icon" src={LoginGoogleIcon} alt="" />
                Google
              </button>

              <p className="ims-login-create-account">
                Don't have an account? <a href="#">Create Account</a>
              </p>

              <div className="ims-login-footer-links">
                <a href="#">Help</a>
                <span className="ims-login-footer-dot" />
                <a href="#">Privacy</a>
                <span className="ims-login-footer-dot" />
                <a href="#">Terms</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}
