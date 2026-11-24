import React from 'react';
import BuildingAccount from '../components/BuildingAccount';
import DocumentCard from '../components/DocumentCard';
import Contacts from '../components/Contacts';

export default function CommercialPage() {
  const documents = [
    {
      title: 'Expensas',
      url: 'https://drive.google.com/drive/u/1/folders/1eznadvsLRJBdf5TskAeH3w8e0rUrS2q5'
    },
    {
      title: 'Recibos',
      url: 'https://drive.google.com/drive/u/1/folders/1oEa0HqrTheosDGo8cQfzKG7FjO7Hda4B'
    }
  ];
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