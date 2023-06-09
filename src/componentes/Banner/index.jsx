import React from "react"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import { TfiGithub, TfiLinkedin } from "react-icons/tfi"
import { RiWhatsappFill } from "react-icons/ri"
import { Box, Icone, Legenda, Titulo } from "componentes/UI"
import {
  Alinhador,
  BannerStyle,
  BoxBanner,
  BoxImagem,
  StyleConteudo,
} from "./style"
import styled from "styled-components"
import Imagem from "componentes/Imagem"

const IconeEstilizadoGit = styled(TfiGithub)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.corUm};
`
const IconeEstilizadoLik = styled(TfiLinkedin)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.corUm};
`
const IconeEstilizadoWhat = styled(RiWhatsappFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.corUm};
`

export default function Banner({ saudacao, titulo, descricao, icone }) {
  return (
    <>
      <BannerStyle>
        <Box>
          <BoxBanner>
            <BoxImagem>
              <Imagem />
            </BoxImagem>
            <StyleConteudo>
              <Alinhador>
                <Titulo>{saudacao}</Titulo>
                <Icone> {icone}</Icone>
              </Alinhador>
              <Titulo>{titulo}</Titulo>
              <Legenda menu>{descricao}</Legenda>
              <Alinhador>
                <Link to="https://github.com/Arttutu" target="_blank">
                  <IconeEstilizadoGit />
                </Link>
                <Link to="https://linkedin.com/in/santos-gomes" target="_blank">
                  <IconeEstilizadoLik />
                </Link>
                <Link
                  to="https://api.whatsapp.com/send/?phone=5511957243215"
                  target="_blank"
                >
                  <IconeEstilizadoWhat />
                </Link>
              </Alinhador>
              <Alinhador>
                <Link to="/projetos">
                  <BotaoPrincipal texto="Meus Projetos" />
                </Link>
                <Link to="/sobremim">
                  <BotaoPrincipal texto="Sobre Mim" />
                </Link>
              </Alinhador>
            </StyleConteudo>
          </BoxBanner>
        </Box>
      </BannerStyle>
    </>
  )
}
