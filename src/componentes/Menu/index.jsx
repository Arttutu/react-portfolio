import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsLightbulbFill } from "react-icons/bs"
import { Box, Logo, Nav, NavLi } from "componentes/UI"
import { BoxHeader, BoxMenu, UlStyle } from "./style"

export default function Menu({ setMenu, temaMudar, mudarTema }) {
  function scrollToTop() {
    window.scrollTo(0, 10)
  }

  const handleMudarTema = () => {
    mudarTema((tema) => (tema === "light" ? "dark" : "light"))
  }

  return (
    <BoxHeader>
      <Box>
        <Nav>
          <UlStyle>
            <Link to="/" onClick={scrollToTop}>
              <Logo>Arthur</Logo>
            </Link>
            <BoxMenu>
              <NavLink to="/sobremim">
                <NavLi>Sobre Mim</NavLi>
              </NavLink>
              <NavLink to="/projetos">
                <NavLi>Projetos</NavLi>
              </NavLink>
              <NavLink to="/contato">
                <NavLi>Contato</NavLi>
              </NavLink>
              <NavLi>
                <BsLightbulbFill
                  size={25}
                  color="#FFF"
                  onClick={handleMudarTema}
                />
              </NavLi>
            </BoxMenu>
            <GiHamburgerMenu
              className="hamburguer"
              size={35}
              color="#FFF"
              onClick={() => setMenu(true)}
            />
          </UlStyle>
        </Nav>
      </Box>
    </BoxHeader>
  )
}