'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "258b757b5d6f84af55ea3ff721e7fc28",
".git/config": "0ffda7f67e7ccedfcec10c0d3998bd57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e794caa0675b01b1326e008a4cfb374",
".git/HEAD": "c7f5f851fd17018ffc7318a7a9382b19",
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
".git/index": "e13ef46fb9a5fda9783ab11a97f60f9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc388d1d9eee0cf56bc80e74a3dd9584",
".git/logs/refs/heads/master": "f84de0195b9f1c023eaff012201c9505",
".git/logs/refs/remotes/origin/main": "208362479eb69829e46536604b44cc2e",
".git/logs/refs/remotes/origin/master": "d06b1a2ea745921a51213e83e5e55952",
".git/objects/02/502ff43fd498bf91aca85379b80b3d4ba86a76": "0de79a27e502cb050f787f401ff1135f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/6ca632ee3efab51a62540a02ffa426714d18be": "0ef36125d36febb7e2ecf06c5ca46ff0",
".git/objects/06/ac17e0da4a8678f1803508829ee94811161a1c": "2dd20c037ce2d61830bcc507137d6a86",
".git/objects/08/08ef6333844f2ce3989c58249b51029430bcf7": "095cc2f5cc5219d97a890328b7306363",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/14/12da7b8c89779f541316f709955a8d4f21a299": "60e3b8ec1bbdd70b655cc839153dbbca",
".git/objects/16/e762a5f0b89b18163daf429f04212677aea92d": "812a932a50165b0cdb71cc24f1fd98b0",
".git/objects/17/462ec8fb04da276dcc39e7e1b2bf0f809cb380": "b1964c07ea6c99b8ac947bf81b1da8f9",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/ad7d29ffc415f4bd027b226e0ce2825c83e758": "fc623a317375967027558a85e93b2af2",
".git/objects/28/7131b7013435e8922a7fc46b5c07c040c64e66": "00e7c11b4cb6afef22a74257d5d627ba",
".git/objects/2c/b8a769f7f6129e8c3211a7d1b6b9450b03d5ad": "b86f5fd488bf672537e0406c83e59f74",
".git/objects/2d/a7a9555f40e514b97cefce171073a786b39d49": "b0a5bfd62a3e11ff76bf23ad6fc9ae58",
".git/objects/35/1169257f528c8526d6e73d0cf0dd0311daf2d4": "bd5364894695c97ec3da773a3d2f31d1",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/41/3285e53dca598ae0f050a88734255c8b43a73a": "5b2ce4ee8c811336cb2a681dbe8c0f17",
".git/objects/42/c2a2b4115ca4b6e196297232b23af481bad691": "f3accae92cebf3947bd27d4ada816671",
".git/objects/43/d86cf89f5fb8aaabafdcfc4c485f63669d6c70": "a3f81abe951ff8908bdb3b4101b29b84",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/1b91525c40ea930045dd0a51604de580f3d7c7": "c48bdd670553b506fe9806f58b330533",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/0128f1628de17eaba838707dd23b7db70be32d": "3dbb49758710f778003da0a6a6e5625f",
".git/objects/4c/a6d6091985a5282a6155132e358fe7430cf4cb": "69e19891b50e1f4b0c29eee15894079e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/1e3d36d88934388812c74ae3701d16c94c71ef": "0951e57ed7dc2e56af3cc90b658331e9",
".git/objects/53/61d9469659941285c72140ef1d919e834cc42c": "455fa4ffb857cd70b41f93431c7fe9f6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/d17d154253f123ace9825eb0301faa13a5ee4a": "4d2f09facd0d0ffa1df98b932db6c622",
".git/objects/60/e84d9810dc6cc81ace2674fd9195e85a7509ff": "7d0b1c669067056130e0783253a66817",
".git/objects/65/f3f9337f9c74b0d0f7dd713a59e00698132963": "3438656f9bbe65d749bdef52d5dd8df3",
".git/objects/67/4ba161b594931d636da231cddcad1d636b5bb0": "d45153a617a0eb811445061a74a9846e",
".git/objects/67/bf0bf6b448daa1e7514f2e1f5da44705098f81": "270906f8760eb51bdb70fb1ee1347ff9",
".git/objects/6a/3466b7abe5aebb151fc43c5a2fc87e9e8e30cc": "63da8b416f60be2f10a83d8af8f72702",
".git/objects/6a/36e09116574c2f91eb2e2ed1a48e8fe2819e66": "40c2de2d6366f90206a85f0b1795b1c2",
".git/objects/6f/026b5ddc201292816a5a908e753c54b4f9229c": "4907568404b9208450f95fc46cf2c942",
".git/objects/79/38b11ee23f798afa46280eb9faf7c4c47c1c71": "abfb2a1f5cb70313e905009bb753dcb9",
".git/objects/79/727442e20b3113b0d209e2dd6f998d2544f78e": "a08c24ad8d97834acca581a93845040b",
".git/objects/7d/d01ac379fd2a71fd7eae6d89fec601c9fcc1bf": "a32ffa910585f6f498dce41f92cc79bc",
".git/objects/80/ac621142778fbf29291f5c01c4d59257409c29": "efacc528a0c2b32519b45f42c57cbb6b",
".git/objects/82/54e7286cdc6111825489e55f0c724b53a044a0": "0b2a43b9e72f5080d9800341c7466616",
".git/objects/85/b1c1f54553cf44a6d95fe71148986829a4f34a": "24f267ee5f31cf36459680c03c5de697",
".git/objects/87/7d88ca822761c7a2ef9a226ebd93e2b0b4623b": "28f3fc4fb8640a9e88e96035a2d336aa",
".git/objects/94/8fd796045cd45915af6c1a78db614a6ef8e95d": "36f814fb6c00730f7691bd313d8b95c0",
".git/objects/94/934178f6d92ba7f7ad71f1f2d8a8eb5b035167": "0f1ba4e4a996d4e6b7f04ca679f0f3f4",
".git/objects/94/9feb3357e6e385cc315ec773d56609b4efed6c": "e9dd79fabbfeeabccbb24abea6fbc50d",
".git/objects/9a/47fa2ca3cfda2b5a42436a0e571a33d6be337b": "a0160db6cdf01c798985ced3b0015b2c",
".git/objects/9a/4fa8f6c023bdea21c148f10c764078f739e88c": "ecd8e2a87868ec856551aaf192755e3e",
".git/objects/a3/043cd39b2a12caabea3b2c5de2196fac0b5a62": "5f643f6477937a1e0e5dcd93efaecf4c",
".git/objects/a3/f9b91ee9c2d860a6f73c54d1380d07280c9ef8": "5f60ab9cbacbb009ae005bb9ac38c8b0",
".git/objects/a7/cd262db9c9f491bdeb7891575b7d6340b04766": "af8fa5c646c430df5856e4d313060c60",
".git/objects/b8/ae7421651c7235446a8ea0fa2de9828c2ea62e": "7b03d7fb55a36e5093acae1e2e43b157",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/d849ac99f3b40fbca95594ac6ce08289c3add7": "5b684909bb3b0ef37f361458c8f2a8b8",
".git/objects/be/112463d017a4d16e785f4a9887dd896f1a87a0": "267b748bfcc3e1d050bdaf542c4e64a7",
".git/objects/be/8fb0432d530bface699a70ec4cd9ceaa9e614e": "18a44c8503aaf586021b8de17aa7fb4b",
".git/objects/c6/80317f1b4eda9e6d780b33ecf42067c48281e1": "229eb5e16bce47d36d354a755049dd3e",
".git/objects/c7/76882b9c2c8ea788b4c44d905870ef3f2064ab": "e6e2f854ebde15359386528bf44eee65",
".git/objects/ca/a995f51cfe1ab5ca614a9821b98f3accd120a5": "bf7c452ca1db8492afc59eb4c2957443",
".git/objects/cb/3baa59f7207160d219668bbca5a8c012297d16": "45f9444edb3f5ea23d884fc288539cdf",
".git/objects/d0/5e169a419acc2e9e94f0a5288f75677b5a16e4": "e853b4448991e122e17fdfa91ce78de6",
".git/objects/d0/a769343e656763e942c374a73cea9863e9cbda": "1448512a77e2b257a99d4972180884e8",
".git/objects/d0/ff07201bfdffe4c4371ac5ab6aba403a7408af": "7a135350dd7b21f7edb17cb3cc96e756",
".git/objects/d2/b9e0bfb84d407b2cb76de5783130afabb81bf5": "837340a4a468c91fab550c234ffd4c24",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/4d3818c0a46ce5c8a779403421f107527a64ce": "5ef9e1a835fcef587411a1bdcc20f133",
".git/objects/d7/ab2e6e5d50825267c42840eaf767b21be30f02": "69627638ea109963d572c387a0e4905f",
".git/objects/d8/5bd053b8742c958ba562a52fa2343ddbbe0586": "e158b3bba7e57f9a6184079a7c8dfb06",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/0aa87472c562e32d033ce9738b0df1e11bffcd": "1d9eb565ff61e61d9b5458e08ae178e7",
".git/objects/e3/24609f3e1b59a463b1d67048afc2acf3b5a30c": "6af98127b357ae571b02af1d8a5bf6fb",
".git/objects/e5/df236831ad8cfb167d972024593befe6f45e4b": "8c848939672e8e105cddb64a8e3c8734",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/c339d65ce94296aae78fffa75242bd00471755": "b04196c5b9d053ee06c74a1d31484bf2",
".git/objects/e8/1f98c62451be7d8bd6e116b3b2dc474146db10": "8821e1c6344a12ed547dfd3a8b85805f",
".git/objects/ee/3868cfb1069a40b02d4b93cd842aedb13f0700": "661d9a1d97c2a61897667285e6cea9ba",
".git/objects/ee/ee0cc416c33817783ce6d2abc83e81e975ef80": "ba7d0e75e772882fd020e1870379497a",
".git/objects/f0/9324348ce4e88223bd7f4d71075b67fbed3360": "aa0196d3e3d60be4e95a1c40e7526d41",
".git/objects/fc/0a57db51dcab3cc3e34cf84164ca26c3359439": "31887ff199d004b6477bdfdb43980451",
".git/objects/fc/acce95473a33589ae527424a8d6cec3041c3c2": "651ae037d4e8ac752162cad435721240",
".git/objects/fd/57fd971d55399534df5063571f0d98c13350d1": "975a80c0b5e8cbc18c14d0db6aa53371",
".git/ORIG_HEAD": "61f818bc77474d27ed9597a591cb1b76",
".git/rebase-merge/author-script": "e9dc8b004b7400fcead4069a8f050a12",
".git/rebase-merge/done": "b9e704453cd5a3bf34b5475cf2102cd7",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "26ab0db90d72e28ad0ba1e22ee510510",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "5697d44d52d88d2b56f6007008d3bb17",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "73397c1332ceb54d6d3f61e80b3b7d8c",
".git/rebase-merge/msgnum": "26ab0db90d72e28ad0ba1e22ee510510",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "0c750435516ffb7d0bb8db4cbea00ca9",
".git/rebase-merge/orig-head": "61f818bc77474d27ed9597a591cb1b76",
".git/rebase-merge/patch": "3abb870ab7b026958a83cb4b5e982be3",
".git/rebase-merge/rewritten-list": "01d112637fdce6c55e6d81e082025395",
".git/rebase-merge/stopped-sha": "61f818bc77474d27ed9597a591cb1b76",
".git/REBASE_HEAD": "61f818bc77474d27ed9597a591cb1b76",
".git/refs/heads/master": "61f818bc77474d27ed9597a591cb1b76",
".git/refs/remotes/origin/main": "0c750435516ffb7d0bb8db4cbea00ca9",
".git/refs/remotes/origin/master": "61f818bc77474d27ed9597a591cb1b76",
"assets/AssetManifest.bin": "3e57d606e7cf38ec2911aa429fe82c55",
"assets/AssetManifest.bin.json": "2b22a01c5da6deda7a2f29efbe8aec9a",
"assets/AssetManifest.json": "046a04ee5e12f186cb585e27cd344c30",
"assets/FontManifest.json": "4c1f372f19db9febba5e53e3d253d18f",
"assets/fonts/MaterialIcons-Regular.otf": "7177dbac08bcd9ec5e30bb25a094c7f5",
"assets/lib/assets/avatar.png": "44feaafc87215076e5eb5df5328d38a5",
"assets/lib/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/lib/assets/header_v1.jpg": "8447fe83a3467fb7412b61d8b5d9ced8",
"assets/lib/assets/header_v2.jpg": "5817d39507c9bef531abf3bd0127b1ba",
"assets/lib/assets/icon/icon.jpg": "45488be75b4d587cec5c7d4b54ef5aa9",
"assets/lib/assets/reconocimiento.jpg": "2abc2d5f3249f555e4bce5f9f6920479",
"assets/NOTICES": "1b914500b050781ca4c8e1ab0bac2db3",
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
"index.html": "d0e4ec13ca54aa81cf9fc8f2784a5db4",
"/": "d0e4ec13ca54aa81cf9fc8f2784a5db4",
"main.dart.js": "eb4a2deb04179c6bdeec83f633996184",
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
