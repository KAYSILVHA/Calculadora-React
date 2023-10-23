import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 30rem;
  height: auto;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #FFD700;
  padding: 30px 20px;
  border-radius: 2rem;
  gap: 20px;
  @media screen and (max-width: 500px){
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 70%;
  border:1px solid #FFD700;
  padding: 5px 20px;
  font-size: 1.5rem;
  text-align: end;
  background-color: #C672FF80;
  color: #FFD700;
  font-weight: 600;
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

const Button = styled.button`
  border-radius: 1rem;
  width: 2rem;
  height: 3rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #FFD700;
  background-color: transparent;
  border: 2px solid #FFD700;
`;
const Result = styled.div`
  font-size: 2rem;
  background-color: #C672FF80;
  width: 70%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFD700;
  border-radius: 1rem;
  padding: 10px 0;
  font-weight: 600;
`;

export default function Calculadora() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturarPrimeiroValor = (evento) => {
    setPrimeiroValor(Number(evento.target.value))
  }
  const capturarSegundoValor = (evento) => {
    setSegundoValor(Number(evento.target.value))
  }
  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }
  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }
  return (
    <Container>
      <h2>Calculadora</h2>
      <Input onChange={capturarPrimeiroValor} type="text" />
      <Input onChange={capturarSegundoValor} type="text" />
      <ButtonsDiv>
        <Button onClick={soma}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={divisao}>/</Button>
        <Button onClick={multiplicacao}>X</Button>
      </ButtonsDiv>
        <h3>Resultado: </h3>
      <Result>
        {resultado}
        </Result>
    </Container>


  )
}