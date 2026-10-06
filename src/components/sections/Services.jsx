import { services } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
export default function Services() {
  return <section id="servicos" className="section services-section"><div className="container"><div className="section-intro"><SectionHeading label="O QUE POSSO FAZER POR TI" title={<>Ideias diferentes.<br />Soluções à tua medida.</>} /><p>Um novo projeto ou uma solução que precisa de evoluir. Encontro contigo o caminho técnico para o próximo passo.</p></div><div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><div className="service-top"><span className="service-icon"><Icon name={service.icon} size={28} /></span><span className="index-number">/{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul className="service-tags">{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href="#contacto" className="service-link">Falar sobre este serviço <Icon name="diagonal" size={18} /></a></article>)}</div></div></section>
}
