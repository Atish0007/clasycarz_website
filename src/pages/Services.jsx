import '../assets/css/services.css';

const Services = () => {

    const servicesList = [
        {
            title: "Fleet Aggregation",
            desc: "We manage a fleet of 60+ vehicles, ensuring high utilization and operational efficiency.",
            icon: "bi-truck-front-fill iconShadow"
        },
        {
            title: "Driver Partnerships",
            desc: "Partner with 160+ active drivers on leasing model that benefits all.",
            icon: "bi-people-fill iconShadow"
        },
        {
            title: "Platform Integration",
            desc: "Integrated with Uber India and other aggregators to maximize ride-hailing income.",
            icon: "bi-diagram-3-fill iconShadow"
        },
        {
            title: "Vehicle Support",
            desc: "Backed by Carrum Mobility Pvt Ltd for maintenance and vehicle lifecycle management.",
            icon: "bi-tools iconShadow"
        },
        {
            title: "Expansion Planning",
            desc: "Scaling to 200+ vehicles and 500+ drivers within the current academic year.",
            icon: "bi-graph-up-arrow iconShadow"
        },
        {
            title: "Investment Returns",
            desc: "18%* assured annual returns with stable and recurring revenue model.",
            icon: "bi-cash-coin iconShadow"
        }
    ];

    return (
        <>
            <section className="py-5 mt-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold">Our <span className="gold-text">Services</span></h1>
                        {/* <div className="gold-border mx-auto"></div> */}
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>
                        <p className="lead fontManrope text-white-50 mt-3">Comprehensive mobility and fleet management solutions</p>
                    </div>
                    <div className="row g-4">
                        {servicesList.map((service, idx) => (
                            <div className="col-md-6 col-lg-4" key={idx}>
                                <div className="benefit-card p-4 text-center h-100 service-card cursor-pointer"> {/* glass-card*/}
                                    <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
                                    <h3 className="gold-text h4">{service.title}</h3>
                                    <p className="fontManrope text-white-50 mt-2">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="glass-card p-5 text-center">
                                <h3 className="gold-text">Expansion Plan in Detail</h3>
                                <p className="lead fontManrope mt-3">Target to scale from <strong className="text-white">60 → 200 vehicles</strong> within the current academic year</p>
                                <p className='fontManrope'>Expand driver network to <strong>500+ active drivers</strong> and strengthen presence across Pune and nearby regions.</p>
                                <a href="/contact" className="btn btn-gold mt-3">Partner With Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;