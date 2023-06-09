import styled from "styled-components"
import { corCinza, font } from "./variaveis"

export const Box = styled.div`
  max-width: ${(props) => (props.projeto ? "1400px" : "1200px")};
  height: auto;
  margin: 0 auto;
`
export const Titulo = styled.h1`
  font-size: 3.5em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.corUm};
  font-family: ${font};
  @media (max-width: 768px) {
    font-size: 2em;
  }
`
export const Legenda = styled.h2`
  font-size: 2em;
  color: ${(props) =>
    props.menu ? props.theme.colors.corUm : props.theme.colors.corDois};
  font-family: ${font};
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`
export const Icone = styled.div`
  font-size: 4em;
  color: ${(props) => props.theme.colors.corUm};
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`
export const Logo = styled.h2`
  font-size: 2.5em;
  font-family: ${font};
  color: ${(props) => props.theme.colors.corDois};
  &:hover {
    color: ${corCinza};
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`
export const DescCard = styled.p`
  font-family: ${font};
  font-size: 1.3em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.corDois};
`
export const Texto = styled.p`
  font-family: ${font};
  font-size: ${(props) => (props.secundary ? "1.3em" : "1.5em")};
  color: ${(props) =>
    props.secundary ? props.theme.colors.corDois : props.theme.colors.corUm};
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`
export const Nav = styled.nav``
export const NavLi = styled.li`
  font-weight: bold;
  font-family: ${font};
  color: ${(props) => props.theme.colors.corDois};
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.5s;
  gap: ${({ mobile }) => (mobile ? "1.5rem" : "")};
  &:hover {
    color: ${corCinza};
  }
`
export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
`
