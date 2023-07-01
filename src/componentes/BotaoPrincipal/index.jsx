import React from "react"
import styled, { css } from "styled-components"
import {
  corBranca,
  corCinza,
  corPreta,
  corRoxoClaroUm,
  corRoxoEscuroDois,
  font,
} from "componentes/UI/variaveis"

const Botao = styled.button`
  border: none;
  width: ${({ card }) => (card ? "100px" : "200px")};
  border-radius: 15px;
  padding: ${({ card }) => (card ? "10px" : "20px")};
  background-color: ${({ card, theme }) =>
    card ? theme.colors.corBotaoCard : theme.colors.corUm};
  color: ${corBranca};
  font-size: ${({ card }) => (card ? "1.2em" : "1.5em")};
  transition: 0.5s;
  transform: rotate(0deg);
  font-family: ${font};
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transform: rotate(1deg);
    background-color: ${corCinza};
    color: ${corPreta};
  }
  @media (max-width: 768px) {
    width: ${({ card }) => (card ? "80px" : "120px")};
    font-size: 1.5em;
  }
`

export default function BotaoPrincipal({ texto, card }) {
  return <Botao card={card}>{texto}</Botao>
}
