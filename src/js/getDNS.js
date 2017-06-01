var cmd = require('node-cmd')

if (process.platform === 'win32') {
  cmd.get(
    'ipconfig /all | findstr /R "DNS\ Servers"',
    function(err, data, stderr){
        module.exports = data
    }
  )
}

if (process.platform === 'linux') {
  cmd.get(
    'cat /etc/resolv.conf',
    function(err, data, stderr){
        module.exports = data
    }
  )
}

if (process.platform === 'darwin') {
  cmd.get(
    'networksetup -getdnsservers Wi-Fi',
    function(err, data, stderr){
        module.exports = data
    }
  )
}