async function leerJson(){
    var res;
   await fetch('data/pets-citizens.json')
    .then(response => response.json())
    .then(json => {
        res = json
    });
    return res;
}
class pets{
    microchip;
    species;
    sex;
    size;
    potentDangerous;
    neighborhood;
    constructor(microchip,species,sex,size,potentDangerous,neighborhood){
        this.microchip = microchip;
        this.species = species;
        this.sex = sex;
        this.size = size;
        this.potentDangerous = potentDangerous;
        this.neighborhood = neighborhood;
    }
}
