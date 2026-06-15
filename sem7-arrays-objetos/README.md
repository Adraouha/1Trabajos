
# SEMANA 7 
**JAVASCRIPT - arrays-objetos**
metodos y CRUD para las listas y los objetos

## DAY 3 - ARRAYS

### métodos de arrays Lab

**Instructions**

1- CATALOGO DE MUSICA

Tenemos un array de bandas o autores de música, p.ej. de rock, de pop, de jazz…

Menú de opciones CRUD (puede ser un alert-prompt):

    Opción de borrar en el primer lugar (.shift() )

    Opción de añadir en el primer lugar (.unshift() )

    Opción de borrar en el último lugar (.pop() )

    Opción de añadir en el último lugar (.push())

    Opción de borrar o cambiar, añadir en un índice determinado (.splice())

    Opción de buscar un grupo y que te diga el índice (.indexOf() )

    Opción de mostrar uno según el índice que le das (includes)

No hace falta hacerlo visual de momento.

MÁS DIFICIL TODAVIA! CODIGOS EXTRAS:

+EXTRA: Opción de, mediante un foreach() se le pregunte al usuario el país de la banda. Éste se añade entre paréntesis después del nombre y se guarda en otro array. Ejemplo: "Oasis" => forEach => "Oasis (Inglaterra)"

+EXTRA: Podemos hacer un bucle que nos permita ir añadiendo bandas, mediante (.push() ), hasta que [condición se cumpla]

+EXTRA: A quien le dé tiempo, que cree funciones, una para cada cosa



## DAY 4 - Objetos JS1 

Instructions

Tenemos un objeto del super: const galletas = { marca: “Artiach”, nombre: “Chiquilín”, descripción: “galletas de mantequilla”, precio: 2.75, hayExistencias: true };

Sobre este objeto:

    Añadir una característica: oferta (Boolean) -CREATE-
    Modificar una característica: descripción -UPDATE-
    Borrar una característica -DELETE-
    Mostrar el objeto antes y después -READ-
    Probar a mostrar solo valores (values) y solo propiedades (keys) -> cómo mostrarias esto en pantalla?



## DAY 5 - APIs con JSON 

APIS JS-1: acceso a datos

Mediante la instrucción de javascript FETCH es posible conectar con una API, la que a su vez gestiona una base de datos.

Existe una estructura mínima que consiste en : conexión (fetch), convertir a JSON la respuesta (response) y recoger los datos para tratarlos (data).

Una vez has obtenido los datos, puedes tratarlos para mostrarlos en pantalla o consola con tus conocimientos habituales de HTML - CSS !

Estructura básica: fetch(miURL) .then((respuesta) => respuesta.json()) // de texto plano a json real .then((data) => { console.log(data.abilities[1].ability.name);

//aqui ponemos el texto del nombre:
nombrePokemon.innerText = data.name;

console.log(data.sprites.front_default);
//aqui cambiamos el src de la imagen
imagenPokemon.src = data.sprites.front_default;

} ) .catch((error) => console.warn("algo no me cuadra aquí"));

Después, en data, mediante instrucciones JS como getElementById o innerHTML, puedes situar los elementos en pantalla donde y como quieras:

Recuerda que los datos en los objetos se concatenan mediante el punto, del tipo:

data.species.name En el caso que te encuentres con un array, recuerda que debes indicarlo mediante corchetes. Ejemplo: data.abilities[1].ability.name


### acceso a APIs Lab

**Instructions**

Según lo visto en clase, prueba a conectar con la api del pokemon en https://pokeapi.co/?ref=apilist.fun

Elige un pokemon e investiga cómo acceder a sus diferentes tipos de datos según la estructura JSON. Verifica que encuentras el dato correcto en la consola, y después muestra algunos datos, incluyendo imágenes, en pantalla, mediante HTML y CSS.