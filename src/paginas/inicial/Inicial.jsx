import Banner from "componentes/Banner"
import Contato from "componentes/Contato"
import Divisor from "componentes/Divisor"
import Habilidades from "componentes/Habilidades"
import Projeto from "componentes/Projeto"
import SobreMim from "componentes/Sobre/SobreMim"
import React from "react"
import projetos from "./projetos.json"
import styled from "styled-components"
import { backgroundTheme } from "componentes/UI/variaveis"
const BackGroundMain = styled.main`
  background-color: ${backgroundTheme};
`
export default function Inicial() {
  return (
    <BackGroundMain>
      <Banner
        tituloBotao="Meus projetos"
        titulo="Eu sou Arthur Gomes"
        saudacao="Oi !"
        descricao="Se você está procurando por um desenvolvedor front-end, veio no lugar certo."
        path="/projetos"
      />
      <Divisor />
      <SobreMim />
      <Divisor />
      <Projeto
        projetos={projetos}
        tituloBotao="Outros Projetos"
        titulo="Meus Projetos"
        pergunta="O que eu fiz ?"
        path="/projetos"
      />
      <Divisor />
      <Habilidades />
      <Divisor />
      <Contato />
      <Divisor />
    </BackGroundMain>
  )
}
