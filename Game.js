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
            player = new Players();

            var playerCountRef = await database.ref('playercount').once("value");
            if(playerCountRef.exists()){ 
                   playercount = playerCountRef.val();
                           player.getCount();       
                        }
        form = new Form();
        form.display();
                    }
        player1=createSprite(1200, 60);
        player2=createSprite(1200, 200);
        player3=createSprite(1200, 350);
        player4=createSprite(1200, 500);
        players=[player1, player2, player3, player4];
    }
    play(){
        Players.getPlayerInfo();
        form.hide();
        console.log('ya comenzo')
        background(playaImg)
        //image(playaImg, 0, -displayHeight*3, displayWidth, displayHeight*3)
        //aqui vamos a agregar lo que va a pasar al final//
        if(keyIsDown (UP_ARROW)){
            player.distance +=2
            player.update();
        }
        drawSprites();{

        }
    }
}