import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Función para obtener todos los usuarios
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};

// Función para obtener un usuario por su ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${userId}:`, error);
    throw error;
  }
};

// Get Main User
export const getMainUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/mainUser`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuario principal:", error);
    throw error;
  }
};
