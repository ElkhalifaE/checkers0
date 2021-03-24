//Initializes starting position of black pieces
var startingTilesBlack = document.getElementsByClassName("lowRow gTile")


for(var i = 0; i < startingTilesBlack.length; i++)
{
    startingTilesBlack[i].classList.add("hasPiece");
    
    var newBPiece = document.createElement("div");
    var imageBlack = document.createElement("img");

    newBPiece.classList.add("bPiece");
    newBPiece.appendChild(imageBlack);

    imageBlack.classList.add("bCrown");
    imageBlack.classList.add("invisibleCrown");
    imageBlack.src = "images/blackCrown.png"


    startingTilesBlack[i].appendChild(newBPiece);
}

//Initializes starting position of red pieces
var startingTilesRed = document.getElementsByClassName("highRow gTile");

for(var i = 0; i < startingTilesRed.length; i++)
{
    startingTilesRed[i].classList.add("hasPiece");

    var newRPiece = document.createElement("div");
    var imageRed = document.createElement("img");

    newRPiece.classList.add("rPiece");
    newRPiece.appendChild(imageRed);

    imageRed.classList.add("rCrown");
    imageRed.classList.add("invisibleCrown");
    imageRed.src = "images/redCrown.jpg"


    startingTilesRed[i].appendChild(newRPiece);
}


//Below, gives all the tiles without the "hasPiece" class, the "noPiece" class
var allTiles = document.getElementsByClassName("gTile");
for(var i = 0; i < allTiles.length; i++)
{
    if(!allTiles[i].classList.contains("hasPiece"))
        allTiles[i].classList.add("noPiece");
}