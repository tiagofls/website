import { useState } from 'react'
import { profile } from '../../data/site'
export default function Portrait() {
  const [failed, setFailed] = useState(false)
  return <div className="portrait">
    {!failed ? <img src={profile.photo} alt="Tiago Santos" width="776" height="758" fetchPriority="high" onError={() => setFailed(true)} /> : <div className="portrait-placeholder" role="img" aria-label="Monograma de Tiago Santos"><span className="portrait-orbit" /><span className="portrait-initials">ts<span>.</span></span><span className="portrait-caption">DESENVOLVIMENTO COM PROPÓSITO</span></div>}
    <div className="portrait-label"><span className="status-dot" /><span>Programador. Freelancer.<br /><strong>O teu próximo parceiro de projeto.</strong></span><span className="portrait-symbol">↗</span></div>
  </div>
}
