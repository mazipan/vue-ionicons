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
    "revision": "02131c451649b4eeeac746f21917d3ea"
  },
  {
    "url": "/vue-ionicons/app.ebf9f67592a6261a98d7.js",
    "revision": "8d666d01b7bd0edd22fce59e846beb51"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "d754f660f7125fb193cbc375c6088c38"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.ebf9f67592a6261a98d7.js",
    "revision": "8c28f070049e896bb6a1896fefe7bb96"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
