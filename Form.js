class Form{
    constructor(){
        this.titulo = createElement('h1')
        this.titulo2 = createElement('h2')
        this.input = createInput("Name")
        this.button = createButton("Start")    
    }
    display(){
        this.titulo.html("Hola")
        this.titulo.position(displayWidth/2-50, 0)
        this.titulo2.html("Agrega tu nombre para iniciar")
        this.titulo2.position(displayWidth/2-150, displayHeight/2-300)
        this.input.position(displayWidth/2-80, displayHeight/2-80)
        this.button.position(displayWidth/2-10, displayHeight/2-50)
    }
}