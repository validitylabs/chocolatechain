var Web3 = require('web3');
var web3 = new Web3();

var genesisText = "Validity Labs Chocolate Chain";
var genesisHash = web3.sha3(genesisText);

var numChocolateBoxes = 4;
var prevBoxHash = genesisHash;
var numPiecesOfChocolatePerBox = 4;
var chokolateBoxBaseText = "Validity Chocolate Box ";
var chokolatePieceBaseText = "Validity Chocolate ";

for (var b = 0; b < numChocolateBoxes; b++) {
  var totalBoxTextContent = prevBoxHash + chokolateBoxBaseText + (b + 1);
  console.log('Content of box ' + (b + 1) + ':');
  for (var p = 0; p < numPiecesOfChocolatePerBox; p++) {
    totalBoxTextContent += chokolatePieceBaseText + (p + 1);
    console.log('  ' + chokolatePieceBaseText + (p + 1));
  }
  console.log('Text on top of box ' + (b + 1) + ':');
  console.log(chokolateBoxBaseText + (b + 1) );
  console.log('Previous Box Hash: ' + prevBoxHash);
  prevBoxHash = web3.sha3(totalBoxTextContent);
  console.log('Box Hash: ' + prevBoxHash);
}
