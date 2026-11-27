import React from 'react';
import BuildingAccount from '../components/BuildingAccount';
import DocumentCard from '../components/DocumentCard';
import Contacts from '../components/Contacts';

export default function DirectivaPage() {
    const documents = [
        {
            title: 'Correspondencia recibida',
            url: 'https://drive.google.com/drive/folders/1Demu5AjN_C_X95N-muSE6tw9lIQIC9Sa?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
        },
        {
            title: 'Correspondencia enviada',
            url: 'https://drive.google.com/drive/folders/1YQcezioeRxFiJtjgWvtrWFZnGH_su4PQ?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto'
        },
        {
            title: 'Facturas',
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
            title: 'Recibos',
            url: 'https://drive.google.com/drive/folders/1DaqYWUvCe1DjKg2pYNFcaK0Zy4C15gNR'
        },
        {
            title: 'Mantenimiento bombas',
            url: 'https://drive.google.com/drive/folders/15wfwPwoRVknUazJz1sgYurepIhTSUg-A'
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