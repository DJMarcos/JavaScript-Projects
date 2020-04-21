//This function will get fixed once the DOM is loaded.
// Disable the stop button since it is not needed until game start.
window.onload = function() {watch()};
function watch() {
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); // disable the stop button since the game has not started
}

// this function will roll for random number twice, one for
// each player and determine player won the roll.
function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimun = 1;
    var maximun = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        // random whole number between 1 and 10
        ranNum = Math.floor(Math.random() *(maximun - minimum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll() ; //play dice sounds during the game roll for turn
    // build the string to show which player rolled what die roll
    for (i=0;i<xArray.length;i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) { // rigging roll on tie avoid bug in code. Need to adress this later.....
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 =- txt1 + "player 2 rolled ["+pTwo+"}<br><br>";
        setTimeout(function() {writeMsg(txt1);} 1000); // time delay for dramtic affect 
    }
    // determine and concatenate string showing which player won the roll 
    if (pOne > pTwo) { 
        first = "player 1";
        setTimeout(function() { txt1 - txt1 + "player 1 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000)
    } else if (pOne < pTwo) {
        first = "player 2";
        setTimeout(function() { txt1 = txt1 + "player 2 wins, please choose a square,";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    }
    //pass which player won the roll
    return first;
}


//----------------------------------------------------------------
// initiate the game, roll for turn $ determine the active player
//----------------------------------------------------------------
function startGame() {
    var xturn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") { // if it was a tie, then reroll
        activePlayer = rollForTurn();
    }
    setTimeout(function() {hideGameMsg();}, 4000);

    //asign proper state of the control buttons
    var btn = document.getElementById('btnStart');
    btnDisable(btn); // disable the start button since the game is now afoot
    var btn = document.getElementById('btnStop');
    stopEnabled(btn); // enable the stop button since the game is now afoot

    //Assign the active player to the console
    var showPlayer = document.getElementById('showPlayer');
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

//this function styles the game buttons while they are disabled
function btnDisabled(btn) { 
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgba (153, 153, 102)";
    btn.style.backgroundColor = "rgba(214, 214, 194)";
    btn.disabled = true;
}

// this function styles the game buttons while they are disabled
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgba(204, 0, 0)";
    btn.style.backgroundColor = "rgba(255, 51, 51)";
    btn.disabled = false;
}

//this function styles the game buttons while they are disabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgba (0, 153, 0)";
    btn.style.backgroundColor = "rgba(57, 230, 0)";
    btn.disabled = false;
}

// when the user indicates, stop the current game and reset game
function stopGame() {
    hideGameMsg(); // clear the text and hide message box
    var btn = document.getElementById('btnStart');
    startEnabled(btn); // enable the stop button since the game is now stopped
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); // disabled the stop button since game is now stopped
    var showPlayer = document.getElementById('showPlayer');
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color= 'red';

    // reset all squares to their starting empty state.
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i=0; i<arrayO.length; i++) {
        arrayO[i].style.transform = "translateY(-100%)";
    }
    for (var i=0; i<arrayX.length;i++) {
        arrayX[i].style.transform = "translateY(100%)";
    }
    // this clears the running log of all game moves
    document.getElementById('boardState').innerHTML = "";
}

// this function will show the message console and any text it may have
function showGameMsg() {
    document.getElementById('gameMsgBox').style.display = 'block';
}

// this function will conceal the message console from view
function hideGmaeMsg() {
    clearMsg() //clear the text from the message console
    document.getElementById('gameMsgBox').style.display = 'none'; // hide the div
}

//this function will write text to the game message console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById('gameMsg').innerHTML = txt;
}

//this function will clear the text from the message console
function clearMsg() {
    document.getElementById('gameMsg').innerHTML = "";
}

//this function is for the player configuration panel and checks the.
// proposed avatar aassignments and prevents them from being the same.
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
        alert("Error - Player 1 and Player 2 cannot both be assigned as: "+p1Selected[p1Index].text)
    } else {
        document.getElementById('p1Display').innerHTML=p1Selected[p1Index].text;
        document.getElementById('p2Display').innerHTML=p2Slected[p2Index].text;
    }
}

//this function returns the currently assigned avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar,p2Avatar];
    return avatarArray;
}

//this function will return the active players avatar
function determineAvatar() {
    //determine the correct avatar to paint for the active player
    var avatarArray = getAvatars(); //returns and array of both players assinged avatars
    var actice = document.getElementById('showPLayer').innerHTML; // get active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active =="player 1") { //check which player is active and their corresponding avatar
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar; //returned back the corerct avatar
}

