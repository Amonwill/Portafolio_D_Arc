// src/lib/contact.ts
export function initContact() {
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btnTxt = document.getElementById('btn-text');
    if (btnTxt) btnTxt.innerText = "PROCESANDO...";

    try {
      const res = await fetch('/api/send-email', { 
        method: 'POST', 
        body: new FormData(contactForm) 
      });

      if (res.ok) {
        const st = document.getElementById('form-status');
        const txt = document.getElementById('status-text');
        if (st && txt) {
          st.classList.remove('hidden');
          txt.innerText = "SISTEMA: MENSAJE TRANSMITIDO CON ÉXITO.";
          contactForm.reset();
          setTimeout(() => st.classList.add('hidden'), 4000);
        }
      }
    } catch (err) {
      console.error("Error de transmisión:", err);
    } finally {
      if (btnTxt) btnTxt.innerText = "Ejecutar_Envío";
    }
  });
}