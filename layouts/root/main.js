/** */
import { Container } from './ui/container'
import { Providers } from './ui/providers'

/** */
export const Root = ({ children }) => {
  /** */
  return (
    <Container>
      <Providers>{children}</Providers>
    </Container>
  )
}
