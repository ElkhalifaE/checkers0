//red always goes first, so starting condition for each game will be redTurn = true;

playRedTurn();

function playRedTurn()
{
    var turnInfo = document.getElementsByClassName("gameInstructions")[0];
    turnInfo.classList.remove("b");
    turnInfo.classList.add("r");
    turnInfo.textContent = "It's red's turn";

    document.querySelectorAll(".bPiece").forEach(function(piece)
    {
        piece.removeEventListener("click", pieceListenerMethodBlack);
    });
    document.querySelectorAll(".noPiece").forEach(function(tile)
    {
        tile.removeEventListener("click", tileListenerMethodBlack);
    });

    document.querySelectorAll(".rPiece").forEach(function(piece)
    {
        piece.addEventListener("click", pieceListenerMethodRed)
    });
}
function playBlackTurn()
{
    var turnInfo = document.getElementsByClassName("gameInstructions")[0];
    turnInfo.classList.remove("r");
    turnInfo.classList.add("b");
    turnInfo.textContent = "It's black's turn";

    document.querySelectorAll(".rPiece").forEach(function(piece)
    {
        piece.removeEventListener("click", pieceListenerMethodRed);
    });
    document.querySelectorAll(".noPiece").forEach(function(tile)
    {
        tile.removeEventListener("click", tileListenerMethodRed);
    });

    document.querySelectorAll(".bPiece").forEach(function(piece)
    {
        piece.addEventListener("click", pieceListenerMethodBlack)
    });
}






