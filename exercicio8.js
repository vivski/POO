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

   for (let i = 0; i < listadejogos.length; i++) {
    console.log(`Jogo : ${listadejogos[i].nome}`)

}