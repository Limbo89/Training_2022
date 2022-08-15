// Написать функции сортировки:
// 1. В алфавитном порядке по полю brand
// 2. По стоимости, от меньшего к большему или наоборот
// 3. По стоимости в диапазоне
// 4. По color. В функцию передается массив с цветами.

let colors = ["red", "orange", "yellow", "green", "whiteblue"]
let cards = [
    {
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "1300",
        color: "orange"
    },
    {
        brand: "Honor",
        name: "Book",
        model: "13 2020",
        type: "Notebook",
        cost: "650",
        color: "yellow"
    },
    {
        brand: "Cool",
        name: "Book",
        model: "16.5 2021",
        type: "Notebook",
        cost: "1400",
        color: "red"
    },
    {
        brand: "Huawei",
        name: "Book",
        model: "15 2018",
        type: "Notebook",
        cost: "1000",
        color: "whiteblue"
    },
    {
        brand: "Boba",
        name: "Pavilion",
        model: "15 eh-1022-ur",
        type: "Notebook",
        cost: "800",
        color: "green"
    },
]
// Сортировка по имени == ВЫПОЛНЕНО ==
function sort_by_name(arr) {
    arr.sort((a, b) => {
        let x = a.brand > b.brand ? 1 : -1;
        return x;
    });
    console.log(cards);
};
// sort_by_name(cards)

// Сортировка по цене == ВЫПОЛНЕНО ==
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
    console.log(cards);
};
// sort_by_cost(cards, "up");
// sort_by_cost(cards, "down");

// Сортировка по цене в диапазоне == ВЫПОЛНЕНО ==
function sort_by_cost_in_diapozone(arr, most_number, least_number) {
    let noutbooks = [];
    arr.forEach((element) => {
        if (element.cost <= most_number && element.cost >= least_number) {
            noutbooks.push(element);
        }
    });
    noutbooks.sort((a, b) => {
        return Number(b.cost) - Number(a.cost);
    });
    console.log(noutbooks);
}
// sort_by_cost_in_diapozone(cards, 1000, 0);

// Сортировка по цвету === ВЫПОЛНЕНО ===
function sort_by_color(arr, arr_of_colors) {
    arr.sort((a, b) => arr_of_colors.indexOf(a.color) - arr_of_colors.indexOf(b.color));
    console.log(cards);
};
// sort_by_color(cards, colors);