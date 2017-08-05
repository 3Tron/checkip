const CheckIP = require('../src/checkip');
const timestamp = require('../src/ts');

onerror = () => { console.log('test on error'); }
onsuccess = () => { console.log('test on success'); }

console.log(timestamp(), 'start test');

cp = new CheckIP('8.8.8.8', 1000, 10000);
cp.run(onerror, onsuccess);