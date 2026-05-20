import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacidadPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-white">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Legal
          </div>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-white">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-sm text-white/40">Última actualización: mayo 2025</p>

          <div className="mt-10 space-y-10 text-sm text-white/70 leading-relaxed">

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">1. Responsable del tratamiento</h2>
              <p>
                <strong className="text-white/90">Titular:</strong> Juan Leiva (LevelUp Design Co.)<br />
                <strong className="text-white/90">Email de contacto:</strong> contacto@levelupdesign.com<br />
                <strong className="text-white/90">Teléfono:</strong> 606 899 991<br />
                <strong className="text-white/90">Ubicación:</strong> Málaga, España
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">2. Datos que recopilamos</h2>
              <p>
                Este sitio web no dispone de formularios de registro ni bases de datos propias. Los únicos datos que pueden tratarse son los que el usuario facilita voluntariamente a través de:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Mensajes enviados por WhatsApp al número indicado en la web.</li>
                <li>Correos electrónicos enviados a la dirección de contacto.</li>
              </ul>
              <p>
                En ningún caso se recogen datos de forma automática sin conocimiento del usuario, salvo los datos de navegación estándar gestionados por el proveedor de alojamiento (dirección IP, navegador, páginas visitadas), que no son accesibles por el titular de esta web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">3. Finalidad del tratamiento</h2>
              <p>Los datos facilitados se utilizan exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Responder a consultas y solicitudes de asesoramiento.</li>
                <li>Gestionar la relación comercial con clientes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">4. Base legal</h2>
              <p>
                El tratamiento de los datos se basa en el consentimiento expreso del interesado al iniciar la comunicación, de acuerdo con el artículo 6.1.a del Reglamento General de Protección de Datos (RGPD).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">5. Conservación de datos</h2>
              <p>
                Los datos se conservan el tiempo necesario para atender la solicitud y, en su caso, durante el tiempo legalmente exigido para el mantenimiento de la relación contractual.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">6. Cesión a terceros</h2>
              <p>
                No se ceden datos a terceros salvo obligación legal. El uso de WhatsApp como canal de comunicación implica que los mensajes son gestionados conforme a la política de privacidad de Meta Platforms Ireland Ltd.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">7. Derechos del usuario</h2>
              <p>El interesado puede ejercer en cualquier momento los siguientes derechos:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Acceso, rectificación o supresión de sus datos.</li>
                <li>Limitación u oposición al tratamiento.</li>
                <li>Portabilidad de los datos.</li>
              </ul>
              <p>
                Para ejercerlos, puede escribir a: <strong className="text-white/90">contacto@levelupdesign.com</strong>
              </p>
              <p>
                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">8. Cookies</h2>
              <p>
                Este sitio web no utiliza cookies propias de seguimiento ni analítica. Pueden existir cookies técnicas mínimas gestionadas por el proveedor de alojamiento necesarias para el funcionamiento del sitio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">9. Cambios en esta política</h2>
              <p>
                Esta política puede actualizarse para adaptarse a cambios legales o del servicio. Se recomienda revisarla periódicamente. La fecha de última actualización aparece al inicio del documento.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
