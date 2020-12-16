const version = "1d8554a";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=ee897c8",
    "/about/?v=0a6b4aa",
    "/archives/?v=f3ab9bd",
    "/author/ezequiel-leonardo-castano/?v=061f9ab",
    "/author/ezequiel-leonardo-castano/page/2/?v=02c2ed6",
    "/authors/?v=69ba1cb",
    "/blog/iframes/elevator-simulation/simulation-anylogic-iframe.html?v=645b6f6",
    "/blog/iframes/frro-io/lp-2-variables-iframe.html?v=324de80",
    "/blog/iframes/ode-python/foxes-rabbits-iframe.html?v=b178cb9",
    "/blog/iframes/ode-python/home-economy-iframe.html?v=bcbd939",
    "/blog/iframes/ode-python/houses-air_conditioning-iframe.html?v=2da684b",
    "/blog/iframes/ode-python/stock-control-iframe.html?v=ea9e9bb",
    "/blog/iframes/ode-python/useful-life-iframe.html?v=52f331e",
    "/blog/iframes/times-tables/times-table-factor-by-factor-colored-iframe.html?v=73783b7",
    "/blog/iframes/times-tables/times-table-factor-by-factor-iframe.html?v=0fdabf9",
    "/blog/iframes/times-tables/times-table-line-by-line-iframe.html?v=0bcee67",
    "/blog/iframes/times-tables/times-table-parametric-iframe.html?v=66c19e8",
    "/blog/iframes/times-tables/times-table-point-by-point-iframe.html?v=17f7257",
    "/blog/images/chapter-1-1.svg?v=15e9bac",
    "/blog/images/elevator-simulation/elevator-simulation-headerimage-thumbnail.png?v=eb992f2",
    "/blog/images/elevator-simulation/elevator-state-machine-thumbnail.jpg?v=4bdcc71",
    "/blog/images/elevator-simulation/floor-distribution-thumbnail.png?v=b81fd32",
    "/blog/images/elevator-simulation/pedestrian-state-machine-thumbnail.jpg?v=f1bf9b7",
    "/blog/images/elevator-simulation/simulation-part1-thumbnail.jpg?v=1824960",
    "/blog/images/elevator-simulation/simulation-part2-thumbnail.jpg?v=435fc9c",
    "/blog/images/elevator-simulation/simulation-part3-thumbnail.jpg?v=44f5ce9",
    "/blog/images/elevator-simulation/simulation-part4-thumbnail.jpg?v=568e8b6",
    "/blog/images/elevator-simulation/simulation-part5-thumbnail.jpg?v=99e4307",
    "/blog/images/elevator-simulation/simulation-part6-thumbnail.jpg?v=1e01823",
    "/blog/images/elevator-simulation/simulation-part7-thumbnail.jpg?v=2ddede7",
    "/blog/images/elevator-simulation/stats-01-thumbnail.png?v=83a0700",
    "/blog/images/elevator-simulation/stats-02-thumbnail.png?v=cb04f95",
    "/blog/images/elevator-simulation/stats-03-thumbnail.png?v=374f0aa",
    "/blog/images/elevator-simulation/stats-04-thumbnail.png?v=bc85fec",
    "/blog/images/elevator-simulation/stats-05-thumbnail.png?v=e6db0f7",
    "/blog/images/elevator-simulation/student-behavior-thumbnail.jpg?v=2ab987c",
    "/blog/images/embed_interactive_notebooks/embed-interactive-notebooks_headerimage-thumbnail.png?v=3a9f063",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_01-thumbnail.png?v=ed465b9",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_02-thumbnail.png?v=1d53e12",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_03-thumbnail.png?v=e3d1691",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_04-thumbnail.png?v=39e65f8",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_01-thumbnail.png?v=c53ef85",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_02-thumbnail.png?v=aad8e7d",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_03-thumbnail.png?v=185f757",
    "/blog/images/fast-colab-deep-learning/colab-edit-thumbnail.png?v=cc84f71",
    "/blog/images/fast-colab-deep-learning/colab-gpu-thumbnail.png?v=5fa810c",
    "/blog/images/fast-colab-deep-learning/data-science-tools-thumbnail.png?v=922f6ff",
    "/blog/images/fast-colab-deep-learning/fast-colab-deep-learning_headerimage-thumbnail.png?v=9b2e8f3",
    "/blog/images/fast-colab-deep-learning/gartnet-2017-thumbnail.jpg?v=202500d",
    "/blog/images/fast-colab-deep-learning/neural-networks-types-thumbnail.png?v=1575946",
    "/blog/images/fast-colab-deep-learning/sklearn-roadmap-thumbnail.png?v=7a9952c",
    "/blog/images/flask_pyinstaller/flask-pyinstaller_headerimage-thumbnail.png?v=e7fae8c",
    "/blog/images/fractals/factals_headerimage-thumbnail.png?v=9edd09c",
    "/blog/images/git-guide-with-visual-interface/git-guide-with-visual-interface-headerimage-thumbnail.png?v=f264a2b",
    "/blog/images/git-guide-with-visual-interface/image_0-thumbnail.png?v=396c669",
    "/blog/images/git-guide-with-visual-interface/image_1-thumbnail.png?v=39897ab",
    "/blog/images/git-guide-with-visual-interface/image_10-thumbnail.png?v=c5c4ac3",
    "/blog/images/git-guide-with-visual-interface/image_11-thumbnail.png?v=0e42884",
    "/blog/images/git-guide-with-visual-interface/image_12-thumbnail.png?v=ab5d7ac",
    "/blog/images/git-guide-with-visual-interface/image_13-thumbnail.png?v=c5cc1c6",
    "/blog/images/git-guide-with-visual-interface/image_14-thumbnail.png?v=a8fd6d0",
    "/blog/images/git-guide-with-visual-interface/image_15-thumbnail.png?v=76a2d94",
    "/blog/images/git-guide-with-visual-interface/image_16-thumbnail.png?v=9f0a5ac",
    "/blog/images/git-guide-with-visual-interface/image_17-thumbnail.png?v=74909a1",
    "/blog/images/git-guide-with-visual-interface/image_18-thumbnail.png?v=08440ec",
    "/blog/images/git-guide-with-visual-interface/image_19-thumbnail.png?v=405eee1",
    "/blog/images/git-guide-with-visual-interface/image_2-thumbnail.png?v=8d2b211",
    "/blog/images/git-guide-with-visual-interface/image_20-thumbnail.png?v=3e644d7",
    "/blog/images/git-guide-with-visual-interface/image_21-en-thumbnail.png?v=ff4e983",
    "/blog/images/git-guide-with-visual-interface/image_21-thumbnail.png?v=ea30aa7",
    "/blog/images/git-guide-with-visual-interface/image_22-thumbnail.png?v=46caa48",
    "/blog/images/git-guide-with-visual-interface/image_23-thumbnail.png?v=3386159",
    "/blog/images/git-guide-with-visual-interface/image_24-en-thumbnail.png?v=a6ab32a",
    "/blog/images/git-guide-with-visual-interface/image_24-thumbnail.png?v=58a1ad2",
    "/blog/images/git-guide-with-visual-interface/image_25-thumbnail.png?v=e5804de",
    "/blog/images/git-guide-with-visual-interface/image_26-thumbnail.png?v=c4e103c",
    "/blog/images/git-guide-with-visual-interface/image_27-thumbnail.png?v=a021029",
    "/blog/images/git-guide-with-visual-interface/image_28-thumbnail.png?v=5f4c3d3",
    "/blog/images/git-guide-with-visual-interface/image_29-thumbnail.png?v=3195412",
    "/blog/images/git-guide-with-visual-interface/image_3-thumbnail.png?v=a84eef3",
    "/blog/images/git-guide-with-visual-interface/image_30-thumbnail.png?v=d5137e5",
    "/blog/images/git-guide-with-visual-interface/image_31-thumbnail.png?v=8e034f7",
    "/blog/images/git-guide-with-visual-interface/image_32-thumbnail.png?v=6b114cc",
    "/blog/images/git-guide-with-visual-interface/image_33-thumbnail.png?v=f1caeb7",
    "/blog/images/git-guide-with-visual-interface/image_34-thumbnail.png?v=ad2391d",
    "/blog/images/git-guide-with-visual-interface/image_35-thumbnail.png?v=af098a6",
    "/blog/images/git-guide-with-visual-interface/image_36-thumbnail.png?v=7c0a064",
    "/blog/images/git-guide-with-visual-interface/image_37-thumbnail.png?v=b0a93ad",
    "/blog/images/git-guide-with-visual-interface/image_38-thumbnail.png?v=ed2bf32",
    "/blog/images/git-guide-with-visual-interface/image_39-thumbnail.png?v=8ba15a7",
    "/blog/images/git-guide-with-visual-interface/image_4-thumbnail.png?v=cd9aff7",
    "/blog/images/git-guide-with-visual-interface/image_40-thumbnail.png?v=28afa95",
    "/blog/images/git-guide-with-visual-interface/image_41-thumbnail.png?v=f128100",
    "/blog/images/git-guide-with-visual-interface/image_42-thumbnail.png?v=6588dac",
    "/blog/images/git-guide-with-visual-interface/image_43-thumbnail.png?v=e96ee9f",
    "/blog/images/git-guide-with-visual-interface/image_44-thumbnail.png?v=8938b78",
    "/blog/images/git-guide-with-visual-interface/image_45-thumbnail.png?v=bd84187",
    "/blog/images/git-guide-with-visual-interface/image_46-thumbnail.png?v=216158e",
    "/blog/images/git-guide-with-visual-interface/image_47-thumbnail.png?v=db7003f",
    "/blog/images/git-guide-with-visual-interface/image_48-thumbnail.png?v=3ca14eb",
    "/blog/images/git-guide-with-visual-interface/image_49-thumbnail.png?v=d6548af",
    "/blog/images/git-guide-with-visual-interface/image_5-thumbnail.png?v=02f6ea5",
    "/blog/images/git-guide-with-visual-interface/image_50-thumbnail.png?v=dca60d7",
    "/blog/images/git-guide-with-visual-interface/image_51-thumbnail.png?v=d670afe",
    "/blog/images/git-guide-with-visual-interface/image_52-thumbnail.png?v=7c32d5e",
    "/blog/images/git-guide-with-visual-interface/image_53-thumbnail.png?v=1cea4a4",
    "/blog/images/git-guide-with-visual-interface/image_54-thumbnail.png?v=81883a1",
    "/blog/images/git-guide-with-visual-interface/image_55-thumbnail.png?v=0b1356f",
    "/blog/images/git-guide-with-visual-interface/image_56-thumbnail.png?v=1a5b993",
    "/blog/images/git-guide-with-visual-interface/image_57-thumbnail.png?v=696a6ed",
    "/blog/images/git-guide-with-visual-interface/image_58-thumbnail.png?v=6b11622",
    "/blog/images/git-guide-with-visual-interface/image_59-thumbnail.png?v=e63d5a9",
    "/blog/images/git-guide-with-visual-interface/image_6-thumbnail.png?v=6ff1fe8",
    "/blog/images/git-guide-with-visual-interface/image_60-thumbnail.png?v=296cfa4",
    "/blog/images/git-guide-with-visual-interface/image_61-thumbnail.png?v=23d8b46",
    "/blog/images/git-guide-with-visual-interface/image_7-thumbnail.png?v=1ce9b4d",
    "/blog/images/git-guide-with-visual-interface/image_8-thumbnail.png?v=bcb90f5",
    "/blog/images/git-guide-with-visual-interface/image_9-thumbnail.png?v=f338904",
    "/blog/images/haskell_python/haskell_python_headerimage-thumbnail.png?v=6e09b03",
    "/blog/images/juegos-biblicos/arma_la_historia_01-thumbnail.jpg?v=752714d",
    "/blog/images/juegos-biblicos/conoce_la_historia_01-thumbnail.jpg?v=8e14611",
    "/blog/images/juegos-biblicos/descargar_tutorial_01-thumbnail.png?v=ddced0a",
    "/blog/images/juegos-biblicos/descargar_tutorial_02-thumbnail.png?v=58ced86",
    "/blog/images/juegos-biblicos/espadeo_01-thumbnail.jpg?v=e0808e7",
    "/blog/images/juegos-biblicos/espadeo_02-thumbnail.jpg?v=8e7b008",
    "/blog/images/juegos-biblicos/espadeo_03-thumbnail.jpg?v=e650eaf",
    "/blog/images/juegos-biblicos/memo_paralelo_01-thumbnail.jpg?v=910df86",
    "/blog/images/juegos-biblicos/memo_paralelo_02-thumbnail.jpg?v=0391008",
    "/blog/images/juegos-biblicos/tabu_biblico_01-thumbnail.jpg?v=5a3bcff",
    "/blog/images/juegos-biblicos/trivia_adolescentes_01-thumbnail.jpg?v=e732239",
    "/blog/images/ode-python/ordinary-differential-equations-with-python-headerimage-thumbnail.png?v=fae4fd2",
    "/blog/images/online-lyrics/online-lyrics-headerimage-thumbnail.png?v=c1ae18d",
    "/blog/images/online-lyrics/tutorial-thumbnail.png?v=68afe83",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=e90673c",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=3df5cb0",
    "/categories/?v=601e34c",
    "/category/christianity/?v=7a1e515",
    "/category/data-visualization/?v=07c722d",
    "/category/programming/?v=1f297b9",
    "/category/simulation/?v=2f59723",
    "/category/software-engineer/?v=dbd6a13",
    "/cv-ref/?v=a735f92",
    "/cv/?v=3423ba0",
    "/drafts/bayesian-roadmap.html?v=38f48f6",
    "/drafts/my-super-post2.html?v=d4aeafb",
    "/drafts/pelican-mega-tutorial-part-1.html?v=dbc32e8",
    "/drafts/probability-world.html?v=30433ac",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=49067a6",
    "/feeds/all-es.atom.xml?v=1284f61",
    "/feeds/all.atom.xml?v=ca07131",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=afd6a3f",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=1f25513",
    "/interactive-optimization/?v=fc75de5",
    "/interactive-optimization/LICENSE?v=561fc8a",
    "/interactive-optimization/README.md?v=ae7e7c7",
    "/interactive-optimization/basic.js?v=d885d5c",
    "/interactive-optimization/media_image.png?v=a5f8d6f",
    "/interactive-optimization/nerdamer.js?v=ef69390",
    "/interactive-optimization/style.css?v=1fb1b12",
    "/jupyter-map/?v=8793fb1",
    "/jupyter-map/mapbox.js?v=807ec94",
    "/jupyter-map/media_image.png?v=a738759",
    "/jupyter-map/style.css?v=ce40042",
    "/link/CONAIISI2018/?v=f80db09",
    "/link/EMSS-Code/?v=97da644",
    "/link/EMSS-Dataset/?v=058f7da",
    "/link/EMSS-Paper/?v=ec591e8",
    "/link/EMSS-Slides/?v=37d4483",
    "/link/Python-Tutorial-0/?v=862e2b2",
    "/link/Python-Tutorial-1/?v=68fb89b",
    "/link/Python-Tutorial-2/?v=99342ae",
    "/link/Python-Tutorial-3/?v=132b11b",
    "/link/Python-Tutorial-4/?v=18422c4",
    "/link/Python-Tutorial-5/?v=4697331",
    "/link/Python-Tutorial-6-2/?v=55b3f74",
    "/link/Python-Tutorial-6/?v=bbd66b1",
    "/link/Python-Tutorial-7/?v=ba7116c",
    "/link/Python-Tutorial-8/?v=5a7ca6a",
    "/link/Python-Tutorial/?v=2e01a8b",
    "/link/Slides-Pelican/?v=646646c",
    "/link/arma-historia-pdf/?v=f910eb5",
    "/link/arma-historia/?v=232700b",
    "/link/certificate-dlr/?v=9d81a25",
    "/link/certificate-iot/?v=9ddce5e",
    "/link/certificate-probabilistic/?v=e4827de",
    "/link/conoce-historia-pdf/?v=6edab1a",
    "/link/conoce-historia/?v=a6b3fc7",
    "/link/cv-ref/?v=a735f92",
    "/link/cv/?v=3423ba0",
    "/link/elevator-simulation/?v=ef8b88e",
    "/link/espadeo-biblico-pdf/?v=657e58c",
    "/link/espadeo-biblico/?v=bb5bd60",
    "/link/genetic_algorithm_repo/?v=04134a6",
    "/link/github/?v=4bc6a23",
    "/link/lyrics_presentation/?v=51b4079",
    "/link/memo-paralelo-pdf/?v=2ecbd05",
    "/link/memo-paralelo/?v=3264f1f",
    "/link/ode_python_binder/?v=41c7cfe",
    "/link/ode_python_gist/?v=486ebdb",
    "/link/pascal_triangle_binder/?v=92900ba",
    "/link/pascal_triangle_gist/?v=7504945",
    "/link/portfolio/?v=fe6d4ce",
    "/link/pyfladesk_repo/?v=a67778a",
    "/link/research/?v=a28eabb",
    "/link/scholar/?v=97cda8d",
    "/link/simulation-model/?v=bf3dae2",
    "/link/soporte-jupyter/?v=e0e1102",
    "/link/tabu-biblico-pdf/?v=8c5fa4b",
    "/link/tabu-biblico-web/?v=fc3cef8",
    "/link/tabu-biblico/?v=e1cb99e",
    "/link/times_table_binder/?v=6d6d64f",
    "/link/trivia-adolescente-pdf/?v=e1cfac3",
    "/link/trivia-adolescente/?v=213af7f",
    "/link/vias/?v=6611b95",
    "/localization.ini?v=a4513c4",
    "/lyrics-presentation/?v=89c022c",
    "/lyrics-presentation/README.md?v=4017229",
    "/lyrics-presentation/lang.ini?v=94ce9ff",
    "/lyrics-presentation/media_image.png?v=8cb9dc0",
    "/lyrics-presentation/pptx.js?v=10d33ef",
    "/lyrics-presentation/webl10n.min.js?v=2ec43e0",
    "/page/2/?v=f87fb4b",
    "/portfolio/?v=fe6d4ce",
    "/posts/2018/?v=0f51421",
    "/posts/2018/Dec/?v=9790ff8",
    "/posts/2018/Feb/?v=21a73bc",
    "/posts/2018/Nov/?v=9d70d66",
    "/posts/2018/Sep/?v=48d07ea",
    "/posts/2019/?v=7d5b9a1",
    "/posts/2019/Apr/?v=18d22a2",
    "/posts/2019/Jan/?v=2eedbb2",
    "/posts/2019/May/?v=22ec14d",
    "/posts/embed-interactive-notebooks/?v=9ad59f4",
    "/posts/executable-flask-pyinstaller/?v=5fbd694",
    "/posts/fastai-colab-deep-learning/?v=5007f34",
    "/posts/git-guide-with-visual-interface/?v=462bdd8",
    "/posts/git-guide-with-visual-interface/es/?v=ae865ad",
    "/posts/haskell-pattern-matching-in-python/?v=02918d6",
    "/posts/juegos-biblicos/es/?v=abf30b0",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=60e0b71",
    "/posts/online-lyrics-presentation-generator/?v=0a8962c",
    "/posts/online-lyrics-presentation-generator/es/?v=4ad390a",
    "/posts/ordinary-differential-equations-with-python/?v=4f4d66c",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=5d17452",
    "/posts/plotting-fractals-step-by-step-with-python/?v=26e2634",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=b112554",
    "/posts/times-tables/?v=871848f",
    "/projects/?v=56504cc",
    "/publications.html?v=e19296b",
    "/python-course/?v=3763ca0",
    "/research/?v=a28eabb",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=f026bfe",
    "/tabubiblico/?v=8cf011f",
    "/tabubiblico/android-chrome-192x192.png?v=3cc9eba",
    "/tabubiblico/android-chrome-384x384.png?v=76c065b",
    "/tabubiblico/apple-touch-icon.png?v=ffd44ae",
    "/tabubiblico/browserconfig.xml?v=fcfb346",
    "/tabubiblico/css/app.546a4c6b.css?v=e79c64a",
    "/tabubiblico/favicon-16x16.png?v=51cfd19",
    "/tabubiblico/favicon-32x32.png?v=d14d9f4",
    "/tabubiblico/favicon.ico?v=72d484b",
    "/tabubiblico/img/check-blk.75f8de22.svg?v=a4d91a7",
    "/tabubiblico/img/check.007e9b2e.svg?v=a41e2de",
    "/tabubiblico/img/checkmark.0240896d.svg?v=c7d7ffb",
    "/tabubiblico/img/cross-blk.87dd3042.svg?v=7ba4a5d",
    "/tabubiblico/img/cross.50a0158e.svg?v=efca701",
    "/tabubiblico/js/app.d81ec319.js.map?v=333e1c3",
    "/tabubiblico/js/app.d81ec319.js?v=8cdbd8e",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js.map?v=edd85cd",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js?v=c5ab9c7",
    "/tabubiblico/mstile-150x150.png?v=4f5bebd",
    "/tabubiblico/safari-pinned-tab.svg?v=ee79744",
    "/tabubiblico/site.webmanifest?v=968461f",
    "/tabubiblico/social.png?v=10f6305",
    "/tabubiblico/social_large.png?v=2be44d4",
    "/tag/bible/?v=d1f7ba6",
    "/tag/christian/?v=584f6dc",
    "/tag/data-visualization/?v=419d63e",
    "/tag/deep-learning/?v=5e9a543",
    "/tag/fastai/?v=04f115f",
    "/tag/flask/?v=ce90f9c",
    "/tag/fractals/?v=987809d",
    "/tag/games/?v=06e7d8e",
    "/tag/git/?v=d57f81f",
    "/tag/gitkraken/?v=2d2ddc3",
    "/tag/gui/?v=2367f73",
    "/tag/haskell/?v=6d2c367",
    "/tag/jupyter/?v=ce4b914",
    "/tag/math/?v=f8e5f35",
    "/tag/nbinteract/?v=a718bf8",
    "/tag/pelican/?v=c8766c1",
    "/tag/probability/?v=89e2a56",
    "/tag/programming/?v=4bbf316",
    "/tag/publishing/?v=2f6aa54",
    "/tag/pyinstaller/?v=e255fa7",
    "/tag/python/?v=02066ef",
    "/tag/simulation/?v=8f5e51e",
    "/tag/tuple-unpacking/?v=bc8b91b",
    "/tag/turtle/?v=8251f17",
    "/tag/tutorial/?v=cc0c79e",
    "/tag/webapp/?v=2c650dd",
    "/tags/?v=5edbee9",
    "/theme/css/style.css?v=9d0aa6f",
    "/theme/images/DOC.svg?v=5d41948",
    "/theme/images/Jupyter.svg?v=056bcc4",
    "/theme/images/PDF.svg?v=872b33e",
    "/theme/images/RevealJS.svg?v=eb946c8",
    "/theme/js/scripts.js?v=29380c0"
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCacheName)
      .then(cache => cache.addAll(filesToCache))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => cacheNames.filter(cacheName => ! currentCacheName.includes(cacheName) ))
      .then(cachesToDelete => Promise.all(cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))))
      .then(self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  const scope = self.registration.scope;
  
	if (!url.startsWith(scope)) {
		return;
  }

  event.respondWith(
    caches.open(currentCacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}) )
      .then(response => response || fetch(event.request) )
  );
});
