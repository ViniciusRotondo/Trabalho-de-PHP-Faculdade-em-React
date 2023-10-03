import Form from "../../components/Formulario";
import "./filme.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Filme = () => {
  const location = useLocation();
  let id = location.state?.id;

  const [filme, setFilme] = useState();

  const getFilme = async () => {
    if (id > 0) {
      try {
        const response = await axios.get(
          "http://localhost/projetop1/index.php"
        );
        const filteredData = response.data.find((item) => item.id === id);
        setFilme(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return;
  };

  useEffect(() => {
    getFilme();
  }, []);

  return (
    <>
      {!filme && <p>Filme não encontrado</p>}
    <div className="container_filme">
      <img src={filme?.image} alt="" /> 
    
    <div className="container_texto">
      {filme && <h1>{filme?.titulo}</h1>}


        <ul>
            <li><b>Ano de lançamento:</b>{filme?.ano}</li>
            <li><b>Genero: </b>{filme?.genero}</li>
            <li><b>Duração: </b>{filme?.duracao}</li>
            <li><b>Sinopse: </b>{filme?.descricao}</li>
            <li><b>Valor de locação: </b>{filme?.valor}</li>
        </ul>
        </div>
    </div>


      <div className="form_container">
        <h1>Faça seu cadastro</h1>
        <Form filme={filme} />
      </div>
    </>
  );
};

export default Filme;
