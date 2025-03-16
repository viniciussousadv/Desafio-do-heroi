let nomesHerois = "chanzao"
let xpHerois = 10.000

if (xpHerois <= 1.000) {
    xpHerois = "Ouro"
    console.log(`O Herói ${nomesHerois} está no nível de ${xpHerois}`)
} else if (xpHerois >= 1.001 && xpHerois <= 2.000 ){
    xpHerois = "Bronze"
    console.log(`O Herói ${nomesHerois} está no nível de ${xpHerois}`)
} else if (xpHerois >= 7.000 && xpHerois <= 8.000){
    xpHerois = "platina"
    console.log(`O Herói ${nomesHerois} está no nível de ${xpHerois}`)
} else if ( xpHerois >=10.000) { 
    xpHerois = "mestre"
    console.log(`O Herói ${nomesHerois} está no nível de ${xpHerois}`)
}





// Se XP for entre 1.001 e 2.000 = Bronze 
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante