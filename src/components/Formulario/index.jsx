import React from "react";
import "./form.css";
import { useState } from "react";
import { useEffect } from "react";

const Form = ({ filme }) => {

    const submitForm = async (e) => {

    e.preventDefault();
    const idLocacao = Math.floor(Math.random() * (1000 - 0 + 1));

    let infosCliente = `
        ID: ${idLocacao}\n
        Dados do Cliente:\n
        Nome: ${document.getElementById("nome").value}
        Sobrenome: ${document.getElementById("sobrenome").value}
        E-mail: ${document.getElementById("email").value}
        Celular: ${document.getElementById("celular").value}
        RG: ${document.getElementById("rg").value}\n

        Dados do Filme:\n
        Título: ${filme.titulo}
        Valor: ${filme.valor}

        Data da Locação:\n
        02/10/2023

        Local:\n
        Jundiaí
    `

    saveFile(infosCliente, idLocacao);
    
  };

  const saveFile = (obj, id) => {
    const blob = new Blob([obj], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `locacao_${id}.txt`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
      </div>
      <div>
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" id="sobrenome" name="sobrenome" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="number">Número de celular</label>
        <input type="number" id="celular" name="number" />
      </div>
      <div>
        <label htmlFor="rg">RG</label>
        <input type="number" id="rg" name="rg" />
      </div>
      <div className="btn_enviar">
        <input type="submit" value="Criar Cadastro" />
      </div>
    </form>
  );
};

export default Form;
