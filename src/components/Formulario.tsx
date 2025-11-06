

export default function Formulario() {
  return (
    <div className="">
        <h2 className="text-center mt-20">Mi nuevo Formulario</h2>

        <div className="items-center mt-10 flex flex-col">
          <label htmlFor="name" className="mb-2 text-gray-700"
          >Escriba tu nombre: </label>
          <input
           type="text"
           id="name"
           placeholder="Escribe tu nombre aqui"
           className="border border-gray-300 rounded-lg p-2 w-80"
          />

          <label htmlFor="email" className="text-gray-700"
          >Escribe tu correo electronico:</label>
          <input
            type="email"
            id="email"
            placeholder="Escribe tu correo aqui"
            className="border border-gray-300 rounded-lg p-2 w-80"
          />

        <div>
        
          <select
             id="cards"
             className="border border-gray-300 rounded-lg w-80 mt-5"
          >
            <option>-- Selecciona una opcion --</option>
            <option value="" ></option>
            <option value="" ></option>
            <option value="" ></option>
            <option value="" ></option>
            <option value="" ></option>
            <option value="" ></option>
            <option value="" ></option>
          </select>

          </div>
        </div>
    </div>
  )
}
