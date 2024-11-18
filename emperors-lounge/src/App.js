import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BookAppointment from './BookAppointment';

const App = () => {
    const handleScroll = (event, id) => {
        event.preventDefault();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Header onNavClick={handleScroll} />
                        <Services />
                        <Team />
                        <About />
                        <Footer />
                    </div>
                } />
                <Route path="/book-appointment" element={<BookAppointment />} />
            </Routes>
        </Router>
    );
};

const Header = ({ onNavClick }) => (
    <header
        id="home"
        className="section header"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}background1.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            position: 'relative',
            minHeight: '100vh',
            color: 'white',
            textAlign: 'center'
        }}
    >
        <nav className="nav">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT US</Link>
            <Link to="/services" className="nav-link">SERVICES</Link>
        </nav>
        <Link to="/book-appointment">
            <button className="book-appointment">BOOK APPOINTMENT</button>
        </Link>
    </header>
);

const Services = () => (
    <section id="services" className="section services">
        <h2>Emperor <span className="highlight">Signature</span> Haircut</h2>
        <div className="service-list">
            {serviceData.map((service, index) => (
                <Service key={index} service={service} />
            ))}
        </div>
        
    </section>
);

const Service = ({ service }) => (
    <div className="service">
        <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.name} />
        <p>{service.name}</p>
    </div>
);

const serviceData = [
    { image: 'Haircut.png' },
    { image: 'Shampoo.png' },
    { image: 'ub&am.png' },
    { image: 'Hottowel.png' },
    { image: 'Blowdry.png' },
];

const Team = () => (
    <section
        id="team"
        className="section team"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}team.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            position: 'relative',
            minHeight: '100vh',
            color: 'white',
            textAlign: 'center'
        }}
    >
        <div className="profile-container">
            <div className="profile-item">
                <div className="profile-circle">
                    <img src={`${process.env.PUBLIC_URL}barber1.jpg`} alt="Barber 1" />
                </div>
                <p>Raprap</p>
            </div>

            <div className="profile-item">
                <div className="profile-circle">
                    <img src={`${process.env.PUBLIC_URL}barber2.jpg`} alt="Barber 2" />
                </div>
                <p>Bentot</p>
            </div>

            <div className="profile-item">
                <div className="profile-circle">
                    <img src={`${process.env.PUBLIC_URL}barber3.jpg`} alt="Barber 3" />
                </div>
                <p>Kram</p>
            </div>
        </div>
    </section>
);

const About = () => (
    <section
        id="about"
        className="section about"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}downbg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            position: 'relative',
            minHeight: '100vh',
            color: 'white',
            textAlign: 'left'
        }}
    >
        <div className="about-container">
            <div className="about-content">
                <h2>About Us</h2>
                <p className="about-text">
                    Emperors Lounge & Barbershop: Where Comfort Meets Quality. Immerse Yourself in an Inviting Atmosphere Where Excellence and Client Happiness Are Our Top Priorities. Indulge in the Emperor's Signature Haircut, a Luxurious Experience That Leaves You Feeling Refreshed, Rejuvenated, and Ready to Conquer the World. Classic or Modern, We're Here to Ensure Your Hair Journey Is Nothing Short of Extraordinary.
                </p>
            </div>
            <div className="contact-content">
                <h2>Contact Us</h2>
                <p>
                    <img src={`${process.env.PUBLIC_URL}mobile.png`} alt="Phone" className="contact-icon" />
                    0926 695 9395
                </p>
                <p>
                    <img src={`${process.env.PUBLIC_URL}mail.png`} alt="Email" className="contact-icon" />
                    emperorsbarbersph@gmail.com
                </p>
                <p>
                    <img src={`${process.env.PUBLIC_URL}facebook.png`} alt="Facebook" className="contact-icon" />
                    emperorsbarbershopph
                </p>
                <p>
                    <img src={`${process.env.PUBLIC_URL}instagram.png`} alt="Instagram" className="contact-icon" />
                    emperorsbarbersph
                </p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2024 Emperors Lounge & Barbershop. All rights reserved.</p>
    </footer>
);

export default App;