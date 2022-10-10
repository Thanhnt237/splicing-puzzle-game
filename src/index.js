function Main(){
    this.canvas = null;
    this.context = null;
    this.mouse = null;
    this.game = null;

    this.init = () => {
        this.createCanvas()
        this.createMouseHandler()

        this.createGamePlay()
        this.createGameMenu()


    }

    this.createCanvas = () => {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = CANVAS_WIDTH
        this.canvas.height = CANVAS_HEIGHT

        document.body.appendChild(this.canvas)
    }

    this.createMouseHandler = () => {
        let mouse = new MouseHandler(this.canvas)
        mouse.init()
        this.mouse = mouse
    }

    this.createGamePlay = () => {
        let game = new GamePlay(this.mouse, this.context, this.canvas)
        this.game = game
        game.init()
    }

    this.createGameMenu = () => {
        let menu = new Menu(this.canvas, this.context, this.mouse, this.game)
        menu.init()
    }
}

let main = new Main()
main.init()