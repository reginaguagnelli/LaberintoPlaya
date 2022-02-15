class Game {
    constructor(){

    }
    gamestate(){
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on("value", function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate === 0){
            /*player - new Player();

            var playerCountRef = await database.ref('playercount').once("value");
            if(playerCountRef.exists()){ 
                   playercount = playerCountRef.val();
                           player.getCount();       
                        }*/
        form = new Form();
        form.display();
                    }
        player1=createSprite(70, 500);
        player2=createSprite(120, 500);
        player3=createSprite(170, 500);
        player4=createSprite(220, 500);
        players=[player1, player2, player3, player4];
    }
    play(){
        Player.getPlayerInfo();
        //aqui vamos a agregar lo que va a pasar al final//
        if(keyIsDown (UP_ARROW)){
            player.distance +=2
            player.update();
        }
        
    }
}