document.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('#about');
    btn.addEventListener('click', ()=>{
        alert('The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one\'s own discs. Connect Four is a solved game. The first player can always win by playing the right moves.');
    });

    //create the table for users

    var gameTable = document.querySelector('.gameTable');
    let currentPlayer = 1;
    let game2D = [
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let playerOneSpan = document.querySelector('#playerOneScore');
    let playerTwoSpan = document.querySelector('#playerTwoScore');

    let currentPlayerLabel = document.querySelector('#currentPlayer');
    function createTable(){
        for(let i = 0 ; i < 6; i++){
            for(let j = 0 ; j < 7; j++){
                let gameSquare = document.createElement('div');
                gameSquare.className = "gameSquare";
                gameTable.appendChild(gameSquare);
                gameSquare.addEventListener('click', gameSquareFnc);
                gameSquare.row = i;
                gameSquare.column = j;
                if(i === 5){
                    gameSquare.addEventListener('click', gameSquareFnc);
                    gameSquare.classList.add('base');
                }
                game2D[i].push(gameSquare);
            }
            
        }



    }

    function createGame(){
        while(gameTable.firstChild){
            gameTable.removeChild(gameTable.lastChild);
        }
        game2D = [
            [],
            [],
            [],
            [],
            [],
            [],
        ];
        createTable();
    }


   

    function gameSquareFnc(){
 

        if( this.classList.contains('base')){

            let gameBall = document.createElement('div');
            this.append(gameBall);

            if(currentPlayer===1){
                gameBall.className = "gameBall";
                gameBall.parentElement.classList.add('player1');
                gameBall.style.backgroundColor = "yellow";
                currentPlayer = 2;
                currentPlayerLabel.innerHTML = "2";
                
            }
            else if(currentPlayer === 2){
                gameBall.className = "gameBall";
                gameBall.parentElement.classList.add('player2');
                gameBall.style.backgroundColor = "blue";
                currentPlayer = 1;
                currentPlayerLabel.innerHTML = "1";
            }
            this.classList.add('taken');
    
            gameBall.parentElement.removeEventListener('click', gameSquareFnc);
        }
        else{
            //console.log(idx);
            if(game2D[this.row+1][this.column].classList.contains('taken')){
                let gameBall = document.createElement('div');
                this.append(gameBall);

                if(currentPlayer===1){
                    gameBall.parentElement.classList.add('player1');
                    gameBall.className = "gameBall";
                    gameBall.style.backgroundColor = "yellow";
                    currentPlayer = 2;
                }
                else if(currentPlayer === 2){
                    gameBall.className = "gameBall";
                    gameBall.parentElement.classList.add('player2');
                    gameBall.style.backgroundColor = "blue";
                    currentPlayer = 1;
                }
                this.classList.add('taken');
        
                gameBall.parentElement.removeEventListener('click', gameSquareFnc);

            }
        }
        function horizontalCheck (){
            //soldan başlayarak tüm row'ları kontrol etmeli.
            for(let i = 0 ; i < 6; i++){
                let c = false;
                for(let j = 0 ; j < 4; j++){

                    if(game2D[i][j].classList.contains('player1') &&
                    game2D[i][j+1].classList.contains('player1') &&
                    game2D[i][j+2].classList.contains('player1') &&
                    game2D[i][j+3].classList.contains('player1')){
                        playerOneScore++;
                        playerOneSpan.innerHTML = playerOneScore;

                        alert("Player 1 won!");
                        createGame();
                        c = true;
                        break;
                    }
                    else if(game2D[i][j].classList.contains('player2') &&
                    game2D[i][j+1].classList.contains('player2') &&
                    game2D[i][j+2].classList.contains('player2') &&
                    game2D[i][j+3].classList.contains('player2')){
                        playerTwoScore++;
                        playerTwoSpan.innerHTML =playerTwoScore;

                        alert("Player 2 won!");
                        
                        createGame();
                        c = true;
                        break;
                    }
                }
                if(c===true) break;
            }

        }

        function verticalCheck (){
            //soldan başlayarak tüm row'ları kontrol etmeli.
            for(let i = 0 ; i < 3; i++){
                let c = false;
                for(let j = 0 ; j < 7; j++){

                    if(game2D[i][j].classList.contains('player1') &&
                    game2D[i+1][j].classList.contains('player1') &&
                    game2D[i+2][j].classList.contains('player1') &&
                    game2D[i+3][j].classList.contains('player1')){
                        playerOneScore++;
                        playerOneSpan.innerHTML = playerOneScore;

                        alert("Player 1 won!");
                        createGame();
                        c = true;
                        break;
                    }
                    else if(game2D[i][j].classList.contains('player2') &&
                    game2D[i+1][j].classList.contains('player2') &&
                    game2D[i+2][j].classList.contains('player2') &&
                    game2D[i+3][j].classList.contains('player2')){
                        playerTwoScore++;
                        playerTwoSpan.innerHTML =playerTwoScore;

                        alert("Player 2 won!");
                        
                        createGame();
                        c = true;
                        break;
                    }
                }
                if(c===true) break;
            }

        }

        function leftCrossCheck (){
            //soldan başlayarak tüm row'ları kontrol etmeli.
            for(let i = 0 ; i < 3; i++){
                let c = false;
                for(let j = 0 ; j < 4; j++){

                    if(game2D[i][j].classList.contains('player1') &&
                    game2D[i+1][j+1].classList.contains('player1') &&
                    game2D[i+2][j+2].classList.contains('player1') &&
                    game2D[i+3][j+3].classList.contains('player1')){
                        playerOneScore++;
                        playerOneSpan.innerHTML = playerOneScore;

                        alert("Player 1 won!");
                        createGame();
                        c = true;
                        break;
                    }
                    else if(game2D[i][j].classList.contains('player2') &&
                    game2D[i][j+1].classList.contains('player2') &&
                    game2D[i][j+2].classList.contains('player2') &&
                    game2D[i][j+3].classList.contains('player2')){
                        playerTwoScore++;
                        playerTwoSpan.innerHTML =playerTwoScore;

                        alert("Player 2 won!");
                        
                        createGame();
                        c = true;
                        break;
                    }
                }
                if(c===true) break;
            }

        }

        function rightCrossCheck (){
            //soldan başlayarak tüm row'ları kontrol etmeli.
            for(let i = 0 ; i < 3; i++){
                let c = false;
                for(let j = 3 ; j < 7; j++){

                    if(game2D[i][j].classList.contains('player1') &&
                    game2D[i+1][j-1].classList.contains('player1') &&
                    game2D[i+2][j-2].classList.contains('player1') &&
                    game2D[i+3][j-3].classList.contains('player1')){
                        playerOneScore++;
                        playerOneSpan.innerHTML = playerOneScore;

                        alert("Player 1 won!");
                        createGame();
                        c = true;
                        break;
                    }
                    else if(game2D[i][j].classList.contains('player2') &&
                    game2D[i][j-1].classList.contains('player2') &&
                    game2D[i][j-2].classList.contains('player2') &&
                    game2D[i][j-3].classList.contains('player2')){
                        playerTwoScore++;
                        playerTwoSpan.innerHTML =playerTwoScore;

                        alert("Player 2 won!");
                        
                        createGame();
                        c = true;
                        break;
                    }
                }
                if(c===true) break;
            }

        }

        function allChecks(){
            horizontalCheck();
            verticalCheck();
            leftCrossCheck();
            rightCrossCheck();

            let bllnum = document.querySelectorAll('.gameBall');
            console.log(bllnum);
            if(bllnum.length===42) {
                alert('DRAW');
                createGame();
            }
        }

        setTimeout(allChecks, 1000);

      
    }


    createGame();
});