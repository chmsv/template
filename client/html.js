export function Html({ body }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>MERN Template</title>
        <script defer="defer" src="/assets/js/main.bundle.js"></script>
        <link href="/assets/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
}