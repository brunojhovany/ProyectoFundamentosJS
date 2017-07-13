export default function platzom(str){
  let translation = str

  //si la palabra termina el "ar" se eliminarar esos caracters
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2); //eliminarar los dos ultimos caracteres
  }

  //si la palabra termina con z se le añade "pe" al final del string
  if (str.toLowerCase().startsWith('z')){
    translation +='pe'
  }

  //si la palabra traducida tiene 10 o mas letras, se partira a la mitad y se debe de unir con guion
  const length = translation.length
  if (translation.length >= 10){
      const firtHalf = translation.slice(0,Math.round(length / 2));
      const seconHalf = translation.slice(Math.round(length/ 2));
      translation = `${firtHalf}-${seconHalf}`
  }

  // Si la palabra escrita anteriormente es un palíndromo pues ni una de las condiciones enteriores
  //serviran ademas solo se escribirar la palabra en pantalla intercalando mayusculas y minusculas.
  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str){
    const length = str.length
    let translation = ''
    let capitalize = true

    for (let i = 0; i < length; i++){
      const char = str.charAt(i);
      translation += capitalize ?char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize}
      return translation
    }

  if (str == reverse(str)){
    return minMay(str)
  }
  return translation;
}