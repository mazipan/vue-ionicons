importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/vue-ionicons/app.059863c6fbdb8a08453cc57399fb6cee.css",
    "revision": "7ed611af3b868df2b69cd8b4ed623f44"
  },
  {
    "url": "app.36f2704370abe9f588bc.js",
    "revision": "1639b4dcb1f4eec47f9f6390935d8354"
  },
  {
    "url": "app.62911c8c015f8636f5f480e86828b8ea.css",
    "revision": "aa822280621268c42f6cde345d759030"
  },
  {
    "url": "/vue-ionicons/app.79b85e0c12c085e37dd4.js",
    "revision": "e4ac8d0d8c1887881cd70adbfd14561a"
  },
  {
    "url": "app.8332d347c887f6c7dd25.js",
    "revision": "e65795a2c389a946c0f643cb42d5579b"
  },
  {
    "url": "app.a4200bc45732827d791e.js",
    "revision": "c518205909a4ab133702ade47872af40"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "8fb51243e95b7e5b11aed824c2bbf6da"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "vendor.36f2704370abe9f588bc.js",
    "revision": "0baea52c112acda487b775190e1478aa"
  },
  {
    "url": "/vue-ionicons/vendor.79b85e0c12c085e37dd4.js",
    "revision": "6b341595a23a6fac1f7571317234f813"
  },
  {
    "url": "vendor.8332d347c887f6c7dd25.js",
    "revision": "a9d49902f372dd2d046f472df9cb0bb0"
  },
  {
    "url": "vendor.a4200bc45732827d791e.js",
    "revision": "922d884756bd8d347ae3e1453a89f63a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
