const version = "e249482";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=e0a5468",
    "/archives/?v=a0a4182",
    "/author/ezequiel-leonardo-castano/?v=3a51383",
    "/author/ezequiel-leonardo-castano/page/2/?v=e3ab4b8",
    "/authors/?v=e70c987",
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
    "/blog/images/elevator-simulation/elevator-simulation-headerimage-thumbnail.png?v=3303c21",
    "/blog/images/elevator-simulation/elevator-state-machine-thumbnail.jpg?v=44d1a43",
    "/blog/images/elevator-simulation/floor-distribution-thumbnail.png?v=33ddb6f",
    "/blog/images/elevator-simulation/pedestrian-state-machine-thumbnail.jpg?v=368d1ee",
    "/blog/images/elevator-simulation/simulation-part1-thumbnail.jpg?v=dd33321",
    "/blog/images/elevator-simulation/simulation-part2-thumbnail.jpg?v=3317a2c",
    "/blog/images/elevator-simulation/simulation-part3-thumbnail.jpg?v=b9fe9f3",
    "/blog/images/elevator-simulation/simulation-part4-thumbnail.jpg?v=2d09a6c",
    "/blog/images/elevator-simulation/simulation-part5-thumbnail.jpg?v=52f8eed",
    "/blog/images/elevator-simulation/simulation-part6-thumbnail.jpg?v=e0481c6",
    "/blog/images/elevator-simulation/simulation-part7-thumbnail.jpg?v=6e1e1cf",
    "/blog/images/elevator-simulation/stats-01-thumbnail.png?v=b9e35dc",
    "/blog/images/elevator-simulation/stats-02-thumbnail.png?v=1788c2e",
    "/blog/images/elevator-simulation/stats-03-thumbnail.png?v=115414f",
    "/blog/images/elevator-simulation/stats-04-thumbnail.png?v=fb8a6b7",
    "/blog/images/elevator-simulation/stats-05-thumbnail.png?v=dfd1705",
    "/blog/images/elevator-simulation/student-behavior-thumbnail.jpg?v=55feb44",
    "/blog/images/embed_interactive_notebooks/embed-interactive-notebooks_headerimage-thumbnail.png?v=0ce0ad1",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_01-thumbnail.png?v=9f3b65e",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_02-thumbnail.png?v=1d53e12",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_03-thumbnail.png?v=acca1cf",
    "/blog/images/embed_interactive_notebooks/gist_tutorial_04-thumbnail.png?v=272670c",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_01-thumbnail.png?v=e8f0604",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_02-thumbnail.png?v=dadcbb9",
    "/blog/images/embed_interactive_notebooks/mybinder_tutorial_03-thumbnail.png?v=53848e2",
    "/blog/images/fast-colab-deep-learning/colab-edit-thumbnail.png?v=cc84f71",
    "/blog/images/fast-colab-deep-learning/colab-gpu-thumbnail.png?v=5fa810c",
    "/blog/images/fast-colab-deep-learning/data-science-tools-thumbnail.png?v=6ba74d0",
    "/blog/images/fast-colab-deep-learning/fast-colab-deep-learning_headerimage-thumbnail.png?v=2f9da21",
    "/blog/images/fast-colab-deep-learning/gartnet-2017-thumbnail.jpg?v=60c6198",
    "/blog/images/fast-colab-deep-learning/neural-networks-types-thumbnail.png?v=783ef69",
    "/blog/images/fast-colab-deep-learning/sklearn-roadmap-thumbnail.png?v=2010e15",
    "/blog/images/flask_pyinstaller/flask-pyinstaller_headerimage-thumbnail.png?v=c65b7d1",
    "/blog/images/fractals/factals_headerimage-thumbnail.png?v=250e5fe",
    "/blog/images/git-guide-with-visual-interface/git-guide-with-visual-interface-headerimage-thumbnail.png?v=49dac55",
    "/blog/images/git-guide-with-visual-interface/image_0-thumbnail.png?v=396c669",
    "/blog/images/git-guide-with-visual-interface/image_1-thumbnail.png?v=4be8334",
    "/blog/images/git-guide-with-visual-interface/image_10-thumbnail.png?v=b2aff0f",
    "/blog/images/git-guide-with-visual-interface/image_11-thumbnail.png?v=58982cf",
    "/blog/images/git-guide-with-visual-interface/image_12-thumbnail.png?v=ab5d7ac",
    "/blog/images/git-guide-with-visual-interface/image_13-thumbnail.png?v=03bed0d",
    "/blog/images/git-guide-with-visual-interface/image_14-thumbnail.png?v=a8fd6d0",
    "/blog/images/git-guide-with-visual-interface/image_15-thumbnail.png?v=7296da2",
    "/blog/images/git-guide-with-visual-interface/image_16-thumbnail.png?v=1de1a9c",
    "/blog/images/git-guide-with-visual-interface/image_17-thumbnail.png?v=4971d38",
    "/blog/images/git-guide-with-visual-interface/image_18-thumbnail.png?v=fd3ae6d",
    "/blog/images/git-guide-with-visual-interface/image_19-thumbnail.png?v=0d1961a",
    "/blog/images/git-guide-with-visual-interface/image_2-thumbnail.png?v=bbeaaef",
    "/blog/images/git-guide-with-visual-interface/image_20-thumbnail.png?v=7d29d4f",
    "/blog/images/git-guide-with-visual-interface/image_21-en-thumbnail.png?v=4b84a48",
    "/blog/images/git-guide-with-visual-interface/image_21-thumbnail.png?v=17a74c4",
    "/blog/images/git-guide-with-visual-interface/image_22-thumbnail.png?v=0f78844",
    "/blog/images/git-guide-with-visual-interface/image_23-thumbnail.png?v=3386159",
    "/blog/images/git-guide-with-visual-interface/image_24-en-thumbnail.png?v=a6ab32a",
    "/blog/images/git-guide-with-visual-interface/image_24-thumbnail.png?v=58a1ad2",
    "/blog/images/git-guide-with-visual-interface/image_25-thumbnail.png?v=9384aec",
    "/blog/images/git-guide-with-visual-interface/image_26-thumbnail.png?v=c4e103c",
    "/blog/images/git-guide-with-visual-interface/image_27-thumbnail.png?v=43bd268",
    "/blog/images/git-guide-with-visual-interface/image_28-thumbnail.png?v=5f4c3d3",
    "/blog/images/git-guide-with-visual-interface/image_29-thumbnail.png?v=3195412",
    "/blog/images/git-guide-with-visual-interface/image_3-thumbnail.png?v=b3d8ca5",
    "/blog/images/git-guide-with-visual-interface/image_30-thumbnail.png?v=d5137e5",
    "/blog/images/git-guide-with-visual-interface/image_31-thumbnail.png?v=8e034f7",
    "/blog/images/git-guide-with-visual-interface/image_32-thumbnail.png?v=6b114cc",
    "/blog/images/git-guide-with-visual-interface/image_33-thumbnail.png?v=bc169f6",
    "/blog/images/git-guide-with-visual-interface/image_34-thumbnail.png?v=ad2391d",
    "/blog/images/git-guide-with-visual-interface/image_35-thumbnail.png?v=6aa7c6c",
    "/blog/images/git-guide-with-visual-interface/image_36-thumbnail.png?v=a17d5bb",
    "/blog/images/git-guide-with-visual-interface/image_37-thumbnail.png?v=428233d",
    "/blog/images/git-guide-with-visual-interface/image_38-thumbnail.png?v=024f1cf",
    "/blog/images/git-guide-with-visual-interface/image_39-thumbnail.png?v=8ba15a7",
    "/blog/images/git-guide-with-visual-interface/image_4-thumbnail.png?v=4259a72",
    "/blog/images/git-guide-with-visual-interface/image_40-thumbnail.png?v=28afa95",
    "/blog/images/git-guide-with-visual-interface/image_41-thumbnail.png?v=2dec252",
    "/blog/images/git-guide-with-visual-interface/image_42-thumbnail.png?v=8d085b5",
    "/blog/images/git-guide-with-visual-interface/image_43-thumbnail.png?v=736fea7",
    "/blog/images/git-guide-with-visual-interface/image_44-thumbnail.png?v=ecdfc08",
    "/blog/images/git-guide-with-visual-interface/image_45-thumbnail.png?v=52f9b98",
    "/blog/images/git-guide-with-visual-interface/image_46-thumbnail.png?v=216158e",
    "/blog/images/git-guide-with-visual-interface/image_47-thumbnail.png?v=db7003f",
    "/blog/images/git-guide-with-visual-interface/image_48-thumbnail.png?v=3ca14eb",
    "/blog/images/git-guide-with-visual-interface/image_49-thumbnail.png?v=8ed53cb",
    "/blog/images/git-guide-with-visual-interface/image_5-thumbnail.png?v=5f29d75",
    "/blog/images/git-guide-with-visual-interface/image_50-thumbnail.png?v=dca60d7",
    "/blog/images/git-guide-with-visual-interface/image_51-thumbnail.png?v=2e12974",
    "/blog/images/git-guide-with-visual-interface/image_52-thumbnail.png?v=aa4f2bf",
    "/blog/images/git-guide-with-visual-interface/image_53-thumbnail.png?v=1cea4a4",
    "/blog/images/git-guide-with-visual-interface/image_54-thumbnail.png?v=81883a1",
    "/blog/images/git-guide-with-visual-interface/image_55-thumbnail.png?v=0b1356f",
    "/blog/images/git-guide-with-visual-interface/image_56-thumbnail.png?v=dd264e9",
    "/blog/images/git-guide-with-visual-interface/image_57-thumbnail.png?v=696a6ed",
    "/blog/images/git-guide-with-visual-interface/image_58-thumbnail.png?v=6b11622",
    "/blog/images/git-guide-with-visual-interface/image_59-thumbnail.png?v=41e763c",
    "/blog/images/git-guide-with-visual-interface/image_6-thumbnail.png?v=e5605d8",
    "/blog/images/git-guide-with-visual-interface/image_60-thumbnail.png?v=296cfa4",
    "/blog/images/git-guide-with-visual-interface/image_61-thumbnail.png?v=23d8b46",
    "/blog/images/git-guide-with-visual-interface/image_7-thumbnail.png?v=1ce9b4d",
    "/blog/images/git-guide-with-visual-interface/image_8-thumbnail.png?v=922c076",
    "/blog/images/git-guide-with-visual-interface/image_9-thumbnail.png?v=0702dcc",
    "/blog/images/haskell_python/haskell_python_headerimage-thumbnail.png?v=405d196",
    "/blog/images/juegos-biblicos/arma_la_historia_01-thumbnail.jpg?v=ade21aa",
    "/blog/images/juegos-biblicos/conoce_la_historia_01-thumbnail.jpg?v=ee97d47",
    "/blog/images/juegos-biblicos/descargar_tutorial_01-thumbnail.png?v=f5523f4",
    "/blog/images/juegos-biblicos/descargar_tutorial_02-thumbnail.png?v=58ced86",
    "/blog/images/juegos-biblicos/espadeo_01-thumbnail.jpg?v=b7e531d",
    "/blog/images/juegos-biblicos/espadeo_02-thumbnail.jpg?v=4fa93fb",
    "/blog/images/juegos-biblicos/espadeo_03-thumbnail.jpg?v=4a6cd1d",
    "/blog/images/juegos-biblicos/memo_paralelo_01-thumbnail.jpg?v=a2ac902",
    "/blog/images/juegos-biblicos/memo_paralelo_02-thumbnail.jpg?v=4a160a3",
    "/blog/images/juegos-biblicos/tabu_biblico_01-thumbnail.jpg?v=f9ad932",
    "/blog/images/juegos-biblicos/trivia_adolescentes_01-thumbnail.jpg?v=fe7b7e1",
    "/blog/images/ode-python/ordinary-differential-equations-with-python-headerimage-thumbnail.png?v=0db19a2",
    "/blog/images/online-lyrics/online-lyrics-headerimage-thumbnail.png?v=6736b24",
    "/blog/images/online-lyrics/tutorial-thumbnail.png?v=daf4b63",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=acea57b",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=ff3eed0",
    "/categories/?v=4ea57d2",
    "/category/christianity/?v=b2162cd",
    "/category/data-visualization/?v=6f0603f",
    "/category/programming/?v=005deeb",
    "/category/simulation/?v=91be6dc",
    "/category/software-engineer/?v=31dc0b3",
    "/cv-ref/?v=a735f92",
    "/cv/?v=3423ba0",
    "/drafts/images/chapter-1-1.svg?v=15e9bac",
    "/drafts/my-super-post2.html?v=014093e",
    "/drafts/pelican-mega-tutorial-part-1.html?v=deac2e7",
    "/drafts/probability-world.html?v=b4dd585",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=0706031",
    "/feeds/all-es.atom.xml?v=9fdba54",
    "/feeds/all.atom.xml?v=f8a65b2",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=cc00501",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=460ef0a",
    "/jupyter-map/?v=f721598",
    "/jupyter-map/mapbox.js?v=5474e2e",
    "/jupyter-map/media_image.png?v=2a6bce4",
    "/jupyter-map/style.css?v=1807bc2",
    "/link/CONAIISI2018/?v=f80db09",
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
    "/link/portfolio/?v=c025b30",
    "/link/pyfladesk_repo/?v=a67778a",
    "/link/simulation-model/?v=bf3dae2",
    "/link/soporte-jupyter/?v=e0e1102",
    "/link/tabu-biblico-pdf/?v=8c5fa4b",
    "/link/tabu-biblico-web/?v=fc3cef8",
    "/link/tabu-biblico/?v=e1cb99e",
    "/link/times_table_binder/?v=6d6d64f",
    "/link/trivia-adolescente-pdf/?v=e1cfac3",
    "/link/trivia-adolescente/?v=213af7f",
    "/link/vias/?v=6611b95",
    "/localization.ini?v=b958412",
    "/lyrics-presentation/?v=1e70e54",
    "/lyrics-presentation/README.md?v=e8510d7",
    "/lyrics-presentation/lang.ini?v=fd830b6",
    "/lyrics-presentation/media_image.png?v=eccbe27",
    "/lyrics-presentation/pptx.js?v=c264150",
    "/lyrics-presentation/webl10n.min.js?v=8525916",
    "/page/2/?v=a49dba7",
    "/pages/about/?v=0b310be",
    "/pages/projects/?v=e846933",
    "/pages/python-course/?v=6cea2c6",
    "/pages/translate/?v=eead317",
    "/portfolio/?v=c025b30",
    "/posts/2018/?v=f183408",
    "/posts/2018/Dec/?v=434cb96",
    "/posts/2018/Feb/?v=68e57b9",
    "/posts/2018/Nov/?v=cf49d03",
    "/posts/2018/Sep/?v=517c0ba",
    "/posts/2019/?v=56fe20f",
    "/posts/2019/Apr/?v=8064429",
    "/posts/2019/Jan/?v=ea51050",
    "/posts/2019/May/?v=bbf57eb",
    "/posts/embed-interactive-notebooks/?v=1e44250",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/embed-interactive-notebooks_headerimage-thumbnail.png?v=0ce0ad1",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/gist_tutorial_01-thumbnail.png?v=9f3b65e",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/gist_tutorial_02-thumbnail.png?v=1d53e12",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/gist_tutorial_03-thumbnail.png?v=acca1cf",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/gist_tutorial_04-thumbnail.png?v=272670c",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/mybinder_tutorial_01-thumbnail.png?v=e8f0604",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/mybinder_tutorial_02-thumbnail.png?v=dadcbb9",
    "/posts/embed-interactive-notebooks/images/embed_interactive_notebooks/mybinder_tutorial_03-thumbnail.png?v=53848e2",
    "/posts/executable-flask-pyinstaller/?v=99b113c",
    "/posts/executable-flask-pyinstaller/images/flask_pyinstaller/flask-pyinstaller_headerimage-thumbnail.png?v=c65b7d1",
    "/posts/fastai-colab-deep-learning/?v=2395e15",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/colab-edit-thumbnail.png?v=cc84f71",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/colab-gpu-thumbnail.png?v=5fa810c",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/data-science-tools-thumbnail.png?v=6ba74d0",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/fast-colab-deep-learning_headerimage-thumbnail.png?v=2f9da21",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/gartnet-2017-thumbnail.jpg?v=60c6198",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/neural-networks-types-thumbnail.png?v=783ef69",
    "/posts/fastai-colab-deep-learning/images/fast-colab-deep-learning/sklearn-roadmap-thumbnail.png?v=2010e15",
    "/posts/git-guide-with-visual-interface/?v=a870380",
    "/posts/git-guide-with-visual-interface/es/?v=d11e8c2",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/git-guide-with-visual-interface-headerimage-thumbnail.png?v=49dac55",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_0-thumbnail.png?v=396c669",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_1-thumbnail.png?v=4be8334",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_10-thumbnail.png?v=b2aff0f",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_11-thumbnail.png?v=58982cf",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_12-thumbnail.png?v=ab5d7ac",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_13-thumbnail.png?v=03bed0d",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_14-thumbnail.png?v=a8fd6d0",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_15-thumbnail.png?v=7296da2",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_16-thumbnail.png?v=1de1a9c",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_17-thumbnail.png?v=4971d38",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_18-thumbnail.png?v=fd3ae6d",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_19-thumbnail.png?v=0d1961a",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_2-thumbnail.png?v=bbeaaef",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_20-thumbnail.png?v=7d29d4f",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_21-en-thumbnail.png?v=4b84a48",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_22-thumbnail.png?v=0f78844",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_23-thumbnail.png?v=3386159",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_24-en-thumbnail.png?v=a6ab32a",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_27-thumbnail.png?v=43bd268",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_28-thumbnail.png?v=5f4c3d3",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_29-thumbnail.png?v=3195412",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_3-thumbnail.png?v=b3d8ca5",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_30-thumbnail.png?v=d5137e5",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_31-thumbnail.png?v=8e034f7",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_32-thumbnail.png?v=6b114cc",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_33-thumbnail.png?v=bc169f6",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_34-thumbnail.png?v=ad2391d",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_35-thumbnail.png?v=6aa7c6c",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_36-thumbnail.png?v=a17d5bb",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_37-thumbnail.png?v=428233d",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_38-thumbnail.png?v=024f1cf",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_39-thumbnail.png?v=8ba15a7",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_4-thumbnail.png?v=4259a72",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_40-thumbnail.png?v=28afa95",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_41-thumbnail.png?v=2dec252",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_42-thumbnail.png?v=8d085b5",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_43-thumbnail.png?v=736fea7",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_44-thumbnail.png?v=ecdfc08",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_45-thumbnail.png?v=52f9b98",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_46-thumbnail.png?v=216158e",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_47-thumbnail.png?v=db7003f",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_48-thumbnail.png?v=3ca14eb",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_49-thumbnail.png?v=8ed53cb",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_5-thumbnail.png?v=5f29d75",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_50-thumbnail.png?v=dca60d7",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_51-thumbnail.png?v=2e12974",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_52-thumbnail.png?v=aa4f2bf",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_53-thumbnail.png?v=1cea4a4",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_54-thumbnail.png?v=81883a1",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_55-thumbnail.png?v=0b1356f",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_56-thumbnail.png?v=dd264e9",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_57-thumbnail.png?v=696a6ed",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_58-thumbnail.png?v=6b11622",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_59-thumbnail.png?v=41e763c",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_6-thumbnail.png?v=e5605d8",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_60-thumbnail.png?v=296cfa4",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_61-thumbnail.png?v=23d8b46",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_7-thumbnail.png?v=1ce9b4d",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_8-thumbnail.png?v=922c076",
    "/posts/git-guide-with-visual-interface/images/git-guide-with-visual-interface/image_9-thumbnail.png?v=0702dcc",
    "/posts/haskell-pattern-matching-in-python/?v=7032e68",
    "/posts/haskell-pattern-matching-in-python/images/haskell_python/haskell_python_headerimage-thumbnail.png?v=405d196",
    "/posts/juegos-biblicos/es/?v=7bccee2",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/arma_la_historia_01-thumbnail.jpg?v=ade21aa",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/conoce_la_historia_01-thumbnail.jpg?v=ee97d47",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/descargar_tutorial_01-thumbnail.png?v=f5523f4",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/descargar_tutorial_02-thumbnail.png?v=58ced86",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/espadeo_01-thumbnail.jpg?v=b7e531d",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/espadeo_02-thumbnail.jpg?v=4fa93fb",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/espadeo_03-thumbnail.jpg?v=4a6cd1d",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/memo_paralelo_01-thumbnail.jpg?v=a2ac902",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/memo_paralelo_02-thumbnail.jpg?v=4a160a3",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/tabu_biblico_01-thumbnail.jpg?v=f9ad932",
    "/posts/juegos-biblicos/es/images/juegos-biblicos/trivia_adolescentes_01-thumbnail.jpg?v=fe7b7e1",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=2bf882e",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/elevator-simulation-headerimage-thumbnail.png?v=3303c21",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/elevator-state-machine-thumbnail.jpg?v=44d1a43",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/floor-distribution-thumbnail.png?v=33ddb6f",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/pedestrian-state-machine-thumbnail.jpg?v=368d1ee",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part1-thumbnail.jpg?v=dd33321",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part2-thumbnail.jpg?v=3317a2c",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part3-thumbnail.jpg?v=b9fe9f3",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part4-thumbnail.jpg?v=2d09a6c",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part5-thumbnail.jpg?v=52f8eed",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part6-thumbnail.jpg?v=e0481c6",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/simulation-part7-thumbnail.jpg?v=6e1e1cf",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/stats-01-thumbnail.png?v=b9e35dc",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/stats-02-thumbnail.png?v=1788c2e",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/stats-03-thumbnail.png?v=115414f",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/stats-04-thumbnail.png?v=fb8a6b7",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/stats-05-thumbnail.png?v=dfd1705",
    "/posts/multi-floor-elevator-simulation-anylogic/images/elevator-simulation/student-behavior-thumbnail.jpg?v=55feb44",
    "/posts/online-lyrics-presentation-generator/?v=9a3aba6",
    "/posts/online-lyrics-presentation-generator/es/?v=7f8b2fc",
    "/posts/online-lyrics-presentation-generator/images/online-lyrics/online-lyrics-headerimage-thumbnail.png?v=6736b24",
    "/posts/ordinary-differential-equations-with-python/?v=4f125a3",
    "/posts/ordinary-differential-equations-with-python/images/ode-python/ordinary-differential-equations-with-python-headerimage-thumbnail.png?v=0db19a2",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=a6e3362",
    "/posts/plotting-fractals-step-by-step-with-python/?v=0de6903",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=b9bfa5c",
    "/posts/plotting-fractals-step-by-step-with-python/images/fractals/factals_headerimage-thumbnail.png?v=250e5fe",
    "/posts/times-tables/?v=4d73027",
    "/posts/times-tables/images/times_tables/times-tables-2-100-thumbnail.png?v=acea57b",
    "/posts/times-tables/images/times_tables/times-tables-headerimage-thumbnail.png?v=ff3eed0",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=9612127",
    "/tabubiblico/?v=4d48021",
    "/tabubiblico/android-chrome-192x192.png?v=26f8443",
    "/tabubiblico/android-chrome-384x384.png?v=cedeeac",
    "/tabubiblico/apple-touch-icon.png?v=14da187",
    "/tabubiblico/browserconfig.xml?v=509403d",
    "/tabubiblico/css/app.546a4c6b.css?v=31dfda4",
    "/tabubiblico/favicon-16x16.png?v=3735aab",
    "/tabubiblico/favicon-32x32.png?v=60a75b6",
    "/tabubiblico/favicon.ico?v=f5e3666",
    "/tabubiblico/img/check-blk.75f8de22.svg?v=5c594e9",
    "/tabubiblico/img/check.007e9b2e.svg?v=7e51d0a",
    "/tabubiblico/img/checkmark.0240896d.svg?v=49bf7e6",
    "/tabubiblico/img/cross-blk.87dd3042.svg?v=b15117a",
    "/tabubiblico/img/cross.50a0158e.svg?v=da1df8e",
    "/tabubiblico/js/app.d81ec319.js.map?v=19b4c68",
    "/tabubiblico/js/app.d81ec319.js?v=9ee4eba",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js.map?v=7fd689a",
    "/tabubiblico/js/chunk-vendors.9fef5d3b.js?v=392c51a",
    "/tabubiblico/mstile-150x150.png?v=15511f5",
    "/tabubiblico/safari-pinned-tab.svg?v=01b6b70",
    "/tabubiblico/site.webmanifest?v=0d9ee1e",
    "/tabubiblico/social.png?v=ec5da6e",
    "/tabubiblico/social_large.png?v=3fc00c6",
    "/tag/bible/?v=ef46346",
    "/tag/christian/?v=3496301",
    "/tag/data-visualization/?v=f62398d",
    "/tag/deep-learning/?v=094246c",
    "/tag/fastai/?v=f5331b9",
    "/tag/flask/?v=414c868",
    "/tag/fractals/?v=2f4b62f",
    "/tag/games/?v=b5bac30",
    "/tag/git/?v=a63f710",
    "/tag/gitkraken/?v=cece440",
    "/tag/gui/?v=f22ff47",
    "/tag/haskell/?v=cc113e8",
    "/tag/jupyter/?v=cebc6f1",
    "/tag/math/?v=cab4bff",
    "/tag/nbinteract/?v=feb6570",
    "/tag/pelican/?v=be091dd",
    "/tag/probability/?v=f1e394b",
    "/tag/programming/?v=0294de7",
    "/tag/publishing/?v=d419aee",
    "/tag/pyinstaller/?v=a2e8ec7",
    "/tag/python/?v=392f21a",
    "/tag/simulation/?v=87ebe81",
    "/tag/tuple-unpacking/?v=cad6b6f",
    "/tag/turtle/?v=38eba89",
    "/tag/tutorial/?v=ee8685e",
    "/tag/webapp/?v=931ca30",
    "/tags/?v=15c5f53",
    "/theme/css/style.css?v=7cb1693",
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