function tileListenerMethodBlack()
{
    theTileToMoveTo = this; 


    var colOfTile = parseInt(theTileToMoveTo.id.substring(0,1));
    var rowofTile = parseInt(theTileToMoveTo.id.substring(1));
    var colOfPiece = parseInt(thePieceToMove.parentElement.id.substring(0,1));
    var rowOfPiece = parseInt(thePieceToMove.parentElement.id.substring(1));

    var style = getComputedStyle(thePieceToMove.firstElementChild);
    if(style.visibility === "hidden")
    {
        switch((rowofTile - rowOfPiece))
        {
            case -1:
                {
                    if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        thePieceToMove.parentElement.classList.remove("hasPiece");
                        thePieceToMove.parentElement.classList.add("noPiece");
                        thePieceToMove.parentElement.removeChild(thePieceToMove);

                        theTileToMoveTo.classList.remove("noPiece");
                        theTileToMoveTo.classList.add("hasPiece");
                        theTileToMoveTo.appendChild(thePieceToMove);

                        if(theTileToMoveTo.classList.contains("topRow"))
                            thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                        playRedTurn();
                    }
                    break;
                }
                
            case -2:
                {
                    if((colOfTile === (colOfPiece - 2)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        var rowOfPotentialRed = rowOfPiece - 1;
                        var colOfPotentialRed = colOfPiece - 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            }   
                            else 
                                playRedTurn();
                        }
                        break;
                    }
                    //else if((colOfTile === (colOfPiece + 2))) //&& check if the tile in between has a black piece)
                    else if((colOfTile === (colOfPiece + 2)))
                    {
                        var rowOfPotentialRed = rowOfPiece - 1;
                        var colOfPotentialRed = colOfPiece + 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            } 
                            else
                                playRedTurn();
                        }
                        break;
                    }
                    break;
                } 
        }
    }
    else
    {
        switch((rowofTile - rowOfPiece))
        {
            case 1:
                {
                    if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        thePieceToMove.parentElement.classList.remove("hasPiece");
                        thePieceToMove.parentElement.classList.add("noPiece");
                        thePieceToMove.parentElement.removeChild(thePieceToMove);

                        theTileToMoveTo.classList.remove("noPiece");
                        theTileToMoveTo.classList.add("hasPiece");
                        theTileToMoveTo.appendChild(thePieceToMove);

                        if(theTileToMoveTo.classList.contains("topRow"))
                            thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                        if(document.getElementsByClassName("rPiece").length < 1)
                        {
                            var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                            turnInfo.textContent = "Black has won!!";

                            document.querySelectorAll(".bPiece").forEach(function(piece)
                            {
                                piece.removeEventListener("click", pieceListenerMethodBlack);
                            });
                            document.querySelectorAll(".noPiece").forEach(function(tile)
                            {
                                tile.removeEventListener("click", tileListenerMethodBlack);
                            }); 
                        }
                        else
                            playRedTurn();
                    }
                    break;
                }
            case -1:
            {
                if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                {
                    thePieceToMove.parentElement.classList.remove("hasPiece");
                    thePieceToMove.parentElement.classList.add("noPiece");
                    thePieceToMove.parentElement.removeChild(thePieceToMove);

                    theTileToMoveTo.classList.remove("noPiece");
                    theTileToMoveTo.classList.add("hasPiece");
                    theTileToMoveTo.appendChild(thePieceToMove);

                    if(theTileToMoveTo.classList.contains("topRow"))
                        thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                    if(document.getElementsByClassName("rPiece").length < 1)
                    {
                        var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                        turnInfo.textContent = "Black has won!!";

                        document.querySelectorAll(".bPiece").forEach(function(piece)
                        {
                            piece.removeEventListener("click", pieceListenerMethodBlack);
                        });
                        document.querySelectorAll(".noPiece").forEach(function(tile)
                        {
                            tile.removeEventListener("click", tileListenerMethodBlack);
                        }); 
                    }
                    else
                        playRedTurn();
                }
                break;
            }
            case 2:
                {
                    if((colOfTile === (colOfPiece - 2)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        var rowOfPotentialRed = rowOfPiece + 1;
                        var colOfPotentialRed = colOfPiece - 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            }  
                            else
                                playRedTurn();
                        }
                        break;
                    }
                    //else if((colOfTile === (colOfPiece + 2))) //&& check if the tile in between has a black piece)
                    else if((colOfTile === (colOfPiece + 2)))
                    {
                        var rowOfPotentialRed = rowOfPiece + 1;
                        var colOfPotentialRed = colOfPiece + 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            }  
                            else
                                playRedTurn();
                        }
                        break;
                    }
                    
                }
            case -2:
                {
                    if((colOfTile === (colOfPiece - 2)))
                    {
                        var rowOfPotentialRed = rowOfPiece - 1;
                        var colOfPotentialRed = colOfPiece - 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            }
                            else
                                playRedTurn();
                        }
                        break;
                    }
                    else if((colOfTile === (colOfPiece + 2)))
                    {
                        var rowOfPotentialRed = rowOfPiece - 1;
                        var colOfPotentialRed = colOfPiece + 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("rPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                            if(document.getElementsByClassName("rPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Black has won!!";
    
                                document.querySelectorAll(".bPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodBlack);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodBlack);
                                }); 
                            }   
                            else
                                playRedTurn();
                        }
                        break;
                    }
                    break;   
                }
        }
    }
}
function tileListenerMethodRed()
{
    theTileToMoveTo = this; 


    var colOfTile = parseInt(theTileToMoveTo.id.substring(0,1));
    var rowofTile = parseInt(theTileToMoveTo.id.substring(1));
    var colOfPiece = parseInt(thePieceToMove.parentElement.id.substring(0,1));
    var rowOfPiece = parseInt(thePieceToMove.parentElement.id.substring(1));

    var style = getComputedStyle(thePieceToMove.firstElementChild);
    if(style.visibility === "hidden")
    {
        switch((rowofTile - rowOfPiece))
        {
            case 1:
                {
                    if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        thePieceToMove.parentElement.classList.remove("hasPiece");
                        thePieceToMove.parentElement.classList.add("noPiece");
                        thePieceToMove.parentElement.removeChild(thePieceToMove);

                        theTileToMoveTo.classList.remove("noPiece");
                        theTileToMoveTo.classList.add("hasPiece");
                        theTileToMoveTo.appendChild(thePieceToMove);

                        if(theTileToMoveTo.classList.contains("botRow"))
                            thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                        
                        if(document.getElementsByClassName("bPiece").length < 1)
                        {
                            var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                            turnInfo.textContent = "Red has won!!";

                            document.querySelectorAll(".rPiece").forEach(function(piece)
                            {
                                piece.removeEventListener("click", pieceListenerMethodRed);
                            });
                            document.querySelectorAll(".noPiece").forEach(function(tile)
                            {
                                tile.removeEventListener("click", tileListenerMethodRed);
                            });
                        }   
                        else
                            playBlackTurn();
                    }
                    break;
                }
                case 2:
                {
                    if((colOfTile === (colOfPiece - 2)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        var rowOfPotentialRed = rowOfPiece + 1;
                        var colOfPotentialRed = colOfPiece - 1;
                        var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");    

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
        
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("topRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                                
                            if(document.getElementsByClassName("bPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Red has won!!";

                                document.querySelectorAll(".rPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodRed);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodRed);
                                });
                            }   
                            else
                                playBlackTurn();
                            }
                            break;
                        }
                        //else if((colOfTile === (colOfPiece + 2))) //&& check if the tile in between has a black piece)
                        else if((colOfTile === (colOfPiece + 2)))
                        {
                            var rowOfPotentialRed = rowOfPiece + 1;
                            var colOfPotentialRed = colOfPiece + 1;
                            var IdOfTile = colOfPotentialRed.toString() + rowOfPotentialRed.toString();
                            if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                            {
                                document.getElementById(IdOfTile).firstElementChild.remove();
                                document.getElementById(IdOfTile).classList.remove("hasPiece");
                                document.getElementById(IdOfTile).classList.add("noPiece");
    
                                thePieceToMove.parentElement.classList.remove("hasPiece");
                                thePieceToMove.parentElement.classList.add("noPiece");
                                thePieceToMove.parentElement.removeChild(thePieceToMove);
        
                                theTileToMoveTo.classList.remove("noPiece");
                                theTileToMoveTo.classList.add("hasPiece");
                                theTileToMoveTo.appendChild(thePieceToMove);
    
                                if(theTileToMoveTo.classList.contains("botRow"))
                                    thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                                
                                if(document.getElementsByClassName("bPiece").length < 1)
                                {
                                    var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                    turnInfo.textContent = "Red has won!!";
            
                                    document.querySelectorAll(".rPiece").forEach(function(piece)
                                    {
                                        piece.removeEventListener("click", pieceListenerMethodRed);
                                    });
                                    document.querySelectorAll(".noPiece").forEach(function(tile)
                                    {
                                        tile.removeEventListener("click", tileListenerMethodRed);
                                    }); 
                                }   
                                else
                                    playBlackTurn();
                            }
                            break;
                        }
                }
        }   
    }    
    else
    {
        switch((rowofTile - rowOfPiece))
        {
            case 1:
                {
                    if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        thePieceToMove.parentElement.classList.remove("hasPiece");
                        thePieceToMove.parentElement.classList.add("noPiece");
                        thePieceToMove.parentElement.removeChild(thePieceToMove);

                        theTileToMoveTo.classList.remove("noPiece");
                        theTileToMoveTo.classList.add("hasPiece");
                        theTileToMoveTo.appendChild(thePieceToMove);

                        if(theTileToMoveTo.classList.contains("botRow"))
                            thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                        if(document.getElementsByClassName("bPiece").length < 1)
                        {
                            var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                            turnInfo.textContent = "Red has won!!";

                            document.querySelectorAll(".rPiece").forEach(function(piece)
                            {
                                piece.removeEventListener("click", pieceListenerMethodRed);
                            });
                            document.querySelectorAll(".noPiece").forEach(function(tile)
                            {
                                tile.removeEventListener("click", tileListenerMethodRed);
                            });
                        }  
                        else
                            playBlackTurn();
                    }
                    break;
                }
            case -1:
            {
                if((colOfTile === (colOfPiece - 1) || colOfTile === (colOfPiece + 1)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        thePieceToMove.parentElement.classList.remove("hasPiece");
                        thePieceToMove.parentElement.classList.add("noPiece");
                        thePieceToMove.parentElement.removeChild(thePieceToMove);

                        theTileToMoveTo.classList.remove("noPiece");
                        theTileToMoveTo.classList.add("hasPiece");
                        theTileToMoveTo.appendChild(thePieceToMove);

                        if(theTileToMoveTo.classList.contains("botRow"))
                            thePieceToMove.firstElementChild.classList.remove("invisibleCrown");

                        if(document.getElementsByClassName("bPiece").length < 1)
                        {
                            var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                            turnInfo.textContent = "Red has won!!";

                            document.querySelectorAll(".rPiece").forEach(function(piece)
                            {
                                piece.removeEventListener("click", pieceListenerMethodRed);
                            });
                            document.querySelectorAll(".noPiece").forEach(function(tile)
                            {
                                tile.removeEventListener("click", tileListenerMethodRed);
                            });
                        } 
                        else
                            playBlackTurn();
                    }
                    break;
            }
            case 2:
                {
                    //must do check if 
                    //if((colOfTile === (colOfPiece - 2))) //&& check if the tile in between has a black piece)
                    if((colOfTile === (colOfPiece - 2)) && theTileToMoveTo.classList.contains("noPiece"))
                    {
                        var rowOfPotentialBlack = rowOfPiece + 1;
                        var colOfPotentialBlack = colOfPiece - 1;
                        var IdOfTile = colOfPotentialBlack.toString() + rowOfPotentialBlack.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("botRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("bPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Red has won!!";

                                document.querySelectorAll(".rPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodRed);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodRed);
                                });
                            }  
                            else
                                playBlackTurn();
                        }
                        break;
                    }
                    //else if((colOfTile === (colOfPiece + 2))) //&& check if the tile in between has a black piece)
                    else if((colOfTile === (colOfPiece + 2)))
                    {
                        var rowOfPotentialBlack = rowOfPiece + 1;
                        var colOfPotentialBlack = colOfPiece + 1;
                        var IdOfTile = colOfPotentialBlack.toString() + rowOfPotentialBlack.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("botRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("bPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Red has won!!";

                                document.querySelectorAll(".rPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodRed);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodRed);
                                });
                            }  
                            else
                                playBlackTurn();
                        }
                        break;
                    }
                    
                } 
                case -2:
                {
                    if((colOfTile === (colOfPiece - 2)))
                    {
                        var rowOfPotentialBlack = rowOfPiece - 1;
                        var colOfPotentialBlack = colOfPiece - 1;
                        var IdOfTile = colOfPotentialBlack.toString() + rowOfPotentialBlack.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("botRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("bPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Red has won!!";

                                document.querySelectorAll(".rPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodRed);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodRed);
                                });
                            } 
                            else
                                playBlackTurn();
                        }
                        break;
                    }
                    else if((colOfTile === (colOfPiece + 2)))
                    {
                        var rowOfPotentialBlack = rowOfPiece - 1;
                        var colOfPotentialBlack = colOfPiece + 1;
                        var IdOfTile = colOfPotentialBlack.toString() + rowOfPotentialBlack.toString();
                        if(document.getElementById(IdOfTile).firstElementChild.classList.contains("bPiece"))
                        {
                            document.getElementById(IdOfTile).firstElementChild.remove();
                            document.getElementById(IdOfTile).classList.remove("hasPiece");
                            document.getElementById(IdOfTile).classList.add("noPiece");

                            thePieceToMove.parentElement.classList.remove("hasPiece");
                            thePieceToMove.parentElement.classList.add("noPiece");
                            thePieceToMove.parentElement.removeChild(thePieceToMove);
    
                            theTileToMoveTo.classList.remove("noPiece");
                            theTileToMoveTo.classList.add("hasPiece");
                            theTileToMoveTo.appendChild(thePieceToMove);

                            if(theTileToMoveTo.classList.contains("botRow"))
                                thePieceToMove.firstElementChild.classList.remove("invisibleCrown");
                            
                            if(document.getElementsByClassName("bPiece").length < 1)
                            {
                                var turnInfo = document.getElementsByClassName("gameInstructions")[0];
                                turnInfo.textContent = "Red has won!!";

                                document.querySelectorAll(".rPiece").forEach(function(piece)
                                {
                                    piece.removeEventListener("click", pieceListenerMethodRed);
                                });
                                document.querySelectorAll(".noPiece").forEach(function(tile)
                                {
                                    tile.removeEventListener("click", tileListenerMethodRed);
                                });
                            } 
                            else
                                playBlackTurn();
                        }
                        break;
                    }
                    break;
                }
            }

        }
    }    
function pieceListenerMethodRed()
{
    thePieceToMove = this;
    document.querySelectorAll(".noPiece").forEach(function(tile)
    {
        tile.addEventListener("click", tileListenerMethodRed)
    });
}
function pieceListenerMethodBlack()
{
    thePieceToMove = this;
    document.querySelectorAll(".noPiece").forEach(function(tile)
    {
        tile.addEventListener("click", tileListenerMethodBlack);
    });
}
