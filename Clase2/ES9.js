const objeto1 = {
    propiedad: 1,
    propiedad2: "b",
    propiedad3: true,
};

const objeto2 = {
    propiedad2: "c",
    propiedad4: [1,2,3,4],

};

// combinando objetos, pero se comibnan quedando por arriba el objeto de abajo

const objetoResultante = {
    ...objeto1, ...objeto2
};

console.log(objetoResultante);


// copia objetos
const objetoResultante1 = {
    ...objeto1, 
};


//no quiero tener el valor a = restructury

const objeto3 = {
    a: 1,
    b: 2,
    c: 3,
};

const { a, ...rest  } = objeto3;


 console.log(a);
 console.log(rest);

 

