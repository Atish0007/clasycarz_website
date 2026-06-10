import { useState } from 'react'
import '../assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will contact you shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Get in <span className="gold-text">Touch</span></h1>
            <div className="gold-border mx-auto"></div>
            <p className="lead text-white-50 fontManrope">We're here to answer your queries and investment opportunities</p>
          </div>

          <div className="row g-5">
            <div className="col-lg-5">
              <div className="glass-card p-4 h-100">
                <h3 className="gold-text mb-4">Contact Information</h3>
                <div className="contact-card">
                  <p className="mb-1"><i className="bi bi-geo-alt-fill gold-text me-2 iconShadow"></i> <strong>Registered Office</strong></p>
                  <p className="text-white-50 fontManrope">A-24, Shop No. 03, Kasturba Housing Society, Vishrantwadi, Pune – 411006, Maharashtra, India</p>
                </div>
                <div className="contact-card">
                  <p className="mb-1"><i className="bi bi-telephone-fill gold-text me-2 iconShadow"></i> <strong>Phone</strong></p>
                  <p className="text-white-50 fontManrope">+91 9161096161</p>
                </div>
                {/* <div className="contact-card">
                  <p className="mb-1"><i className="bi bi-globe2 gold-text me-2 iconShadow"></i> <strong>Website</strong></p>
                  <p className="text-white-50">www.clasycarz.com</p>
                </div> */}
                <div className="contact-card">
                  <p className="mb-1"><i className="bi bi-envelope-fill gold-text me-2 iconShadow"></i> <strong>Email</strong></p>
                  <p className="text-white-50 fontManrope">invest@clasycarz.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="glass-card p-4">
                <h3 className="gold-text mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-white-50">Full Name</label>
                    <input type="text" className="form-control form-control-custom" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white-50">Email Address</label>
                    <input type="email" className="form-control form-control-custom" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white-50">Message</label>
                    <textarea className="form-control form-control-custom" rows="5" name="message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-gold w-100">Submit Inquiry</button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-5 map-container">
            <iframe 
              title="Clasy Carz Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.916208234856!2d73.892621!3d18.586444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c716ab3c0b0f%3A0x7b8e6a0c9e3c5d8!2sVishrantwadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1699876543210!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;