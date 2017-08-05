const CheckIP = require('../src/checkip');

onerror = () => { console.log('test on error'); }
onsuccess = () => { console.log('test on success'); }

cp = new CheckIP('8.8.8.8', 1000, 10000);
cp.run(onerror, onsuccess);