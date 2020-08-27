# gulp-tasks

A collection of basic gulp tasks that can be easily integrated into any project:

* `constants.js` - contains all paths and constants referenced by tasks
* `index.js` - contains the actual gulp tasks by requiring tasks and exporting them (equivalent to the `gulpfile.js`)
* All other files are single gulp tasks, each of which requires its dependencies, define tasks and export them

