import React from 'react';
import BuildingAccount from '../components/BuildingAccount';
import DocumentCard from '../components/DocumentCard';
import Contacts from '../components/Contacts';

export default function PorteriaPage() {
  const documents = [
    {
      title: 'Reglamento Interno',
      url: 'https://drive.google.com/drive/u/1/folders/1NllnLf0maT5tlfouwjFcvBCKkpBJO8Ol'
    },
    {
      title: 'Manual de Funciones',
      url: 'https://drive.google.com/drive/u/1/folders/1oip5ZQdPuXQCz5N_ldp5QcBV2XCFPlXd'
    },
    {
      title: 'Comunicados',
      url: 'https://drive.google.com/drive/folders/1Iwf7LGrs6h8gEH5IVm0n9smLTlbwJnsa'
    }
  ];
  return (
    <>
      <section className="documents" aria-labelledby="documents-title">
      <div className="container">
        <div className="intro">
          <div className="intro__title">
              <span className="intro__icon" aria-hidden="true">⌂</span>
              <h2 id="documents-title">Bienvenido al portal del edificio - Administración</h2>
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