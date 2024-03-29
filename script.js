// by default, start with player 1
// player1 is black and player2 is white
let player = "player1";

const arr = document
  .querySelector(".blackBackground")
  .getElementsByClassName("greenSquare"); // this returns an array of 64 <div class="greenSquare"> elements

document
  .querySelector(".blackBackground") // to avoid doing document.quuerySelector for 64 elements, we do document.querySelector for the <div> element with class = blackBackground
  .addEventListener("click", function (event) {
    const clickedIndex = event.target.getAttribute("idx");
    // console.log(arr[clickedIndex]); //--> this returns the element of the clicked green square
    //   arr[parseInt(clickedIndex) + 8].children[0].classList.contains("white") // this checks if the item's first child in the next row contains class = white
    // use of parseInt here is to convert clickedIndex from string to integer

    let toFlipBottom = [];
    let toFlipUp = [];
    let toFlipRight = [];
    let toFlipLeft = [];
    let toFlipTopRight = [];
    let toFlipTopLeft = [];
    let toFlipBottomRight = [];
    let toFlipBottomLeft = [];

    // check bottom
    // this converts the index of the target clicked into an integer and +8 represents starting the check from the row below target
    if (![56, 57, 58, 59, 60, 61, 62, 63].includes(parseInt(clickedIndex))) {
      const initIndexBottom = parseInt(clickedIndex) + 8;
      for (let i = initIndexBottom; i < 73; i += 8) {
        if (i > 63) {
          toFlipBottom = [];
          break;
        }
        // if ([56, 57, 58, 59, 60, 61, 62, 63].includes(i)) {
        //   toFlipBottom = [];
        //   break;
        // }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          console.log("checkWhite", checkWhite);
          if (checkWhite === undefined) {
            toFlipBottom = [];
            break;
          } else if (checkWhite) {
            toFlipBottom.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipBottom = [];
            break;
          } else if (checkBlack) {
            toFlipBottom.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check up
    // this converts the index of the target clicked into an integer and -8 represents starting the check from the row above target
    if (![0, 1, 2, 3, 4, 5, 6, 7].includes(parseInt(clickedIndex))) {
      const initIndexUp = parseInt(clickedIndex) - 8;
      for (let i = initIndexUp; i >= -8; i -= 8) {
        if (i < 0) {
          toFlipUp = [];
          break;
        }
        // if ([0, 1, 2, 3, 4, 5, 6, 7].includes(i)) {
        //   toFlipUp = [];
        //   break;
        // }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipUp = [];
            break;
          } else if (checkWhite) {
            toFlipUp.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipUp = [];
            break;
          } else if (checkBlack) {
            toFlipUp.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check right
    // this converts the index of the target clicked into an integer and +1 represents starting the check from the column on the right of target
    if (![7, 15, 23, 31, 39, 47, 55, 63].includes(parseInt(clickedIndex))) {
      const initIndexRight = parseInt(clickedIndex) + 1;
      for (let i = initIndexRight; i < 65; i++) {
        if ([0, 8, 16, 24, 32, 40, 48, 56].includes(i)) {
          toFlipRight = [];
          break;
        }

        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipRight = [];
            break;
          } else if (checkWhite) {
            toFlipRight.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipRight = [];
            break;
          } else if (checkBlack) {
            toFlipRight.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check left
    // this converts the index of the target clicked into an integer and -1 represents starting the check from the column on the left of target
    if (![0, 8, 16, 24, 32, 40, 48, 56].includes(parseInt(clickedIndex))) {
      const initIndexLeft = parseInt(clickedIndex) - 1;
      for (let i = initIndexLeft; i < 65; i--) {
        if ([7, 15, 23, 31, 39, 47, 55, 63].includes(i)) {
          toFlipLeft = [];
          break;
        }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipLeft = [];
            break;
          } else if (checkWhite) {
            toFlipLeft.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipLeft = [];
            break;
          } else if (checkBlack) {
            toFlipLeft.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check top right
    // this converts the index of the target clicked into an integer and -7 represents starting the check diagonally top right of target
    if (
      ![0, 1, 2, 3, 4, 5, 6, 7, 15, 23, 31, 39, 47, 55, 63].includes(
        parseInt(clickedIndex)
      )
    ) {
      const initIndexTopRight = parseInt(clickedIndex) - 7;
      for (let i = initIndexTopRight; i >= -8; i -= 7) {
        if ([0, 8, 16, 24, 32, 40].includes(i) || i < 0) {
          toFlipTopRight = [];
          break;
        }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipTopRight = [];
            break;
          } else if (checkWhite) {
            toFlipTopRight.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipTopRight = [];
            break;
          } else if (checkBlack) {
            toFlipTopRight.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check top left
    // this converts the index of the target clicked into an integer and -9 represents starting the check diagonally top left of target
    if (
      ![0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56].includes(
        parseInt(clickedIndex)
      )
    ) {
      const initIndexTopLeft = parseInt(clickedIndex) - 9;
      for (let i = initIndexTopLeft; i >= -8; i -= 9) {
        if ([7, 15, 23, 31, 39].includes(i) || i < 0) {
          toFlipTopLeft = [];
          break;
        }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipTopLeft = [];
            break;
          } else if (checkWhite) {
            toFlipTopLeft.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipTopLeft = [];
            break;
          } else if (checkBlack) {
            toFlipTopLeft.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check bottom right
    // this converts the index of the target clicked into an integer and +9 represents starting the check diagonally bottom right of target
    if (
      ![56, 57, 58, 59, 60, 61, 62, 63, 7, 15, 23, 31, 39, 47, 55].includes(
        parseInt(clickedIndex)
      )
    ) {
      const initIndexBottomRight = parseInt(clickedIndex) + 9;
      for (let i = initIndexBottomRight; i < 73; i += 9) {
        if ([32, 40, 48, 56].includes(i) || i > 63) {
          toFlipBottomRight = [];
          break;
        }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipBottomRight = [];
            break;
          } else if (checkWhite) {
            toFlipBottomRight.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipBottomRight = [];
            break;
          } else if (checkBlack) {
            toFlipBottomRight.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    // check bottom left
    // this converts the index of the target clicked into an integer and +7 represents starting the check from diagonally bottom left of target
    if (
      ![56, 57, 58, 59, 60, 61, 62, 63, 0, 8, 16, 24, 32, 40, 48].includes(
        parseInt(clickedIndex)
      )
    ) {
      const initIndexBottomLeft = parseInt(clickedIndex) + 7;
      for (let i = initIndexBottomLeft; i < 73; i += 7) {
        if ([31, 39, 47, 55, 63].includes(i) || i > 63) {
          toFlipBottomLeft = [];
          break;
        }
        if (player === "player1") {
          let checkWhite = arr[i]?.children[0]?.classList.contains("white");
          // console.log(checkWhite);
          if (checkWhite === undefined) {
            toFlipBottomLeft = [];
            break;
          } else if (checkWhite) {
            toFlipBottomLeft.push(arr[i]);
          } else {
            break;
          }
        } else {
          let checkBlack = arr[i]?.children[0]?.classList.contains("black");
          // console.log(checkBlack);
          if (checkBlack === undefined) {
            toFlipBottomLeft = [];
            break;
          } else if (checkBlack) {
            toFlipBottomLeft.push(arr[i]);
          } else {
            break;
          }
        }
      }
    }

    function flipAllArrays(arrayToFlip) {
      for (i = 0; i < arrayToFlip.length; i++) {
        if (player === "player1") {
          arrayToFlip[i].innerHTML = '<div class="black"></div>';
        } else {
          arrayToFlip[i].innerHTML = '<div class="white"></div>';
        }
      }
    }
    // }

    // troubleshooting the flips
    console.log(toFlipBottom);
    console.log(toFlipUp);
    console.log(toFlipRight);
    console.log(toFlipLeft);
    console.log(toFlipTopRight);
    console.log(toFlipTopLeft);
    console.log(toFlipBottomRight);
    console.log(toFlipBottomLeft);

    flipAllArrays(toFlipBottom);
    flipAllArrays(toFlipUp);
    flipAllArrays(toFlipRight);
    flipAllArrays(toFlipLeft);
    flipAllArrays(toFlipTopRight);
    flipAllArrays(toFlipTopLeft);
    flipAllArrays(toFlipBottomRight);
    flipAllArrays(toFlipBottomLeft);

    const checkArray = [
      toFlipBottom,
      toFlipUp,
      toFlipRight,
      toFlipLeft,
      toFlipTopRight,
      toFlipTopLeft,
      toFlipBottomRight,
      toFlipBottomLeft,
    ];

    let isValidMove = false;
    for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i].length > 0) {
        isValidMove = true;
      }
    }
    console.log(isValidMove);
    console.log(checkArray);

    if (event.target.classList.contains("greenSquare") && isValidMove) {
      // this step here checks for whether or not the target clicked is a valid location
      // i.e users can only click on the green squaress to place their discs

      if (player === "player1") {
        // after confirming that the event.target is valid, do an IF ELSE
        // if player === "player1", place a black disc by adding an innerHTML of <div> with class=black
        // else, add innerHTML of <div> with class=white to the event.target

        event.target.innerHTML = '<div class="black"></div>'; // this puts a black piece down on the board

        document.querySelector(".player1Count").innerHTML = document // update score after player 1 makes a move
          .querySelector(".blackBackground")
          .getElementsByClassName("black").length;
        document.querySelector(".player2Count").innerHTML = document
          .querySelector(".blackBackground")
          .getElementsByClassName("white").length;

        document.querySelector(".prompt").innerHTML =
          "Player 2's (white) turn!";
        player = "player2";
      } else {
        event.target.innerHTML = '<div class="white"></div>'; // this puts a white piece down on the board

        document.querySelector(".player2Count").innerHTML = document // update score after player 2 makes a move
          .querySelector(".blackBackground")
          .getElementsByClassName("white").length;
        document.querySelector(".player1Count").innerHTML = document
          .querySelector(".blackBackground")
          .getElementsByClassName("black").length;

        document.querySelector(".prompt").innerHTML =
          "Player 1's (black) turn!";
        player = "player1";
      }

      function totalScoreTracker(a, b) {
        let totalScore = 0;
        totalScore = a + b;
        if (totalScore === 64) {
          if (a > b) {
            return (document.querySelector(".prompt").innerHTML =
              "Player 1 Wins!");
          } else {
            return (document.querySelector(".prompt").innerHTML =
              "Player 2 Wins!");
          }
        }
      }
      // Prompt for when the game ends
      totalScoreTracker(
        document
          .querySelector(".blackBackground")
          .getElementsByClassName("black").length,
        document
          .querySelector(".blackBackground")
          .getElementsByClassName("white").length
      );
    }
  });

document.querySelector(".button").addEventListener("click", function () {
  alert("Game Over - Refresh page to restart game");
});
