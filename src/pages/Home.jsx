// Home.jsx
import React, { useState } from 'react';
import ApplicationForm from "../components/ApplicationForm";
import '../assets/css/home.css';
import heroCarImage from "../assets/images/clasycarzHero.png";

import carrumLogo from "../assets/images/carrum.png";
import idfcLogo from "../assets/images/idfc.png";
import uberLogo from "../assets/images/uber.png";

import aim from "../assets/images/aim.png";
import map from "../assets/images/map.png";
import rozmoney from "../assets/images/rozmoney.png";
import money from "../assets/images/money.png";

// Team Members
import team1 from "../assets/images/team/team1.png";
import team2 from "../assets/images/team/team2.png";
import team3 from "../assets/images/team/team3.png";
import team4 from "../assets/images/team/team4.png";
import team5 from "../assets/images/team/team5.png";

const Home = () => {


  // State for application form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: "",
    hasLicense: 'no'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our team will contact you soon.');
    // Reset form or handle submission logic here
  };


  // Team members
  const teamMembers = [
    {
      image: team1,
      name: "Nitin S. Jindal",
      role: "Founder & CEO",
    },
    {
      image: team2,
      name: "Sahebrao Borkar",
      role: "Chief Operation Officer (COO)",
    },
    {
      image: team3,
      name: "Nilesh Dhamale",
      role: "Marketing Manager (MM)",
    },
    {
      image: team4,
      name: "Pankaj Agarwal",
      role: "Account Manager (AM)",
    },
    {
      image: team5,
      name: "Laxman Jadhav",
      role: "Business Development (BD)",
    },
  ];

  const partners = [
    {
      image: carrumLogo,
      name: "Carrum Mobility",
      alt: "Carrum Mobility Partner"
    },
    {
      image: uberLogo,
      name: "Uber",
      alt: "Uber Partner"
    },
    {
      image: idfcLogo,
      name: "IDFC Bank",
      alt: "IDFC Bank Partner",
      className: "idfcImg"
    }
  ];

  return (
    <>
      {/* ========== HERO SECTION: Partner Leading Growth ========== */}
      <section className="hero-section position-relative d-flex align-items-center">
        <div className="container cst-pt-6 mb-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 hero-animate">
              <span className="cstHomeBtn text-uppercase mb-2 d-inline-block">Wet Lease Model</span>
              <h1 className="display-3 fw-bold text-white mt-2">
                Partners <span className="gold-text">Leading Growth</span>
              </h1>
              <p className="lead text-white-50 mt-3 fontManrope letter_sp">
                Driving growth, management, and vision across the shared mobility market.
              </p>
              <div className="mt-4 d-flex gap-3 flex-wrap">
                <a href="#application-form" className="btn btn-gold scroll-link">Join as Driver →</a>
                <a href="#benefits" className="btn btn-outline-gold">Explore Benefits</a>
              </div>

              {/* <div className="row mt-5 g-4">
                <div className="col-6">
                  <div className="stat-number iconShadow">2+</div>
                  <div className="text-white-50 small">Years of Excellence</div>
                </div>
                <div className="col-6">
                  <div className="stat-number iconShadow">₹40k</div>
                  <div className="text-white-50 small">Earning Potential/Month</div>
                </div>
              </div> */}

            </div>
            <div className="col-lg-6 hero-animate">
              <img
                src={heroCarImage}
                alt="Clasy Carz Premium Fleet"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>



      {/* ========== WHAT DOES CLASY CARZ DO? (Premium, as you liked) ========== */}
      <section className="py-0 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="premium-what-card benefit-card p-5">
                <div className="text-center mb-5">
                  {/* <i className="bi bi-lightning-charge-fill gold-icon-large mb-3"></i> */}
                  {/* <i className="bi bi-gear-wide-connected gold-icon-large mb-3"></i> */}
                  <i className="bi bi-car-front gold-icon-large mb-3 iconShadow"></i>
                  <h3 className="gold-text display-6 fw-bold">What Does Clasy Carz Do?</h3>
                  {/* <div className="gold-border mx-auto mt-3"></div> */}
                  <div className="bar">
                    <div className="bar-fill"></div>
                  </div>
                </div>
                <p className="text-white-50 text-center lead fontManrope mb-5">
                  Clasy Carz is a management firm specializing in the shared mobility sector with a strong operational focus.
                </p>
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="premium-service-card h-100 p-4">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person-check-fill iconShadow fs-2 mb-3 d-block me-3"></i>
                        <h5 className="text-white mb-3 fw-bold">We Provide</h5>
                      </div>
                      <ul className="list-unstyled fontManrope">
                        <li className="mb-3"><i className="bi bi-check-circle-fill greentick me-1 fs-6"></i> A transparent working system</li>
                        <li className="mb-3"><i className="bi bi-check-circle-fill greentick me-1 fs-6"></i> Smooth and hassle-free operations</li>
                        <li className="mb-3"><i className="bi bi-check-circle-fill greentick me-1 fs-6"></i> Solutions that make life easier for our pilots</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="premium-service-card h-100 p-4">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-gear-wide-connected iconShadow  fs-2 mb-3 d-block me-3"></i>
                        <h5 className="text-white mb-3 fw-bold">Operational Excellence</h5>
                      </div>
                      <ul className="list-unstyled fontManrope">
                        <li className="mb-3"><i className="bi bi-check-circle-fill greentick me-1 fs-6"></i> Systematic & organized deployment of vehicles</li>
                        <li className="mb-3"><i className="bi bi-check-circle-fill greentick me-1 fs-6"></i> Earning opportunities up to ₹40,000 per month</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========== OUR AIM ========== */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="benefit-card p-4 p-md-5 text-center"> {/* glass-card */}
                <div className="d-inline-flex align-items-center justify-content-center mb-0 mb-md-3">
                  {/* <i className="bi bi-bullseye gold-text fs-1 me-2"></i> */}
                  <img src={aim} alt="Our Aim" className="img-fluid iconShadow" style={{ height: "57px" }} />
                  <h3 className="gold-text fw-bold mb-0"> Our Aim</h3>
                </div>
                <div className="row mt-0 mt-md-4 g-3">

                  {/* <div className="col-md-6">
                    <div className="aim-item d-flex align-items-center justify-content-center p-3 rounded-4 bg-dark-soft">
                      <i className="bi bi-people-fill gold-text fs-4 me-3 iconShadow"></i>
                      <span className="text-white-50 fontManrope">Create employment of indian youth while uplifting drivers & empower human</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aim-item d-flex align-items-center justify-content-center p-3 rounded-4 bg-dark-soft">
                      <i className="bi bi-award-fill gold-text fs-4 me-3 iconShadow"></i>
                      <span className="text-white-50 fontManrope">Improve people quality of life in India</span>
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="aim-item text-center p-4 rounded-4 bg-dark-soft h-100">

                      <i className="bi bi-people-fill gold-text iconShadow"
                        style={{ fontSize: "2.5rem" }}></i>

                      <p className="text-white-50 fontManrope mt-3 mb-0">
                        Create employment for Indian youth while uplifting drivers and empower human
                      </p>

                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="aim-item text-center p-4 rounded-4 bg-dark-soft h-100">

                      <i className="bi bi-award-fill gold-text iconShadow"
                        style={{ fontSize: "2.5rem" }}></i>

                      <p className="text-white-50 fontManrope mt-3 mb-0">
                        Improve people's quality of life in India
                      </p>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========== BENEFITS SECTION ========== */}
      <section id="benefits" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Exclusive <span className="gold-text">Benefits</span></h2>
            {/* <div className="gold-border mx-auto"></div> */}
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
            <p className="lead text-white-50 mt-3">Designed to empower our driver partners with freedom and growth</p>
          </div>
          <div className="row g-4 g-md-4 justify-content-center cursor-pointer">
            {[
              { icon: "bi-shield-lock-fill", title: "Zero security deposit", desc: "No upfront financial burden" },
              { icon: "bi-wallet2", title: "Affordable rent", desc: "Competitive & flexible plans" },
              { icon: "bi-car-front-fill", title: "Well-maintained cars", desc: "Premium fleet, regularly serviced" },
              { icon: "bi-fuel-pump-fill", title: "High mileage vehicles", desc: "CNG efficiency, more savings" },
              { icon: "bi-tools", title: "Maintenance-free system", desc: "We handle all repairs" },
              { icon: "bi-clock-history", title: "Flexible working hours", desc: "Drive on your own schedule" },
              { icon: "bi-gift-fill", title: "Extra income opportunities", desc: "Referral bonuses & incentives" }
            ].map((benefit, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="benefit-card text-center p-4">
                  <i className={`bi ${benefit.icon} benefit-icon iconShadow`}></i>
                  <h5 className="text-white mt-3 mb-2">{benefit.title}</h5>
                  <p className="text-white-50 small fontManrope">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CHOOSE YOUR NEAREST LOCATION ========== */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Choose Your <span className="gold-text">Nearest Location</span></h2>
            {/* <div className="gold-border mx-auto"></div> */}
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
          </div>
          <div className="row justify-content-center g-4 cursor-pointer">
            {['Vishrantwadi', 'Bhosari', 'Dhankawadi', 'Wagholi'].map((location, idx) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={idx}>
                <div className=" benefit-card text-center p-4">  {/* location-card */}
                  <i className="bi bi-geo-alt-fill location-icon iconShadow"></i>
                  <h5 className="text-white mt-2 mb-0">{location}</h5>
                  <span className="badge bg-gold mt-3 iconShadow">Active Hub</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT US ========== */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 p-4 p-lg-0">
              <div className=" p-4 p-lg-0"> {/* glass-card */}
                <h2 className="gold-text mb-4">About <span className="text-white">Us</span></h2>
                <p className="text-white-50 lead fontManrope">
                  Founded in 2024, Clasy Carz is one of the fastest-growing aggregator companies managing CNG vehicles efficiently, profitably, and sustainably.
                </p>
                <p className="fontManrope text-white-50 mt-3">
                  Our team is here to support you at every step of your driving journey, helping you get started quickly with proper guidance and assistance.
                  We create smart drivers and make vehicle management seamless and effective.
                </p>
                <div className="mt-4 gold-text fst-italic">"Empowering Drivers, Driving Excellence"</div>
              </div>
            </div>
            <div className="col-lg-7 p-4 p-lg-0 mt-0 mt-lg-3">
              <img src={map} className='img-fluid rounded-4' alt="Our Locations" />
              {/* style={{ filter: "drop-shadow(0 0 140px #ffffff75)" }} */}

              {/* <div className="about-stats-grid">
                <div className="stat-block">
                  <div className="iconShadow stat-number-lg">2024</div>
                  <div className="text-white-50">Founded</div>
                </div>
                <div className="stat-block">
                  <div className="iconShadow stat-number-lg">CNG</div>
                  <div className="text-white-50">Eco-Friendly Fleet</div>
                </div>
                <div className="stat-block">
                  <div className="iconShadow stat-number-lg">100%</div>
                  <div className="text-white-50">Transparency</div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>


      {/* ========== OUR TEAM SECTION ========== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">
              Meet Our <span className="gold-text">Team</span>
            </h2>
            {/* <div className="gold-border mx-auto"></div> */}
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
            <p className="text-white-50 lead fontManrope">
              The people driving Clasy Carz forward every day.
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            {/* {teamMembers.map((member, index) => ( */}
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={index}
              >
                <div className="team-card cursor-pointer">
                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                  </div>

                  <div className="team-content">
                    <h5 className="text-white mb-1">
                      {member.name}
                    </h5>

                    <p className="gold-text mb-0">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 justify-content-center mt-1">

            {teamMembers.slice(3, 5).map((member, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={index}
              >
                <div className="team-card cursor-pointer">
                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                  </div>

                  <div className="team-content">
                    <h5 className="text-white mb-1">
                      {member.name}
                    </h5>

                    <p className="gold-text mb-0">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* ========== DAILY PAYOUT BANNER ========== */}
      <section className="py-4 payout-banner pt-5">
        <div className="container text-center">
          <div className="payout-glow">
            <h2 className="display-5 fw-bold gold-text iconShadow"> <i className="bi bi-currency-rupee gold-text fs-1 mt-2"></i> Roz Paisa Hi Paisa</h2>
            {/*  <img src={rozmoney} className='img-fluid' width="100" height="auto" alt="Money" />  <i className="bi bi-currency-rupee gold-text fs-1 mt-2"></i> */}
            <p className="text-white lead" style={{ filter: 'drop-shadow(0px 0px 15px #000)' }}>Get paid daily and keep your earnings flowing consistently.</p>
            {/* <i className="bi bi-cash-stack fs-1 gold-text mt-2 iconShadow"></i> */}
            <img src={money} className='img-fluid iconShadow' width="150" height="auto" alt="Money" />
          </div>
        </div>
      </section>

      {/* ========== OUR IMPACT ========== */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Our <span className="gold-text">Impact</span></h2>
            {/* <div className="gold-border mx-auto"></div> */}
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-6">
              <div className="impact-card p-4">
                <div className="impact-number iconShadow">25K+</div>
                <p className="text-white h5 mt-2">Generating Uber Trips Per Month  </p>
                <span className="badge bg-gold-soft iconShadow">Moving Forward</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="impact-card p-4">
                <div className="impact-number iconShadow">500+</div>
                <p className="text-white h5 mt-2">Drivers Impacted & Growing</p>
                <span className="badge bg-gold-soft iconShadow">Strong Community</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="impact-card p-4">
                <div className="impact-number iconShadow">60+</div>
                <p className="text-white h5 mt-2"> Echo Friendly CNG Vehicles </p>
                <span className="badge bg-gold-soft iconShadow">Green Fleet</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="impact-card p-4">
                <div className="impact-number iconShadow">4</div>
                <p className="text-white h5 mt-2">Active Hub In Pune</p>
                <span className="badge bg-gold-soft iconShadow">Urban Limits</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== EQUITY INVESTORS & HELPING PARTNERS ========== */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Equity Investors */}
            <div className="col-lg-6">
              <div className="benefit-card p-4 h-100 cursor-pointer">
                <h3 className="gold-text mb-4 text-center text-md-start"><i className="bi bi-bank2 me-2 iconShadow"></i> Equity Investors</h3>
                <div className="investor-list">
                  <div className="investor-item">
                    <i className="bi bi-person-circle fs-2 gold-text me-3"></i>
                    <div>
                      <h5 className="text-white mb-0">Mr. Nitin S. Jindal</h5>
                      <p className="text-white-50 small">Promoter</p>
                    </div>
                  </div>
                  <div className="investor-item mt-3">
                    <i className="bi bi-person-circle fs-2 gold-text me-3"></i>
                    <div>
                      <h5 className="text-white mb-0">Mr. Vansh N. Jindal</h5>
                      <p className="text-white-50 small">Promoter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helping Partners with Images */}
            <div className="col-lg-6">
              <div className="benefit-card p-4 h-100 cursor-pointer">
                <h3 className="gold-text mb-4 text-center text-md-start"><i className="bi bi-shield-check me-2 iconShadow"></i> Together We Build</h3>
                <div className="row text-center g-4 justify-content-center">
                  {partners.map((partner, index) => (
                    <div className="col-lg-4 col-md-4 col-12" key={index}>
                      <div className="partner-image-card h-100">
                        <img
                          src={partner.image}
                          alt={partner.alt}
                          className={`img-fluid partner-img ${partner.className || ""}`}
                        />
                        <p className="text-white mt-2 fw-bold">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white-50 text-center mt-3 small">*Official strategic alliances</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== APPLICATION FORM ========== */}
      {/* <section id="application-form" className="py-5 bg-premium-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cc-premium-form glass-card p-4 p-md-5">
                <div className="text-center mb-4"> */}
      {/* <div className="gold-icon-wrapper mb-2">
                    <i className="bi bi-file-text-fill gold-text fs-1"></i>
                  </div> */}
      {/* <h3 className="cc-form-title gold-text fw-bold">Application Form (आवेदन फार्म)</h3>
                  <p className="text-white-50"> Join the Clasy Carz Family</p>
                  <div className="gold-border mx-auto" style={{ width: '50px' }}></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="cc-input-group">
                    <label>Name (नाम) <span className="text-danger">*</span> </label>

                    <div className="cc-input-wrap">
                      <i className="bi bi-person-fill iconShadow"></i>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="cc-input-group">
                        <label>Phone no. (फ़ोन नंबर) <span className="text-danger">*</span></label>

                        <div className="cc-input-wrap">
                          <i className="bi bi-telephone-fill iconShadow"></i>

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter Phone Number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cc-input-group">
                        <label>Email (ईमेल) <span className="text-danger">*</span> </label>

                        <div className="cc-input-wrap">
                          <i className="bi bi-envelope-fill iconShadow"></i>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>
                      </div>

                    </div>

                    <div className="cc-input-group mb-4">
                      <label>
                        Select Your Location (अपनी जगह चुनें) <span className="text-danger">*</span>
                      </label>

                      <div className="cc-input-wrap">
                        <i className="bi bi-geo-alt-fill iconShadow"></i>

                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Location</option>
                          <option value="Vishrantwadi">Vishrantwadi</option>
                          <option value="Bhosari">Bhosari</option>
                          <option value="Dhankawadi">Dhankawadi</option>
                          <option value="Wagholi">Wagholi</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="mb-4">
                    <div className="cc-license-box">

                      <label>
                        Do You Have a Four-Wheeler Driving Licence? ( क्या आपके पास ड्राइविंग लाइसेंस है? )
                      </label>

                      <div className="cc-radio-group">

                        <label className="cc-radio-card">
                          <input
                            type="radio"
                            name="hasLicense"
                            value="yes"
                            checked={formData.hasLicense === "yes"}
                            onChange={handleInputChange}
                          />

                          <span>
                            <i className="bi bi-check-circle-fill iconShadow"></i>
                            Yes
                          </span>
                        </label>

                        <label className="cc-radio-card">
                          <input
                            type="radio"
                            name="hasLicense"
                            value="no"
                            checked={formData.hasLicense === "no"}
                            onChange={handleInputChange}
                          />

                          <span>
                            <i className="bi bi-x-circle-fill iconShadow"></i>
                            No
                          </span>
                        </label>

                      </div>

                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="cc-submit-btn">
                      Submit Application
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="application-form" className="py-5 bg-premium-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <ApplicationForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;