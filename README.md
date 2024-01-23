## Context

Project to discuss the need (or not) to have an optional option tsconfig for svelte-package.

## Set up

After cloning this repo, run ```npm install && npm run build```.  
You can observe that svelte-package added .d.ts files into the source code of packages/headless.

## What I would hope to do

* Be able to clone the project and navigate through the code in VSCode without having to run any build command.
* Have changes made in the headless refreshed when running ```npm run dev -w packages/styled```
* svelte-package transpiling my ts code and generating types, but ONLY for the package it's running on
