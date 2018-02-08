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
    "url": "/vue-ionicons/app.53aa82d2e19820d1910fec7cd6d98bfc.css",
    "revision": "f349a5bcbafc377ae3836a9278a8747e"
  },
  {
    "url": "/vue-ionicons/app.eeafcb5d23aaed8573a5.js",
    "revision": "fe1130809560023d01d63d0f48337960"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "b18d14d8143e90bd91c7ea0a424441ac"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.eeafcb5d23aaed8573a5.js",
    "revision": "96002660b27f5f6c8712bedfe818ea18"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
