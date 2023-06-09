import CartaoIcones from "componentes/CartaoIcones"
import { Texto } from "componentes/UI"
import React from "react"
import styled from "styled-components"
const CardHabilidade = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  border: 3px solid ${(props) => props.cor};
  border-radius: 50px;
  padding: 15px;
`
export default function CartaoHabilidade({ icone, titulo, cor }) {
  return (
    <CardHabilidade cor={cor}>
      <CartaoIcones habilidade icones={icone} />
      <Texto menu>{titulo}</Texto>
    </CardHabilidade>
  )
}
