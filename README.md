# node_checkip #

Sends periodically RAW ICMP Echo requests which executes a callback on error.

## Example ##
### ES6 ###
```
const CheckIP = require('node_checkip');

onerror = () => {console.log('test on error'); }
onsuccess = () => { console.log('test on success'); }

const cp = new CheckIP('8.8.8.8', 1000, 10000);
cp.run(onerror, onsuccess);`
```

### ES-old ###
```
var CheckIP = require('node_checkip');

function onerror() {
    console.log('test on error');
}
function onsuccess() {
    console.log('test on success');
}

var cp = new CheckIP('8.8.8.8', 1000, 10000);
cp.run(onerror, onsuccess);`
```