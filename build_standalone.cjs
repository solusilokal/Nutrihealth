const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// 1. Bundle JS into IIFE (Self-executing, no ES module, no CORS issues on file://)
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

// 2. Read compiled CSS from dist/assets/
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

// 3. Create standalone.html (works 100% on file:// double click and offline!)
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#0c594c" />

    <title>Nutrihealth - Konselor Gizi Profesional & Terpercaya</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="Nutrihealth - Konselor Gizi Profesional & Terpercaya" />
    <meta name="description" content="Wujudkan tubuh sehat ideal, kelola kondisi medis, dan perbaiki pola makan Anda bersama ahli gizi bersertifikat. Solusi nutrisi personal untuk kualitas hidup yang lebih baik." />
    <meta name="keywords" content="Konselor Gizi Palangka Raya, Ahli Gizi Palangka Raya, Nutrihealth, Dietisien Palangka Raya, Konsultasi Diet, Meal Plan, Solusilokal" />
    <meta name="author" content="Nutrihealth" />
    <meta name="robots" content="index, follow" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./logo-nutrihealth.png" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Nutrihealth" />
    <meta property="og:url" content="https://solusilokal.github.io/Nutrihealth/" />
    <meta property="og:title" content="Nutrihealth - Konselor Gizi Profesional & Terpercaya" />
    <meta property="og:description" content="Wujudkan tubuh sehat ideal, kelola kondisi medis, dan perbaiki pola makan Anda bersama ahli gizi bersertifikat. Solusi nutrisi personal untuk kualitas hidup yang lebih baik." />
    <meta property="og:image" content="https://solusilokal.github.io/Nutrihealth/gambarSEO.jpg" />
    <meta property="og:image:secure_url" content="https://solusilokal.github.io/Nutrihealth/gambarSEO.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="772" />
    <meta property="og:image:height" content="940" />
    <meta property="og:image:alt" content="Nutrihealth - Konselor Gizi Profesional & Terpercaya Palangka Raya" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/Nutrihealth/" />
    <meta name="twitter:title" content="Nutrihealth - Konselor Gizi Profesional & Terpercaya" />
    <meta name="twitter:description" content="Wujudkan tubuh sehat ideal, kelola kondisi medis, dan perbaiki pola makan Anda bersama ahli gizi bersertifikat. Solusi nutrisi personal untuk kualitas hidup yang lebih baik." />
    <meta name="twitter:image" content="https://solusilokal.github.io/Nutrihealth/gambarSEO.jpg" />

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#f1fcf4] min-h-screen text-[#063c37]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('standalone.html written successfully! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
