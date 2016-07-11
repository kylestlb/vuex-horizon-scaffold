# vuex-horizon-scaffold

Scaffold / starter-kit for [vuex](https://github.com/vuejs/vuex) and [horizon](https://horizon.io) project.

I wanted to have something basic, yet not too basic to base projects off of.  All I did here was hook together [vue-cli's](https://github.com/vuejs/vue-cli) webpack build with vuex and horizon to play with all of these technologies.

Live reloading, etc is configured and you can look through the various config files to see all of the build options.  

To run a 'prod' build, you might have to tweak some filepath stuff within config files.  I haven't tried running the test suite at all but feel free to make a PR if something is broken :)

I made sure to include a sample vuex getter/mutator/action/store to illustrate how that would work in a 'real' app (not just sample code on vuex docs).

## Instructions for running a dev version:

0.  Make sure horizon CLI is installed, as well as rethinkDB.

1. `hz serve --dev` inside root directory (directory with .hz folder)

2. `npm install` inside 'app' directory

3. `npm run dev` inside 'app' directory

4. Navigate to http://localhost:8080

Hope this helps people who want to play with horizon and vuejs!  And thanks to the vuejs and rethinkdb teams for making cool things.