//this function changes active player over to the other player
function avatarPlaced() {
    var parseText = document.getElementById('gameMsg').innerHTML;
    var showPlayer = document.getElementById('showPLayer'); //select the current element to mmemory
    //check if there is already a winner....if there is, then dont continue the game
    if(parseText == "that's three in a row, Player 1 wins!" || parseText == "that's three ina row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color='red';
    }
    activePlayer = showPlayer.innerHTML; // get the current player from the slement
    if (activePlayer == "Player 1") { // once active player selects a square change the active player
        showPlayer.innerHTML = "Player 2";
    } else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie(); //call this function to inquire if three was a cats game
}

//this function will get the array of the current board
//and check the proposed move for a validity
function check(info,square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0); // comparing index of square
        if (tempInfo == square) {
            return tempInfo;
        }
    }
}

// as square are slected they check in with this function to see if that particular
//square has already been assigned and if it has not, record new square with the assigned avatar.
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById('boardState').innerHTML; // retrieve boardState array
    var info = broadState.split(','); // separate the string by commas to create an array
    verdict = check(info,square); // call functions to check if proposed asquare is already occupied 
    return verdict;
}

//this function will get list of previous moves
// and then concatenate the current move to it.
function recordMove(currentMove) {
    var target = document.getElementById('boardState');
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves+currentMove;
}

function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById('boardState');
    var info = target.innerHTML; // raw array with squares avatar
    info = info.substring(1); // remove leading comma
    info = info.split(','); // separate the string by commas into an array
    info.sort(); // sort the square in order despite the actual gameplay sequence
    for (var i in info) {
        squareArray.push(info[1].charAt(0)); // new array with only squares not avatars
    }
    //call this following array of functions to check for any of the possible win cons
    checkWinCon1(info,squareArray);
    checkWinCon2(info,squareArray); 
    checkWinCon3(info,squareArray);
    checkWinCon4(info,squareArray);
    checkWinCon5(info,squareArray);
    checkWinCon6(info,squareArray);
    checkWinCon7(info,squareArray);
    checkWinCon8(info,squareArray);
    //console.log("new check!: "+document.getElementById('gameMsg).innerHTML);
    check4Tie()
}

//call this function to check board state for any ties and act accordingly
function check4Tie() {
    var boardState = document.getElementById('boardState').innerHTML;
    boardState = boardState.substring(1); // remove leading comma
    boardState = boardState.split(','); // separate the string by comma into array
    var check = document.getElementById('gameMsg').innerHTML;
    if(boardState.length >= 9 && check != "that's three in a row, Player 1 wins!" && check != "that's three in a row, Player 2 wins!") {
        var txt1 = "oh no! Nobody wins, it was a tie!";
        tieSounds(); // play a sound when a tie has been detected
        writeMsg(txt1);
        setTimeout(function() {stopGame();}, 3000);
    }
}

// whenever a win is detected the corresponding function will 
// call this function to produce the following winning proccess for the game
function winner(winDetected,winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById('showPlayer').innerHTML;
        var txt2 = "that's three in a row, "+activePlayer+"wins!";
        writeMsg(txt2);
        var btn = document.getElementById('btnStart');
        startEnabled(btn); // enable the start button since the game is now stopped
        var btn = document.getElementById('btnStop');
        btnDisabled(btn); // disable the stop button since the game is now stopped
        document.getElementById('showPlayer').innerHTML = "Game Stopped";
        glowBoard(winCon); // call function to make the gameboard pulse with colors
    }
}

