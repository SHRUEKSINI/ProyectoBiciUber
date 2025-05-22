// src/pages/QuienesSomos.jsx

import { useState } from 'react';
import axios from 'axios';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h1>
      <p className="text-lg leading-7">
        Somos BiciUber, una empresa comprometida con la movilidad sostenible. Nuestra misión es facilitar el transporte en bicicleta a través de una plataforma rápida, segura y accesible.
      </p>
      <p className="mt-4 text-lg">
        Fundada en 2025, hemos ayudado a miles de personas a moverse eficientemente en las ciudades. ¡Únete a nosotros en este viaje verde!
      </p>
    </div>
  );
}
