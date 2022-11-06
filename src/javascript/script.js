function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="nlw_copa/src/bandeiras/icon=${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
    <img src="./src/bandeiras/icon=${player2}.svg" alt="${player2}"> 
</li>
`
}
let delay = 2;
function createCard(date, day, games ){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
     ${games}  
    </ul>
</div>
    `
}

document.querySelector('#cards').innerHTML = 
               createCard('24/11', 'quinta',
               createGame("brazil", '16:00', "serbia")) 
               +
               createCard('28/11', 'segunda',
               createGame('brazil','13:00', 'switzerland')) 
               +
               createCard('02/12', 'sexta',
               createGame('cameroon', '16:00','brazil') 
               + 
               createGame("south korea", '12:00', "portugal"))
            
