function Menu(canvas, context, mouse, game) {
    this.canvas = canvas;
    this.context = context;
    this.mouse = mouse;
    this.game = game;
    this.board = this.game.getGameBoard()
    this.pen = this.board.getPen();

    this.init = () => {
        this.drawMenu()

        this.createStartGameListener()
    }

    this.drawMenu = () => {
        this.pen.drawMenu()
    }

    this.createStartGameListener = () => {
        this.canvas.addEventListener('click', (event) => {
            let x = event.pageX,
                y = event.pageY;
            if (
                y > GAME_HEIGHT/2 + LINE_SPACING*3 && y < GAME_HEIGHT/2 + LINE_SPACING*3 + 80 &&
                x > GAME_WIDTH/2 && x < GAME_HEIGHT/2 + 200 &&
                !this.game.isGameStart()
            ) {
                this.game.startNewGame()
            }
        })
    }
}