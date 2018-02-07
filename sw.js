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
    "revision": "b4b2960136e5a2e6872297c7ee61e162"
  },
  {
    "url": "/vue-ionicons/app.d91caeb4f0da91959c62.js",
    "revision": "18b678f14a57e30c5b921145e83e1781"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "144e6057064f688a6deef8532ab9b30a"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.d91caeb4f0da91959c62.js",
    "revision": "6bf0e1f0416081a1244a29b19ef9e36d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
