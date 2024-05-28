class Jogo{
    constructor(nome,categoria,preco,avaliacao){
   this.nome = nome;
   this.categoria = categoria;
   this.preco = preco;
   this.avaliacao = avaliacao;
   
    }
   
   }

   let jogo1 = new Jogo('Valorant', 'FPS', 0, 4.5);
   let jogo2 = new Jogo('The sims', 'MMO', 50, 4);
   let jogo3 = new Jogo('Free fire', 'Battle Royale', 0, 5);
   let jogo4 = new Jogo('Call of Duty', ' FPS ', 200, 5);
   let jogo5 = new Jogo('Minecraft', 'Sobrevivência', 20, 5);
   
   
   let listadejogos = []
   listadejogos
   listadejogos.push(jogo1)
   listadejogos.push(jogo2)
   listadejogos.push(jogo3)
   listadejogos.push(jogo4)
   listadejogos.push(jogo5)
   
   console.log(jogo1.nome)
   console.log(jogo2.nome)
   console.log(jogo3.nome)
   console.log(jogo4.nome)
   console.log(jogo5.nome)
   
   
   console.log(` jogo 1 : ${jogo1.nome}`)
   console.log(` jogo 2 : ${jogo2.nome}`)
   console.log(` jogo 3 : ${jogo3.nome}`)
   console.log(` jogo 4 : ${jogo4.nome}`)
   console.log(` jogo 5 : ${jogo5.nome}`)
   
   
//    * esses consoles acima imprimem os nomes de todos os elementos da classe/ array
//    separadamente. 
   
//    * esse for vai percorrer o array listadejogos e imprimir o nome de cada
//    elemento do array
   
   for (let i = 0; i < listadejogos.length; i++) {
    console.log( listadejogos[i].nome)
       
   }