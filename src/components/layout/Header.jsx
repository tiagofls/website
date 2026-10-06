import { useEffect, useState } from 'react'
import { navigation } from '../../data/site'
import Icon from '../ui/Icon'
export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return <header className="site-header"><div className="container header-inner">
    <a className="wordmark" href="#inicio" aria-label="Tiago Santos — início" onClick={() => setOpen(false)}>tiago santos<span>.</span></a>
    <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}<span>{open ? '−' : '+'}</span></button>
    <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="button button-small" href="#contacto" onClick={() => setOpen(false)}>Vamos conversar <Icon name="diagonal" size={16} /></a></nav>
  </div></header>
}
