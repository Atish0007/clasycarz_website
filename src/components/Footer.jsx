import '../assets/css/footer.css';
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-custom pt-4 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            
            <h4 className="mb-3 ms-3"><img src={logo} className="footerLogo mb-3" width="26" height="auto" alt="ClasyCarz" /> CLASY<span className="gold-text">CARZ</span></h4>
            <p className="text-white-50 small fontManrope">
              Premium mobility & fleet management solutions based in Pune.
            </p>
            <div className="mt-3">
              <a href="#" className="text-white-50 me-3"><i className="bi bi-facebook footerIcon"></i></a>
              <a href="#" className="text-white-50 me-3"><i className="bi bi-instagram footerIcon"></i></a>
              <a href="#" className="text-white-50 me-3"><i className="bi bi-linkedin footerIcon"></i></a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="gold-text mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link small"> <i className="bi bi-link-45deg"></i> Home</a></li>
              <li><a href="/about" className="footer-link small"> <i className="bi bi-link-45deg"></i> About Us</a></li>
              <li><a href="/services" className="footer-link small"> <i className="bi bi-link-45deg"></i> Services</a></li>
              <li><a href="/contact" className="footer-link small"> <i className="bi bi-link-45deg"></i> Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="gold-text mb-3">Contact Info</h5>
            <p className="text-white-50 small mb-1">
              <i className="bi bi-geo-alt-fill iconShadow fontManrope me-2"></i> A-24, Shop No. 03, Kasturba Housing Society, Vishrantwadi, Pune – 411006
            </p>
            <p className="text-white-50 small mb-1">
              <i className="bi bi-telephone-fill iconShadow fontManrope me-2"></i> +91 9161096161
            </p>
            <p className="text-white-50 small">
              <i className="bi bi-envelope-fill iconShadow fontManrope me-2"></i> info@clasycarz.com
            </p>
          </div>
        </div>
        <hr className="bg-secondary opacity-25" />
        <div className="text-center text-white-50 small">
          © {new Date().getFullYear()} CLASY CARZ PRIVATE LIMITED | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer