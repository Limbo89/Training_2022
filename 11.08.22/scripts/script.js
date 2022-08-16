let games = [
    {
        "name": "Cyberpunk 2077",
        "description": "Это 1 товар",
        "img": "images/cyberpunk.png",
        "cost": 650,
        "date_of_create": "21.02.11",
        "favorite": 2,
        "developer": "CD Project RED",
    },
    {
        "name": "Slime Rancher",
        "description": "Это 2 товар",
        "img": "images/",
        "cost": 1000,
        "date_of_create": "21.02.22",
        "favorite": 132,
        "developer": "Monomi Park",
    },
    {
        "name": "World of Warcraft",
        "description": "Это 3 товар",
        "img": "images/",
        "cost": 2000,
        "date_of_create": "21.12.00",
        "favorite": 999,
        "developer": "Blizzard",
    },
    {
        "name": "Dead Souls III",
        "description": "Это 4 товар",
        "img": "images/",
        "cost": 1500,
        "date_of_create": "1.02.22",
        "favorite": 123132,
        "developer": "FromSoftware",
    },

];
// Сортировка по имени
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
    console.log(games);
};
// sort_by_name(games, "up");
// sort_by_name(games, "down");

// Сортировка по цене 
function sort_by_cost(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            return Number(a.cost) - Number(b.cost);
        });
    } else {
        arr.sort((a, b) => {
            return Number(b.cost) - Number(a.cost);
        });
    }
    console.log(games);
};
// от меньшего к большему и наоборот
// sort_by_cost(games, "up"); 
// sort_by_cost(games, "down");

// Сортировка по популярности
function sort_by_favorite(arr, type) {
    if (type === "up") {
        arr.sort((a, b) => {
            return Number(a.favorite) - Number(b.favorite);
        });
    } else {
        arr.sort((a, b) => {
            return Number(b.favorite) - Number(a.favorite);
        });
    }
    console.log(games);
};
// от меньшего к большему и наоборот
// sort_by_favorite(games, "up");
// sort_by_favorite(games, "down");

// Сортировка по цене в диапазоне
function sort_by_cost_in_diapozone(arr, most_number, least_number, type) {
    let filtered_games = [];
    arr.forEach((element) => {
        if (element.cost <= most_number && element.cost >= least_number) {
            filtered_games.push(element);
        }
    });
    if (type === "up") {
        filtered_games.sort((a, b) => {
            return Number(a.cost) - Number(b.cost);
        });
    } else {
        filtered_games.sort((a, b) => {
            return Number(b.cost) - Number(a.cost);
        });
    }
    console.log(filtered_games);
}
// sort_by_cost_in_diapozone(games, 650, 0, "up");
// sort_by_cost_in_diapozone(games, 650, 0, "down");