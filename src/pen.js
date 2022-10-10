function Pen(context) {
    this.context = context

    this.init = () => {
        setTimeout(this.drawTimer, 1000)
    }

    this.drawTextPuzzle = (xAxis, yAxis, content, style = 'black') => {
        this.context.fillStyle = style
        this.context.font = TEXT_PUZZLE_FONT;
        this.context.fillText(content, xAxis, yAxis);
    }

    this.drawImagePuzzle = (xAxis = 0, yAxis = 0, image = this.initImage()) => {
        image.onload = () => {
            this.context.drawImage(image, xAxis, yAxis, DEFAULT_IMAGE_PUZZLE_WIDTH, DEFAULT_IMAGE_PUZZLE_HEIGHT)
        }
    }

    this.initImage = (imageSource = './assets/image.png', width = DEFAULT_IMAGE_PUZZLE_WIDTH, height = DEFAULT_IMAGE_PUZZLE_HEIGHT) => {
        let image = new Image()
        image.src =  imageSource;
        image.width = width
        image.height = height
        return image
    }

    this.drawMenu = () => {
        this.drawTextPuzzle(GAME_WIDTH/2,GAME_HEIGHT/2,`Trò chơi con cặc`)
        this.drawTextPuzzle(GAME_WIDTH/2, GAME_HEIGHT/2 + LINE_SPACING, 'Số điểm: 10')
        this.drawTextPuzzle(GAME_WIDTH/2, GAME_HEIGHT/2 + LINE_SPACING*2, 'Thời gian: 1 phút')
        this.context.fillStyle = 'green'
        console.log("x", GAME_WIDTH/2, "y", GAME_HEIGHT/2 + LINE_SPACING*3)
        this.context.fillRect(GAME_WIDTH/2, GAME_HEIGHT/2 + LINE_SPACING*3, 200, 80)
        this.context.fillStyle = 'white'
        this.drawTextPuzzle(GAME_WIDTH/2 + 80/2, GAME_HEIGHT/2 + LINE_SPACING*3 + 200/4, 'Bắt đầu', 'white')
    }

    this.drawTimer = (time = 1000) => {
        let min = Math.floor(time / 60000);
        let sec = ((time % 60000) / 1000).toFixed(0);
        this.drawTextPuzzle(GAME_WIDTH - 50, 100, `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`)
    }

    this.drawLine = (x1, y1, x2, y2) => {
        this.context.beginPath();
        this.context.fillStyle = 'red'
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
        this.context.closePath()
    }


}