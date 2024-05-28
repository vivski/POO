class Filme{
    constructor(nome, genero, quantidadeDeEspectadores , valorDoIngresso){
        this.nome = nome ;
        this.genero = genero ;
        this.quantidadeDeEspectadores = quantidadeDeEspectadores;
        this.valorDoIngresso = valorDoIngresso;
    }
    
    }

    let filme11 = new Filme('Minions 2', 'Animação', 520, 14);

    console.log(filme11.valorDoIngresso);