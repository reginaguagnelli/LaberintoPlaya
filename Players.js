class Player{
    constructor(){
        this.name=null;
        this.index=null;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on('value', (data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
        ;
    }
    update(){
        var playerIndexRef='jugadores/jugador'+ this.index;
        database.ref(playerIndexRef).set({
            name:this.name, 
        });

    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref('jugadores');
        playerInfoRef.on('value', (data)=>{
            allPlayers=data.val();
        })
    }
}