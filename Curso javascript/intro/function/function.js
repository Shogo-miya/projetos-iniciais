function myFunction(){
    console.log("Testando")
}

myFunction();

const myFunction2 = function(){
    console.log("FUnções em variável");
}

myFunction2();

//escopo da função
let x = 10;
function testandoEscopo(){
    let x = 20;
    console.log(`X dentro da Função é ${x}`);
}
testandoEscopo();

console.log(`X fora da Função é ${x}`);

//escopo aninhado
let y = 10;

function aninhado(){
    let y = 20;
    if(true){
        let y = 30;
        if(true){
            let y = 40;
            console.log(y);
        }
        console.log(y);
    }
    console.log(y);
}
aninhado();
console.log(y);

//arrow function
const arrow = () =>{
    console.log("Esta é uma arrow function");
};

arrow();
const parouimpar = (n) =>{
    if(n%2 === 0){
        console.log("par");
        return;
    }
    console.log("impar")
}
parouimpar(5);
parouimpar(10);