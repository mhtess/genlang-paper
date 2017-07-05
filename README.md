# comgen-paper


## Compiling paper

Note that several models are written in the RMarkdown document using [RWebPPL](https://github.com/mhtess/rwebppl). To compile this document, your system must be ready to install RWebPPL (see RWebPPL system requirements).

1. Clone repo
2. Open Rstudio
3. File —> New Project
	- select “Existing Directory”
	- navigate to cloned repo
4. In Rstudio console:
  ```
  install.packages(“packrat”)
  library(packrat)
  packrat::on()
  packrat::restore()
  ```

  [will take about 5 minutes for all the packages to install]

 5. Open in RStudio: `paper/comgen-paper.Rmd`
 6. Knit! (very first time you knit, it may ask you to upgrade a package; just hit yes)
 
Note that first time you knit (or if you clear the cache), it will take about 10-15 minutes to knit; subsequent knits should be under a minute due to the cache.
