/** @module npm */
import { styled } from '@linaria/react'

export const Container = ({ children }) => {
  return <Main>{children}</Main>
}

const Main = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100svh;
  width: 100%;
  background-color: #020202;
`
