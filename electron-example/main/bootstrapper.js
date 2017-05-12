// install babel hooks in the main process

// if only used here
// require('babel-register')({ presets: ['latest', 'react'] });

require('babel-register');  // see babel section of package.json

console.log('babel-register enabled.');
// alternate to     electron bootstrapper
//           electron -r babel-register main.js

require('./main.js');
