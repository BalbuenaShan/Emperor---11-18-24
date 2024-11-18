// BookAppointment.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BookAppointment.css';

const services = [
    { name: 'Home Service Haircut', price: 450 },
    { name: 'Haircut & Wash', price: 300 },
    { name: 'Beard Shave', price: 200 },
    { name: 'Beard Hair Dye', price: 200 },
    { name: 'Hair Dye Labor', price: 350 },
    { name: 'Scalp Massage', price: 280 }
];

const barbers = ['Shan', 'Aaron', 'Zac', 'Jimny', 'Lin'];

const BookAppointment = () => {
    const navigate = useNavigate();
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [randomBarber, setRandomBarber] = useState(null);
    const [hasPreferredBarber, setHasPreferredBarber] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        paymentMethod: 'In Store'
    });
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddService = (service) => {
        setSelectedServices([...selectedServices, service]);
    };

    const handleBarberSelection = (option) => {
        if (option === 'yes') {
            setHasPreferredBarber(true);
            setRandomBarber(null);
        } else {
            setHasPreferredBarber(false);
            setRandomBarber(barbers[Math.floor(Math.random() * barbers.length)]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigate('/');
    };

    return (
        <div className="book-appointment-container">
            <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/about" className="nav-link">ABOUT US</Link>
                <Link to="/services" className="nav-link">SERVICES</Link>
            </nav>
            <button className="back-to-home-button" onClick={() => navigate('/')}>Back to Home</button>
            <h1>Book an Appointment</h1>
            <div className="services-container">
                <h2>Services</h2>
                <div className="service-cards">
                    {services.map((service) => (
                        <div key={service.name} className="service-card" onClick={() => handleAddService(service)}>
                            <p>{service.name}</p>
                            <p>₱{service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="barber-selection">
                <h2>Do you have a preferred barber?</h2>
                <div className="barber-options">
                    <button onClick={() => handleBarberSelection('yes')}>YES</button>
                    <button onClick={() => handleBarberSelection('no')}>NO</button>
                </div>
                {hasPreferredBarber && (
                    <div className="barber-list">
                        <h3>Select a Barber</h3>
                        <ul>
                            {barbers.map((barber) => (
                                <li key={barber}>
                                    <button onClick={() => setSelectedBarber(barber)}>{barber}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {!hasPreferredBarber && randomBarber && (
                    <p>Random Barber: {randomBarber}</p>
                )}
            </div>
            <form onSubmit={handleSubmit} className="appointment-form">
                <h2>Contact Details</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="number" value={form.number} onChange={handleChange} required />
                </label>
                <label>
                    Payment Method:
                    <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                        <option value="In Store">Pay in Store</option>
                        <option value="Online">Pay Online</option>
                    </select>
                </label>
                <button type="submit">Schedule Appointment</button>
            </form>
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Booked Sent</p>
                        <button onClick={handleCloseModal}>Okay</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookAppointment;