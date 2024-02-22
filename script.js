// by default, start with player 1
let player = "player1";

const arr = document
  .querySelector(".blackBackground")
  .getElementsByClassName("greenSquare");

/* test codes
  // const greenSquareArr = Array.from(arr);
// greenSquareArr.splice(
//   0,
//   64,
//   "element-1-1",
//   "element-1-2",
//   "element-1-3",
//   "element-1-4",
//   "element-1-5",
//   "element-1-6",
//   "element-1-7",
//   "element-1-8",
//   "element-2-1",
//   "element-2-2",
//   "element-2-3",
//   "element-2-4",
//   "element-2-5",
//   "element-2-6",
//   "element-2-7",
//   "element-2-8",
//   "element-3-1",
//   "element-3-2",
//   "element-3-3",
//   "element-3-4",
//   "element-3-5",
//   "element-3-6",
//   "element-3-7",
//   "element-3-8",
//   "element-4-1",
//   "element-4-2",
//   "element-4-3",
//   "element-4-4",
//   "element-4-5",
//   "element-4-6",
//   "element-4-7",
//   "element-4-8",
//   "element-5-1",
//   "element-5-2",
//   "element-5-3",
//   "element-5-4",
//   "element-5-5",
//   "element-5-6",
//   "element-5-7",
//   "element-5-8",
//   "element-6-1",
//   "element-6-2",
//   "element-6-3",
//   "element-6-4",
//   "element-6-5",
//   "element-6-6",
//   "element-6-7",
//   "element-6-8",
//   "element-7-1",
//   "element-7-2",
//   "element-7-3",
//   "element-7-4",
//   "element-7-5",
//   "element-7-6",
//   "element-7-7",
//   "element-7-8",
//   "element-8-1",
//   "element-8-2",
//   "element-8-3",
//   "element-8-4",
//   "element-8-5",
//   "element-8-6",
//   "element-8-7",
//   "element-8-8"
// );
// console.log(arr);
// arr[0].innerHTML = '<div class="white"></div>';
// arr[0].innerHTML = '<div class="black"></div>';
*/

document
  .querySelector(".blackBackground") // to avoid doing document.quuerySelector for 64 elements, we do document.querySelector for the <div> element with class = blackBackground
  .addEventListener("click", function (event) {
    /* test codes
    // console.log(event.target.classList[1]); // check for what is the class name of the element clicked
    // console.log(greenSquareArr.indexOf(event.target.classList[1])); // identify the index of the array containing the exact class name of the element clicked
    // let move = greenSquareArr.indexOf(event.target.classList[1]);
    // let check = greenSquareArr[move + 8];
    // console.log(check);
    // console.log(document.querySelector(`.${check}`).firstElementChild);
    */
    console.log(event.target.getAttribute("idx"));

    if (event.target.classList.contains("greenSquare")) {
      // this step here checks for whether or not the target clicked is a valid location
      // i.e users can only click on the green squaress to place their discs
      if (player === "player1") {
        // after confirming that the event.target is valid, do an IF ELSE
        // if player === "player1", place a black disc by adding an innerHTML of <div> with class=black
        // else, add innerHTML of <div> with class=white to the event.target
        event.target.innerHTML = '<div class="black"></div>';
        document.querySelector(".prompt").innerHTML = "Player 2's turn!";
        player = "player2";
      } else {
        event.target.innerHTML = '<div class="white"></div>';
        document.querySelector(".prompt").innerHTML = "Player 1's turn!";
        player = "player1";
      }
    }
  });
