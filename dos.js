const Stress = require('ddos-stress');


const stress=new Stress();


stress.run('https://feasible-careful-redfish.ngrok-free.app/',100);