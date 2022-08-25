let storage_of_cards = document.querySelector(".storage_of_cards");
let additional_filters = document.querySelector("#additional_filters");
let number_of_elements = document.querySelector("#number_of_elements");
let games = [
    {
        "name": "Cyberpunk 2077",
        "description": "кибер помойка",
        "img": "images/cyberpunk.jpg",
        "cost": 650,
        "date_of_create": "2020",
        "favorite": 2,
        "developer": "CD Project RED",
    },
    {
        "name": "Slime Rancher",
        "description": "слаймы)",
        "img": "images/Slime_Rancher.jpg",
        "cost": 1000,
        "date_of_create": "2017",
        "favorite": 132,
        "developer": "Monomi Park",
    },
    {
        "name": "Starcraft",
        "description": "величайшая игра",
        "img": "images/starcraft.jpeg",
        "cost": 2000,
        "date_of_create": "1998",
        "favorite": 999,
        "developer": "Blizzard",
    },
    {
        "name": "Starcraft II",
        "description": "величайшая игра 2",
        "img": "images/starcraft_II.jpg",
        "cost": 9000,
        "date_of_create": "2012",
        "favorite": 1200,
        "developer": "Blizzard",
    },
    {
        "name": "Dark Souls III",
        "description": "boss of the gym",
        "img": "images/ds.jpg",
        "cost": 1500,
        "date_of_create": "2016",
        "favorite": 1,
        "developer": "FromSoftware",
    },

];
let clear_arr = JSON.parse(JSON.stringify(games));
function money_transfer() {
    alert("Перевод 300 bucks into the gym on number +79134854677");
}
// Изначальный массив игр
document.querySelector("#delete_filters").addEventListener("click", () => {
    view_items(clear_arr);
});
// Сортировка по алфавиту
function sort_by_name(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            let x = a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
            return x;
        });
    } else {
        arr.sort((a, b) => {
            let x = a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
            return x;
        });
    }
    return games;
};
// Сортировка по разработчику
function sort_by_dev(devs) {
    let filtred_games = [];
    clear_arr.forEach((element) => {
        for (let i = 0; i < devs.length; i++) {
            if (element.developer == devs[i]) {
                filtred_games.push(element);
            }
        }
    });
    games = filtred_games;
    view_items(games);
};
// Сортировка по цене 
function sort_by_cost(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            return Number(b.cost) - Number(a.cost);
        });
    } else {
        arr.sort((a, b) => {
            return Number(a.cost) - Number(b.cost);
        });
    }
    return games;
};
// Сортировка по дате
function sort_by_date(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            return Number(b.date_of_create) - Number(a.date_of_create);
        });
    } else {
        arr.sort((a, b) => {
            return Number(a.date_of_create) - Number(b.date_of_create);
        });
    }
    return games;
};
// Сортировка по популярности
function sort_by_favorite(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            return Number(b.favorite) - Number(a.favorite);
        });
    } else {
        arr.sort((a, b) => {
            return Number(a.favorite) - Number(b.favorite);
        });
    }
    return games;
};

// Сортировка по цене в диапазоне
function sort_by_cost_in_diapozone(arr, most_number, least_number) {
    let filtered_games = [];
    arr.forEach((element) => {
        if (element.cost <= most_number && element.cost >= least_number) {
            filtered_games.push(element);
        }
    });
    games = JSON.parse(JSON.stringify(filtered_games));
    games.sort((a, b) => {
        return Number(a.cost) - Number(b.cost);
    });
    return games;
}
function view_items(data) {
    storage_of_cards.innerHTML = "";
    additional_filters.innerHTML = "";
    number_of_elements.innerHTML = "";
    data.forEach(function (game) {
        storage_of_cards.innerHTML += `
        <div class="col s12 m3">
        <div class="card">
        <div class="card-image">
            <img src= "/Sorting_project/${game.img}">
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"> favorite</i></a>
        </div>
        <div class="card-content">
            <p class="name">Название: ${game.name} </p>
            <p class="price">Цена: ${game.cost}</p>
            <p class="description">Описание: ${game.description} </p>
            <p class="description">Год выхода: ${game.date_of_create} </p>
            <p class="description">Лайков: ${game.favorite} </p>
            <p class="description">Разработчик: ${game.developer} </p>
            <a class="waves-effect #fbc02d yellow darken-2 btn" id="transfer">Продать душу дьяволу</a>
        </div>
        </div>
        </div>
        `;
    });
    number_of_elements.innerHTML = `
        По вашему запросу найдено: ${data.length} шт.
    `;
    let free_money = document.querySelectorAll("#transfer");
    for (i = 0; i < free_money.length; i++) {
        free_money[i].addEventListener("click", () => {
            money_transfer();
        });
    }
    right_sort()
};
view_items(games);
function right_sort() {
    let sort_list = [];
    clear_arr.forEach((game) => {
        sort_list.push(game.developer);
    })
    sort_list = Array.from(new Set(sort_list));
    for (let i = 0; i < sort_list.length; i++) {
        additional_filters.innerHTML += `
            <p>
                <label>
                    <input type="checkbox" id="dev_filt" class="filled-in"/>
                    <span id="dev">${sort_list[i]}</span>
                </label>
            </p>
        `;
    };
};
// Алфавит
document.querySelector("#alphabet_up").addEventListener("click", () => {
    sort_by_name(games, "up");
    view_items(games);
});
document.querySelector("#alphabet_down").addEventListener("click", () => {
    sort_by_name(games, "down");
    view_items(games);
});

// Популярность
document.querySelector("#popular_up").addEventListener("click", () => {
    sort_by_favorite(games, "up");
    view_items(games);
});
document.querySelector("#popular_down").addEventListener("click", () => {
    sort_by_favorite(games, "down");
    view_items(games);
});
// Цена
document.querySelector("#cost_up").addEventListener("click", () => {
    sort_by_cost(games, "up");
    view_items(games);
});
document.querySelector("#cost_down").addEventListener("click", () => {
    sort_by_cost(games, "down");
    view_items(games);
});
// Дата
document.querySelector("#date_up").addEventListener("click", () => {
    sort_by_date(games, "up");
    view_items(games);
});
document.querySelector("#date_down").addEventListener("click", () => {
    sort_by_date(games, "down");
    view_items(games);
});
// Диапозон цен
document.querySelector("#sort_by_radius").addEventListener("click", () => {
    let min_number;
    if (document.querySelector("#least_cost").value === "") {
        min_number = 0;
    } else {
        min_number = Number(document.querySelector("#least_cost").value);
    }
    let max_number = Number(document.querySelector("#most_cost").value);
    console.log(document.querySelector("#least_cost").value);
    if (min_number == 0 && max_number == 0) {
        return;
    } else {
        view_items(sort_by_cost_in_diapozone(games, max_number, min_number));
    }
});
// Сортировка по разработчику
document.querySelector("#sort_by_developer").addEventListener("click", () => {
    let check_boxes = document.querySelectorAll("#dev_filt");
    let devs = document.querySelectorAll("#dev");
    let filt_devs = [];
    for (i = 0; i < check_boxes.length; i++) {
        if (check_boxes[i].checked) {
            filt_devs.push(devs[i].innerHTML);
        }
    }
    sort_by_dev(filt_devs);
});