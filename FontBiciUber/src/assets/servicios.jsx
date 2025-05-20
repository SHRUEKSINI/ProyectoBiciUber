// src/Servicios.jsx

import { useState } from 'react';
import axios from 'axios';

export default function Servicios() {
  const [formData, setFormData] = useState({
    Despinchar: '',
    Remolcada: '',
    Refaccion: '',
    Mantenimiento: '',
    Limpieza: '',
    Revision: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando al backend:", formData);

    try {
      const response = await axios.post('http://localhost:8000/Servicios', formData);
      console.log("Respuesta del backend:", response.data);
      alert("Servicio registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar cliente:", error.response?.data || error.message);
      alert("Error al registrar Servicio");
      
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Barra superior negra con logo */}
      <div className="bg-black py-4 px-6">
        <img
          src=""
          alt="Logo"
          className="h-6"
        />
      </div>

      {/* Contenido principal centrado */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 text-center">
          <h1 className="text-2xl font-semibold mb-6">
            ¿Cuál es el Servicio que necesitas?
          </h1>

          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <input
              type="text"
              name="despinchar"
              placeholder="despinchar"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="remolcada"
              placeholder="remolcada"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="refaccion"
              placeholder="refaccion"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mantenimiento"
              placeholder="mantenimiento"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="limpieza"
              placeholder="limpieza"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="revision"
              placeholder="revision"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-semibold"
            >
              Registrar
            </button>
          </form>

          {/* Texto informativo inferior */}
          <p className="text-xs text-gray-500 mt-6">
            Llena el campo del servicio que necesitas
          </p>
        </div>
      </div>
    </div>
  );
}
