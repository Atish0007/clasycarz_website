import React, { useState } from 'react';
import '../assets/css/applicationform.css';
import { FaCheckCircle } from "react-icons/fa";

const ApplicationForm = () => {
    // ({
    //     formData,
    //     handleInputChange,
    //     handleSubmit,
    // }) => {


    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // State for application form
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: "",
        hasLicense: 'no'
    });

    // TOAST STATE
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success"
    });

    const showToastMessage = (message, type = "success") => {
        console.log("Toast Called");
        setToast({
            show: true,
            message,
            type
        });

        setTimeout(() => {
            setToast({
                show: false,
                message: "",
                type: "success"
            });
        }, 3500);
    };

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setFormData(prev => ({ ...prev, [name]: value }));
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validate = () => {
        let tempErrors = {};
        console.log(tempErrors);
        if (!formData.name.trim()) {
            tempErrors.name = "Full name is required";
        } else if (formData.name.trim().length < 3) {
            tempErrors.name = "Name must be at least 3 characters";
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone) {
            tempErrors.phone = "Mobile number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            tempErrors.phone = "Enter valid 10-digit mobile number";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Enter valid email address";
        }

        if (!formData.location) {
            tempErrors.location = "Please select location";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };


    //Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        //console.log('Form submitted:', formData);
        //alert('Thank you! Our team will contact you soon.');
        // Reset form or handle submission logic here

        try {
            setLoading(true);

            // const res = await fetch("http://localhost/clasycars_web/send-mail.php", {
            const res = await fetch("https://clasycarz.com/api/send-mail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    location: formData.location,
                    hasLicense: formData.hasLicense
                })
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {

                showToastMessage("Thank you for enquiry. Our team will contact you shortly.", "success");

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    location: "",
                    hasLicense: "no"
                });

                setErrors({});


            } else {
                showToastMessage(data.message || "Failed to send enquiry", "error");
            }

        } catch (error) {
            // console.log(error);
            showToastMessage("Something went wrong", "error");
        } finally {
            setLoading(false);
        }

    };



    return (
        <>

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
                            //required
                            />
                        </div>
                        {errors.name && <p className="error-text">{errors.name}</p>}
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
                                        maxLength={10}
                                        onKeyPress={(e) => {
                                            if (!/[0-9]/.test(e.key)) e.preventDefault();
                                        }}
                                        placeholder="Enter Phone Number"
                                    //required
                                    />
                                </div>
                                {errors.phone && (<p className="error-text">{errors.phone}</p>)}
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
                                    //required
                                    />
                                </div>
                                {errors.email && (<p className="error-text">{errors.email}</p>)}
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
                            // required
                            >
                                <option value="">Select Location</option>
                                <option value="Vishrantwadi">Vishrantwadi</option>
                                <option value="Bhosari">Bhosari</option>
                                <option value="Dhankawadi">Dhankawadi</option>
                                <option value="Wagholi">Wagholi</option>
                            </select>
                        </div>
                        {errors.location && (<p className="error-text">{errors.location}</p>)}
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
                        <button type="submit" className="cc-submit-btn" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Application
                                    <i className="bi bi-arrow-right"></i>
                                </>
                            )}
                        </button>
                    </div>
                </form>



            </div>



            {/* TOAST UI */}
            {toast.show && (
                <div className={`pf-toast ${toast.type}`}>
                    <div className="cf-toast">
                        <FaCheckCircle className="text-warning fs-2" /> <span>{toast.message}</span> 
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplicationForm;