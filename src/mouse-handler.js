function MouseHandler(canvas) {
    this.canvas = canvas
    this.clickAbleMatrix = null;
    this.clicked = false;
    this.clickedComponent = null;
    this.gameMatrix = null;
    this.mustClickComponent = null;
    this.board = null;
    this.pen = null;

    this.init = () => {

    }

    this.createListenToMouse = (clickAbleMatrix, gameMatrix, board) => {
        this.clickAbleMatrix = clickAbleMatrix
        this.gameMatrix = gameMatrix
        this.board = board;
        this.pen = this.board.getPen()
        this.canvas.addEventListener('mousedown', this.processMouseDown)
        console.log(this.clickAbleMatrix)
    }

    this.processMouseDown = (e) => {
        if(!this.clicked){
            for (const fuck of this.clickAbleMatrix) {
                if(
                    e.y > fuck.yMin && e.y < fuck.yMax &&
                    e.x > fuck.xMin && e.x < fuck.xMax
                ){
                    this.clicked = true
                    this.clickedComponent = fuck
                    switch (fuck.species){
                        case 'question':
                            this.mustClickComponent = this.clickAbleMatrix.filter(c => c.species !== fuck.species && fuck.answer === c.index )[0]
                            break;
                        case "answer":
                            this.mustClickComponent = this.clickAbleMatrix.filter(c => c.species !== fuck.species && fuck.question === c.index )[0]
                            break;
                    }
                }
            }
        }else{
            this.handleClicked(e)
        }
    }

    this.handleClicked = (e) => {
        console.log(this.mustClickComponent)
        console.log("x", e.x, "y", e.y)
        if(
            e.y > this.mustClickComponent.yMin && e.y < this.mustClickComponent.yMax &&
            e.x > this.mustClickComponent.xMin && e.x < this.mustClickComponent.xMax
        ){
            this.pen.drawLine(
                (this.clickedComponent.xMin + this.clickedComponent.xMax) / 2,
                (this.clickedComponent.yMin + this.clickedComponent.yMax) / 2,
                (this.mustClickComponent.xMin + this.mustClickComponent.xMax) / 2,
                (this.mustClickComponent.yMin + this.mustClickComponent.yMax) / 2
            )
            this.clicked = false
        }
    }
}