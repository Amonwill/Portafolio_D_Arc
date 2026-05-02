import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  // LLAMADA A LA VARIABLE DE ENTORNO
  const RESEND_KEY = import.meta.env.RESEND_API_KEY;
  // VALIDACIÓN DE LA VARIABLE DE ENTORNO
  if (!RESEND_KEY) {
    console.error("CRITICAL_ERROR: La variable RESEND_API_KEY está vacía.");
    return new Response(
      JSON.stringify({ message: 'Error de configuración: API Key no detectada.' }), 
      { status: 500 }
    );
  }
  const resend = new Resend(RESEND_KEY);
  // PROCESAMIENTO DE LA SOLICITUD
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Campos incompletos.' }), { status: 400 });
    }
    const { data: resendData, error } = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: 'jannasdcross@gmail.com', 
      subject: `D_Arc Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </div>
      `,
    });
    // MANEJO DE ERRORES DE RESEND
    if (error) {
      console.error("Error de Resend:", error);
      return new Response(JSON.stringify({ message: 'Error de Resend', error }), { status: 500 });
    }
    return new Response(JSON.stringify({ message: 'Transmitido con éxito', id: resendData?.id }), { status: 200 });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(JSON.stringify({ message: 'Error interno de red' }), { status: 500 });
  }
};