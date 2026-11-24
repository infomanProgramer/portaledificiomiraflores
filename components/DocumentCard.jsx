import React from 'react';
import DocumentIcon from './DocumentIcon';

export default function DocumentCard({ document }) {
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