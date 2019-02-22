cd aws-lambda
npm install
mkdir final
cp index.js final
cp package.json final
cd final
npm install
cd ..
npm install --save bestzip
npm run compress
