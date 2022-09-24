'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "024f310015adb684e559d577e00b58a4",
"assets/assets/fonts/BrandonGrotesque-Medium.otf": "caff868cf58f67203bca130d0a4b26e2",
"assets/assets/fonts/BrandonGrotesque-Regular.otf": "3481dcfe21dba4fa54fd1f21eae3e6f7",
"assets/assets/fonts/Rabar_021.ttf": "03d026fbc6d28522c0ff23ab50f3ba54",
"assets/assets/fonts/Rabar_022.ttf": "d433041026e376c8f7f6b81cac161f67",
"assets/assets/icons/arrow_down.svg": "39cf786d63759bc794164174dfbf6636",
"assets/assets/icons/call.svg": "f97a0a99d3745698ba2b5a2ca7dcbbc0",
"assets/assets/icons/edit.svg": "fde0479d1b765368bd62b34231cfd1b3",
"assets/assets/icons/folder_add.svg": "3b5f11a150b78a239e8610fd3199f99e",
"assets/assets/icons/gallery_add.svg": "926d9fb56dc33cd10d01b0086523ba2c",
"assets/assets/icons/home_fill.svg": "991392120fa6c81c418b043246882cd5",
"assets/assets/icons/images.svg": "9ba230315092312ad33c8d2bf78a9b9e",
"assets/assets/icons/link.svg": "2316bd8761e9ccf48ce430fadbfc9bf2",
"assets/assets/icons/logout.svg": "defbcc05ac004a9598fcf9f019addb76",
"assets/assets/icons/password.svg": "7339689895d7337967fdc455fd3d1b4f",
"assets/assets/icons/search.svg": "8fd4c10e9dca6e34fb8a1763ae343049",
"assets/assets/icons/search_filter.svg": "badc48b1b72b4a17d3ffb4991f3aee99",
"assets/assets/icons/tag.svg": "b442ba39ec1fe0345c92ad0dad1960f0",
"assets/assets/icons/text.svg": "36394c78c7c01356c9f6581f7b1b1793",
"assets/assets/icons/train.svg": "280d494c24d320dba7feda9f8d094037",
"assets/assets/icons/trash.svg": "985450d2a7d977732faa5a78a950be18",
"assets/assets/icons/type.svg": "2b7c55c7e5cf2b4b28ddfbec7cc3ac73",
"assets/assets/icons/user.svg": "b3c1200978c5bf6994d7e1e0e68f4ece",
"assets/assets/icons/user2_fill.svg": "1cddaab19e76ae3cbf82a3e66aca3060",
"assets/assets/icons/user_fill.svg": "95b6caf6b53bbd41a50ad4a0657b4009",
"assets/assets/icons/video.svg": "135e9613767342ea197e978e60cb1b18",
"assets/assets/icons/video_circle.svg": "7e2e78b6c94821837fe76215bff42f8b",
"assets/assets/icons/wallet.svg": "a7f88afa1dc31592b46ea2109c06fb0a",
"assets/assets/images/ameno/1.jpg": "7cf1b938394b3c6c1944f9c8b77730f7",
"assets/assets/images/ameno/2.jpg": "61776808d91c98fccc9f9e68a3b73a6c",
"assets/assets/images/ameno/3.jpg": "fd522452221102b0b7c2be33254d466a",
"assets/assets/images/ameno/4.jpg": "1e5a01dcd6fc080b92e32b8b52044d00",
"assets/assets/images/ameno/5.jpg": "9534426b5798b1c3f007b9962557541f",
"assets/assets/images/ameno/6.jpg": "e315fe36709f184a08390cb122b9adcd",
"assets/assets/images/ameno/7.jpg": "b2c57d12ab2e9740c056572bb9ce440f",
"assets/assets/images/ameno/8.jpg": "1da9c8eebdc4a983478fa48b4469c7c1",
"assets/assets/images/avatar.png": "71c345d19f8ef741c9a47b6105882dfb",
"assets/assets/images/image1.png": "77d0d765a20a9fa2a56fad617849dca5",
"assets/assets/images/image2.png": "82c86627611a2c63fc424314e92870cd",
"assets/assets/images/image3.png": "3f327fce9d0243ea26aec9cc48a117ed",
"assets/assets/images/Logo.png": "3d39b9eb8a9e2f445ab8fd75247e1d5f",
"assets/assets/images/mask.png": "129e742b774b57c9591763e8dcb54af4",
"assets/assets/images/protien/1.jpg": "793f346db12c5e68f9eb80c74e9f12e1",
"assets/assets/images/protien/10.jpg": "8cd5cb67d735414370283052545ee5eb",
"assets/assets/images/protien/11.jpg": "4e78c923428a73d854dbfbf6720a6dd0",
"assets/assets/images/protien/2.jpg": "6bacc351eb0abda0d1d7d980abfe89ca",
"assets/assets/images/protien/3.jpg": "7897a1591bb9f97e07ce1fb34f5510f2",
"assets/assets/images/protien/4.jpg": "9de5e954f11dab24dd52994a4fe7a7c4",
"assets/assets/images/protien/5.jpg": "69d26ac2463a5ae0c368f791fa2d5ce8",
"assets/assets/images/protien/6.jpg": "f38afb623b5a9588eb2525e49c9f0da1",
"assets/assets/images/protien/7.jpg": "5540dd22bf28804cdf1a754daf5c650c",
"assets/assets/images/protien/8.jpg": "8d66234b1f49a53b38d566358893d9a3",
"assets/assets/images/protien/9.jpg": "07ba69a48774cceea9cf0ce42ab852fc",
"assets/assets/images/status.png": "d25c80adaec33bf5f51c4cf4799e99a0",
"assets/assets/images/taqakan/1.jpg": "0b83374597ae294ce9b866459b90f0d7",
"assets/assets/images/taqakan/2.jpg": "93db2a0f1553023736a54cdba52bac18",
"assets/assets/images/taqakan/3.jpg": "cad63db0df67395e59a5cbdca029dc14",
"assets/assets/images/taqakan/4.jpg": "69b1c116fcff22153cea8444ec0bfb70",
"assets/assets/images/taqakan/5.jpg": "a076668af229438bffa5f23abcd4cf08",
"assets/assets/images/taqakan/6.jpg": "3c8ae631270e9e49ab6e6b092f3d07d3",
"assets/FontManifest.json": "64ac6e8b7a563a3477a233651a7edb51",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "63e68f7353551f3e24f87117985def74",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f1a66b2c4283a24d118bd01dc08269db",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ae95cfd460f6302c9baa7dce6fd5763d",
"icons/Icon-512.png": "91df9d7beb0fe642d8b31a1263b937d8",
"icons/Icon-maskable-192.png": "ae95cfd460f6302c9baa7dce6fd5763d",
"icons/Icon-maskable-512.png": "91df9d7beb0fe642d8b31a1263b937d8",
"index.html": "24a7caff5c6d74bce17630265b376896",
"/": "24a7caff5c6d74bce17630265b376896",
"main.dart.js": "594c8ce2fdffd47face8dbd1be21550b",
"manifest.json": "c6720b4875d91a3b7b5cd49fb8390f69",
"version.json": "28e28dffb194d6901e854c1d749c2fa7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
