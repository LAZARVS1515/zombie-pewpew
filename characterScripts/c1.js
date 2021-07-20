class C1{
    constructor(){
        this.nameInput = createInput("").attribute("placeholder","name")
        this.greeting = createElement("h1")
        this.playBtn = createButton("Play")
    }
    hideElements(){
        this.nameInput.hide()
        this.playBtn.hide()
    }

    setElementPositions(){
        this.nameInput.position(width/2,height/2-200)
        this.playBtn.position(width/2,height/2)
    }

    setElementStyle(){
        this.nameInput.style("customInput")
        this.playBtn.style("customButton")
    }

    handleOnPress(){
       this.playBtn.mousePressed(()=>{
           this.hideElements()
           gameState = "play"
           this.greeting.position(1016,516)
           var message = ` Player ${this.nameInput.value()} 
           </br>Please wait:`;

           this.greeting.html(message)
        })
    }

    display(){
        this.setElementPositions()
        this.setElementStyle()
        this.handleOnPress()
    }
}