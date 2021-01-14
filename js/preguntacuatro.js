var vehiculos=new Array ();

var toyota=new Object();
toyota.color="blanco";
toyota.motor="diesel 4 tiempos";
toyota.modelo="enzo";
toyota.precio="50.000";
toyota.matricula="5555xj"
toyota.carroceria="4 puertas"
toyota.cilindraje="tetracilindrico"

var kia=new Object();
kia.color="blanco";
kia.motor="diesel 4 tiempos";
kia.modelo="enzo";
kia.precio="50.000";
kia.matricula="5555xj"
kia.carroceria="4 puertas"
kia.cilindraje="tetracilindrico"

var infiniti=new Object();
infiniti.color="blanco";
infiniti.motor="diesel 4 tiempos";
infiniti.modelo="enzo";
infiniti.precio="50.000";
infiniti.matricula="5555xj"
infiniti.carroceria="4 puertas"
infiniti.cilindraje="tetracilindrico"

var mercedezbenz=new Object();
mercedezbenz.color="blanco";
mercedezbenz.motor="diesel 4 tiempos";
mercedezbenz.modelo="enzo";
mercedezbenz.precio="50.000";
mercedezbenz.matricula="5555xj"
mercedezbenz.carroceria="4 puertas"
mercedezbenz.cilindraje="tetracilindrico"

var jaguar=new Object();
jaguar.color="blanco";
jaguar.motor="diesel 4 tiempos";
jaguar.modelo="enzo";
jaguar.precio="50.000";
jaguar.matricula="5555xj"
jaguar.carroceria="4 puertas"
jaguar.cilindraje="tetracilindrico"

var nissan=new Object();
nissan.color="blanco";
nissan.motor="diesel 4 tiempos";
nissan.modelo="enzo";
nissan.precio="50.000";
nissan.matricula="5555xj"
nissan.carroceria="4 puertas"
nissan.cilindraje="tetracilindrico"

var bmw=new Object();
bmw.color="blanco";
bmw.motor="diesel 4 tiempos";
bmw.modelo="enzo";
bmw.precio="50.000";
bmw.matricula="5555xj"
bmw.carroceria="4 puertas"
bmw.cilindraje="tetracilindrico"

var mazda=new Object();
mazda.color="blanco";
mazda.motor="diesel 4 tiempos";
mazda.modelo="enzo";
mazda.precio="50.000";
mazda.matricula="5555xj"
mazda.carroceria="4 puertas"
mazda.cilindraje="tetracilindrico"

var fort=new Object();
fort.color="blanco";
fort.motor="diesel 4 tiempos";
fort.modelo="enzo";
fort.precio="50.000";
fort.matricula="5555xj"
fort.carroceria="4 puertas"
fort.cilindraje="tetracilindrico"

var chevrolet=new Object();
chevrolet.color="blanco";
chevrolet.motor="diesel 4 tiempos";
chevrolet.modelo="enzo";
chevrolet.precio="50.000";
chevrolet.matricula="5555xj"
chevrolet.carroceria="4 puertas"
chevrolet.cilindraje="tetracilindrico"

var honda=new Object();
honda.color="blanco";
honda.motor="diesel 4 tiempos";
honda.modelo="enzo";
honda.precio="50.000";
honda.matricula="5555xj"
honda.carroceria="4 puertas"
honda.cilindraje="tetracilindrico"

var ferrari=new Object();
ferrari.color="blanco";
ferrari.motor="diesel 4 tiempos";
ferrari.modelo="enzo";
ferrari.precio="50.000";
ferrari.matricula="5555xj"
ferrari.carroceria="4 puertas"
ferrari.cilindraje="tetracilindrico"

var alfaromeo=new Object();
alfaromeo.color="blanco";
alfaromeo.motor="diesel 4 tiempos";
alfaromeo.modelo="enzo";
alfaromeo.precio="50.000";
alfaromeo.matricula="5555xj"
alfaromeo.carroceria="4 puertas"
alfaromeo.cilindraje="tetracilindrico"

var lancia=new Object();
lancia.color="blanco";
lancia.motor="diesel 4 tiempos";
lancia.modelo="enzo";
lancia.precio="50.000";
lancia.matricula="5555xj"
lancia.carroceria="4 puertas"
lancia.cilindraje="tetracilindrico"

var iveco=new Object();
iveco.color="blanco";
iveco.motor="diesel 4 tiempos";
iveco.modelo="enzo";
iveco.precio="50.000";
iveco.matricula="5555xj"
iveco.carroceria="4 puertas"
iveco.cilindraje="tetracilindrico"

var porsche=new Object();
porsche.color="blanco";
porsche.motor="diesel 4 tiempos";
porsche.modelo="enzo";
porsche.precio="50.000";
porsche.matricula="5555xj"
porsche.carroceria="4 puertas"
porsche.cilindraje="tetracilindrico"

var tesla=new Object();
tesla.color="blanco";
tesla.motor="diesel 4 tiempos";
tesla.modelo="enzo";
tesla.precio="50.000";
tesla.matricula="5555xj"
tesla.carroceria="4 puertas"
tesla.cilindraje="tetracilindrico"

var audi=new Object();
audi.color="blanco";
audi.motor="diesel 4 tiempos";
audi.modelo="enzo";
audi.precio="50.000";
audi.matricula="5555xj"
audi.carroceria="4 puertas"
audi.cilindraje="tetracilindrico"

var ktm=new Object();
ktm.color="blanco";
ktm.motor="diesel 4 tiempos";
ktm.modelo="enzo";
ktm.precio="50.000";
ktm.matricula="5555xj"
ktm.carroceria="4 puertas"
ktm.cilindraje="tetracilindrico"

var suburu=new Object();
suburu.color="blanco";
suburu.motor="diesel 4 tiempos";
suburu.modelo="enzo";
suburu.precio="50.000";
suburu.matricula="5555xj"
suburu.carroceria="4 puertas"
suburu.cilindraje="tetracilindrico"




vehiculos.push(toyota);
vehiculos.push(kia);
vehiculos.push(infiniti);
vehiculos.push(mercedezbenz);
vehiculos.push(jaguar);
vehiculos.push(nissan);
vehiculos.push(bmw);
vehiculos.push(mazda);
vehiculos.push(fort);
vehiculos.push(chevrolet);
vehiculos.push(honda);
vehiculos.push(ferrari);
vehiculos.push(alfaromeo);
vehiculos.push(lancia);
vehiculos.push(iveco);
vehiculos.push(porsche);
vehiculos.push(tesla);
vehiculos.push(audi);
vehiculos.push(ktm);
vehiculos.push(suburu);

function coches(){
    alert(vehiculos[15].cilindraje);
    console.log("vehiculos"+vehiculos)
}