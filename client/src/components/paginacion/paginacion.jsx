import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";



import "./paginacion.css";

function Paginacion({ pagina, setPagina, maxPag }) {


  const paginated = useSelector((state) => state.pagin)

  useEffect(() => {
    if(paginated){
     setInput(1)
    }
   },[paginated])  


  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };
  const previousPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode == 13) {
      setPagina(parseInt(event.target.value));
      if (
        event.target.value < 1 ||
        parseInt(event.target.value) > Math.ceil(maxPag) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div >
      <div className="pag-container">
        <button
          className="pag-button"
          disabled={pagina === 1 || pagina < 1}
          onClick={previousPage}
        >
          ◀
        </button>
        <input
          className="input-pag"
          onChange={(event) => onChange(event)}
          onKeyDown={(event) => onKeyDown(event)}
          name="page"
          autoComplete="off"
          value={input}
        />
        <p className="pag"> / {Math.ceil(maxPag)}</p>
        <button
          className="pag-button"
          disabled={pagina === Math.ceil(maxPag) || pagina > Math.ceil(maxPag)}
          onClick={nextPage}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Paginacion;
