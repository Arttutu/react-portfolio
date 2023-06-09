import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import CartaoIcones from "componentes/CartaoIcones"
import styled from "styled-components"
import { corBranca, font } from "componentes/UI/variaveis"
import { Texto } from "componentes/UI"
const StyleCard = styled.article`
  height: 800px;
  padding: 20px 30px;
  justify-content: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: 0.9;
  transition: all.7s;
  transform: rotate(0deg);
  margin: 0 auto;
  text-decoration: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.corUm};
  &:hover {
    scale: 1.1;
    transform: rotate(1deg);
  }
  @media (max-width: 768px) {
    height: 700px;
    &:hover {
      scale: 1;
      transform: none;
    }
  }
`
export const TituloCard = styled.h3`
  font-family: ${font};
  font-size: 1.7em;
  color: ${corBranca};
`

const BoxIcones = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
`
const Imagem = styled.img`
  max-width: 100%;
  height: auto;
`
const BoxBotao = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 20px;
`

export default function CartaoProjeto({
  img,
  titulo,
  descricao,
  deploy,
  codigo,
  icone,
}) {
  return (
    <>
      <StyleCard>
        <TituloCard>{titulo}</TituloCard>

        <Imagem src={img} alt={titulo} />
        <Texto secundary>{descricao}</Texto>
        <TituloCard>Principais tecnologia:</TituloCard>
        <BoxIcones>
          <CartaoIcones icones={icone} />
        </BoxIcones>

        <BoxBotao>
          <Link to={codigo} target="_blank">
            <BotaoPrincipal texto="Código" card></BotaoPrincipal>
          </Link>
          <Link to={deploy} target="_blank">
            <BotaoPrincipal texto="Deploy" card></BotaoPrincipal>
          </Link>
        </BoxBotao>
      </StyleCard>
    </>
  )
}
