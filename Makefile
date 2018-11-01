install : 
	npm install 

start :   
	npx babel-node -- src/bin/gendiff.js -f json  ./__tests__/__fixtures__/beforeASTfile.json ./__tests__/__fixtures__/afterASTfile.json

publish : 
	npm publish 

lint :    
	npx eslint .

test :    
	npm test 