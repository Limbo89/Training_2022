let id = 0;
function Card (title_, description_, status_) {
    this.id = id++;
    this.properties = {
        title:title_,
        description:description_,
        status:status_,
    }
    this.create = `
    <div class="task">
        <span class="taskname">${this.properties.title}</span> <br> <br>
        <span class="tasktext">${this.properties.description}</span>
        <div class="cross">
            <img src="./images/Group_2.png" alt="">
        </div>
        <div class="tick">
            <img src="./images/Vector_5.png" alt="">
        </div>
    </div>`;
    this.delete = this.id;
    this.update = ``;
}

function TaskCards () {
    this.cards = [];
    this.pushCard = (card) => {
        this.cards.push(card);
    }
    this.view_cards = (сurrent_div, complete_div) => {
        сurrent_div.innerHTML = `<div class="create_task"><img src="./images/pngegg.png" alt=""></div>`;
        complete_div.innerHTML = '';
        for (let card of this.cards){
            if(card.properties.status == false){
                сurrent_div.innerHTML += `${card.create}`
            } else {
                complete_div.innerHTML += `${card.create}`
            }
        }
    }
    this.delete_card = () => {

    }
    // свойство со всеми карточками
    // свойство с выполненными карточками
    // свойство для удаления/добавления/выполнения карточки
}
export { Card, TaskCards }
