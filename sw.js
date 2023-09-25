const version = "40cd58b";
const currentCacheName = `ELCWEB-${version}`;
const filesToCache = [
    "/?v=f49fb37",
    "/about/?v=62b0011",
    "/archives/?v=690aa2b",
    "/author/ezequiel-leonardo-castano/?v=addea50",
    "/author/ezequiel-leonardo-castano/page/2/?v=c9b7f95",
    "/authors/?v=6ece14b",
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
    "/blog/images/angel-guide/angel-guide-headerimage-thumbnail.png?v=1f16af9",
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
    "/blog/images/recursion/efficient_recursive_fibonacci-thumbnail.png?v=0a68836",
    "/blog/images/recursion/fast_double_fibonacci-thumbnail.png?v=92abd9d",
    "/blog/images/recursion/memoized_ackermann-thumbnail.png?v=cfc7ae0",
    "/blog/images/recursion/memoized_fast_double_fibonacci-thumbnail.png?v=b6be678",
    "/blog/images/recursion/memoized_hofstadter_female-thumbnail.png?v=8bc8bb3",
    "/blog/images/recursion/memoized_hofstadter_g-thumbnail.png?v=0d41793",
    "/blog/images/recursion/memoized_hofstadter_h-thumbnail.png?v=0324aeb",
    "/blog/images/recursion/memoized_mutual_recursive_fibonacci-thumbnail.png?v=76cfa6a",
    "/blog/images/recursion/mutual_recursive_fibonacci-thumbnail.png?v=ba66175",
    "/blog/images/recursion/mutual_recursive_fibonacci_alternative-thumbnail.png?v=5fe0d84",
    "/blog/images/recursion/mutual_recursive_hofstadter_female-thumbnail.png?v=b764009",
    "/blog/images/recursion/mutual_triple_recursive_fibonacci-thumbnail.png?v=823ea9e",
    "/blog/images/recursion/non_memoized_fast_double_fibonacci-thumbnail.png?v=3108251",
    "/blog/images/recursion/non_memoized_hofstadter_g-thumbnail.png?v=955fe3e",
    "/blog/images/recursion/non_recursive_factorial-thumbnail.png?v=a60aa71",
    "/blog/images/recursion/recursive-python_headerimage-thumbnail.png?v=a9d29f2",
    "/blog/images/recursion/recursive_ackermann-thumbnail.png?v=d8c0367",
    "/blog/images/recursion/recursive_factorial-thumbnail.png?v=7439a8f",
    "/blog/images/recursion/recursive_fibonacci-thumbnail.png?v=79b06e5",
    "/blog/images/recursion/recursive_hofstadter_g-thumbnail.png?v=461b797",
    "/blog/images/recursion/recursive_hofstadter_h-thumbnail.png?v=7e37e31",
    "/blog/images/recursion/recursive_is_even-thumbnail.png?v=34ac4a3",
    "/blog/images/recursion/recursive_lucas-thumbnail.png?v=025198a",
    "/blog/images/recursion/recursive_maximum-thumbnail.png?v=e09bc65",
    "/blog/images/recursion/recursive_maximum_tail-thumbnail.png?v=965ab93",
    "/blog/images/recursion/recursive_memoized_fibonacci-thumbnail.png?v=633befa",
    "/blog/images/recursion/recursive_multiply_last_two-thumbnail.png?v=b8ae457",
    "/blog/images/recursion/recursive_non_memoized_fibonacci-thumbnail.png?v=6f969b3",
    "/blog/images/recursion/recursive_palindrome-thumbnail.png?v=6af12f3",
    "/blog/images/recursion/recursive_quicksort-thumbnail.png?v=27dbfca",
    "/blog/images/recursion/recursive_sum_integer_up_to_n-thumbnail.png?v=cf7cec8",
    "/blog/images/recursion/tail_recursive_factorial-thumbnail.png?v=ef4a975",
    "/blog/images/recursion/tail_recursive_fibonacci-thumbnail.png?v=f3f13af",
    "/blog/images/recursion/tail_recursive_sum_integer_up_to_n-thumbnail.png?v=dcbd82e",
    "/blog/images/recursion/tree_recursive_maximum-thumbnail.png?v=46aece7",
    "/blog/images/streamlit-google-analytics/deploy-streamlit-thumbnail.png?v=03ee57b",
    "/blog/images/streamlit-google-analytics/deployment-options-thumbnail.png?v=fcc13d3",
    "/blog/images/streamlit-google-analytics/github-pages-thumbnail.png?v=e3ff5f2",
    "/blog/images/streamlit-google-analytics/streamlit-google-analytics_headerimage-thumbnail.png?v=da58a98",
    "/blog/images/streamlit-lessons/streamlit-lessons_headerimage-thumbnail.png?v=9f590cf",
    "/blog/images/streamlit-mutipage/streamlit-mutipage_headerimage-thumbnail.png?v=5f1acdd",
    "/blog/images/til-typed-pipes/compose_mypy-thumbnail.png?v=19adbd9",
    "/blog/images/til-typed-pipes/compose_mypy_error-thumbnail.png?v=f01bcc6",
    "/blog/images/til-typed-pipes/compose_pylance-thumbnail.png?v=6d54dfc",
    "/blog/images/til-typed-pipes/compose_pylance_error-thumbnail.png?v=686cb4a",
    "/blog/images/til-typed-pipes/compose_test_mypy_type-thumbnail.png?v=5e0647f",
    "/blog/images/til-typed-pipes/compose_test_pyright_problems-thumbnail.png?v=532eeb2",
    "/blog/images/til-typed-pipes/compose_test_pyright_types-thumbnail.png?v=1c129e1",
    "/blog/images/til-typed-pipes/pipe_iterative_test_mypy_types-thumbnail.png?v=7c07bc7",
    "/blog/images/til-typed-pipes/pipe_iterative_test_pyright_types-thumbnail.png?v=cc75b69",
    "/blog/images/til-typed-pipes/pipe_iterative_test_same_type_mypy_problems-thumbnail.png?v=b39889c",
    "/blog/images/til-typed-pipes/pipe_iterative_test_same_type_mypy_types-thumbnail.png?v=efb4f17",
    "/blog/images/til-typed-pipes/pipe_iterative_test_same_type_pyright_problems-thumbnail.png?v=fb40333",
    "/blog/images/til-typed-pipes/pipe_iterative_test_same_type_pyright_types-thumbnail.png?v=74157d9",
    "/blog/images/times_tables/times-tables-2-100-thumbnail.png?v=e90673c",
    "/blog/images/times_tables/times-tables-headerimage-thumbnail.png?v=3df5cb0",
    "/categories/?v=2d861b0",
    "/category/christianity/?v=5dbc72f",
    "/category/data-visualization/?v=34f9152",
    "/category/programming/?v=3488b90",
    "/category/programming/page/2/?v=84e9245",
    "/category/simulation/?v=8f84f11",
    "/category/software-engineer/?v=1564961",
    "/control/?v=ecb8cf5",
    "/cv-ref/?v=5ec8d79",
    "/cv/?v=01d36bb",
    "/disclaimer.html?v=0b0aee9",
    "/donate.html?v=ca9cede",
    "/drafts/bayesian-roadmap.html?v=4286071",
    "/drafts/my-super-post2.html?v=ff199ea",
    "/drafts/pelican-mega-tutorial-part-1.html?v=ba2c80f",
    "/drafts/probability-world.html?v=127553e",
    "/drafts/typed-pipes.html?v=8b6309c",
    "/extra/browserconfig.xml?v=8dbb903",
    "/extra/sw_template.js?v=4cee959",
    "/favicon.ico?v=b758f8a",
    "/feeds/all-en.atom.xml?v=502cdd4",
    "/feeds/all-es.atom.xml?v=bea6e2c",
    "/feeds/all.atom.xml?v=5192bc1",
    "/feeds/ezequiel-leonardo-castano.atom.xml?v=4698eed",
    "/feeds/ezequiel-leonardo-castano.rss.xml?v=afd1f1d",
    "/interactive-optimization/?v=ccb1d50",
    "/interactive-optimization/basic.js?v=429a8d4",
    "/interactive-optimization/media_image.png?v=76e3d00",
    "/interactive-optimization/nerdamer.js?v=c9dc942",
    "/interactive-optimization/style.css?v=1a8d442",
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
    "/localization.ini?v=7fcd6f8",
    "/lyrics-presentation/?v=fc59e7f",
    "/lyrics-presentation/lang.ini?v=c5d5cf9",
    "/lyrics-presentation/media_image.png?v=c3e5d79",
    "/lyrics-presentation/pptx.js?v=01edfbf",
    "/lyrics-presentation/webl10n.min.js?v=9c71a7d",
    "/page/2/?v=8a931c0",
    "/portfolio/?v=f08edc4",
    "/posts/2018/?v=2c72d82",
    "/posts/2018/Dec/?v=f519c14",
    "/posts/2018/Feb/?v=00f9f47",
    "/posts/2018/Nov/?v=5705370",
    "/posts/2018/Sep/?v=b333d78",
    "/posts/2019/?v=6860d00",
    "/posts/2019/Apr/?v=98ed369",
    "/posts/2019/Jan/?v=275b8f6",
    "/posts/2019/May/?v=0f79baf",
    "/posts/2021/?v=7bf4975",
    "/posts/2021/Aug/?v=cd549ee",
    "/posts/2021/Sep/?v=f72f460",
    "/posts/2022/?v=8db0588",
    "/posts/2022/Jan/?v=0888e43",
    "/posts/2023/?v=5457fc3",
    "/posts/2023/Jul/?v=6d686a4",
    "/posts/2023/May/?v=f72b5ac",
    "/posts/angel/?v=1dbd783",
    "/posts/embed-interactive-notebooks/?v=5715388",
    "/posts/executable-flask-pyinstaller/?v=0f47de1",
    "/posts/fastai-colab-deep-learning/?v=be2c7c7",
    "/posts/git-guide-with-visual-interface/?v=70a4b57",
    "/posts/git-guide-with-visual-interface/es/?v=99dcb39",
    "/posts/haskell-pattern-matching-in-python/?v=51dfb08",
    "/posts/juegos-biblicos/es/?v=50b801f",
    "/posts/jupyter-collaborative/?v=8652f35",
    "/posts/jupyter-publishing/?v=8b3d224",
    "/posts/multi-floor-elevator-simulation-anylogic/?v=b976ec6",
    "/posts/online-lyrics-presentation-generator/?v=6e8f9ea",
    "/posts/online-lyrics-presentation-generator/es/?v=8ae68c7",
    "/posts/ordinary-differential-equations-with-python/?v=02b8ebc",
    "/posts/pascal-triangle-vs-genetic-algorithm/?v=dccec7f",
    "/posts/plotting-fractals-step-by-step-with-python/?v=789854c",
    "/posts/plotting-fractals-step-by-step-with-python/es/?v=2f4761a",
    "/posts/recursion-python/?v=3f323ef",
    "/posts/streamlit-google-analytics/?v=a6b0b9b",
    "/posts/streamlit-lessons/?v=29bb6c3",
    "/posts/streamlit-multipage/?v=94292b8",
    "/posts/times-tables/?v=e21cf43",
    "/projects/?v=a34f74b",
    "/publications.html?v=f9ba3d5",
    "/python-course/?v=2fabe58",
    "/research/?v=5b8cc02",
    "/safari-pinned-tab.svg?v=4686042",
    "/site.webmanifest?v=7ba4ab1",
    "/sitemap.xml?v=11accd0",
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
    "/tag/altair/?v=c725475",
    "/tag/animation/?v=0431eab",
    "/tag/anylogic/?v=8d68044",
    "/tag/bible/?v=ad3dce3",
    "/tag/binder/?v=4522b12",
    "/tag/christian/?v=e4a2a27",
    "/tag/colab/?v=599191b",
    "/tag/collaboration/?v=fb047ea",
    "/tag/data-visualization/?v=4eda5e3",
    "/tag/deep-learning/?v=9d0b5aa",
    "/tag/fastai/?v=1bb0d32",
    "/tag/flask/?v=b0037d0",
    "/tag/fractals/?v=3668dcf",
    "/tag/functional-programming/?v=c439acd",
    "/tag/games/?v=b267270",
    "/tag/git/?v=162e1ab",
    "/tag/github-pages/?v=8d902fa",
    "/tag/github/?v=75873e5",
    "/tag/gitkraken/?v=215dad2",
    "/tag/google-analytics/?v=74d8661",
    "/tag/gui/?v=dfa1765",
    "/tag/haskell/?v=3418517",
    "/tag/jupyter-notebooks/?v=fdf1fc3",
    "/tag/jupyter/?v=437ba68",
    "/tag/latex/?v=5586bfe",
    "/tag/learning/?v=69c21f3",
    "/tag/lyrics/?v=faff6b0",
    "/tag/math/?v=20bf48e",
    "/tag/matplotlib/?v=fe2a410",
    "/tag/nbinteract/?v=9c5a123",
    "/tag/ngrok/?v=419fdfd",
    "/tag/notebooks/?v=0422539",
    "/tag/ode/?v=e279ab1",
    "/tag/pelican/?v=0ffb10c",
    "/tag/presentation/?v=2af38e5",
    "/tag/probability/?v=bad82d5",
    "/tag/programming/?v=c077efe",
    "/tag/publishing/?v=518bca9",
    "/tag/pyinstaller/?v=27b7cae",
    "/tag/python/?v=4464a49",
    "/tag/python/page/2/?v=1e6a430",
    "/tag/scipy/?v=8e142d5",
    "/tag/security/?v=3803f19",
    "/tag/simulation/?v=65785fe",
    "/tag/static-website/?v=d8b5bd9",
    "/tag/streamlit/?v=7ae0cfe",
    "/tag/tuple-unpacking/?v=abcfe22",
    "/tag/turtle/?v=556857f",
    "/tag/tutorial/?v=1b670d0",
    "/tag/type/?v=8b4933d",
    "/tag/webapp/?v=d75cff5",
    "/tags/?v=1f38cdd",
    "/theme/css/style.css?v=0ae51f1",
    "/theme/images/DOC.svg?v=5d41948",
    "/theme/images/Jupyter.svg?v=056bcc4",
    "/theme/images/PDF.svg?v=872b33e",
    "/theme/images/RevealJS.svg?v=eb946c8",
    "/theme/js/scripts.js?v=2949ee4"
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
