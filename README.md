#### Tessler, M. H. & Goodman, N. D. (in press). The Language of Generalization. *Psychological Review*

Links to experiments that you can click through can be found [here](https://mhtess.github.io/projects/genlang_index.html).

All data can be found in the `data` folder

### Analysis

The `analysis` folder contains main analysis scripts: one for each case study, one for the appendix on cue validity, and one which contains model simulations.

### Computational models

`models` folder contains computational models written in the probabilistic programming langauge [WebPPL](http://webppl.org)

### Browser-runnable model

To play around with the generics model in the browser, go [here](http://forestdb.org/models/generics.html).

### Compiling paper

The paper is written in RMarkdown using the package [papaja](https://github.com/crsh/papaja). The code in the paper has a number of other dependencies (e.g., tidyverse, cowplot) that a user will need installed to knit the file. Most of heavy computations are cached and results will be read from saved output files.
