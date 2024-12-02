import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.post('/employees', { firstName, lastName, email, department, position });
      navigate('/employees');
    } catch (error) {
      alert('Error adding employee');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;