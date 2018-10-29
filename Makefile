install : 
	npm install 

start :   
	npx babel-node -- src/bin/gendiff.js -f raw ./__tests__/__fixtures__/beforefile.ini ./__tests__/__fixtures__/afterfile.ini

publish : 
	npm publish 

lint :    
	npx eslint .

test :    
	npm test 