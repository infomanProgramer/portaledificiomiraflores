import React, { useEffect, useRef, useState } from 'react';
import PorteriaPage from '../pages/PorteriaPage';
import CommercialPage from '../pages/CommercialPage';
import DomesticPage from '../pages/DomesticPage';

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
