import '../assets/css/about.css';

const About = () => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">About <span className="gold-text">Clasy Carz</span></h1>
            {/* <div className="gold-border mx-auto"></div> */}
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">

              <div className="glass-card p-4 p-md-5 about-card">
                <h3 className="gold-text text-center mb-3">Company Overview</h3>
                <p className='lead fontManrope text-center'> <span className='fw-bold'>CLASY CARZ PRIVATE LIMITED</span> (Cin- 49223PN2026PTC253677) is a fast-growing mobility and fleet management company based in Pune, operating successfully for the past 3+ years. The company has recently been incorporated as a Private Limited entity, establishing a strong legal and financial structure to support scalable expansion and investor participation.</p>
              </div>

            </div>

            <div className="col-lg-10 mx-auto">
              <div className="glass-card p-4 p-md-5 about-card">
                <h3 className="gold-text text-center mb-3">Legal & Compliance Details</h3>
                <div className="row fw-light">
                  <div className="col-md-6">
                    <div className="legal-detail fontManrope"><strong>CIN :</strong> U49223PN2026PTC253677</div>
                    <div className="legal-detail fontManrope"><strong>Registration No. :</strong> 253677</div>
                    <div className="legal-detail fontManrope"><strong>PAN :</strong> AANCC6798H</div>
                    <div className="legal-detail fontManrope"><strong>Shop Act License :</strong> 2631000321094063</div>
                  </div>
                  <div className="col-md-6">
                    <div className="legal-detail fontManrope"><strong>MSME Registration :</strong> UDYAM-MH-26-1115416</div>
                    <div className="legal-detail fontManrope"><strong>Banking Partner :</strong> IDFC FIRST BANK</div>
                    <div className="legal-detail fontManrope"><strong>Chartered Accountant :</strong> Hemant Shah & Associates</div>
                    <div className="legal-detail fontManrope"><strong>Roc :</strong>  ROC, PUNE</div>
                  </div>
                </div>
                <div className="alert alert-dark mt-3 border-gold text-center compliance-alert" style={{ background : 'linear-gradient(360deg, #fff, #D4AF37)',color:'#000 !important',border: 'none'}}>
                 <span className='greentick me-1' style={{filter: 'drop-shadow(0px 0px 2px black)',fontSize: '20px'}}>✔</span> Fully compliant and structured for transparent operations
                </div>
              </div>
            </div>

            <div className="col-lg-8 mx-auto">
              <div className="glass-card p-4 p-md-5 about-card">
                <h3 className="gold-text mb-3">Why Invest in CLASY CARZ?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2"><span className='greentick me-1'>✔</span> Rapidly growing urban mobility demand</li>
                  <li className="mb-2"><span className='greentick me-1'>✔</span> Asset-backed business (vehicle fleet)</li>
                  <li className="mb-2"><span className='greentick me-1'>✔</span> Strong operational control</li>
                  <li className="mb-2"><span className='greentick me-1'>✔</span> Transparent financial structure</li>
                  <li><span className='greentick me-1'>✔</span> Early-stage entry with high upside potential</li>
                </ul>
              </div>

              <div className="glass-card p-4 p-md-5 about-card">
                <h3 className="gold-text text-center mb-3">Vision</h3>
                <p className="lead fontManrope text-center">To become a leading fleet management and mobility solutions provider in India, scaling operations across multiple cities while delivering consistent value to customers, drivers, and investors.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About