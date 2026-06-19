import React from "react";
import '../assets/css/applicationform.css';

const ApplicationForm = ({
    formData,
    handleInputChange,
    handleSubmit,
}) => {





    return (
        // <section id="application-form" className="py-5 bg-premium-dark">
        //   <div className="container">
        //     <div className="row justify-content-center">
        //       <div className="col-lg-7">
        <div className="cc-premium-form benefit-card p-4 p-md-5">
            <div className="text-center mb-4">
                <h3 className="cc-form-title gold-text fw-bold">
                    Application Form (आवेदन फार्म)
                </h3>
                <p className="text-white-50">
                    Join the Clasy Carz Family
                </p>
                {/* <div
                  className="gold-border mx-auto"
                  style={{ width: "50px" }}
                ></div> */}
                <div className="formbar">
                    <div className="bar-fill"></div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="cc-input-group">
                    <label>
                        Name (नाम) <span className="text-danger">*</span>
                    </label>

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

                {/* Phone + Email */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <div className="cc-input-group">
                            <label>
                                Phone no. (फ़ोन नंबर)
                                <span className="text-danger">*</span>
                            </label>

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
                            <label>
                                Email (ईमेल)
                                <span className="text-danger">*</span>
                            </label>

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
                </div>

                {/* Location */}
                <div className="cc-input-group mb-4">
                    <label>
                        Select Your Location
                        <span className="text-danger">*</span>
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

                {/* License */}
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
        //       </div>
        //     </div>
        //   </div>
        // </section>
    );
};

export default ApplicationForm;