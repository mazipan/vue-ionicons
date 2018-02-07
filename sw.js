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
    "url": "/vue-ionicons/app.ce7f63fe6e5e26d3a2e6ca81620bb92f.css",
    "revision": "ae614762b668e906834653e3a6c54400"
  },
  {
    "url": "/vue-ionicons/app.d5e74b3f8aeb9d4ff147.js",
    "revision": "5dceb2a9307258ca0b7fc3f5ab7ea18d"
  },
  {
    "url": "/vue-ionicons/index.html",
    "revision": "fb8a688bcfb94ec4944534174ea7a3b8"
  },
  {
    "url": "/vue-ionicons/manifest.json",
    "revision": "1124a7901152c484510ee86f1ddcfc5d"
  },
  {
    "url": "/vue-ionicons/vendor.d5e74b3f8aeb9d4ff147.js",
    "revision": "b463d7f08503d0d3d0e2d7c64d12d1fe"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
