'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {enviado && (
        <div className="p-4 bg-green-100 text-green-800 rounded-lg text-sm font-semibold border border-green-300">
          ¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Apellidos y Nombres</label>
        <input
          type="text"
          required
          placeholder="Apellidos y Nombres"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono</label>
        <input
          type="tel"
          required
          placeholder="Teléfono"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Correo</label>
        <input
          type="email"
          required
          placeholder="Correo Electrónico"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Asunto</label>
        <input
          type="text"
          required
          placeholder="Asunto"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Mensaje</label>
        <textarea
          rows="4"
          required
          placeholder="Escriba su mensaje aquí..."
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition duration-200"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}