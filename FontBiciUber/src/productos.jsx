import { useState } from 'react';
import axios from 'axios';

import React from "react";

const productos = [
  {
    nombre: "Bomba de Aire",
    descripcion: "Inflador portátil para bicicletas.",
    imagen: "https://via.placeholder.com/150",
    precio: 35000,
  },
  {
    nombre: "Kit de Parches",
    descripcion: "Kit completo para reparar pinchazos.",
    imagen: "https://via.placeholder.com/150",
    precio: 12000,
  },
  {
    nombre: "Palancas Desmontables",
    descripcion: "Herramientas para desmontar llantas fácilmente.",
    imagen: "https://via.placeholder.com/150",
    precio: 8000,
  },
  {
    nombre: "Tubo de Solución",
    descripcion: "Líquido para vulcanizar parches.",
    imagen: "https://via.placeholder.com/150",
    precio: 5000,
  },
  {
    nombre: "Corta Cadena",
    descripcion: "Herramienta para cortar y ajustar cadenas.",
    imagen: "https://via.placeholder.com/150",
    precio: 18000,
  },
  {
    nombre: "Extractor de Piñones",
    descripcion: "Extrae fácilmente piñones de la rueda.",
    imagen: "https://via.placeholder.com/150",
    precio: 25000,
  },
];

const Productos = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tienda de Productos para Bicicletas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-4">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-700 mb-2">{producto.descripcion}</p>
            <p className="text-green-600 font-bold">${producto.precio.toLocaleString()}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
