import React, { useState, useRef, useEffect } from 'react';

export default function BuildingAccount() {
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