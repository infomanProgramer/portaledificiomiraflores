import React, { useEffect, useRef, useState } from 'react';

const routes = {
  '7c4f1b9e-6a23-4d81-9f52-a0c86e3d714b': {
    title: 'Comercial',
    Component: CommercialPage
  },
  'e2a91c6d-4f83-47b0-b518-39d7f0a2ce64': {
    title: 'Porteria',
    Component: PorteriaPage
  },
  '5d8e2a71-c936-4b04-a5f1-82d0c76e3b49': {
    title: 'Bienvenido al portal del edificio',
    Component: DomesticPage
  }
};

const documents = [
  {
    title: 'Novedades',
    url: 'https://drive.google.com/drive/folders/1Demu5AjN_C_X95N-muSE6tw9lIQIC9Sa?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Actas de Asamblea',
    url: 'https://drive.google.com/drive/folders/1YQcezioeRxFiJtjgWvtrWFZnGH_su4PQ?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Expensas',
    url: 'https://drive.google.com/drive/folders/1V7sIaXIGIXoOLR6UdMT0ME1zwQmdnjtV?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Reglamento Interno y Estatuto',
    url: 'https://drive.google.com/drive/folders/1NllnLf0maT5tlfouwjFcvBCKkpBJO8Ol?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Comunicados',
    url: 'https://drive.google.com/drive/folders/1H9gGz9z0Ua0nXUdSxGw542uT0oIOeTY1?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Horarios de limpieza porteria',
    url: 'https://drive.google.com/drive/folders/1ZqL6gWPdlILSpjJqf-pH58NXrgvWiIUW?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
  },
  {
    title: 'Documentación OTIS',
    url: 'https://drive.google.com/drive/folders/10StUMCAr4Ib_j3_NC1BgtNLVGogBzeNE'
  },
  {
    title: 'Documentación CIDAL',
    url: 'https://drive.google.com/drive/folders/1iY6fUofFe4DeVpvHamluljrHkjxQxJKx'
  },
  {
    title: 'Consulta tus deudas',
    url: 'https://drive.google.com/drive/u/1/folders/18LYR-mxyNpFu_0VrYL9FarAg5wIH5mhk'
  },
  {
    title: 'Consulta tus deudas asdfasd',
    url: 'https://drive.google.com/drive/u/1/folders/18LYR-mxyNpFu_0VrYL9FarAg5wIH5mhk'
  },
  {
    title: 'Recibos',
    url: 'https://drive.google.com/drive/folders/1DaqYWUvCe1DjKg2pYNFcaK0Zy4C15gNR'
  },
  {
    title: 'Mantenimiento bombas',
    url: 'https://drive.google.com/drive/folders/15wfwPwoRVknUazJz1sgYurepIhTSUg-A'
  }
];

