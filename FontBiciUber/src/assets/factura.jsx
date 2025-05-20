import { useState } from 'react';
import axios from 'axios';

export default function Factura() {
  const [formData, setFormData] = useState({
    nombre_del_Producto: '',
    Descripcion_del_Producto: '',
    precio: '',
    numero_factura: '',
    fecha_de_expedicion: '',
    cantidad: ''
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
      const response = await axios.post('http://localhost:8000/Factura_Data', formData);
      console.log("Respuesta del backend:", response.data);
      alert("Factura registrada exitosamente");
    } catch (error) {
      console.error("Error al registrar factura:", error.response?.data || error.message);
      alert("Error al registrar factura");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-black py-4 px-6">
        <img src="" alt="Logo" className="h-6" />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">Información de Factura</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Nombre del Producto</label>
              <input
                type="text"
                name="Nombre del Producto"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Descripción_del_Producto</label>
              <input
                type="text"
                name="Descripcion_del_Producto"
                className="w-full border border-gray-300 px-4 py-8 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Precio</label>
              <input
                type="number"
                name="precio"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Número de Factura</label>
              <input
                type="text"
                name="numero_factura"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Fecha de Expedición</label>
              <input
                type="date"
                name="fecha_de_expedicion"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Cantidad</label>
              <input
                type="number"
                name="cantidad"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition"
            >
              Registrar
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Después de llenar los campos correspondientes, por favor da clic en el botón "Registrar".
          </p>
        </div>
      </div>
    </div>
  );
}
