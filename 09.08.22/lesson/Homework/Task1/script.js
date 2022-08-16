cards = [{
    content: {
        title: "Test 1",
        description: "test",
    },
    description: { text: "testtest" }
},
{
    content: {
        title: "Test 2",
        description: "test",
    },
    description: { text: "test2test" }
}];

newCard = {
    content: {
        title: "123",
        description: "123",
    },
    description: { text: "123" }
};
// Решение без рекурсии
function assignNewCard(card) {
    let newCard = JSON.parse(JSON.stringify(newCard));
    cards.push(newCard);
}
assignNewCard(clone);
newCard.content.title = 'test3';
console.log(cards);