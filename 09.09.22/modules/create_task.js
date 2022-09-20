let id = 0;
function Card(title_, description_, status_) {
    this.id = id++;
    this.properties = {
        title: title_,
        description: description_,
        status: status_,
    }
    this.create = `
    <div class="task" draggable="true">
        <span class="taskname">${this.properties.title}</span> <br> <br>
        <span class="tasktext">${this.properties.description}</span>
        <div class="cross">
            <img src="./images/Group_2.png" alt="">
        </div>
        <input type="text" class="id" value="${this.id}">
        <div class="tick">
            <img src="./images/Vector_5.png" alt="">
        </div>
    </div>`;
    this.update = ``;
}

function TaskCards() {
    this.cards = [];
    this.pushCard = (card) => {
        this.cards.push(card);
    }
    this.view_cards = (сurrent_div, complete_div) => {
        сurrent_div.innerHTML = `
        <div class="create_task">
            <img src="./images/pngegg.png" alt="">
        </div>`;
        complete_div.innerHTML = '';
        for (let card of this.cards) {
            if (card.properties.status == false) {
                сurrent_div.innerHTML += `${card.create}`
            } else {
                complete_div.innerHTML += `${card.create}`
            }
        }
    }
    this.delete_card = (id) => {
        let clone = JSON.parse(JSON.stringify(this.cards));
        this.cards.forEach(function (card, index) {
            if (id == card.id) {
                clone.splice(index, 1);
            }
        })
        this.cards = JSON.parse(JSON.stringify(clone));
    }
    this.complete_card = (id) => {
        this.cards.forEach(function (card) {
            if (id == card.id) {
                card.properties.status = true;
            }
        })
    }
    this.uncomplete_card = (id) => {
        this.cards.forEach(function (card) {
            if (id == card.id) {
                card.properties.status = false;
            }
        })
    }
    // свойство для удаления/добавления/выполнения карточки
}
export { Card, TaskCards }
