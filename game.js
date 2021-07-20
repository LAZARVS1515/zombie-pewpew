class Game{
    constructor(){
    }
    start(){
        welcome = new Welcome()
    welcome.display();
   
    }
    play(){
        createCanvas(4096,4096)
           image(map,0,0,4096,4096)
        image(mapRest,0,0,4096,4096)
     Welcome.hideElements()
    }
    
}