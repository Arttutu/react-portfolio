import styled from "styled-components"

export const BannerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`
export const StyleConteudo = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 1em;
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 2em;
    margin: 0 20px;
    align-items: center;
    text-align: center;
  }
`
export const Alinhador = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`
export const BoxImagem = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: ${({ secundary }) => (secundary ? "block" : "none")};
  }
`

export const BoxBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 5em;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3em;
  }
`
