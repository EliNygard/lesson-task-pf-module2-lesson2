var winningNumbers = [1, 76, 2, 78, 16, 7];
var thirdNumber = winningNumbers[2];
console.log(thirdNumber);

//or console.log(winningNumbers[2]);




var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("tomatoes");

var itemCount = vegetables.length;
console.log(itemCount);




var randomThings = ["pumpkin", false, 23, true, "tomato"];
// for (var i = 0; i < randomThings.length; i++) {
//     console.log(randomThings[i]);
// }

// or

var itemCount = randomThings.length;

for (var i = 0; i < itemCount; i++){
    var item = randomThings[i];
    console.log(item);
}



var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}



var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}




var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++){
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}