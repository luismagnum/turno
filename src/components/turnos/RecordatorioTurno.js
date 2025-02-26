import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const RecordatorioTurno = () => {
  const [nombre, setNombre] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const fecha = new Date(dia);
    const diaFormateado = String(fecha.getDate()).padStart(2, '0');
    const mesFormateado = String(fecha.getMonth() + 1).padStart(2, '0');
    const anioFormateado = fecha.getFullYear();
    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${anioFormateado}`;

    const mensaje = `Psico. Zully Diaz:'' ${nombre} '', te recordamos tu turno el ${fechaFormateada} a las ${hora} hs.`;
    const numeroWhatsApp = `549${telefono}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');

    setNombre('');
    setDia('');
    setHora('');
    setTelefono('');
  };

  return (
    <div className="max-w-md mx-4 md:mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
      <h1 className="text-gray-800 text-2xl font-bold mb-6 text-center">Psico. Zully Diaz</h1>
      <h2 className="text-gray-800 text-2xl font-bold mb-6 text-center">Recordatorio de Turno</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">Nombre del Paciente</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Día</label>
          <input
            type="date"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">Teléfono</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Ej: 2984123456"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-600 transition"
        >
          <FaWhatsapp className="mr-2 font-bold" />
          Enviar Recordatorio
        </button>
      </form>
    </div>
  );
};

export default RecordatorioTurno;
