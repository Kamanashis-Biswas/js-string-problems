const lyrics = "Tumi Bondhu Kala Pakhi Ami Jano Ki. Bosonto Kale tomai Bolte Pari Ni. Kala Kala Sada sada";

//const doesExist=lyrics.includes('Pakhi');
//const doesExist=lyrics.includes('pakhi');

const searchString = "PaKhi";

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
//console.log(doesExistOneLine);
//console.log(doesExist);

// console.log(lyrics.indexOf("Kalla"));
// console.log(lyrics.indexOf("Tumi"));

var Word="Kala";

if (lyrics.indexOf(Word) !== -1){
    console.log('Exist')
}else{
    console.log('Not Exist')
}

console.log(lyrics.startsWith("Tumi"));

const fileName='nayon.pdf';
const otherName='mypic.png';

console.log(fileName.endsWith(".png"));