1
function potencia(numero, expoente){
2
    if (numero === 0){
3
        return "Não definido";
4
    }
5
    if (expoente === 0){
6
        return 1;
7
    }
8

9
    let resultado = numero;
10

11
    if (expoente < 0){
12
        for(let i = 1; i < (-expoente); i++){
13
            resultado *= numero;
14
        }
15
     return 1/resultado;
16
    }
17
 
18
    for(let i = 1; i < expoente; i ++){
19
        resultado *= numero;
20
    }
21
    return resultado;
22
}
23

24
alert(potencia(5, -3));