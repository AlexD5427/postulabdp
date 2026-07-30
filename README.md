# postulabdp

Portal de talento para Banco de Desarrollo Productivo S.A.M. Rediseñado con una dirección Liquid Glass editorial: superficies translúcidas usadas con intención, profundidad azul/cian, tipografía de contraste y escenas abstractas inspiradas en el ritmo de navegación de ERA Residence sin copiar contenido ni identidad.

## Stack
Next.js 15 App Router, TypeScript, Framer Motion, GSAP/Lenis preparados para la siguiente iteración, Three.js preparado para escenas WebGL, CSS con OKLCH y middleware multidioma.

## Idiomas obligatorios
Todo texto visible nuevo debe añadirse en los cuatro idiomas: Español latinoamericano (`es`), Inglés (`en`), Aymara (`ay`) y Quechua (`qu`). No se deben incorporar cadenas visibles directamente en componentes sin pasar por `lib/i18n.ts`.

## Funciones incluidas
1. Explorador de convocatorias con búsqueda.
2. Guardado local de oportunidades.
3. Perfil de candidato persistente en navegador.
4. Bolsa de talento con consentimiento.
5. Login/espacio personal demo.
6. Cambio entre cuatro idiomas.
7. Preloader de marca "Trabaja en BDP S.A.M.".
8. Panel de accesibilidad: texto grande, alto contraste, daltonismo, reducción de movimiento y TTS.
9. Favicon e identidad BDP en SVG.
10. Diseño responsive con navegación desktop/mobile, tarjetas fluidas y estados de interacción.

## Nota de producto
No se implementa tracking de fase de postulación, tal como se pidió. La conexión real con convocatorias y perfiles debe entrar por API, con autenticación y persistencia server-side. El almacenamiento actual es demo local y no debe considerarse seguridad de producción.

## Vercel
`npm install && npm run build`. La variable opcional es `NEXT_PUBLIC_SITE_URL`. Para producción, conectar backend de talento, autenticación segura, almacenamiento de CV y políticas de privacidad antes de habilitar cuentas reales.
