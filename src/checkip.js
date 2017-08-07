const ping = require("net-ping");
const timestamp = require('./ts');
/**
 * Sends periodically RAW ICMP Echo requests which executes a callback on error 
 */
class CheckIP {
  constructor(targetHost, pingDelay = 3000, recoverTime = 60000, verbose = false) {
    this.targetHost = targetHost;
    this.pingDelay = pingDelay;
    this.recoverTime = recoverTime;
    this.verbose = verbose;
  }

  run(onErrorCallback, onSuccessCallback) {
    var lastErrorCall;
    var session = ping.createSession();
    setInterval(() => session.pingHost(this.targetHost, (error, targetHost) => {
      if (error) {
        let differ = new Date().getTime() - lastErrorCall; // recent?
        if (differ > this.recoverTime) { // did we gave it enough time
          lastErrorCall = new Date().getTime();
          onErrorCallback();
        } else {
          if (this.verbose) {
            console.log(timestamp(), `Waiting ${(this.recoverTime - differ) / 1000} seconds`);
          }
        }
      } else {
        onSuccessCallback();
      }
    }), this.pingDelay);
  }
}

module.exports = CheckIP;