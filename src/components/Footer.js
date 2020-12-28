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
const Footer = ({ title }) => {
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
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
          <Navegacion />
          <HomeLink
            to={"/"}
            css={css`
              color: #fff;
              text-align: center;
            `}
          >
            Hotel Gatsby
          </HomeLink>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 3rem;
        `}
      >
        {title} . Todos los derechos Reservados &copy;{" "}
        {new Date().getFullYear()}{" "}
      </p>
    </>
  )
}

export default Footer
