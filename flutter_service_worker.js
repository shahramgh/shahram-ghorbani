'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "decff5c769f68e3849dce194d4a3389e",
"assets/AssetManifest.bin.json": "f52964f8d46aa83592a5bf4e3f717608",
"assets/AssetManifest.json": "89cc83b8e923164af7d2c6c15a7d8173",
"assets/assets/fonts/abh1.ttf": "f3c28e6e086c31b992d576a15110cbff",
"assets/assets/fonts/AlaskanNights.ttf": "6023142ebf3036a781a79c411aaa0131",
"assets/assets/fonts/alba.ttf": "409f84f7dbf84b0d4b3abfe2cb39dadb",
"assets/assets/fonts/albam.ttf": "e10d095527a6fcb7fcccbe7c2d2d3189",
"assets/assets/fonts/albas.ttf": "ba29757d4b6fe9f35be202a335a49c47",
"assets/assets/fonts/Anywhere.ttf": "a40e575f4ccfe6ffc17c4d7a58fcbe54",
"assets/assets/fonts/AVP.ttf": "5a3bb48ed27b9aa7bf8883e728d0ae18",
"assets/assets/fonts/bands_artists.ttf": "247cf0e2539c64d7961ddc235cc26397",
"assets/assets/fonts/Base02.ttf": "5c3a3162b794ab5439c02829d04eb115",
"assets/assets/fonts/bjorkfont.ttf": "3eff762a27966c5ed438b0fb6fe92bff",
"assets/assets/fonts/Blazed.ttf": "ef6090bc175a4e875da805e8dc25e248",
"assets/assets/fonts/breakaway.ttf": "e12866bc6cb9c5922ab966c6d4e3b033",
"assets/assets/fonts/brooklyn.ttf": "562c3bc92fa405a486032cf1f1949fe8",
"assets/assets/fonts/CableDingbats.ttf": "d562ad5272c6e35c76844a640d367926",
"assets/assets/fonts/Caveat-VariableFont_wght.ttf": "9bd9bde59dc816ef93cd18069b65a40e",
"assets/assets/fonts/cocacola.ttf": "6c5eb1cf35a244e294cad7f2c1340843",
"assets/assets/fonts/coldcoffee_2005.ttf": "46418052aeedc32a862f941d41e374f8",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/defused.ttf": "ee5aaeae28760925e71b9c3e9516c882",
"assets/assets/fonts/DelaGothicOne-Regular.ttf": "0127db5944cef9f92135d2971367e803",
"assets/assets/fonts/DESIB.ttf": "5a3c281795448a75d3045605dc35bce2",
"assets/assets/fonts/distortia.ttf": "547d36babebb13b8e41f00dac552cf22",
"assets/assets/fonts/Dome.ttf": "c5acdc9f4188fa5aecc31a18d6ed88f4",
"assets/assets/fonts/Dome_Light.ttf": "8fe8802e75f1114674a50c75651a5f36",
"assets/assets/fonts/dpquake.ttf": "5f58cb2fe3c40af668b3537423e1fd52",
"assets/assets/fonts/Elektra.ttf": "be6ed9ab69ab25b84c7a5c129a99f675",
"assets/assets/fonts/eraser.ttf": "7eb5fd0aa5664566d17d85596f9d25ef",
"assets/assets/fonts/evanescent.ttf": "bf365db9c56f19b1fb65597a7cfd5c7b",
"assets/assets/fonts/evanescent_p.ttf": "3c60ac2b6c139677c5845bb3ab746389",
"assets/assets/fonts/Facelift.ttf": "2bf4213ac1d6dc5117fd76487700fee7",
"assets/assets/fonts/FerroRosso.ttf": "4e682567058b65d3425f63faeca933f3",
"assets/assets/fonts/fightclub.ttf": "15df8ff550be89948acf758fe6b80c44",
"assets/assets/fonts/Freshman.ttf": "4e0a731a29f56f42431919e8cf234b9e",
"assets/assets/fonts/Friday13SH.ttf": "4fa5cf367949bc9b9d7e5dab2da311f9",
"assets/assets/fonts/Friday13v12.ttf": "e8f677ec3ab91b5e3cf604f6e7f3ee4f",
"assets/assets/fonts/Fuggles-Regular.ttf": "cf8ca8c878071b008034806f0d1d8336",
"assets/assets/fonts/GameLogos.ttf": "2323ba528a81f6337e0b0ac09cb6bd79",
"assets/assets/fonts/GOODTIME.ttf": "58675f8b3e8d2b86212d965512aff412",
"assets/assets/fonts/GreatVibes-Regular.ttf": "4bd0ed00ca8deac6c6706a092d9afd13",
"assets/assets/fonts/gremlins.ttf": "f5c4d7c9a979029dd0c3c0b8da476671",
"assets/assets/fonts/Gruppo-Regular.ttf": "bc9af224571efcd3b70b12a626e3c1e4",
"assets/assets/fonts/Halo.ttf": "d8635bc16bee064da932e13025b651a5",
"assets/assets/fonts/Hitman.ttf": "3b443b9d9335adaf9fea83fbf8d5d791",
"assets/assets/fonts/If.ttf": "888aaaa3550fcd27fcec33d549fbf55e",
"assets/assets/fonts/illustrate-it.ttf": "4a3dc7c28fa2dae150f3f978b45c1393",
"assets/assets/fonts/Independence.ttf": "4eae1296a803173074e531a3efa2c5b6",
"assets/assets/fonts/jaguarb.ttf": "f4c8f5359732c2320e37b926369a9429",
"assets/assets/fonts/jaguarw.ttf": "8ea58576dc6fdd3f3e9aa1681be507e8",
"assets/assets/fonts/jaguarwi.ttf": "2d0127da59622fdec70c1589f37d7a79",
"assets/assets/fonts/JAMIROQUAI_pl.ttf": "06c2c28febde85ea5bf83c21b508adb9",
"assets/assets/fonts/JerseyLetters.ttf": "ea05c5a08e1108c834fbb5306786c2d5",
"assets/assets/fonts/Knigqst.ttf": "9edb985ff5db5eeba6cbdec26cbd4cc4",
"assets/assets/fonts/kremlin.ttf": "8a1a151888031715c6a755ac187e988d",
"assets/assets/fonts/LexendDeca-VariableFont_wght.ttf": "6f4502afcb0f6c55a55da44f6e81cf89",
"assets/assets/fonts/linkin.ttf": "390d2a939ff3b84272fa272c443cab34",
"assets/assets/fonts/LinkinPark.ttf": "b3370e997b30c3ea6b846403543fcac9",
"assets/assets/fonts/Lynx.ttf": "f667b4b734e70db728c6c8c9ed2cc888",
"assets/assets/fonts/marlbo.ttf": "dc9d0c69572bdc31441ce5a4c133bdbf",
"assets/assets/fonts/matrix.ttf": "be8844202dc356540cbe8b219cc24740",
"assets/assets/fonts/Megadeth.ttf": "457787b013b162d9ff9dfbe239015208",
"assets/assets/fonts/namco.ttf": "c0fa79a39002790e923b0ce1052da4fe",
"assets/assets/fonts/NarniaBLL.ttf": "47bcd08ac6ebe9784472b16ff9fbdeb0",
"assets/assets/fonts/nasaliza.ttf": "a1ba364e2cb0eef8265ce0bc371ff6ba",
"assets/assets/fonts/oasis.ttf": "8e2ce530d5944c15e28d3305c5ea81c3",
"assets/assets/fonts/OctemberScript.ttf": "24073b92e3f0f6258ec31cc425b3285e",
"assets/assets/fonts/pepsi.ttf": "ce8800ee0d6186f33be2aa436aecbec6",
"assets/assets/fonts/playstation.ttf": "967e7de5d0704e1882011eadd0198051",
"assets/assets/fonts/playstation2.ttf": "535b52b68b347cf99afcc74d837a9e5e",
"assets/assets/fonts/Playtoy.ttf": "56a19da378acae61854846fe0953b5a8",
"assets/assets/fonts/pricedow.ttf": "a7600f3ef906b725df694b7e08952f06",
"assets/assets/fonts/Rabid_Science.ttf": "95f5e1e17b9705ead053371de78aa7be",
"assets/assets/fonts/RecycleIt.ttf": "c65c9e7a79cfec233cd936c882065f00",
"assets/assets/fonts/Riven.ttf": "de54aebd04d7462a03fa3d19e1b5f0ad",
"assets/assets/fonts/sega.ttf": "b593a614952261da06c53a02d1954f44",
"assets/assets/fonts/SFProText-Bold.ttf": "d6079ef01292c4bc84dce33988641530",
"assets/assets/fonts/SFProText-Regular.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/assets/fonts/SimsLLHP.ttf": "ea27a30e94a1a91dcca89dbeafbd32f0",
"assets/assets/fonts/SKYfontThick.ttf": "134f460fbe7af005ecee7a866c9e6a0a",
"assets/assets/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"assets/assets/fonts/TitilliumWeb-Black.ttf": "8d8d73518f2f1d36654af1b92fbfba99",
"assets/assets/fonts/trancefm.ttf": "0913e16c7623c91de6fbcec72925391d",
"assets/assets/fonts/UnrealT.ttf": "d2b7187a0d6cacfc8556b33b81b002cf",
"assets/assets/fonts/usuziv2.ttf": "b83770b23b9a373f5cdb041c4d9c7604",
"assets/assets/fonts/usuzv2i.ttf": "0234f6db95b8cf38f4ae1616887a2bc4",
"assets/assets/fonts/warlock.ttf": "2adfd25d247f6ae910801eab9dd09b1c",
"assets/assets/fonts/wds011402.ttf": "ac9867a6602b0b640e27d39b2fda4bfd",
"assets/assets/fonts/WildRide.ttf": "695deb464bceb0aaaeafe173b1e759ca",
"assets/assets/fonts/WildRideBackfill.ttf": "6ea04a44af8b2206cabc11c97603f7de",
"assets/assets/fonts/winob.ttf": "ccb3e8196910753b9457a756607cc09f",
"assets/assets/fonts/x-files.ttf": "1a01ffaebc4b1c151ccb32dcf1920e56",
"assets/assets/fonts/xbox.ttf": "0df5776c6fa350c727859cc97c780907",
"assets/assets/fonts/Xfiles.ttf": "36b8cdf7ae04ec23da70c999e556ca22",
"assets/assets/fonts/Yahoo.ttf": "9a16ad0613e3535627d4465438c578bd",
"assets/assets/fonts/zxspectr.ttf": "357904a637bc84a890a49daa8285ac27",
"assets/assets/images/avatar/avatar.jpg": "3db7b263da731064fc5ef01b8fe1ad4d",
"assets/assets/images/avatar/image1.jpg": "09fca3e244540babc42ea05aec34d80d",
"assets/assets/images/avatar/image2.jpg": "845479f8d442a9bbadf76889030ec896",
"assets/assets/images/main_image/abstract-futuristic-background-with.jpg": "4db4419f2f4f16504d432707977c04ca",
"assets/assets/images/social_media/adobe_illustrator.png": "eb7193dda57cc7872aa7a37e4cb30cf1",
"assets/assets/images/social_media/adobe_photoshop.png": "5a1361f7e1b7e432096df6738aacc7c4",
"assets/assets/images/social_media/android_os.png": "96c820d92b4fa6e162ad8bea913765ab",
"assets/assets/images/social_media/android_studio.png": "46e2d6647137a8624b6fdca0b90dfe97",
"assets/assets/images/social_media/at_sign.png": "388e5e326df88150d1033d22c59682d2",
"assets/assets/images/social_media/backend_development_color.png": "952c8ce2159fb605d5043fef8c3ea2c6",
"assets/assets/images/social_media/backend_development_fluent.png": "12c4f9408239f91adbe15968cae79df7",
"assets/assets/images/social_media/cv.png": "bfc26bbd7184980189635c37fc5e24a4",
"assets/assets/images/social_media/dart.png": "6dc12414717a897f01b874c89a8f868b",
"assets/assets/images/social_media/discord.png": "0c11085c00f14b8ed427c58d4aab6e03",
"assets/assets/images/social_media/docker.png": "d8ad01a76eaa5ba661bb661b255c6df6",
"assets/assets/images/social_media/docker2.png": "bbe78451de9d69d9341fbef878c45570",
"assets/assets/images/social_media/education.png": "0ac2a2071ce3038d55b5a73a81088571",
"assets/assets/images/social_media/facebook.png": "ea71c378917cb38092f82aee0d71296f",
"assets/assets/images/social_media/facebook_circled_ios.png": "d92fed5ae40808ffd82a88860c4f201e",
"assets/assets/images/social_media/firebase.png": "fa86eb70107a149321eea1e1bc9338f2",
"assets/assets/images/social_media/flutter.png": "5b2983a9823420f0cabf63351b69082c",
"assets/assets/images/social_media/git.png": "048feeaa63b77b13a36ceca1878661fd",
"assets/assets/images/social_media/github.png": "374c3955892bea8386198367d5b1e38c",
"assets/assets/images/social_media/githubTwo.png": "8364b6295d86918ceac5a9e5c114c3d0",
"assets/assets/images/social_media/gitlab.png": "d2a047d7b5154a0ea9724b7dcb133400",
"assets/assets/images/social_media/google_plus_circled_ios.png": "299653cd453e61420d3547064560ff0a",
"assets/assets/images/social_media/instagram.png": "9a563aa07ed6525066ce06c5080f00af",
"assets/assets/images/social_media/instagram_ios.png": "299d5c710d3889563e5585fef2a52492",
"assets/assets/images/social_media/java.png": "54ffa247a536044e8d129fa25d934feb",
"assets/assets/images/social_media/linkedin.png": "62594e29a1e644960398ad72a793ca2f",
"assets/assets/images/social_media/linkedinTwo.png": "d6164b6baa5cb4ec5987f7c65d3c438d",
"assets/assets/images/social_media/linkedin_ios.png": "2cc85382da5d351c50024babf2f4a743",
"assets/assets/images/social_media/medium_ios.png": "a10c22efa94ac1b3167796c75851ccc2",
"assets/assets/images/social_media/mongodb.png": "519f3dc6e0d8a4ee3b60de4768bb7a1b",
"assets/assets/images/social_media/mysql_logo.png": "fc03d47170edb202f76a4e6846ad5ff6",
"assets/assets/images/social_media/nodejs.png": "1c9706fadd017693e80e002ea567eb5f",
"assets/assets/images/social_media/node_js.png": "74b92067b47656aff075df4e7f7bfc2e",
"assets/assets/images/social_media/octocat.png": "8bd9ca5f95909620192feb346f2c10ae",
"assets/assets/images/social_media/oracle_fusion_middleware.png": "a932ce44ad31eecee715a1d1ef24aa79",
"assets/assets/images/social_media/python.png": "2b9046688b6c7ba30d6201fc59f1436a",
"assets/assets/images/social_media/qrCode.png": "b935c173333fa50596af18042dd07ff9",
"assets/assets/images/social_media/qrCodeThree.png": "3bdb5767ed334ae45c2071def56b6349",
"assets/assets/images/social_media/qrCodeTwo.png": "91cf46bc8e42087c7c03f76ddf742399",
"assets/assets/images/social_media/qr_code.png": "3dd3c9da4e34e77981becae9a1c49d88",
"assets/assets/images/social_media/reddit.png": "3e3dd57aa11ed1846cd85ae9c68e064f",
"assets/assets/images/social_media/resume_website.png": "74d135cb6d24ebf3b962f0007d564bf6",
"assets/assets/images/social_media/share.png": "b60fdaa073e22eb4cb6aa370f2e19af4",
"assets/assets/images/social_media/stack_overflow.png": "31e820b3af57a1ad7760b90b80805b0c",
"assets/assets/images/social_media/telegram.png": "9b89d3fe66f745229c96897b0b00bdf6",
"assets/assets/images/social_media/tumblr.png": "a03466f5d3ace16bd0fe583c9e63af4d",
"assets/assets/images/social_media/tumblr_ios.png": "9a8fcc11518df1ca2752bd9cc72dce37",
"assets/assets/images/social_media/twitter.png": "5e2fbd8f008d920ba4376e9e15d72432",
"assets/assets/images/social_media/twitter_ios.png": "bcc471eaf27fc99c0109e666a2fa3287",
"assets/assets/images/social_media/vk_com.png": "2f784aa317cdd86bd5f6eda07416800c",
"assets/assets/images/social_media/whatsapp.png": "48e5b871a3efa116b7e2d9f3e3ffbd46",
"assets/assets/images/social_media/whatsapp_ios.png": "17561ac1aa43b462f7e507de9e1b205a",
"assets/assets/images/social_media/youtube.png": "c3f02945f8f045fb59ce2b53a2d1ac60",
"assets/assets/images/social_media/youtube_ios.png": "1a12b3b8e58591182574c37c2b7e2b65",
"assets/assets/images/social_media/youtube_logo2.png": "5591a130e0a2760ccc37fe91e6dc095d",
"assets/FontManifest.json": "f88c00d1045b7f82956972fac11c9130",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "55c26a5d092977e35b70af208a4bf5de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "65fdae3a6bb9712a159127ace4b747e2",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "93a63b18433d5c16dd17b5d9ab497edb",
"canvaskit/canvaskit.js.symbols": "cf59fa7ed0c1ecb65fa3d1b70cf189f0",
"canvaskit/canvaskit.wasm": "c282f3f34fc44b6bd9a00a3f7f7be6ff",
"canvaskit/chromium/canvaskit.js": "ee5174694d4a451c41b16dc39ef73808",
"canvaskit/chromium/canvaskit.js.symbols": "f3825e2def5eb77fbb36f8fb97aa32cb",
"canvaskit/chromium/canvaskit.wasm": "9d2c30cca12675eed94211c685934874",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "83dcb014fedd84a8fe37e373b45235cd",
"canvaskit/skwasm.wasm": "0831a653b127e40c5253f640afa252d7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "738dd14a574ed4dbacd2b3011ac9d0f0",
"favicon.png": "b6676c00d23fb3074203129c3c0f9787",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "b9ef0cbe03289845f59fa21a0e064307",
"icons/android-icon-192x192.png": "4a2e4bd50a8f39820e235906b3ad6bf2",
"icons/android-icon-36x36.png": "e803113fa09004959590348caf48b2d8",
"icons/android-icon-48x48.png": "857c83547fbb790bf4c7498d868176d9",
"icons/android-icon-72x72.png": "795d3d1f28125b1183a00728354de55a",
"icons/android-icon-96x96.png": "b6676c00d23fb3074203129c3c0f9787",
"icons/apple-icon-114x114.png": "52155059cce1456f289936b727db32ff",
"icons/apple-icon-120x120.png": "1e29ecd95bf9c2ff37c67b8b010587f5",
"icons/apple-icon-144x144.png": "b9ef0cbe03289845f59fa21a0e064307",
"icons/apple-icon-152x152.png": "c09c6cacda47204336a12ca3e50e8406",
"icons/apple-icon-180x180.png": "ecb037a8a97a54d47a94e7a17e4ffa4f",
"icons/apple-icon-57x57.png": "3c38c9c31dfbf5ac956d6545031d2e53",
"icons/apple-icon-60x60.png": "3c9077654a4079606a7f9ef1956139b7",
"icons/apple-icon-72x72.png": "795d3d1f28125b1183a00728354de55a",
"icons/apple-icon-76x76.png": "46d107709fd746cc2b677653fc7e9ee6",
"icons/apple-icon-precomposed.png": "f510c76a7595818c474b4e6f6cfbae29",
"icons/apple-icon.png": "f510c76a7595818c474b4e6f6cfbae29",
"icons/favicon-16x16.png": "e4f64eaba522df24d65673162ac071c9",
"icons/favicon-32x32.png": "4dd0378bc2ccfa2de30dfdb3c2f0fa89",
"icons/favicon-96x96.png": "b6676c00d23fb3074203129c3c0f9787",
"icons/ms-icon-144x144.png": "b9ef0cbe03289845f59fa21a0e064307",
"icons/ms-icon-150x150.png": "f2b8b5fb1313a49f99eee12152dad544",
"icons/ms-icon-310x310.png": "85d700c40952e7a9d273f2f1585d1f28",
"icons/ms-icon-70x70.png": "b2d42f2953dbfb538de0e856ce0b0ddc",
"index.html": "11fa640a50ee5db01cb2533efe404698",
"/": "11fa640a50ee5db01cb2533efe404698",
"main.dart.js": "a1d940e94e7a6e318f546c6824404762",
"manifest.json": "97b42fea2f7d4a3809a243db96ad6155",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
