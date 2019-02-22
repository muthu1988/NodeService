var zip = require('bestzip');
zip({
  source: ['index.js','package.json','node_modules'],
  destination: '../lambda.zip'
}).then(function() {
  console.log('all done!');
}).catch(function(err) {
  console.error(err.stack);
  process.exit(1);
});
