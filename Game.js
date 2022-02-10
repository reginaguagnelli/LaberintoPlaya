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
    }
}