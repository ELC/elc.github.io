const version = "01f907f";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=7cce538",
    "/about/?v=0d3baa8",
    "/archives/?v=acd34a5",
    "/author/ezequiel-leonardo-castano/?v=efee92d",
    "/author/ezequiel-leonardo-castano/page/2/?v=70b66eb",
    "/authors/?v=85ee01e",
    "/blog/iframes/elevator-simulation/simulation-anylogic-iframe.html?v=952b4c5",
    "/blog/iframes/frro-io/lp-2-variables-iframe.html?v=5699376",
    "/blog/iframes/ode-python/foxes-rabbits-iframe.html?v=92bb34e",
    "/blog/iframes/ode-python/home-economy-iframe.html?v=7bd965f",
    "/blog/iframes/ode-python/houses-air_conditioning-iframe.html?v=8b5c659",
    "/blog/iframes/ode-python/stock-control-iframe.html?v=71f8336",
    "/blog/iframes/ode-python/useful-life-iframe.html?v=6211a9c",
    "/blog/iframes/times-tables/times-table-factor-by-factor-colored-iframe.html?v=0bb64d2",
    "/blog/iframes/times-tables/times-table-factor-by-factor-iframe.html?v=894305f",
    "/blog/iframes/times-tables/times-table-line-by-line-iframe.html?v=81c89e6",
    "/blog/iframes/times-tables/times-table-parametric-iframe.html?v=1210db7",
    "/blog/iframes/times-tables/times-table-point-by-point-iframe.html?v=7edbfb5",
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
    "/blog/images/streamlit-google-analytics/deploy-streamlit-thumbnail.png?v=03ee57b",
    "/blog/images/streamlit-google-analytics/deployment-options-thumbnail.png?v=fcc13d3",
    "/blog/images/streamlit-google-analytics/github-pages-thumbnail.png?v=e3ff5f2",
    "/blog/images/streamlit-google-analytics/streamlit-google-analytics_headerimage-thumbnail.png?v=da58a98",
    "/blog/images/streamlit-lessons/streamlit-lessons_headerimage-thumbnail.png?v=9f590cf",
    "/blog/images/streamlit-mutipage/streamlit-mutipage_headerimage-thumbnail.png?v=5f1acdd",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=e90673c",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=3df5cb0",
    "/categories/?v=98824f9",
    "/category/christianity/?v=2101a8f",
    "/category/data-visualization/?v=2d6fa39",
    "/category/programming/?v=f2f81b0",
    "/category/simulation/?v=5c1ce3a",
    "/category/software-engineer/?v=ee54faa",
    "/control/?v=ecb8cf5",
    "/cv-ref/?v=5ec8d79",
    "/cv/?v=01d36bb",
    "/disclaimer.html?v=8e41c43",
    "/donate.html?v=65fccd6",
    "/drafts/bayesian-roadmap.html?v=717e833",
    "/drafts/my-super-post2.html?v=2bd6f44",
    "/drafts/pelican-mega-tutorial-part-1.html?v=858c2ff",
    "/drafts/probability-world.html?v=6348cae",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=840f7fa",
    "/feeds/all-es.atom.xml?v=bea6e2c",
    "/feeds/all.atom.xml?v=130b0dc",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=0623f83",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=e55e5c3",
    "/interactive-optimization/?v=f084ee4",
    "/interactive-optimization/basic.js?v=0dd01bc",
    "/interactive-optimization/media_image.png?v=6ec00a4",
    "/interactive-optimization/nerdamer.js?v=27d3c98",
    "/interactive-optimization/style.css?v=93e8d71",
    "/jupyter-map/?v=d3e83bf",
    "/jupyter-map/mapbox.js?v=e20ac18",
    "/jupyter-map/media_image.png?v=66293f1",
    "/jupyter-map/style.css?v=a63f92a",
    "/link/CONAIISI2018/?v=6056cf8",
    "/link/EMSS-Code/?v=28e7bc8",
    "/link/EMSS-Dataset/?v=09fafc0",
    "/link/EMSS-Paper/?v=1788ef4",
    "/link/EMSS-Slides/?v=c4c5a7c",
    "/link/Python-Tutorial-0/?v=a671e35",
    "/link/Python-Tutorial-1/?v=88e0d2f",
    "/link/Python-Tutorial-2/?v=c20a4a1",
    "/link/Python-Tutorial-3/?v=25e9a46",
    "/link/Python-Tutorial-4/?v=9271e53",
    "/link/Python-Tutorial-5/?v=1d23a03",
    "/link/Python-Tutorial-6-2/?v=4cfbd8c",
    "/link/Python-Tutorial-6/?v=defef26",
    "/link/Python-Tutorial-7/?v=aec7fc9",
    "/link/Python-Tutorial-8/?v=317849a",
    "/link/Python-Tutorial/?v=10fb7da",
    "/link/Slides-Pelican/?v=64ceccb",
    "/link/arma-historia-pdf/?v=26db547",
    "/link/arma-historia/?v=03912d7",
    "/link/certificate-dlr/?v=edcb220",
    "/link/certificate-iot/?v=b6b3fce",
    "/link/certificate-probabilistic/?v=96bfb71",
    "/link/certificate-scarse/?v=157b301",
    "/link/conoce-historia-pdf/?v=1e6cbc3",
    "/link/conoce-historia/?v=08ac471",
    "/link/control/?v=ecb8cf5",
    "/link/control_01/?v=2cd01ef",
    "/link/control_02/?v=6ae0e69",
    "/link/control_03/?v=2c32530",
    "/link/control_04/?v=fcd2665",
    "/link/control_05/?v=270d96a",
    "/link/control_06/?v=ebed912",
    "/link/control_07/?v=1909c27",
    "/link/control_08/?v=7dd7069",
    "/link/control_09/?v=191e64a",
    "/link/cv-ref/?v=5ec8d79",
    "/link/cv/?v=01d36bb",
    "/link/elevator-simulation/?v=0a941d0",
    "/link/espadeo-biblico-pdf/?v=ceb70b9",
    "/link/espadeo-biblico/?v=92f6a65",
    "/link/flask-boilerplate/?v=a0f66d2",
    "/link/genetic_algorithm_repo/?v=6d5a5f3",
    "/link/github/?v=72677dc",
    "/link/lyrics_presentation/?v=3d39f75",
    "/link/memo-paralelo-pdf/?v=0d93dc5",
    "/link/memo-paralelo/?v=eee9ef3",
    "/link/ode_python_binder/?v=56168b4",
    "/link/ode_python_gist/?v=4f167a4",
    "/link/pascal_triangle_binder/?v=982871e",
    "/link/pascal_triangle_gist/?v=9796f44",
    "/link/pelican-curso/?v=81e46ca",
    "/link/pelican/?v=f5776af",
    "/link/portfolio/?v=f08edc4",
    "/link/pyfladesk_repo/?v=ca3efa9",
    "/link/research/?v=5b8cc02",
    "/link/scholar/?v=20fe2ef",
    "/link/simulation-model/?v=a07f14d",
    "/link/soporte-jupyter/?v=0332da9",
    "/link/tabu-biblico-pdf/?v=b1a4cf4",
    "/link/tabu-biblico-web/?v=dc41153",
    "/link/tabu-biblico/?v=6899244",
    "/link/times_table_binder/?v=6f409e7",
    "/link/trivia-adolescente-pdf/?v=81e48a3",
    "/link/trivia-adolescente/?v=5f415ed",
    "/link/vias/?v=0633a3a",
    "/localization.ini?v=266fade",
    "/lyrics-presentation/?v=dba03fa",
    "/lyrics-presentation/lang.ini?v=e1771ac",
    "/lyrics-presentation/media_image.png?v=ee9b879",
    "/lyrics-presentation/pptx.js?v=e302d93",
    "/lyrics-presentation/webl10n.min.js?v=24cf1ae",
    "/page/2/?v=46c2181",
    "/portfolio/?v=f08edc4",
    "/posts/2018/?v=362cb63",
    "/posts/2018/Dec/?v=fff5777",
    "/posts/2018/Feb/?v=518cdaa",
    "/posts/2018/Nov/?v=cab3689",
    "/posts/2018/Sep/?v=2ac709f",
    "/posts/2019/?v=4bcac37",
    "/posts/2019/Apr/?v=1f9cf50",
    "/posts/2019/Jan/?v=b5aeeef",
    "/posts/2019/May/?v=549856a",
    "/posts/2021/?v=9122140",
    "/posts/2021/Aug/?v=e8f03ef",
    "/posts/2021/Sep/?v=806a340",
    "/posts/2022/?v=bcf78dc",
    "/posts/2022/Jan/?v=87da97a",
    "/posts/embed-interactive-notebooks/?v=02c07c4",
    "/posts/executable-flask-pyinstaller/?v=251c02e",
    "/posts/fastai-colab-deep-learning/?v=eff3f42",
    "/posts/git-guide-with-visual-interface/?v=dacc280",
    "/posts/git-guide-with-visual-interface/es/?v=e168375",
    "/posts/haskell-pattern-matching-in-python/?v=a2a3179",
    "/posts/juegos-biblicos/es/?v=e161c6f",
    "/posts/jupyter-collaborative/?v=145f4c6",
    "/posts/jupyter-publishing/?v=449b596",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=ab13a3a",
    "/posts/online-lyrics-presentation-generator/?v=bbb188d",
    "/posts/online-lyrics-presentation-generator/es/?v=4a9047e",
    "/posts/ordinary-differential-equations-with-python/?v=2280e12",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=4eabd8e",
    "/posts/plotting-fractals-step-by-step-with-python/?v=f8f7746",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=a416123",
    "/posts/streamlit-google-analytics/?v=c818e52",
    "/posts/streamlit-lessons/?v=e23ebff",
    "/posts/streamlit-multipage/?v=f203600",
    "/posts/times-tables/?v=82f89d8",
    "/projects/?v=8b66542",
    "/publications.html?v=213d29e",
    "/python-course/?v=20892d3",
    "/research/?v=5b8cc02",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=3692920",
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
    "/tag/altair/?v=c09c0f1",
    "/tag/animation/?v=2db6767",
    "/tag/anylogic/?v=2ef4037",
    "/tag/bible/?v=e01bd3d",
    "/tag/binder/?v=e430783",
    "/tag/christian/?v=4e9c7c3",
    "/tag/colab/?v=e68b73b",
    "/tag/collaboration/?v=bdbba15",
    "/tag/data-visualization/?v=1d5e1eb",
    "/tag/deep-learning/?v=da05bbd",
    "/tag/fastai/?v=f26da28",
    "/tag/flask/?v=9ab14bd",
    "/tag/fractals/?v=daebd51",
    "/tag/games/?v=c89fbe2",
    "/tag/git/?v=9bce63d",
    "/tag/github-pages/?v=3a973be",
    "/tag/github/?v=b90d3ed",
    "/tag/gitkraken/?v=7ed0ce6",
    "/tag/google-analytics/?v=36c44f1",
    "/tag/gui/?v=969abda",
    "/tag/haskell/?v=2d2cdf8",
    "/tag/jupyter-notebooks/?v=eea67f1",
    "/tag/jupyter/?v=3c1b1b1",
    "/tag/latex/?v=901d405",
    "/tag/lyrics/?v=c637091",
    "/tag/math/?v=4fdc40c",
    "/tag/matplotlib/?v=37aa78f",
    "/tag/nbinteract/?v=25e4c16",
    "/tag/ngrok/?v=75f2c9b",
    "/tag/notebooks/?v=a163391",
    "/tag/ode/?v=81eefa6",
    "/tag/pelican/?v=c3677d2",
    "/tag/presentation/?v=763bff9",
    "/tag/probability/?v=1190c5b",
    "/tag/programming/?v=514189b",
    "/tag/publishing/?v=0aea365",
    "/tag/pyinstaller/?v=dcfc770",
    "/tag/python/?v=db5af9f",
    "/tag/python/page/2/?v=b2f9864",
    "/tag/scipy/?v=b72a1f2",
    "/tag/security/?v=26e4c17",
    "/tag/simulation/?v=337087a",
    "/tag/static-website/?v=633e558",
    "/tag/streamlit/?v=45ff676",
    "/tag/tuple-unpacking/?v=3ab3b85",
    "/tag/turtle/?v=323338a",
    "/tag/tutorial/?v=9541966",
    "/tag/webapp/?v=89e69d2",
    "/tags/?v=3a9196b",
    "/theme/css/style.css?v=e76c6bc",
    "/theme/images/DOC.svg?v=5d41948",
    "/theme/images/Jupyter.svg?v=056bcc4",
    "/theme/images/PDF.svg?v=872b33e",
    "/theme/images/RevealJS.svg?v=eb946c8",
    "/theme/js/scripts.js?v=7de458d"
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
