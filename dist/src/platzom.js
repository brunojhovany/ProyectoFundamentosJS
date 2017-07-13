'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  //si la palabra termina el "ar" se eliminarar esos caracters
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); //eliminarar los dos ultimos caracteres
  }

  //si la palabra termina con z se le añade "pe" al final del string
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //si la palabra traducida tiene 10 o mas letras, se partira a la mitad y se debe de unir con guion
  var length = translation.length;
  if (translation.length >= 10) {
    var firtHalf = translation.slice(0, Math.round(length / 2));
    var seconHalf = translation.slice(Math.round(length / 2));
    translation = firtHalf + '-' + seconHalf;
  }

  // Si la palabra escrita anteriormente es un palíndromo pues ni una de las condiciones enteriores
  //serviran ademas solo se escribirar la palabra en pantalla intercalando mayusculas y minusculas.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}