function getRouteKey() {
  return window.location.hash.replace(/^#\/?/, '');
}

function useRouteKey() {
  const [routeKey, setRouteKey] = useState(getRouteKey);

  useEffect(() => {
    function updateRoute() {
      setRouteKey(getRouteKey());
    }

    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  return routeKey;
}

function Header() {
  return (
    <header className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="brand" aria-label="Edificio Miraflores Norte">
          <svg className="brand__icon" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M12 54V25l13-8v37M25 54V10l14-7v51M39 54V20l13 7v27"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M7 54h50M18 31h3M18 38h3M31 21h3M31 29h3M31 37h3M45 32h3M45 40h3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="brand__label">EDIFICIO</span>
          <h1>Miraflores Norte</h1>
          <p>Tu espacio, nuestro compromiso</p>
        </div>
        <p className="hero__title">Portal de<br />documentos</p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__building" aria-hidden="true">♜</span>
          <strong>Edificio Miraflores Norte</strong>
        </div>
        <span className="footer__separator" aria-hidden="true" />
        <p>Juntos hacemos un mejor lugar</p>
      </div>
    </footer>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" focusable="false" aria-hidden="true">
      <path
        d="M9 4h10l6 6v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 4v6h6M12 16h10M12 21h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentCard({ document }) {
  return (
    <a
      className="document-card"
      href={document.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="document-card__icon">
        <DocumentIcon />
      </span>
      <span className="document-card__body">
        <strong>{document.title}</strong>
      </span>
      <span className="document-card__arrow" aria-hidden="true">›</span>
    </a>
  );
}

function BuildingAccount() {
  const [isQrOpen, setQrOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isQrOpen && dialog && !dialog.open) dialog.showModal();
  }, [isQrOpen]);

  return (
    <section className="building-account" aria-labelledby="building-account-title">
      <div className="building-account__content">
        <span className="building-account__eyebrow">Pagos del edificio</span>
        <h2 id="building-account-title">Cuenta del edificio</h2>
        <p>Escanea el código QR para realizar tus pagos.</p>
      </div>
      <button
        className="building-account__qr"
        type="button"
        aria-label="Ampliar código QR de la cuenta del edificio"
        onClick={() => setQrOpen(true)}
      >
        <img
          src="images/qr_edificio_miraflores.jpeg"
          alt="Código QR de la cuenta del Edificio Miraflores Norte"
        />
      </button>
      <dialog
        ref={dialogRef}
        className="qr-modal"
        aria-labelledby="qr-modal-title"
        onClose={() => setQrOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="qr-modal__content">
          <button
            className="qr-modal__close"
            type="button"
            aria-label="Cerrar código QR ampliado"
            onClick={() => dialogRef.current?.close()}
          >
            &times;
          </button>
          <h2 id="qr-modal-title">Cuenta del edificio</h2>
          <img
            src="images/qr_edificio_miraflores.jpeg"
            alt="Código QR ampliado de la cuenta del Edificio Miraflores Norte"
          />
        </div>
      </dialog>
    </section>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 32 32" focusable="false" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <path
        d="M18.1 27V17.4h3.2l.5-3.7h-3.7v-2.4c0-1.1.3-1.8 1.9-1.8H22V6.2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.5h-3.3v3.7H14V27h4.1Z"
        fill="#fff"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" focusable="false" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="m5 9 11 9 11-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Contacts() {
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

function DomesticPage() {
  return (
    <>
      <section className="documents" aria-labelledby="documents-title">
        <div className="container">
          <div className="intro">
            <div className="intro__title">
              <span className="intro__icon" aria-hidden="true">⌂</span>
              <h2 id="documents-title">Bienvenido al portal del edificio</h2>
            </div>
            <p>
              Aquí encontrarás toda la información y documentación
              importante de nuestro edificio.
            </p>
          </div>
          <nav className="document-grid" aria-label="Categorías de documentos">
            {documents.map((document) => (
              <DocumentCard key={document.title} document={document} />
            ))}
          </nav>
          <BuildingAccount />
        </div>
      </section>
      <Contacts />
    </>
  );
}

function CommercialPage() {
  return (
    <section className="documents">
      <div className="container">
        <h2>Comercial</h2>
        <p>Bienvenido al area comercial 46456</p>
      </div>
    </section>
  );
}

function PorteriaPage() {
  return (
    <section className="documents">
      <div className="container">
        <h2>Porteria</h2>
        <p>Bienvenido a la sección de portería de nuestro sitio web. 2222</p>
      </div>
    </section>
  );
}

function App() {
  const routeKey = useRouteKey();
  const route = routeKey ? routes[routeKey] : null;
  const Page = route?.Component;

  useEffect(() => {
    document.title = route
      ? `${route.title} | Edificio Miraflores Norte`
      : 'Edificio Miraflores Norte | Portal de documentos';

    if (routeKey) window.scrollTo(0, 0);
  }, [route, routeKey]);

  return (
    <>
      <Header />
      <main id="contenido" aria-live="polite">
        {Page ? <Page /> : routeKey ? <p className="container">Ruta no encontrada.</p> : null}
      </main>
      <Footer />
    </>
  );
}

export default App;
