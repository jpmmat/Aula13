let peso = parseFloat(prompt("Digite seu peso em kg. Ex.: 80.0"));
let altura = parseFloat(prompt("Digite sua altura em metros. Ex.: 1.75 "));
//Calculo do Imc
let imc = peso/(altura*altura);

// condicoes de avaliacao do peso
if(imc < 18.5){
  console.log(`Seu IMC é ${imc}. Você esta abaixo do nivel ideal de peso`)
}else if(imc>18.5 && imc<= 24.9){
  console.log(`Seu IMC é ${imc}. Você está com peso ideal`)
}else if(imc>24.9&& imc<=29.9){
  console.log(`Seu IMC é ${imc}.Você está com peso um pouco acima do  normal` )
}else if(imc>29.9&& imc <= 39.9){
  console.log(`Seu IMC é ${imc}.Você está em estado de obesidade`)
}
else if(imc>39.9){
  console.log(`Seu IMC é ${imc}.Você está em estado de obesidade grave`)
};

switch (imc) {
  case imc<18.5:
    console.log(`Seu IMC é ${imc}. Você esta abaixo do nivel ideal de peso`);
    break;
  case imc>18.5 && imc<= 24.9:
    console.log(`Seu IMC é ${imc}. Você está com peso ideal`)
  case imc>24.9&& imc<=29.9:
    console.log(`Seu IMC é ${imc}.Você está com peso um pouco acima do  normal` )
  case imc>29.9&& imc <= 39.9:
    console.log(`Seu IMC é ${imc}.Você está em estado de obesidade`) 
  case imc>39.9:
    console.log(`Seu IMC é ${imc}.Você está em estado de obesidade grave`);
    break;
  default:
    console.log(`Desculpe algo deu errado`);
}