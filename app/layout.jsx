import { Header } from './components'
import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
