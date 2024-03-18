//PROPS: ABREVIAÇÃO DE PROPRIEDADES. EM REACT, SÃO UMA FORMA DE PASSAR DADOS DE UM COMPONENTE PAI PARA UM COMPONENTE FILHO NO MESMO REACT.

//PARA QUE SERVE O PROPS? 
//REUTILIZAÇÃO DE COMPONENTES; COMUNICAÇÃO ENTRE OS COMPONENTS; CUSTOMIZAÇÃO E CONFIFGURAÇÕES.

import React from "react"
import Barra from "./assets/barra.png"
import Caixa from "./assets/caixa.png"
import Ovo from "./assets/ovo.png"
import ComponenteComProps from "./components/ComponenteComProps.jsx"
import styled from "styled-components"

const Section = styled.section`
  border: solid red;
  display: flex;
  justify-content: space-evenly;

`

function App(){
  return(
    <Section>
    <ComponenteComProps produto="Ovo de Páscoa" valor="R$300,00" imagem={Ovo}>
      <h2>PROMOÇÃO!!!</h2>
      <h6>Pagando no pix sai por R$299,00</h6>
    </ComponenteComProps>

    <ComponenteComProps produto="Barra de chocolate" valor="R$7,00" imagem={Barra} />
    <ComponenteComProps produto = "Caixa de bombom" valor="R$14,00" imagem={Caixa} />
    </Section>
  )
}

export default App


