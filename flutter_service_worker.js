'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4c6f9758bde215c556ab130a45d38c9d",
".git/config": "43497b3190923647c894ae8bf77d675a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6595594e4b7c40ab3b04b1e83e71ef05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "217f6184bd79d730c6a281bdbd2dbd43",
".git/logs/refs/heads/main": "570baf485cbc7c5d8aa97eb98f7baad5",
".git/logs/refs/remotes/origin/main": "f54bfbed172cdf72cbdd72b1414e2740",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/ac17e0da4a8678f1803508829ee94811161a1c": "2dd20c037ce2d61830bcc507137d6a86",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/16/e762a5f0b89b18163daf429f04212677aea92d": "812a932a50165b0cdb71cc24f1fd98b0",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/41/3285e53dca598ae0f050a88734255c8b43a73a": "5b2ce4ee8c811336cb2a681dbe8c0f17",
".git/objects/42/c2a2b4115ca4b6e196297232b23af481bad691": "f3accae92cebf3947bd27d4ada816671",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/1b91525c40ea930045dd0a51604de580f3d7c7": "c48bdd670553b506fe9806f58b330533",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/a6d6091985a5282a6155132e358fe7430cf4cb": "69e19891b50e1f4b0c29eee15894079e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/1e3d36d88934388812c74ae3701d16c94c71ef": "0951e57ed7dc2e56af3cc90b658331e9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/d17d154253f123ace9825eb0301faa13a5ee4a": "4d2f09facd0d0ffa1df98b932db6c622",
".git/objects/67/bf0bf6b448daa1e7514f2e1f5da44705098f81": "270906f8760eb51bdb70fb1ee1347ff9",
".git/objects/79/38b11ee23f798afa46280eb9faf7c4c47c1c71": "abfb2a1f5cb70313e905009bb753dcb9",
".git/objects/82/54e7286cdc6111825489e55f0c724b53a044a0": "0b2a43b9e72f5080d9800341c7466616",
".git/objects/85/b1c1f54553cf44a6d95fe71148986829a4f34a": "24f267ee5f31cf36459680c03c5de697",
".git/objects/87/7d88ca822761c7a2ef9a226ebd93e2b0b4623b": "28f3fc4fb8640a9e88e96035a2d336aa",
".git/objects/9a/47fa2ca3cfda2b5a42436a0e571a33d6be337b": "a0160db6cdf01c798985ced3b0015b2c",
".git/objects/9a/4fa8f6c023bdea21c148f10c764078f739e88c": "ecd8e2a87868ec856551aaf192755e3e",
".git/objects/a3/f9b91ee9c2d860a6f73c54d1380d07280c9ef8": "5f60ab9cbacbb009ae005bb9ac38c8b0",
".git/objects/a7/cd262db9c9f491bdeb7891575b7d6340b04766": "af8fa5c646c430df5856e4d313060c60",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/d849ac99f3b40fbca95594ac6ce08289c3add7": "5b684909bb3b0ef37f361458c8f2a8b8",
".git/objects/be/112463d017a4d16e785f4a9887dd896f1a87a0": "267b748bfcc3e1d050bdaf542c4e64a7",
".git/objects/c6/80317f1b4eda9e6d780b33ecf42067c48281e1": "229eb5e16bce47d36d354a755049dd3e",
".git/objects/d0/5e169a419acc2e9e94f0a5288f75677b5a16e4": "e853b4448991e122e17fdfa91ce78de6",
".git/objects/d0/ff07201bfdffe4c4371ac5ab6aba403a7408af": "7a135350dd7b21f7edb17cb3cc96e756",
".git/objects/d2/b9e0bfb84d407b2cb76de5783130afabb81bf5": "837340a4a468c91fab550c234ffd4c24",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/4d3818c0a46ce5c8a779403421f107527a64ce": "5ef9e1a835fcef587411a1bdcc20f133",
".git/objects/d7/ab2e6e5d50825267c42840eaf767b21be30f02": "69627638ea109963d572c387a0e4905f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/0aa87472c562e32d033ce9738b0df1e11bffcd": "1d9eb565ff61e61d9b5458e08ae178e7",
".git/objects/e3/24609f3e1b59a463b1d67048afc2acf3b5a30c": "6af98127b357ae571b02af1d8a5bf6fb",
".git/objects/e5/df236831ad8cfb167d972024593befe6f45e4b": "8c848939672e8e105cddb64a8e3c8734",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/c339d65ce94296aae78fffa75242bd00471755": "b04196c5b9d053ee06c74a1d31484bf2",
".git/objects/e8/1f98c62451be7d8bd6e116b3b2dc474146db10": "8821e1c6344a12ed547dfd3a8b85805f",
".git/objects/ee/3868cfb1069a40b02d4b93cd842aedb13f0700": "661d9a1d97c2a61897667285e6cea9ba",
".git/objects/ee/ee0cc416c33817783ce6d2abc83e81e975ef80": "ba7d0e75e772882fd020e1870379497a",
".git/objects/fc/acce95473a33589ae527424a8d6cec3041c3c2": "651ae037d4e8ac752162cad435721240",
".git/refs/heads/main": "dd00a0269a5f7d01604b14c0483cfe6c",
".git/refs/remotes/origin/main": "dd00a0269a5f7d01604b14c0483cfe6c",
"assets/AssetManifest.bin": "37adfbef138fd89ac6e39672c8b7e6e6",
"assets/AssetManifest.bin.json": "b8c91eed0355021905710d185bf39f18",
"assets/AssetManifest.json": "1f2493b801b333320cfe1577f0025a79",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e6cb264e62bddb32a2f41c64db475e81",
"assets/lib/assets/avatar.png": "44feaafc87215076e5eb5df5328d38a5",
"assets/lib/assets/header_v1.jpg": "8447fe83a3467fb7412b61d8b5d9ced8",
"assets/lib/assets/header_v2.jpg": "5817d39507c9bef531abf3bd0127b1ba",
"assets/lib/assets/reconocimiento.jpg": "2abc2d5f3249f555e4bce5f9f6920479",
"assets/NOTICES": "77d6a98133f008cb955a3879ae58ba9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "be039b2b93c8063573a502cf6c8cb316",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ab91a9fc81c4d06e49d54f3b3f3969f1",
"icons/Icon-512.png": "47e515c9947efc4facf8afd8fc08f395",
"icons/Icon-maskable-192.png": "ab91a9fc81c4d06e49d54f3b3f3969f1",
"icons/Icon-maskable-512.png": "47e515c9947efc4facf8afd8fc08f395",
"index.html": "8a5c68b5a5b088d13eb773df2c1e9373",
"/": "8a5c68b5a5b088d13eb773df2c1e9373",
"main.dart.js": "052e5df2948e98f99854cb4d3a3dd41c",
"manifest.json": "88b7f2f66143a4aa2e4572e72150dd69",
"splash/img/dark-1x.png": "e5bfc438a8c5b5eaca3e11eff0b7a499",
"splash/img/dark-2x.png": "47e515c9947efc4facf8afd8fc08f395",
"splash/img/dark-3x.png": "31dd7c8fce37ad8a6bbc22ffaf054bf8",
"splash/img/dark-4x.png": "56219b72a8768442bd1d6bbd8ffeb8b5",
"splash/img/light-1x.png": "e5bfc438a8c5b5eaca3e11eff0b7a499",
"splash/img/light-2x.png": "47e515c9947efc4facf8afd8fc08f395",
"splash/img/light-3x.png": "31dd7c8fce37ad8a6bbc22ffaf054bf8",
"splash/img/light-4x.png": "56219b72a8768442bd1d6bbd8ffeb8b5",
"version.json": "b59a2b7164281225038f4edae83a8bb9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
