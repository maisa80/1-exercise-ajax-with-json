/** 
 * Skapa ett textfält och en knapp "Roll dices".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antal tärningar(slumpad siffra mellan 1-6), som skall hämtas från https://codexplained.se/dice_json_array.php?numberOfDice= värdet från textfältet
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/dice_json_array.php?numberOfDice=1
 * https://codexplained.se/dice_json_array.php?numberOfDice=4
 *
 * Datan skall i sin tur visas i en lista, där varje tärning placeras i en listItem <li>
 */

const fetchBtn = document.getElementById('fetchBtn');
const input = document.getElementById('input');
const list = document.getElementById('list');

fetchBtn.addEventListener('click', fetchData)

async function fetchData() {
    try {
        const response = await fetch('https://codexplained.se/dice_json_array.php?numberOfDice=' + input.value)

        if (!response.ok) {
            throw new Error('Something went wrong with the server');
        }

        const dices = await response.json();
        console.log(dices);

        let listItemsHTML = ''
        for(let dice of dices) {
            listItemsHTML += `<li>${dice}</li>`;
        }
        console.log(listItemsHTML);
        list.innerHTML = listItemsHTML;
    } catch(error) {
        console.log(error);
    }
}