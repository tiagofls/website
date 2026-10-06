import { useState } from 'react'
import { profile } from '../../data/site'
import Icon from '../ui/Icon'
export default function Contact() {
  const [status, setStatus] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setStatus('Email copiado.') }
    catch { setStatus('Não foi possível copiar automaticamente. Podes selecionar o email acima.') }
  }
  return <section id="contacto" className="contact-section"><div className="container contact-grid"><div><p className="eyebrow"><span />O PRÓXIMO PASSO COMEÇA AQUI</p><h2>Tens uma ideia?<br /><em>Vamos dar-lhe forma.</em></h2><p>Conta-me o que tens em mente. Podemos começar por uma conversa sobre os teus objetivos e o que precisas.</p></div><div className="contact-panel"><span className="contact-label">FALA DIRETAMENTE COMIGO</span><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Icon name="diagonal" size={24} /></a><div className="contact-actions"><a className="button button-dark" href={`mailto:${profile.email}?subject=${encodeURIComponent('Vamos falar de um projeto')}`}>Enviar email <Icon name="mail" size={18} /></a><button className="copy-button" onClick={copyEmail} aria-label="Copiar endereço de email"><Icon name={status === 'Email copiado.' ? 'check' : 'copy'} size={18} />Copiar</button></div><p className="contact-hint">Abre a tua aplicação de email. Se preferires, copia o endereço.</p><p className="copy-status" role="status">{status}</p></div></div></section>
}
