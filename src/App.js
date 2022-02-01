import React from 'react'
import {Div, H1, Span, Label, Input, Button, H2} from './MyStyles'

import { useState } from 'react'

export default function App() {
  const[peso, setPeso] = useState('100kg');
  const[altura, setAltura] = useState('');

  const [mesagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem("Você está abaixo do peso" + imc.toFixed(2))
    }else if (imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC " + imc.toFixed(2))
    }else if (imc >= 14.9 && imc < 34.9){
      setMensagem("Você está levente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if (imc > 34.9){
      setMensagem("Cuidado, Obesidade! " + imc.toFixed(2))
  }
}

  return (
      <Div>
        <H1>Calculadora IMC</H1>
        <Span>Vamos calcular seu IMC</Span>

        <Label>
          <Input type="text" name="" id="" placeholder="Peso em (kg) Ex:90"      
          value={peso}
          onChange={(e) => setPeso(e.target.value)}  
          />
          <Input type="text" name="" id=""  placeholder="Altura (cm) Ex: 180"    
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          />
          <Button onClick={calcularIMC}>
           Calcular
          </Button>
        </Label>

        <H2>{mesagem}</H2>
      </Div>
  );
}


