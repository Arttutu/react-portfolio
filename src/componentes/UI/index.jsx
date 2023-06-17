import styled from "styled-components"
import { corBranca, corRoxoClaroUm, font } from "./variaveis"

export const Box = styled.div`
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
`
export const Titulo = styled.h1`
  font-size: 5em;
  font-weight: 700;
  color: ${corRoxoClaroUm};
  font-family: ${font};
`
export const Legenda = styled.span`
  font-size: 2em;
  color: ${corBranca};
  font-family: ${font};
`
export const Icone = styled.div`
  font-size: 4em;
  color: ${corRoxoClaroUm};
`
export const Logo = styled.h2`
  font-size: 2.5em;
  font-family: ${font};
  color: ${corBranca};
`
