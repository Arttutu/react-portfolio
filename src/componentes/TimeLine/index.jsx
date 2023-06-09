import CardTrajetoria from "componentes/CardTrajetoria"
import { Box, Titulo } from "componentes/UI"
import React from "react"
import styled from "styled-components"
import Info from "./info.json"
import { ImArrowLeft } from "react-icons/im"

const BoxTitulo = styled.div`
  margin: 180px 0px 100px 0px;
  text-align: center;
`
const BoxCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
  gap: 2em;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 3em;
    margin: 70px 30px;
  }
`
const IconSeta = styled(ImArrowLeft)`
  font-size: 52px;
  color: ${(props) => props.theme.colors.corUm};
  display: ${(props) => (props.icone == "false" ? "none" : "block")};
  @media (max-width: 768px) {
    display: none;
  }
`

const Educacao = () => {
  return (
    <Box projeto>
      <BoxTitulo>
        <Titulo>Minha Trajetória até aqui</Titulo>
      </BoxTitulo>
      <BoxCard>
        {Info.map((item, index) => (
          <>
            <CardTrajetoria
              data={item.data}
              imagem={item.foto}
              titulo={item.nome}
              descricao={item.descricao}
              key={index}
            />
            <IconSeta icone={item.icone} />
          </>
        ))}
      </BoxCard>
    </Box>
  )
}

export default Educacao
