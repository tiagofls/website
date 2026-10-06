import { process } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
export default function Process() {
  return <section className="section process-section"><div className="container"><SectionHeading label="COMO VAMOS TRABALHAR" title="Um processo claro, do início ao fim." /><div className="process-grid">{process.map(step => <article key={step.number}><span className="process-number">{step.number}<span /></span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
}
