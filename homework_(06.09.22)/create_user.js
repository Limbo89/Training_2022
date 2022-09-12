function user(name_,age_,img_,){
    this.name = name_;
    this.age = age_;
    if (img_ === undefined ) {
        this.img = "./images/default.png";
    } else  {
        this.img = "./images/" + img_;
    }
    this.card = {
        colorName:"",
        colorAge:"",
        headerImage:"",
    };
    this.get_headerImage = function () {
        return this.card.headerImage;
    }
    this.get_colorAge = function () {
        return this.card.colorAge;
    }
    this.get_colorName = function () {
        return this.card.colorName;
    }
    this.set_colorName = function (data) {
        this.card.colorName = data;
    }
    this.set_colorAge = function (data) {
        this.card.colorAge = data;
    }
    this.set_headerImage = function (data) {
        this.card.headerImage = data;
    }
    this.change_name = function (data) {
        this.name = data;
    }
    this.change_age = function (data) {
        this.age = data;
    }
    this.change_image = function (data) {
        this.img = data;
    }
    this.view = function (div) {
        div.innerHTML = '';
        div.innerHTML = `
        Имя: ${this.name} <br>
        Возвраст: ${this.age} <br>
        Аватарка: <img src="${this.img}" alt="ухупс"> <br>
        `
    }
}
export { user };