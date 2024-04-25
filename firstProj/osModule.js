const os = require("os");

//info about current user
const user = os.userInfo();

//method returns the system uptime (how long the pc is running) in sec
console.log(`The system uptime: ${os.uptime}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemoty: os.freemem(),
};
console.log(currentOs);
