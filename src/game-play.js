function GamePlay(mouse, context, canvas) {
    this.mouse = mouse;
    this.context = context;
    this.canvas = canvas;
    this.board = null;
    this.gameMatrix = null;

    this.gameStart = false;
    this.gameOver = false;
    this.win = false;
    this.isSelected = false;

    this.init = () => {
        this.createGameBoard()

        this.createGameMatrix()
    }

    this.getGameBoard = () => this.board
    this.isGameStart = () => this.gameStart

    this.createGameBoard = () => {
        let board = new Board(this.context)
        this.board = board;
        board.init()
    }

    this.createGameMatrix = () => {
        this.gameMatrix = {
            questions: this.createGameQuestions(),
            answers: this.createGameAnswers()
        }
    }

    this.createGameAnswers = () => {
        return [{
            species: "answer",
            type: IMAGE_TYPE,
            src: './assets/4.jpg',
            question: "0"
        },{
            species: "answer",
            type: IMAGE_TYPE,
            src: './assets/5.jpg',
            question: "1"
        },{
            species: "answer",
            type: TEXT_TYPE,
            content: "Violets are blue",
            question: "2"
        }]
    }

    this.createGameQuestions = () => {
        return [{
            species: "question",
            type: IMAGE_TYPE,
            src: './assets/2.jpg',
            answer: "0"
        },{
            species: "question",
            type: IMAGE_TYPE,
            src: './assets/3.jpg',
            answer: "1"
        },{
            species: "question",
            type: TEXT_TYPE,
            content: "Roses are red",
            answer: "2"
        }]

    }

    this.createClickAbleMatrix = (gameMatrix = this.gameMatrix) => {
        let clickAbleMatrix = []
        for (let i = 0; i < this.gameMatrix.questions.length; i++) {
            clickAbleMatrix.push({
                index: i.toString(),
                species: this.gameMatrix.questions[i].species,
                answer: this.gameMatrix.questions[i].answer,
                xMin: QUESTION_LEFT_SPACING,
                xMax: QUESTION_LEFT_SPACING + DEFAULT_IMAGE_PUZZLE_WIDTH,
                yMin: QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT),
                yMax: QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT) + DEFAULT_IMAGE_PUZZLE_HEIGHT
            })
        }
        for (let i = 0; i < this.gameMatrix.answers.length; i++) {
            clickAbleMatrix.push({
                index: i.toString(),
                species: this.gameMatrix.answers[i].species,
                question: this.gameMatrix.answers[i].question,
                xMin: GAME_WIDTH - ANSWER_RIGHT_SPACING,
                xMax: GAME_WIDTH - ANSWER_RIGHT_SPACING + DEFAULT_IMAGE_PUZZLE_WIDTH,
                yMin: QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT),
                yMax: QUESTION_TOP_SPACING + i*(QUESTION_GUTTER + DEFAULT_IMAGE_PUZZLE_HEIGHT) + DEFAULT_IMAGE_PUZZLE_HEIGHT
            })
        }
        return clickAbleMatrix
    }

    this.startNewGame = () => {
        this.gameStart = true;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.board.drawGameBoard(this.gameMatrix)

        this.mouse.createListenToMouse(this.createClickAbleMatrix(), this.gameMatrix, this.board)
    }



}