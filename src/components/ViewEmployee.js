import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employee:', err);
        setError('Failed to fetch employee details.');
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p>Loading employee details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Position:</strong> {employee.position}</p>
    </div>
  );
};

export default ViewEmployee;
