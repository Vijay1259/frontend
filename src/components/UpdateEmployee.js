import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/employees/${id}`, employee);
      navigate('/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee');
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdateEmployee}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={employee.firstName || ''}
            onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={employee.lastName || ''}
            onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={employee.email || ''}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            placeholder="Department"
            value={employee.department || ''}
            onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            placeholder="Position"
            value={employee.position || ''}
            onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
          />
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
