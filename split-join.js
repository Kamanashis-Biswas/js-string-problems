const lyrics = "Tumi Bondhu Kala Pakhi Ami Jano Ki. Bosonto Kale tomai Bolte Pari Ni. Kala Kala Sada sada";
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 8)
const partial2 = lyrics.substring(5, 8)
console.log(parts);
console.log(sentences);
console.log(chars);
console.log(partial);
console.log(partial2);

const line = [
    'Tumi Bondhu Kala Pakhi Ami Jano Ki',
    'Bosonto Kale tomai Bolte Pari Ni',
    'Kala Kala Sada sada'
];

const newSong = line.join('. ');
console.log(newSong);