// Number 
console.log(2);

// Operações
console.log(2+3);

// //String
// console.log("oi");
// console.log('oi');
// console.log("texto \nem duas linhas");
// console.log("Meu " + "nome " + "é shogo");

// //Template strings
// console.log(`A soma de 2 + 2 é: ${2+2}`);

// //Boolean
// console.log(true);
// console.log(5>2);
// console.log(5<2);
// console.log(5==2);

//Comparação de idênticos
console.log(5===5);
console.log(5===4);
console.log(9=="9");
console.log(9==="9");

//Operação Lógico
console.log(true && true);
console.log(true || false);

//Variáveis

// let nome = "matheus";
// const idade = 31;

// console.log(idade);

// //prompt
// let constx = prompt("Digite um número");
// console.log(`Você tem ${constx} anos`);

//alert
// alert("Testando");

//math
console.log(Math.max(5,2,1,10));
console.log(Math.floor(5,14));

//console
console.log("teste");
console.error("erro");
console.warn("aviso");

// //if e else
// const m = 10;
// if (m>5){
//     console.log("correto");
// }

// const name = "joão";
// if(name === "joão"){
//     console.log("log in");
// }else{
//     console.log("log out");
// }

//while

// let m = 5;
// while(m<10){
//     console.log(m);
//     m++;
// }

//for
// for(let t=0;t<10;t++){
    // console.log(t);
// }

//identação
for(let u=0;u<20;u++){
    if(u*2>10){
        console.log(`maior que 10! ${u}`)
    } else{
        if(u/20===0){
            console.log("Deu 0");
        }
    }
}

//switch
let job = "Programador"
switch(job){
    case "Médico":
        console.log("Você é um programador!");
        break;
    
    case "Advogado":
        console.log("Você é um Advogado!");
        break;

    default:
        console.log("Você não é nada");
        break;
}


