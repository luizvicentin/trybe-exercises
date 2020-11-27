let chessPiece = "Knight";
let chessPieceTLC = chessPiece.toLowerCase();

switch (chessPiece) {
  case "Pawn":
    console.log('The Pawn can move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file, provided both squares are unoccupied (white dots in the diagram); or the pawn can capture an opponents piece on a square diagonally in front of it on an adjacent file, by moving to that square (black "x"s). A pawn has two special moves: the en passant capture and promotion.');
    break;

  case "Knight":
    console.log('The Knight can move to any of the closest squares that are not on the same rank, file, or diagonal. (Thus the move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically.) The knight is the only piece that can leap over other pieces.');
    break;

  case 'Bishop':
    console.log(' The Bishop can move any number of squares diagonally, but cannot leap over other pieces.');
    break;

  case 'Rock':
    console.log('The Rock can move any number of squares along a rank or file, but cannot leap over other pieces. Along with the king, a rook is involved during the kings castling move.');
    break;

  case 'Queen':
    console.log('The Queen combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.');
    break;

  case 'King':
    console.log('The King move one square in any direction. The king also has a special move called castling that involves also moving a rook.');
    break;

  default:
    console.log('Value indefine!!')
    break;
};
