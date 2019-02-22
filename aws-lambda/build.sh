echo "hi from build"
cd aws-lambda
npm install -g bestzip
npm install
node compress.js
