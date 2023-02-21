

alert('benvenuti su Treni Boolean');

//prompt eichiesta di kilometri  "distanza"

var distanza = parseInt(prompt ("Quanti kilometri vuoi percorrere? "));
console.log(distanza)

//prompt richiesta anni 
const anni = parseInt(prompt("Quanti anni hai "));
console.log(anni)


//il prezzo del biglietto è definito in base ai km (0.21 € al km)

const costo = '0.21'

//calcolo prezzo 


let prezzo = `${distanza} * ${costo} = ${distanza * costo}`;
console.log(prezzo)

//Se l'eta inserita e' minore di 18
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 20)

const scontoMinore = '0.2'

if(anni < 18){
    let prezzo = `${distanza} * ${costo} * ${scontoMinore} = ${distanza * costo * scontoMinore}`;
    console.log(prezzo)

}

//Se l'eta inserita e' maggiore/uguale di 65
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 40)

const scontoSenior = '0.4'

  if(anni >= 65){
      let prezzo = `${distanza} * ${costo} * ${scontoSenior} = ${distanza * costo * scontoSenior}`;
      console.log(prezzo)
  
  }