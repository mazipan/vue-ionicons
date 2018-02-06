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
    "url": "/vue-ionicons/app.16cea99849da4e0a3ca3.js",
    "revision": "6f091c3ef79bb6ac2a5f81741b2d733b"
  },
  {
    "url": "/vue-ionicons/app.329fbdf0edfd34b41187994733ca80b5.css",
    "revision": "ed033136951f2b45eee3e7be416801ef"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "86b33473564adbed6b4d94b595371ed4"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.16cea99849da4e0a3ca3.js",
    "revision": "fcc109d4001ddd28f75e846300ebb1de"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
