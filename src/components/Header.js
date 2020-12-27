import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Navegacion from "./Navegacion"
import { Link } from "gatsby"

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
const Header = () => {
  return (
    <header
      css={css`
        background-color: #222;
        padding: 2rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <HomeLink
          to={"/"}
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          Hotel Gatsby
        </HomeLink>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header
