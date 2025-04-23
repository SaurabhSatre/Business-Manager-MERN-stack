import React from 'react'
import AuthToken from '../helper/AuthToken';
import EmployeePanel from '../screens/employee.js';
import CustomerAppointments from '../screens/customer.js';

function Home() {

    if (!AuthToken.getToken() || !AuthToken.isValidToken()) {
        window.location.href = "/login";
    }
    else if (AuthToken.getUserStatus() === "Employee") {
        return <EmployeePanel />
    }
    else if (AuthToken.getUserStatus() === "Customer") {
        return <CustomerAppointments />
    }
    return window.location.href = "/login";

}

export default Home;
