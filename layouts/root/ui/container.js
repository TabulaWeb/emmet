/** */
import { Source_Sans_3 } from 'next/font/google'

/** */
const source = Source_Sans_3({
  subsets: ['cyrillic'],
  variable: '--source'
})

/** */
export const Container = ({ children }) => {
  /** */
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
      <body className={source.className}>{children}</body>
    </html>
  )
}
