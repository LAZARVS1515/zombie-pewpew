class C3{
    constructor(){
        this.nameInput = createInput("").attribute("placeholder","name")
        this.greeting = createElement("h3")
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

    display(){
        this.setElementPositions()
        this.setElementStyle()
    }
}