#### Tessler, M. H. & Goodman, N. D. (in press). The Language of Generalization. *Psychological Review*.

All data can be found in the `data` folder

### Experiments

To click through experiments in your web-browser, go [here](https://mhtess.github.io/projects/genlang_index.html). HTML / JS / CSS code for experiments in the `experiments` folder.

### Models

To play around with the generics model in the browser, go [here](http://forestdb.org/models/generics.html). `models` folder contains computational models written in the probabilistic programming language [WebPPL](http://webppl.org)

### Analysis

The `analysis` folder contains main analysis scripts: one for each case study, one for the appendix on cue validity, and one which contains model simulations.

### Compiling paper

The paper is written in RMarkdown using the package [papaja](https://github.com/crsh/papaja). The code in the paper has a number of other dependencies (e.g., tidyverse, cowplot) that a user will need installed to knit the file. Most of heavy computations are cached and results will be read from saved output files.
