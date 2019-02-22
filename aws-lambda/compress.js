var zip = require('bestzip');
 
zip({
  source: './aws-lambda/*',
  destination: './build.zip'
}).then(function() {
  console.log('all done!');
}).catch(function(err) {
  console.error(err.stack);
  process.exit(1);
});