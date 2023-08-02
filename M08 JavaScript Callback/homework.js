/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   
   return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // Primer método

  // var suma = 0;
  // for(let i = 0; i < arrayOfNumbers.length; i++){
  //    suma += arrayOfNumbers[i];
  // }
  // cb(suma);

   // Segundo método

   var suma = arrayOfNumbers.reduce((acc,el) => acc + el, 0);
   cb (suma);

   // reduce = ejecuta un fx reductora sobre cada elemento de una matriz, devolviendo como resultado un único valor
   // recibe dos parámetros acc= que es el acumulador y el= que es elemento del arreglo. 0 sería el elemento inicial
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   // Método 1

  // for(let i = 0; i < array.length; i++){
   //   cb(array[i]);
   //}

   // Segundo método

   array.forEach((el) => cb(el));
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   // Método 1

  //let newArray = [];
  //for(let i = 0; i < array.length; i++){
  // newArray.push(cb(array[i]));
  //}
  //return newArray;

  // Método 2

  return array.map((el) => cb(el));

  // map= Devuelve un nuevo array, sin destruir el original

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let newArray = [];
   for (let i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0] === 'a'){
         newArray.push(arrayOfStrings[i]);
      }
   }
    return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};