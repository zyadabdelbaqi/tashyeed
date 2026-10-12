Favicon package

Files:
- favicon.ico: browser tab / legacy favicon
- favicon-16x16.png, favicon-32x32.png, favicon-48x48.png: standard browser sizes
- apple-touch-icon.png: iOS home-screen icon
- android-chrome-192x192.png and android-chrome-512x512.png: Android / PWA icons
- site.webmanifest: PWA icon manifest

For a typical website, copy this folder into your public directory and add these tags to the HTML head:

<link rel="icon" href="/favicon/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
<link rel="manifest" href="/favicon/site.webmanifest">

If your framework expects favicon.ico directly in the public root, copy favicon.ico there too.
