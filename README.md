# MFMP · Sitio personal

Página personal independiente, con tres frentes: Docencia, Salesforce y Otros.
Docencia enlaza a https://mfmp-docencia.pages.dev/ y mantiene los cursos en su sitio actual.
Salesforce y Otros indican «Próximamente» hasta contar con contenido real.

## Desarrollo

HTML, CSS y JavaScript estáticos, sin dependencias ni compilación. Abrir `index.html` en un navegador o ejecutar `python3 -m http.server 8000` en esta carpeta.

- `index.html`: textos, enlace de Docencia y contacto de LinkedIn.
- `assets/style.css`: diseño, colores y adaptación a móvil.
- `assets/venn.css`: diseño y colores del diagrama.
- `assets/venn.js`: selección e interacción de los círculos.
- `.nojekyll`: entrega directa de archivos en GitHub Pages.

## Publicación en GitHub Pages

1. Crear un repositorio público llamado `mfernanda-mp.github.io` en la cuenta `mfernanda-mp`.
2. Subir el contenido de esta carpeta a la raíz de la rama `main`.
3. En **Settings → Pages → Build and deployment**, elegir **Deploy from a branch**, rama **main** y carpeta **/ (root)**; guardar.
4. Esperar la publicación y comprobar la dirección que informa GitHub Pages.

Sitio público: https://mfernanda-mp.github.io/

Documentación: https://docs.github.com/en/pages/quickstart

Este repositorio contiene exclusivamente la página personal. No necesita copiar materiales, configuraciones ni funciones del proyecto docente.

## Identidad visual

Paleta: verde `#BDD9BF`, azul `#2E4052`, amarillo `#FFC857`, blanco `#FFFFFF` y ciruela `#412234`.
El sitio utiliza exclusivamente modo oscuro, con fondo azul y texto claro. Los círculos usan rellenos translúcidos verde `#5DCAA5`, azul `#042C53` y amarillo `#FAC775`, con mezcla en las intersecciones.
