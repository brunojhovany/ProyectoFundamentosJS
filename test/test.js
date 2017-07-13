const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){
    it('Si la palabra termina el "ar" se eliminaran esos caracteres.',function(){
        const translation = platzom ("Programar")
        expect(translation).to.equal("Program")
    })
    it('Si la palabra inicia con "z" se le añade "pe" al final del string.',function(){
        const translation = platzom("Zorro");
        const translation2 = platzom("Zarpar");

        expect(translation).to.equal("Zorrope");
        expect(translation2).to.equal("Zarppe");
    })
    it('Si la palabra traducida tiene 10 o mas letras, se partira a la mitad y se debe de unir con guion.',function(){
        const translation = platzom ("Abecedario");

        expect(translation).to.equal("Abece-dario")
    })
    it('Si la palabra escrita anteriormente es un palíndromo pues ni una de las condiciones enteriores serviran ademas solo se escribirar la palabra en pantalla intercalando mayusculas y minusculas.',function(){
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS");
    })
});