// this function will make the winning squares light up in celebration
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName('square')
    for (var i=0; i<squares.length;i++) {
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(244, 151, 45)';}, 100);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(244, 122, 87)';}, 200);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(197, 140, 22)';}, 300);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(122, 192, 24)';}, 400);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(66, 185, 43)';}, 500);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(67, 139, 33)';}, 600);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(202, 186, 10)';}, 700);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(109, 150, 11)';}, 800);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(190, 149, 25)';}, 900);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(155, 142, 32)';}, 1000);
            setTimeout(function() {bg1.style.backgroundColor = '#d7f3f7';}, 1100);
        } else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(244, 175, 65)';}, 100);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(244, 178, 69)';}, 200);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(34, 165, 76)';}, 300);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(2124, 151, 80)';}, 400);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(101, 134, 90)';}, 500);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(87, 127, 65)';}, 600);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(99, 169, 24)';}, 700);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(100, 144, 46)';}, 800);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(232, 182, 76)';}, 900);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(121, 162, 59)';}, 1000);
            setTimeout(function() {bg1.style.backgroundColor = '#d7f3f7';}, 1100);
        } else if (i == index2) {
            var bg3 = squares[i];
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(244, 161, 24)';}, 100);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(32, 164, 22)';}, 200);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(24, 155, 76)';}, 300);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(44, 134, 59)';}, 400);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(222, 176, 93)';}, 500);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(267, 145, 48)';}, 600);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(167, 157, 37)';}, 700);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(134, 143, 17)';}, 800);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(123, 123, 34)';}, 900);
            setTimeout(function() {bg1.style.backgroundColor = 'rgba(145, 17, 89)';}, 1000);
            setTimeout(function() {bg1.style.backgroundColor = '#d7f3f7';}, 1100);
        }
    }
    setTimeout(function() {stopGame();}, 1200);
}

// these functions will produce game sounds depending on the occasion
function squareSound() {
    var sound = document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function() {sound.pause();}, 400); // add delay to these to keep sound short
    setTimeout(function() {sound.currentTime = 0;}, 500);
}
function tiesound() {
    var sound = document.getElementById("tieGame");
    var check = document.getElementById('gameMsg').innerHTML;
    setTimeout(function() {sound.play();}, 500);
}
function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function() {sound.play();}, 500);
    setTimeout(function() {sound.pause();}, 2700); // add delay to these to keep sound short
    setTimeout(function() {sound.currentTime = 0;}, 2800);
}
function diceRoll() {
    var sound = document.getElementById("diceRoll");
    sound.play();
}

// call this function to make entire background color 
// flash for a few seconds for a win animation
function blink() {
    var body = document.getElementById('body');
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 100);
    setTimeout(funtion() {body.style.backgroundColor = '#43f7ed';}, 200);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 300);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 400);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 500);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 600);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 700);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 800);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 900);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 1000);
    setTimeout(funtion() {body.style.backgroundColor = '#94f7ed';}, 1100);
}

// --------------------------------------------------------------
// these functions are the algorithms to find all win conditoins
//---------------------------------------------------------------
// checking for wincon squares 012
function checkWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon1 = [0,1,2];
    // iterate through the growing array during 
    //gametime searching for the existence of 
    //index 0, index 1 and index 2 and once they
    //they do appear in the array, record their
    //avatars and compare all 3 for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[1].charAt(1); // only interested in recording the avatar
        }
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[1].charAt(1);
        }
    }
    // this will trigger (only) if there was a match for index0, index1, and index2
    if(match0Avatar != undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win"; // this will pass when a win has been detected
            winner(winDetected,winCon1);
            return;
        }
    }
    winner(winDetected,winCon1); // winCon1 is the array of win combo
}


function checkWinCon2(info,squareArray) {
    var winCon1 = [3,4,5];
    var winDetected = "on";
    for (var i in info) {
        if (info[i].charAt(0) == "3") {
            var match3Avatar = info[1].charAt(1); // only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "5") {
            var match5Avatar = info[1].charAt(1);
        }
    }
    if(match3Avatar != undefined && match4Avatar != undefined && match5Avatar != undefined) { // this will trigger (only) if there for index3,index4,and index5
        if (match3Avatar == match4Avatar && match3Avatar == match5Avatar) {
            winDetected = "win";
        }
    }
    winner(winDetected,WinCon2);
}

// checking for wincon squares 678
function checkWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon1 = [6,7,8];
    for (var i in info) {
        if (info[i].charAt(0) == "6") {
            var match6Avatar = info[1].charAt(1); // only interested in recording the avatar
        }
        if (info[i].charAt(0) == "7") {
            var match7Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8") {
            var match8Avatar = info[1].charAt(1);
        }
    }
    if(match6Avatar != undefined && match7Avatar != undefined && match8Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win"; 
        }
    }
    winner(winDetected,winCon1);
}

// checking for wincon squares 036
function checkWinCon4(info,squareArray) {
	var winCon4 = [0,3,6];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "0") {
			var match0Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "3") {
			var match3Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "6") {
			var match6Avatar = info[i].charAt(1);
		}
	}
	if (match0Avatar != undefined && match3Avatar != undefined && match6Avatar != undefined) {
		if (match0Avatar == match3Avatar && match0Avatar == match6Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon4);
}

