players = [1, 2, 3, 4]
cards = [2,3,5,4,7,2,1];
played = []
let mycard;

function init() {
    players.map((player, id) => {
        initPlayer(player, id);
    })
}

function initPlayer(player, id) {
    main = document.getElementById("mainGame");
    playerbox = document.createElement("div");
    playerbox.classList.add("player");
    playerbox.id = "player" + player;
    playerbox.textContent = "Player " + player;

    if (id == 1 ){
        midbox = document.createElement("div");
        midbox.id = "midplayers"
        midbox.classList.add("midplayers");
        midbox.appendChild(playerbox);

        main.appendChild(midbox);
    } else if (id == 2){
        midbox = document.getElementById("midplayers");        
        midbox.appendChild(playerbox);
    }
    else {
    playerbox.classList.add("top");
        played = document.createElement("div")
        played.classList.add("player-played");
        played.textContent = "played cards"
        playerbox.appendChild(played);
        main.appendChild(playerbox);
    }

}

function giveCards(){
    players.map((player,id) => {
        //create card object and give each player a card
        card = document.createElement("div")
        card.classList.add("card");
        card.innerText = id;
        document.getElementById("player"+player).appendChild(card);


    })
}
/*
<div class="player top">player0</div>
        <div class="midplayers">
            <div class="player">player1</div>
            <div class="player">player2</div>
        </div>
        <div class="player top" id="player">
            player3</div>
    </div>
*/

//5643879