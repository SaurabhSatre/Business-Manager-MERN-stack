import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

const CustomerAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        purpose: "",
    });

    useEffect(() => {
        // Set initial dummy appointments
        const dummyData = [
            { _id: 1, date: "2025-04-20", time: "10:00", purpose: "Consultation", status: "Scheduled" },
            { _id: 2, date: "2025-04-21", time: "14:30", purpose: "Follow-up", status: "Scheduled" },
        ];
        setAppointments(dummyData);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAppointment = {
            _id: Date.now(), // Using timestamp as a fake unique ID
            ...formData,
            status: "Scheduled"
        };

        setAppointments([newAppointment, ...appointments]);
        setFormData({ date: "", time: "", purpose: "" });
        alert("Book Appointment successfully");
    };

    return (
        <>
            <Navbar />
            <div className="min-vh-100" style={{ backgroundColor: "#61dafb" }}>
                <nav className="navbar navbar-light bg-white shadow mb-4">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1 mx-auto fw-bold text-primary">Book Appointment</span>
                    </div>
                </nav>

                <div className="container bg-white p-4 rounded shadow-sm" style={{ maxWidth: "600px" }}>
                    <h2 className="text-center mb-4">Schedule an Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="purpose"
                                placeholder="Purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Book Appointment
                        </button>
                    </form>

                    <h3 className="mt-5 mb-3">My Appointments</h3>
                    <ul className="list-group">
                        {appointments.map((appt) => (
                            <li key={appt._id} className="list-group-item">
                                <p><strong>Date:</strong> {appt.date}</p>
                                <p><strong>Time:</strong> {appt.time}</p>
                                <p><strong>Purpose:</strong> {appt.purpose}</p>
                                <p><strong>Status:</strong> {appt.status}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CustomerAppointments;