// checking for wincon squares 147
function checkWinCon5(info,squareArray) {
	var winCon5 = [1,4,7];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "1") {
			var match1Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "7") {
			var match7Avatar = info[i].charAt(1);
		}
	}
	if (match1Avatar != undefined && match4Avatar != undefined && match7Avatar != undefined) {
		if (match1Avatar == match4Avatar && match1Avatar == match7Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon5);
}

// checking for wincon squares 258
function checkWinCon6(info,squareArray) {
	var winCon6 = [2,5,8];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "2") {
			var match2Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "5") {
			var match5Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "8") {
			var match8Avatar = info[i].charAt(1);
		}
	}
	if (match2Avatar != undefined && match5Avatar != undefined && match8Avatar != undefined) {
		if (match2Avatar == match5Avatar && match2Avatar == match8Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon6);
}

// checking for wincon squares 642
function checkWinCon7(info,squareArray) {
	var winCon7 = [6,4,2];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "6") {
			var match6Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "2") {
			var match2Avatar = info[i].charAt(1);
		}
	}
	if (match6Avatar != undefined && match4Avatar != undefined && match2Avatar != undefined) {
		if (match6Avatar == match4Avatar && match6Avatar == match2Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon7);
}

// checking for wincon squares 048
function checkWinCon8(info,squareArray) {
	var winCon8 = [0,4,8];
	var winDetected = "on";
	for (var i in info) {
		if (info[i].charAt(0) == "0") {
			var match0Avatar = info[i].charAt(1); // only interested in recording the avatar
		}
		if (info[i].charAt(0) == "4") {
			var match4Avatar = info[i].charAt(1);
		}
		if (info[i].charAt(0) == "8") {
			var match8Avatar = info[i].charAt(1);
		}
	}
	if (match0Avatar != undefined && match4Avatar != undefined && match8Avatar != undefined) {
		if (match0Avatar == match4Avatar && match0Avatar == match8Avatar) {
			winDetected = "win";
		}
	}
	winner(winDetected,winCon8);
}

//-----------------------------------------------------------------------------------------
// These block of functions are for each click event of their corresponding square element
//-----------------------------------------------------------------------------------------
function square1Animate() {
    var activePllayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "0"; // identify the square
        // check if the proposed square is valid
        var verdict = recordMoves(square);
        if (verdict == undefined) { // if verdict is empty than the square is unoccupied
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementById(paintAvatar)[0]; // paint avatar
            if (paintAvatar == "O") { // change these all to ternary statements instead
                animateO(selected); // call function to animate o
            } else if (paintAvatar == "X") {
                animateX(selected);
            }
            // build new array adding the newly selected squares and th assigned avatar
            var currentMove = ","+square+paintAvatar;
            recordMove(currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition
            avatarPlaced(square,paintAvatar); // end current trun and pass the turn to the other player
            squareSound(); // play a game sound when the avatar is placed
        }
    }
}
function square2Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "1"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[1]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square3Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "2"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[2]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square4Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "3"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[3]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square5Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "4"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[4]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square6Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "5"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[5]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square7Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "6"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[6]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square8Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "7"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[7]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}
function square9Animate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") { // if game has not yet started prevent avatar placement
		var square = "8"; // identify the square selected
		// check if the proposed square is valid
		var verdict = recordMoves(square);
		if (verdict == undefined) { // if verdict is empty than the square is unoccupied.
			var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
			var selected = document.getElementsByClassName(paintAvatar)[8]; // paint avatar
			if (paintAvatar == "O") { // change these all to ternary satetments instead
				animateO(selected); // call function to animate O
			} else if (paintAvatar == "X") {
				animateX(selected); // call function to animate X
			}
			// build new array adding the newly selected square and the assigned avatar
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon(); // call function to check if current move completes a winning condition.
			avatarPlaced(square,paintAvatar); // end current turn and pass the turn to the other player
			squareSound(); // play a game sound when the avatar is placed
		}
	}
}

// this function will perform the animation for the o avatar
function animateO(selected) {
    selected.style.transform = (selected.style.transform == "translteY(0%)" || null) ? "translateY(0%)" : "translateY(0%)";
}

// this function will preform the animation for the x avatar
function animateX(selected) {
    selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translateY(0%)" : "translateY(-100%)";
}