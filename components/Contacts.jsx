import React, { useState, useEffect, useRef } from 'react';
import FacebookIcon from './FacebookIcon';
import EmailIcon from './EmailIcon';
import CopyIcon from './CopyIcon'

export default function Contacts() {
  const [copyStatus, setCopyStatus] = useState('');
  const timeoutRef = useRef(null);
  const email = 'edificiomirafloresnorte@proton.me';

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  async function copyEmail() {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      } else {
        const input = document.createElement('textarea');
        input.value = email;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.append(input);
        input.select();
        copied = document.execCommand('copy');
        input.remove();
      }
    } catch {
      copied = false;
    }

    setCopyStatus(copied ? 'Correo copiado' : 'No se pudo copiar el correo');
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopyStatus(''), 2500);
  }

  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="container">
        <h2 id="contacts-title">Contactos</h2>
        <nav className="contacts__links" aria-label="Redes sociales y correo">
          <a
            className="contact-link contact-link--facebook"
            href="https://www.facebook.com/groups/1588102625623490/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link__icon"><FacebookIcon /></span>
            <span className="contact-link__text">
              <strong>Facebook</strong>
              <small>Grupo del edificio</small>
            </span>
            <span className="contact-link__arrow" aria-hidden="true">›</span>
          </a>

          <div className="contact-link contact-link--email">
            <span className="contact-link__icon"><EmailIcon /></span>
            <a className="contact-link__text contact-link__email" href={`mailto:${email}`}>
              <strong>Correo electrónico</strong>
              <small>{email}</small>
            </a>
            <button
              className="contact-link__copy"
              type="button"
              aria-label="Copiar correo electrónico"
              title="Copiar correo electrónico"
              onClick={copyEmail}
            >
              <CopyIcon />
            </button>
            <span className="contact-link__copy-status" role="status" aria-live="polite">
              {copyStatus}
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
}