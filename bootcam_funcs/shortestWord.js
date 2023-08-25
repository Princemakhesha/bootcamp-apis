export default function shortestWord(word) {
    var sentence = word.split(' ');
    let sum = sentence[0].length
    let shortest = '';
    for (let i = 0; i < sentence.length; i++) {
        // console.log(shortest)
        let characters = sentence[i];
        // console.log(characters)
        // console.log(sum)
        if (characters.length <= sum) {
            sum = characters.length;
            shortest = characters;
        }
    }
    return shortest;
}