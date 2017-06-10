# comgen-paper


## Compiling paper

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

  [wait a few minutes for all the packages to install]

 5. Open in RStudio: `paper/comgen-paper.Rmd`
 6. Knit! (first time you hit this, it may ask you to upgrade a package; just hit yes)
