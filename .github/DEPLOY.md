# Despliegue

- **Repositorio:** GitHub (`main`)
- **Hosting:** Vercel (production automático en cada push a `main`)
- **Dominio production:** https://levelupsolutions.es

## DNS (obligatorio para Vercel)

`levelupsolutions.es` debe apuntar **solo a Vercel** (registros del proyecto en Vercel → Domains). Si el DNS sigue en GitHub Pages (`185.199.108–111.153` / `*.github.io`), la web en vivo **no** usará el deployment de Vercel.

Mientras el dominio siga en Pages, el workflow `Deploy live (GitHub Pages)` publica cada push a `main` en la rama `gh-pages`. **Desactivar ese workflow** cuando el dominio esté solo en Vercel.

Tras migrar DNS, comprobar en Vercel que el deployment **Production** está **Ready** antes de validar la web en vivo.
