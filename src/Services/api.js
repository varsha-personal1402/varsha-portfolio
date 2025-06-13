import axios from 'axios';

// Adjust the base URL to match your backend servlet path
const BASE_URL = 'http://localhost:8080/student-management';

export const getAllStudents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

export const getStudent = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student:', error);
    return null;
  }
};

export const addStudent = async (student) => {
  try {
    await axios.post(`${BASE_URL}/students`, student, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

export const updateStudent = async (id, student) => {
  try {
    await axios.put(`${BASE_URL}/students/${id}`, student, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/students/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};
