import { profile } from '../../data/site'
import Icon from '../ui/Icon'
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="wordmark" href="#inicio">tiago santos<span>.</span></a><p>© {new Date().getFullYear()} {profile.name}</p><div className="footer-links"><a href="#/privacidade">Privacidade</a><a href="#inicio">Voltar ao topo <Icon size={14} name="diagonal" /></a></div></div></footer>
}
