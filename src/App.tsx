import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  function toggleState() {
    setState((prev) => !prev);
  }
  return (
    <div>
      <div className="container mt-5">
        <div
          className="cube"
          style={{
            transform: `rotate3d(0, 1, 0, ${state ? 180 : 0}deg)`,
          }}
        >
          <div className="face front ">
            <img src="/img/dni-front.png" alt="" />
          </div>
          <div className="face back shadow-2xl">
            <img src="/img/dni-back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-rose-500 w-[90%] mx-auto opacity-0">
        <img src="/img/dni-front.png" alt="" />
      </div>

      <div className="mt-10 w-full flex flex-col justify-center items-center ">
        <div className="flex flex-col">
          <button
            onClick={toggleState}
            className="ring-[3px] ring-blue-500 text-blue-500 w-14 h-14 flex items-center justify-center rounded-full "
          >
            <svg
              style={{
                opacity: !state ? 0 : 1,
              }}
              className="absolute transition-opacity duration-500"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 11H2v2h20zm-4-4H6V4h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-2 11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"
              />
            </svg>
            <svg
              style={{
                opacity: state ? 0 : 1,
              }}
              className="absolute transition-opacity duration-500"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 11H2v2h20zm-4-9a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 18H6v-3h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"
              />
            </svg>
          </button>
          <p className="font-[500] text-xl text-center mt-2 text-neutral-600">
            Girar
          </p>
        </div>
      </div>
      {/* INFORMATION */}
      <div className="mt-32 flex  flex-wrap gap-2 p-2">
        <div className="grid-item flex-1">
          <p>Pre Nombres</p>
          <p>JOSE DANIEL</p>
        </div>
        <div className="grid-item flex-1">
          <p>Apellidos</p>
          <p>REYES MOSVICH</p>
        </div>
        <div className="grid-item flex-1/2">
          <p>Nacimiento</p>
          <p>03/01/2005</p>
        </div>
        <div className="grid-item ">
          <p>Ubigeo</p>
          <p>140103</p>
        </div>
        <div className="grid-item flex-1">
          <p>Sexo</p>
          <p>M</p>
        </div>
        <div className="grid-item flex-1">
          <p>Estado Civil</p>
          <p>S</p>
        </div>

        {/*  */}
        <div className="grid-item flex-1">
          <p>Fecha de inscripción</p>
          <p>24/11/2010</p>
        </div>
        <div className="grid-item flex-1">
          <p>Fecha de Emision</p>
          <p>09/02/2022</p>
        </div>
        <div className="grid-item flex-1">
          <p>Fecha de Caducidad</p>
          <p>09/02/2030</p>
        </div>
        <div className="grid-item flex-1">
          <p>Departamento</p>
          <p>Lima</p>
        </div>
        <div className="grid-item flex-1">
          <p>Provincia</p>
          <p>Lima</p>
        </div>
        <div className="grid-item flex-1">
          <p>Distrito</p>
          <p>Ate</p>
        </div>
        <div className="grid-item flex-1">
          <p>Grupo de Votacion</p>
          <p>259876</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <div className="w-full overflow-hidden">
          <img
            className="w-full max-h-16 object-cover"
            src="/img/barcode.gif"
            alt=""
          />
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <img className="w-full" src="img/Pdf417code.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
