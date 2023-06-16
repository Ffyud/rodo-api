# rodo-api

API die dient als achterkant voor de rodo-gui.

### Lokaal draaien

Start de API lokaal:
<code>npm start</code>

Om lokaal te starten heb je eerst Node.js nodig: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Check of Node.js lokaal bestaat:
<code>node -v</code>

### Postman

Importeer postman-collection.json in Postman om de API lokaal te testen.

### Docker

Start de rodo-api in een container:
<code>docker-compose up -d</code>

Mogelijk moet de nginx.conf aangepast en de Certbot container weg om dit lokaal te kunnen doen.
Pas .env aan indien rodo-api op een domein met HTTPS moet draaien:
<code>export DOMAIN=subdomain.yourdomain.com
export EMAIL=your-email@example.com</code>
