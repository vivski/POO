let remedio1 = {
    nome:'Buscopan',
    validade:2022
    };
    
    let remedio2 = {
    nome:'Dipirona',
    validade:2021
    };
    
    let remedio3 = {
    nome:'Pantoprazol',
    validade:2022
    };
    
    let remedio4 = {
    nome:'Prednisona',
    validade:2020
    };
    
    let remedio5 = {
    nome:'Hidrocortisona',
    validade:2023
    
    };
    
    
    
    let estoquederemedios = []
    estoquederemedios.push(remedio1)
    estoquederemedios.push(remedio2)
    estoquederemedios.push(remedio3)
    estoquederemedios.push(remedio4)
    estoquederemedios.push(remedio5)
    
    
    for ( let i = 0 ; i < estoquederemedios.length ; i++){
    
    if( estoquederemedios[i].validade >= 2022 ){
        console.log('Remédio :' + estoquederemedios[i].nome + " tem a validade de = " + estoquederemedios[i].validade )
    }
    
    
    }
    