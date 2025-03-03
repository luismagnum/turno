import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const RecordatorioTurno = () => {
  const [nombre, setNombre] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !dia || !hora || !telefono) {
      setMensajeError('No puede enviar el mensaje vacío');
      setTimeout(() => {
        setMensajeError('');
      }, 3000);
      return;
    }

    const [anio, mes, diaDelMes] = dia.split('-').map(Number);
    const fecha = new Date(anio, mes - 1, diaDelMes);

    const diaFormateado = String(fecha.getDate()).padStart(2, '0');
    const mesFormateado = String(fecha.getMonth() + 1).padStart(2, '0');
    const anioFormateado = fecha.getFullYear();
    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${anioFormateado}`;

    const mensaje = `Psico. Zully Diaz: ${nombre}, te recordamos tu turno el ${fechaFormateada} a las ${hora} hs. Por favor confirmar.Gracias!`;
    const numeroWhatsApp = `549${telefono}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');

    setNombre('');
    setDia('');
    setHora('');
    setTelefono('');
    setMensajeEnviado(true);

    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-4 bg-white p-8 rounded-lg shadow-md">
      <span>
      <Image
      src="/logo.png"
      alt="Psico. Zully Diaz"
      width={50}
      height={50}
      className='flex text-center mx-auto'
      />
    </span>
        <h1 className="text-gray-800 text-xl font-bold mb-4 text-center">Psico. Zully Diaz</h1>
        <h2 className="text-gray-800 text-2xl font-bold mb-6 text-center">Recordatorio de Turno</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Nombre del Paciente</label>
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
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-800 transition"
          >
            <FaWhatsapp className="mr-2 font-bold" />
            Enviar Recordatorio
          </button>
        </form>
        {mensajeEnviado && (
          <div className="mt-4 p-2 bg-green-200 text-green-700 text-center rounded">
            Mensaje enviado
          </div>
        )}
        {mensajeError && (
          <div className="mt-4 p-2 bg-red-200 text-red-700 text-center rounded">
            {mensajeError}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordatorioTurno;
