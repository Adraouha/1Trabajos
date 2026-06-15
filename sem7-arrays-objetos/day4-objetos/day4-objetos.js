// Objeto original
const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripcion: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
};

// READ - Mostrar objeto antes
console.log("Objeto antes:", galletas);

// CREATE - Añadir una propiedad
galletas.oferta = true;

// UPDATE - Modificar una propiedad
galletas.descripcion = "galletas de mantequilla con chocolate";

// DELETE - Borrar una propiedad
delete galletas.hayExistencias;

// READ - Mostrar objeto después
console.log("Objeto después:", galletas);

// Mostrar solo las propiedades (keys)
console.log("Propiedades:", Object.keys(galletas));

// Mostrar solo los valores (values)
console.log("Valores:", Object.values(galletas));