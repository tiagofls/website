import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  const privacy = hash === '#/privacidade'
  useEffect(() => {
    document.title = privacy ? 'Privacidade · Tiago Santos' : 'Tiago Santos · Desenvolvimento web & mobile'
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1))
      if (target) target.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0 })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, privacy])
  return <><a className="skip-link" href="#conteudo">Saltar para o conteúdo</a><Header /><main id="conteudo">{privacy ? <PrivacyPage /> : <HomePage />}</main><Footer /></>
}
