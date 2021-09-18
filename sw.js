const version = "dc1b213";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=e06379f",
    "/about/?v=00e04f8",
    "/archives/?v=882dd9a",
    "/author/ezequiel-leonardo-castano/?v=ad784ae",
    "/author/ezequiel-leonardo-castano/page/2/?v=a4ca795",
    "/authors/?v=708355e",
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
    "/blog/images/fast-colab-deep-learning/fast-colab-deep-learning_headerimage-thumbnail.png?v=eba24cb",
    "/blog/images/fast-colab-deep-learning/gartnet-2017-thumbnail.jpg?v=202500d",
    "/blog/images/fast-colab-deep-learning/neural-networks-types-thumbnail.png?v=1575946",
    "/blog/images/fast-colab-deep-learning/sklearn-roadmap-thumbnail.png?v=7a9952c",
    "/blog/images/flask_pyinstaller/flask-pyinstaller_headerimage-thumbnail.png?v=e7fae8c",
    "/blog/images/fractals/factals_headerimage-thumbnail.png?v=9edd09c",
    "/blog/images/git-guide-with-visual-interface/git-guide-with-visual-interface-headerimage-thumbnail.png?v=d052941",
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
    "/blog/images/jupyter-collaborative/failed_tunnel-thumbnail.png?v=cf825be",
    "/blog/images/jupyter-collaborative/jupyter-collaborative-headerimage-thumbnail.png?v=8037dbb",
    "/blog/images/jupyter-collaborative/jupyter_blocking-thumbnail.png?v=c37349a",
    "/blog/images/jupyter-collaborative/jupyter_insecure-thumbnail.png?v=6256000",
    "/blog/images/jupyter-collaborative/jupyter_password-thumbnail.png?v=5935316",
    "/blog/images/jupyter-collaborative/jupyter_self_signed-thumbnail.png?v=547d251",
    "/blog/images/jupyter-collaborative/network_diagram_1-thumbnail.png?v=527cb20",
    "/blog/images/jupyter-collaborative/network_diagram_2-thumbnail.png?v=a6bdd89",
    "/blog/images/jupyter-collaborative/network_diagram_3-thumbnail.png?v=71adffb",
    "/blog/images/jupyter-collaborative/network_diagram_4-thumbnail.png?v=0cfb6b7",
    "/blog/images/jupyter-collaborative/network_diagram_5-thumbnail.png?v=b5d55dc",
    "/blog/images/jupyter-collaborative/network_diagram_6-thumbnail.png?v=af115ce",
    "/blog/images/jupyter-collaborative/network_diagram_7-thumbnail.png?v=2076d41",
    "/blog/images/jupyter-collaborative/ngrok_basic_auth-thumbnail.png?v=d1cb500",
    "/blog/images/jupyter-collaborative/ngrok_basic_auth_success-thumbnail.png?v=8a2735a",
    "/blog/images/jupyter-collaborative/ngrok_forbidden-thumbnail.png?v=3041e46",
    "/blog/images/jupyter-collaborative/ngrok_http-thumbnail.png?v=6d86ea3",
    "/blog/images/jupyter-collaborative/ngrok_http_to_https-thumbnail.png?v=9985f0b",
    "/blog/images/jupyter-collaborative/ngrok_https_only-thumbnail.png?v=e172df6",
    "/blog/images/jupyter-collaborative/ngrok_success-thumbnail.png?v=25a9e34",
    "/blog/images/jupyter-collaborative/ngrok_with_without-thumbnail.png?v=6cf5913",
    "/blog/images/jupyter-publishing/github-jupyter-thumbnail.png?v=8b24bf4",
    "/blog/images/jupyter-publishing/github-logo-thumbnail.png?v=9ea56eb",
    "/blog/images/jupyter-publishing/google-colab-thumbnail.png?v=b87bc52",
    "/blog/images/jupyter-publishing/html-export-thumbnail.png?v=b074e61",
    "/blog/images/jupyter-publishing/ipynb-format-thumbnail.png?v=e53be7e",
    "/blog/images/jupyter-publishing/jupyter-lite-thumbnail.png?v=464fc4c",
    "/blog/images/jupyter-publishing/jupyter-publishing-headerimage-thumbnail.png?v=497384d",
    "/blog/images/jupyter-publishing/my-binder-thumbnail.png?v=7695d61",
    "/blog/images/jupyter-publishing/nbviewer-thumbnail.png?v=ce4ba2e",
    "/blog/images/jupyter-publishing/static-site-generators-thumbnail.png?v=37b2873",
    "/blog/images/ode-python/ordinary-differential-equations-with-python-headerimage-thumbnail.png?v=fae4fd2",
    "/blog/images/online-lyrics/online-lyrics-headerimage-thumbnail.png?v=c1ae18d",
    "/blog/images/online-lyrics/tutorial-thumbnail.png?v=68afe83",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=e90673c",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=3df5cb0",
    "/categories/?v=9ba94bf",
    "/category/christianity/?v=4e63abf",
    "/category/data-visualization/?v=28aee43",
    "/category/programming/?v=8af3884",
    "/category/simulation/?v=90f9f74",
    "/category/software-engineer/?v=b30802a",
    "/control/?v=eb23511",
    "/cv-ref/?v=a735f92",
    "/cv/?v=3423ba0",
    "/drafts/bayesian-roadmap.html?v=8c0472b",
    "/drafts/my-super-post2.html?v=4a1695e",
    "/drafts/pelican-mega-tutorial-part-1.html?v=1525180",
    "/drafts/probability-world.html?v=b042b29",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=d4e1089",
    "/feeds/all-es.atom.xml?v=22da2c0",
    "/feeds/all.atom.xml?v=d34dc2d",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=db8854e",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=b1d7366",
    "/interactive-optimization/?v=b13d084",
    "/interactive-optimization/basic.js?v=cfe3bd3",
    "/interactive-optimization/media_image.png?v=9e813b7",
    "/interactive-optimization/nerdamer.js?v=efd4135",
    "/interactive-optimization/style.css?v=641000d",
    "/jupyter-map/?v=d3e83bf",
    "/jupyter-map/mapbox.js?v=e20ac18",
    "/jupyter-map/media_image.png?v=66293f1",
    "/jupyter-map/style.css?v=a63f92a",
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
    "/link/certificate-scarse/?v=7441e4f",
    "/link/conoce-historia-pdf/?v=6edab1a",
    "/link/conoce-historia/?v=a6b3fc7",
    "/link/control/?v=eb23511",
    "/link/control_01/?v=7806c40",
    "/link/control_02/?v=75ce007",
    "/link/control_03/?v=cca8e54",
    "/link/control_04/?v=55cfd35",
    "/link/control_05/?v=943fc6c",
    "/link/control_06/?v=c2f5cf1",
    "/link/control_07/?v=a522da4",
    "/link/control_08/?v=39c2f15",
    "/link/control_09/?v=d3bc213",
    "/link/cv-ref/?v=a735f92",
    "/link/cv/?v=3423ba0",
    "/link/elevator-simulation/?v=ef8b88e",
    "/link/espadeo-biblico-pdf/?v=657e58c",
    "/link/espadeo-biblico/?v=bb5bd60",
    "/link/flask-boilerplate/?v=6b3d1f9",
    "/link/genetic_algorithm_repo/?v=04134a6",
    "/link/github/?v=4bc6a23",
    "/link/lyrics_presentation/?v=51b4079",
    "/link/memo-paralelo-pdf/?v=2ecbd05",
    "/link/memo-paralelo/?v=3264f1f",
    "/link/ode_python_binder/?v=41c7cfe",
    "/link/ode_python_gist/?v=486ebdb",
    "/link/pascal_triangle_binder/?v=92900ba",
    "/link/pascal_triangle_gist/?v=7504945",
    "/link/pelican-curso/?v=6706b83",
    "/link/pelican/?v=c0d15e7",
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
    "/localization.ini?v=27b5cf8",
    "/lyrics-presentation/?v=0dd7f6f",
    "/lyrics-presentation/lang.ini?v=83cf1a1",
    "/lyrics-presentation/media_image.png?v=53dfbf2",
    "/lyrics-presentation/pptx.js?v=3c8f9d0",
    "/lyrics-presentation/webl10n.min.js?v=5de71e8",
    "/page/2/?v=aac850d",
    "/portfolio/?v=fe6d4ce",
    "/posts/2018/?v=31c87fe",
    "/posts/2018/Dec/?v=045964f",
    "/posts/2018/Feb/?v=03d091a",
    "/posts/2018/Nov/?v=fbb5aef",
    "/posts/2018/Sep/?v=ed04d7e",
    "/posts/2019/?v=0617d79",
    "/posts/2019/Apr/?v=06a8242",
    "/posts/2019/Jan/?v=23f4c95",
    "/posts/2019/May/?v=12e42f4",
    "/posts/2021/?v=09565a2",
    "/posts/2021/Aug/?v=78f4131",
    "/posts/2021/Sep/?v=8d816b7",
    "/posts/embed-interactive-notebooks/?v=56fdd45",
    "/posts/executable-flask-pyinstaller/?v=bd53e90",
    "/posts/fastai-colab-deep-learning/?v=fa02261",
    "/posts/git-guide-with-visual-interface/?v=c9c8582",
    "/posts/git-guide-with-visual-interface/es/?v=0c2849b",
    "/posts/haskell-pattern-matching-in-python/?v=16a26a2",
    "/posts/juegos-biblicos/es/?v=362a190",
    "/posts/jupyter-collaborative/?v=a98d09c",
    "/posts/jupyter-publishing/?v=b8ce3c7",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=2e04048",
    "/posts/online-lyrics-presentation-generator/?v=c5f8dc7",
    "/posts/online-lyrics-presentation-generator/es/?v=67f52ae",
    "/posts/ordinary-differential-equations-with-python/?v=95b8962",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=a3714ea",
    "/posts/plotting-fractals-step-by-step-with-python/?v=9dc6af4",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=efb614f",
    "/posts/times-tables/?v=d24d04c",
    "/projects/?v=f728fb0",
    "/publications.html?v=6e625f7",
    "/python-course/?v=b224d47",
    "/research/?v=a28eabb",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=5054d6b",
    "/tabubiblico/?v=c1e2276",
    "/tabubiblico/android-chrome-192x192.png?v=393bd36",
    "/tabubiblico/android-chrome-384x384.png?v=3d03b3d",
    "/tabubiblico/apple-touch-icon.png?v=9cd5da2",
    "/tabubiblico/browserconfig.xml?v=32fa438",
    "/tabubiblico/css/app.546a4c6b.css?v=31dfda4",
    "/tabubiblico/favicon-16x16.png?v=2508531",
    "/tabubiblico/favicon-32x32.png?v=650650d",
    "/tabubiblico/favicon.ico?v=1ff68ff",
    "/tabubiblico/img/check-blk.75f8de22.svg?v=5c594e9",
    "/tabubiblico/img/check.007e9b2e.svg?v=7e51d0a",
    "/tabubiblico/img/checkmark.0240896d.svg?v=49bf7e6",
    "/tabubiblico/img/cross-blk.87dd3042.svg?v=b15117a",
    "/tabubiblico/img/cross.50a0158e.svg?v=da1df8e",
    "/tabubiblico/js/app.4897e67e.js.map?v=a896289",
    "/tabubiblico/js/app.4897e67e.js?v=a51cd76",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js.map?v=0309c32",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js?v=84fcd12",
    "/tabubiblico/mstile-150x150.png?v=324d01e",
    "/tabubiblico/safari-pinned-tab.svg?v=bd42189",
    "/tabubiblico/site.webmanifest?v=7d6944b",
    "/tabubiblico/social.png?v=636b047",
    "/tabubiblico/social_large.png?v=a5fc7c6",
    "/tag/animation/?v=136d36c",
    "/tag/anylogic/?v=806b26e",
    "/tag/bible/?v=75c0bd0",
    "/tag/binder/?v=bef7745",
    "/tag/christian/?v=10d83c9",
    "/tag/colab/?v=e90a71f",
    "/tag/collaboration/?v=472f064",
    "/tag/data-visualization/?v=59cc649",
    "/tag/deep-learning/?v=5ae1d4f",
    "/tag/fastai/?v=981ea7a",
    "/tag/flask/?v=40599ee",
    "/tag/fractals/?v=38cd8a4",
    "/tag/games/?v=1987770",
    "/tag/git/?v=008750d",
    "/tag/gitkraken/?v=15e563d",
    "/tag/gui/?v=9ae076f",
    "/tag/haskell/?v=93ac6aa",
    "/tag/jupyter-notebooks/?v=490b672",
    "/tag/jupyter/?v=07cbfd0",
    "/tag/latex/?v=a0ba6fe",
    "/tag/lyrics/?v=6bc713e",
    "/tag/math/?v=11cc813",
    "/tag/matplotlib/?v=85b401a",
    "/tag/nbinteract/?v=9c3ed39",
    "/tag/ngrok/?v=249d96c",
    "/tag/notebooks/?v=059c4c9",
    "/tag/ode/?v=bd0bafe",
    "/tag/pelican/?v=dc2b7f0",
    "/tag/presentation/?v=80b88ab",
    "/tag/probability/?v=9b60e99",
    "/tag/programming/?v=37d38c9",
    "/tag/publishing/?v=1654cc7",
    "/tag/pyinstaller/?v=9d64c6d",
    "/tag/python/?v=1ac8d4d",
    "/tag/scipy/?v=338867e",
    "/tag/security/?v=3580a9e",
    "/tag/simulation/?v=3e39fad",
    "/tag/static-website/?v=feb23f6",
    "/tag/tuple-unpacking/?v=9561b6f",
    "/tag/turtle/?v=1acf782",
    "/tag/tutorial/?v=c7e24c8",
    "/tag/webapp/?v=dfa422c",
    "/tags/?v=f3b38b1",
    "/theme/css/style.css?v=fbc8b28",
    "/theme/images/DOC.svg?v=5d41948",
    "/theme/images/Jupyter.svg?v=056bcc4",
    "/theme/images/PDF.svg?v=872b33e",
    "/theme/images/RevealJS.svg?v=eb946c8",
    "/theme/js/scripts.js?v=d08a3f1"
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
