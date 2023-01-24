função  potência ( numero ,  expoente ) {
    deixe  resultado = numero ;
    if  ( expoente < 0 ) {
    for ( let  i = expoente ;  i < - 1 ; i ++ ) {
        resultado *= número ;
    }
    }
    outra coisa {
    for ( deixe  i = 1 ;  i < expoente ; i ++ ) {
        resultado  *= número ;
    }
    }
    if  ( expoente === 0  &&  numero === 0 ) {
        return  "não definido" ;
    }
    else  if  ( expoente === 0  &&  numero !== 0 ) {
        retornar  1 ;
    }
    else  if  ( expoente < 0 ) {
        return  "1/" + resultado ;
    }


     resultado de retorno ;
}
alerta ( potência ( 3 , - 2 ) ) ;

