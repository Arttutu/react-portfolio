import CartaoIcones from "componentes/CartaoIcones"
import { Legenda } from "componentes/UI"
import React from "react"
import styled from "styled-components"
const CardHabilidade = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.corUm};
  border-radius: 50px;
  padding: 15px;
`
export default function CartaoHabilidade({ icone, titulo }) {
  return (
    <CardHabilidade>
      <CartaoIcones habilidade icones={icone} />
      <Legenda menu>{titulo}</Legenda>
    </CardHabilidade>
  )
}