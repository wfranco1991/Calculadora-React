import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaDivide } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BiPlusMedical } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { FaEquals } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  //inicio else if
  const handleButtonClick = (value) => {
    if (value === "=") {
      let resultado;
      try {
        resultado = eval(input);
        setResult(resultado);
        setInput(resultado.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === '%') {
      let resultado;
      try {
        resultado = eval(input) / 100;
        setResult(resultado);
        setInput(resultado.toString());
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    }else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "delete") {
      setInput(input.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="container-calculardora">
      <div className="input-container">
        <input className="mostrar" type="text" value={input} readOnly />
        <input className="resultado" value={result} />
      </div>
      <div className="button-container">
        <button className="borrar" onClick={() => handleButtonClick("C")}>
          C
        </button>
        <button className="borrar" onClick={() => handleButtonClick("delete")}>
          <RiDeleteBack2Fill />
        </button>
        <button className="calculo" onClick={() => handleButtonClick("%")}>
          %
        </button>
        <button className="calculo" onClick={() => handleButtonClick("/")}>
          <FaDivide />
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="calculo" onClick={() => handleButtonClick("*")}>
          <ImCross />
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button className="calculo" onClick={() => handleButtonClick("-")}>
          <TiMinus />
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button className="calculo" onClick={() => handleButtonClick("+")}>
          <BiPlusMedical />
        </button>
        <button onClick={() => handleButtonClick("=")} id="result">
          <FaEquals />
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
      </div>
    </div>
  );
};

export default App;
