/** @module npm */
import { styled } from '@linaria/react'

export const Container = ({ children }) => {
  return <Main>{children}</Main>
}

const Main = styled.div`
  height: 100svh;

  display: grid;
  grid-template-columns: 55vw 1fr;

  @media screen and (max-width: var(--phone)) {
    grid-template-columns: 1fr;
    padding: var(--padding);
  }
`
