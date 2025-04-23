import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import AuthToken from "../helper/AuthToken";

const EmployeePanel = () => {
  const [employee, setEmployee] = useState({
    name: AuthToken.getUserName() || "John Doe",
    email: AuthToken.getEmail() || "john@example.com",
    role: AuthToken.getUserStatus() || "Employee",
  });

  const [attendance, setAttendance] = useState([]);
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    // Load dummy attendance data on mount
    const dummyAttendance = [
      { date: "2025-04-22", status: "Present" },
      { date: "2025-04-21", status: "Present" },
      { date: "2025-04-20", status: "Absent" },
    ];
    setAttendance(dummyAttendance);
  }, []);

  const handleMarkAttendance = () => {
    const today = new Date().toISOString().split("T")[0];
    setAttendance([{ date: today, status: "Present" }, ...attendance]);
    setIsMarked(true);
  };

  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="min-vh-100" style={{ backgroundColor: 'rgb(201, 76, 76)' }}>
        <nav className="navbar navbar-light bg-light shadow mb-4">
          <div className="container">
            <span className="navbar-brand mb-0 h1 mx-auto">Employee Panel</span>
          </div>
        </nav>

        <div className="container bg-white p-4 rounded shadow-sm" style={{ maxWidth: "800px" }}>
          <h2 className="text-center mb-4">Employee Profile</h2>
          <div className="mb-3"><strong>Name:</strong> {employee.name}</div>
          <div className="mb-3"><strong>Email:</strong> {employee.email}</div>
          <div className="mb-3"><strong>Role:</strong> {employee.role}</div>

          <h3 className="mt-5 mb-3">Attendance</h3>
          <button
            className={`btn ${isMarked ? 'btn-secondary' : 'btn-success'} w-100 mb-4`}
            onClick={handleMarkAttendance}
            disabled={isMarked}
          >
            {isMarked ? "Attendance Marked" : "Mark Attendance"}
          </button>

          <h4>Attendance History</h4>
          <ul className="list-group">
            {attendance.map((record, index) => (
              <li key={index} className="list-group-item">
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Status:</strong> {record.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeePanel;
