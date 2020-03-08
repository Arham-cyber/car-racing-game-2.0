var  database, position,gameState=0,playerCount,game,form,player,allPlayers,distance=0;

function setup(){
    database = firebase.database()
    createCanvas(displayWidth,displayHeight); 
    game = new Game();
    game.getState()
    game.start()   
}
function draw(){
    //background("white");
    if (playerCount===4 ){
        game.update(1)
    }  
    if (gameState===1){
        clear();
        game.play()
        
    }
}