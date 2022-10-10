function Board(context) {
    this.context = context;
    this.pen = null;

    this.init = () => {
        this.createPenHandler()
    }

    this.getPen = () => this.pen

    this.createPenHandler = () => {
        let pen = new Pen(this.context)
        pen.init();
        this.pen = pen
    }

    this.clearGameBoard = () => {

    }
    
    this.createBoardLoop = () => {
        
    }

    this.updateGameBoard = () => {
        this.drawGameBoard()
    }

    this.drawGameBoard = (gameMatrix) => {
        console.log(gameMatrix)
        if(gameMatrix){
            this.drawQuestion(gameMatrix.questions)
            this.drawAnswer(gameMatrix.answers)
        }
    }

    this.drawQuestion = (questions) => {
        for (let i = 0; i < questions.length; i++) {
            switch (questions[i].type){
                case IMAGE_TYPE:
                    this.pen.drawImagePuzzle(
                        QUESTION_LEFT_SPACING,
                        QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT) ,
                        this.pen.initImage(questions[i].src)
                    )
                    break;
                case TEXT_TYPE:
                    this.pen.drawTextPuzzle(
                        QUESTION_LEFT_SPACING,
                        QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT) ,
                        questions[i].content
                    )
                    break;
            }
        }
    }

    this.drawAnswer = (answers) => {
        for (let i = 0; i < answers.length; i++) {
            switch (answers[i].type){
                case IMAGE_TYPE:
                    this.pen.drawImagePuzzle(
                        GAME_WIDTH - ANSWER_RIGHT_SPACING,
                        ANSWER_TOP_SPACING  + i*(ANSWER_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT),
                        this.pen.initImage(answers[i].src)
                    )
                    break;
                case TEXT_TYPE:
                    this.pen.drawTextPuzzle(
                        GAME_WIDTH - ANSWER_RIGHT_SPACING,
                        ANSWER_TOP_SPACING  + i*(ANSWER_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT),
                        answers[i].content
                    )
                    break;
            }
        }
    }
}