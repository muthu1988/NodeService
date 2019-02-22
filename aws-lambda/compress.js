var zip = require('bestzip');
zip({
  source: ['index.js','package.json','node_modules/double-ended-queue','node_modules/redis','node_modules/redis-commands','node_modules/redis-parser'],
  destination: '../lambda.zip'
}).then(function() {
  console.log('all done!');
}).catch(function(err) {
  console.error(err.stack);
  process.exit(1);
});
