import '../assets/css/home.css';
import hero from "../assets/images/clasycarzHero.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="container cst-pt-6">
          <div className="row align-items-center "> {/* min-vh-100 */}
            <div className="col-lg-6 hero-animate mb-0 mb-lg-0">
              <span className="cstHomeBtn text-uppercase">Premium Mobility</span> {/* gold-text */}
              <h1 className="display-3 fw-bold text-white mt-3">
                Drive with <span className="gold-text">Clasy Carz</span>
              </h1>
              <p className="lead text-white-50 mt-3 fontManrope letter_sp">
                India's fastest-growing fleet aggregation & management company, offering 18% assured annual returns to investors.
              </p>
              <div className="mt-4 d-flex gap-3 flex-wrap">
                <a href="/contact" className="btn btn-gold">Invest Now</a>
                <a href="/services" className="btn btn-outline-gold">Explore Services</a>
              </div>
              <div className="row mt-5 g-4">
                <div className="col-4">
                  <div className="stat-number iconShadow">3+</div>
                  <div className="text-white-50 small">Years of Excellence</div>
                </div>
                <div className="col-4">
                  <div className="stat-number iconShadow">50+</div>
                  <div className="text-white-50 small">Vehicles</div>
                </div>
                <div className="col-4">
                  <div className="stat-number iconShadow">160+</div>
                  <div className="text-white-50 small">Drivers</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-animate">
              <img 
                src={hero}
                alt="Luxury Mercedes Car - Clasy Carz Fleet" 
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Company <span className="gold-text">Overview</span></h2>
            <div className="gold-border mx-auto"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="glass-card p-4 p-md-5 ">
                <p className="lead text-white-50 fontManrope letter_sp text-center">
                  <span className='fw-bold'>CLASY CARZ PRIVATE LIMITED</span> is a fast-growing mobility and fleet management company based in Pune, 
                  operating successfully for the past <strong className="text-white">3+ years</strong>. The company has recently 
                  been incorporated as a Private Limited entity, establishing a strong legal and financial structure 
                  to support scalable expansion and investor participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model & Operational Strength */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="glass-card p-4 h-100">
                <h3 className="gold-text mb-3">Business Model</h3>
                <p>CLASY CARZ operates a fleet aggregation and management model, partnering with drivers and leveraging leading ride-hailing platforms.</p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"> <span className='greentick me-1'>✓</span> Vehicle-based earnings (daily ride operations)</li>
                  <li className="mb-2"> <span className='greentick me-1'>✓</span> Driver partnerships & revenue sharing</li>
                  <li> <span className='greentick me-1'>✓</span> Platform-based income (via aggregator apps)</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="glass-card p-4 h-100">
                <h3 className="gold-text mb-3">Operational Strength</h3>
                <div className="row text-center">
                  <div className="col-6 mb-3">
                    <div className="stat-number iconShadow">50+</div>
                    <div>Vehicles Under Mgmt</div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="stat-number iconShadow">160+</div>
                    <div>Active Driver Network</div>
                  </div>
                  <div className="col-6">
                    <div className="stat-number iconShadow">10</div>
                    <div>Employees</div>
                  </div>
                  <div className="col-6">
                    <div className="stat-number iconShadow">3</div>
                    <div>Operational Branches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Strategic Partnerships */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="glass-card p-4">
                <h3 className="gold-text">Growth & Performance</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"> <i className="bi bi-graph-up-arrow iconShadow me-2"></i> Growth Rate : <strong>2X</strong> (consistent scaling)</li>
                  <li className="mb-2"><i className="bi bi-cash-coin iconShadow me-2"></i> Net Profit Ratio : <strong>1:1</strong></li>
                  <li><i className="bi bi-speedometer2 iconShadow me-2"></i> Operational Efficiency : High vehicle utilization</li>
                </ul>
                <p className="mt-3 text-white-50"><span className='greentick me-1'>✓</span> Demonstrates a profitable and sustainable business model</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="glass-card p-4">
                <h3 className="gold-text">Strategic Partnerships</h3>
                <p> <i className="bi bi-car-front-fill iconShadow me-2"></i> <strong>Vehicle Support :</strong> Carrum Mobility Pvt Ltd</p>
                <p> <i className="bi bi-diagram-3-fill iconShadow me-2"></i> <strong>Platform Integration :</strong> Uber India</p>
                <p className="text-white-50 mt-3"> <span className='greentick me-1'>✓</span> Backed by industry players, ensuring stability and scalability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Investment <span className="gold-text">Opportunity</span></h2>
            <div className="gold-border mx-auto"></div>
            <p className="lead text-white-50 mt-3 fontManrope letter_sp">High-growth investment in the rapidly expanding mobility sector</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="glass-card boxshadow p-3 text-center">
                <div className="stat-number iconShadow fs-1">18%</div>
                <p className="fontManrope fw-bolder mt-2">Assured Annual Returns</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card boxshadow p-3 text-center">
                <div className="stat-number iconShadow fs-1">✓</div>
                <p className="fontManrope fw-bolder mt-2">Proven Business Model</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card boxshadow p-3 text-center">
                <div className="stat-number iconShadow fs-1"><i className="bi bi-graph-up-arrow"></i></div>
                <p className="fontManrope fw-bolder mt-2">Scalable Expansion</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="glass-card boxshadow p-3 text-center">
                <div className="stat-number iconShadow fs-1"><i className="bi bi-rocket-takeoff-fill"></i></div>
                <p className="fontManrope fw-bolder mt-2">Early-stage Entry</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-gold">Invest with Clasy Carz →</a>
          </div>
        </div>
      </section>

      {/* Expansion Plan & Vision */}
      <section className="py-5 bg-premium-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="glass-card p-4 h-100">
                <h3 className="gold-text">Expansion Plan</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-3"><i className="bi bi-car-front-fill iconShadow me-2"></i> <strong>50 → 200 vehicles</strong> within the current academic year</li>
                  <li className="mb-3"><i className="bi bi-people-fill iconShadow me-2"></i> Expand driver network to <strong>300+ active drivers</strong></li>
                  <li><i className="bi bi-geo-alt-fill iconShadow me-2"></i> Strengthen presence across Pune and nearby regions</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="glass-card p-4 h-100">
                <h3 className="gold-text">Our Vision</h3>
                <p>To become a leading fleet management and mobility solutions provider in India, scaling operations across multiple cities while delivering consistent value to customers, drivers, and investors.</p>
                <div className="mt-3 gold-text fst-italic">"Driving Excellence, Every Mile"</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home