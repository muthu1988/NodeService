var zip = require('bestzip');
zip({
  source: ['final/index.js','final/package.json','final/node_modules'],
  destination: '../lambda.zip'
}).then(function() {
  console.log('all done!');
}).catch(function(err) {
  console.error(err.stack);
  process.exit(1);
});
