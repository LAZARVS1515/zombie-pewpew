class Welcome{
    constructor(){
     this.logoImg="/Assets/zombie_logo.png"
     this.logo=createImg(this.logoImg)
     this.c1Btn=createImg("/Assets/h1.jpg")
     this.c2Btn=createImg("/Assets/h2.jpg")
     this.c3Btn=createImg("/Assets/h3.jpg")
     this.c4Btn=createImg("/Assets/h4.jpg")
       }
 hideElements()
 {
  this.c1Btn.hide()
  this.c2Btn.hide()
  this.c3Btn.hide()
  this.c4Btn.hide()
  this.logo.hide()
 }

 setElementPosition()
 {
     this.logo.position(width/2-200,height/3)
     this.c1Btn.position(width/2-400,height/2)
     this.c2Btn.position(width/2-200,height/2)
     this.c3Btn.position(width/2+10,height/2)
     this.c4Btn.position(width/2+210,height/2)
    }
  
 setElementStyle(){
     this.c1Btn.class("customButton")
     this.c2Btn.class("customButton")
     this.c3Btn.class("customButton")
     this.c4Btn.class("customButton")
 }


 handleOnPress(){
     this.c1Btn.mousePressed(()=>{
         this.hideElements()
         c1 = new C1()
         c1.display()
     })
     this.c2Btn.mousePressed(()=>{
        this.hideElements()
        c2 = new C2()
        c2.display()
    })
    this.c3Btn.mousePressed(()=>{
        this.hideElements()
        c3 = new C3()
        c3.display()
    })
    this.c4Btn.mousePressed(()=>{
        this.hideElements()
        c4 = new C4()
        c4.display()
    })
 }


         display(){
           this.setElementPosition()
           //this.hideElements()
           this.setElementStyle()
           this.handleOnPress() 
        }
}
