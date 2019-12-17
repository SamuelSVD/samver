# samver
samver.ca website

## Introduction

This readme is really for myself so I can remember where things are located on this project and how to run it.

## Coding!

A few coding rules!

1. prefix everything with ```svd```. This wil help keep things consistent, and, it shows that it's my stuff :)
2. place every new Angular component inside of the svd folder
3. Create components using the command ```ng g c <component_name>```

## Deployment!

Because the site is hosted on Github Pages and linked to from the samver.ca website, I set up this repository to automatically use the contents of the ```docs``` folder as the contents of the website. As such, here are some steps:

1. delete the ```dist``` folder if it exists on the root folder of this project
2. execute the command ```ng build --prod --base-href https://samver.ca```
3. copy the contents of the ```dist``` folder into the ```docs``` folder
4. comment, commit, and push!