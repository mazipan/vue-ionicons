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
    "url": "/vue-ionicons/app.36f2704370abe9f588bc.js",
    "revision": "1639b4dcb1f4eec47f9f6390935d8354"
  },
  {
    "url": "/vue-ionicons/app.62911c8c015f8636f5f480e86828b8ea.css",
    "revision": "aa822280621268c42f6cde345d759030"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "4df394f552c1f4de52c76bf490b588f1"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.36f2704370abe9f588bc.js",
    "revision": "0baea52c112acda487b775190e1478aa"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
