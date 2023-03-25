class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

static especie = 'humano' 

// static es cuando todos los objetos comparten una variable

saludar = () => {
    console.log(`hola soy ${this.nombre}`) 
}

// funciones dentro de una clase es motodo

obetenerEspecie = () => {
    console.log(`soy ${Persona.especie} ` );
}

}

const persona1 = new Persona("Alex");

const persona2 = new Persona("Pablo");


persona1.saludar();
persona1.obetenerEspecie();

persona2.saludar();
persona2.obetenerEspecie();

