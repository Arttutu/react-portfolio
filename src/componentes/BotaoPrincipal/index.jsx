import React from "react"
import styled, { css } from "styled-components"
import {
  corBranca,
  corRoxoClaroUm,
  corRoxoEscuroDois,
  corRoxoEscuroUm,
  font,
} from "componentes/UI/variaveis"

const Botao = styled.button`
  border: none;
  width: ${({ card }) => (card ? "100px" : "200px")};
  border-radius: 20px;
  padding: ${({ card }) => (card ? "10px" : "20px")};
  background-color: ${(card) =>
    card ? card.theme.colors.corDois : card.theme.colors.corUm};
  color: ${corBranca};
  font-size: ${({ card }) => (card ? "1.2em" : "1.5em")};
  transition: 0.5s;
  transform: rotate(0deg);
  font-family: ${font};
  cursor: pointer;
  &:hover {
    background-color: ${({ card }) =>
      card ? corRoxoEscuroUm : corRoxoClaroUm};
    size: 1.1;
    transform: rotate(3deg);
  }
  @media (max-width: 768px) {
    width: ${({ card }) => (card ? "80px" : "120px")};
  }
`
export default function BotaoPrincipal({ texto, props, card }) {
  return <Botao card={card}>{texto}</Botao>
}
