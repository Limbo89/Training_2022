let div = document.querySelector(".left");
let books = [
    {
        "id": 1,
        "author": "Abobus",
        "name": "Книга о выживании ТОм 1",
        "year": 2022,
    },
    {
        "id": 2,
        "author": "Abobus_2",
        "name": "Книга о выживании Том 2",
        "year": 20232,
    },
    {
        "id": 3,
        "author": "Abobus",
        "name": "Книга о выживании ТОм 1",
        "year": 2022,
    },
];
// Очистка инпутов после запроса
function clear_inputs(){
    inputs = document.querySelectorAll('input');
    for (i=0; i < inputs.length; i++){
        inputs[i].value = "";
    }
};
// Создание книги
document.querySelector(".create_book").addEventListener("click", () => {
    let id = Number(document.querySelector("#create_book_id").value);
    let author = document.querySelector("#create_book_author").value;
    let name = document.querySelector("#create_book_name").value;
    let year = Number(document.querySelector("#create_book_year").value);
    create(id, author, name, year);
    div.innerHTML = "";
    view_items(books);
});
// Обновление книги
document.querySelector(".update_book").addEventListener("click", () => {
    let id = Number(document.querySelector("#update_book_id").value);
    let author = document.querySelector("#update_book_author").value;
    let name = document.querySelector("#update_book_name").value;
    let year = Number(document.querySelector("#update_book_year").value);
    updateBook(id, author, name, year);
    div.innerHTML = "";
    view_items(books);
});
// Удаление книги
document.querySelector(".delete_book").addEventListener("click", () => {
    let id = Number(document.querySelector("#delete_book_id").value);
    deleteBook(id);
    div.innerHTML = "";
    view_items(books);
});
// Поиск по id
document.querySelector(".search_book_id").addEventListener("click", () => {
    let id = Number(document.querySelector("#search_book_id").value);
    book = search_by_id(id);
    div.innerHTML = "";
    view_items(book);
});
// Поиск по названию
document.querySelector(".search_book_name").addEventListener("click", () => {
    let name = document.querySelector("#search_book_name").value;
    book = search_by_name(name);
    div.innerHTML = "";
    view_items(book);
});
// Поиск по автору
document.querySelector(".search_book_author").addEventListener("click", () => {
    let author = document.querySelector("#search_book_author").value;
    book = search_by_author(author);
    div.innerHTML = "";
    view_items(book);
});
// Поиск по году
document.querySelector(".search_book_year").addEventListener("click", () => {
    let year = Number(document.querySelector("#search_book_year").value);
    book = search_by_year(year);
    div.innerHTML = "";
    view_items(book);
});
// Отобразить всё
document.querySelector(".search_all_books").addEventListener("click", () => {
    div.innerHTML = "";
    view_items(books);
});
function view_items(data) {
    data.forEach(function (book) {
        div.innerHTML += "<div class='data'> id: " + book.id + "<br> Автор: " + book.author + "<br> Название: " + book.name + "<br> Год издания: " + book.year + "</div>";
    });
    clear_inputs();
}
view_items(books);
// Создание книги (функция) === ВЫПОЛНЕНО ===
function create(id, author, name, year) {
    let id_check = false;
    books.forEach(function (book) {
        if (book.id == id) {
            id_check = true;
        }
    });
    if (id_check) {
        console.log("Такая книга уже есть!");
    } else {
        books.push({
            "id": id,
            "author": author,
            "name": name,
            "year": year,
        });
        console.log("Книга успешно создана!");
        console.log(books);
    }
};
// create(321, "123", "123fasd", "23423");

// Функцию поиска хотел реализовать по человечески (как нибудь со switch case) но не допер, вообщем наговнокодил @_@"
// Поиск по id  (функция) === ВЫПОЛНЕНО ===
function search_by_id(id) {
    let id_check = false;
    books.forEach(function (book) {
        if (book.id == id) {
            id_check = true;
        }
    });
    if (id_check === false) {
        console.log("Книги с данным идентификатором не существует!");
    } else {
        console.log("Работаем....");
        let collectionBooks = [];
        books.forEach(function (searchingBook, index) {
            if (searchingBook.id == id) {
                collectionBooks.push(books[index]);
            }
        });
        console.log(collectionBooks);
        return collectionBooks;
    }
};
// search_by_id(2);

// Поиск по имени (функция) === ВЫПОЛНЕНО ===
function search_by_name(name) {
    let name_check = false;
    books.forEach(function (book) {
        if (book.name == name) {
            name_check = true;
        }
    });
    if (name_check === false) {
        console.log("Книги с данным именем не существует!");
    } else {
        console.log("Работаем....");
        let collectionBooks = [];
        books.forEach(function (searchingBook, index) {
            if (searchingBook.name == name) {
                collectionBooks.push(books[index]);
            }
        });
        // console.log(collectionBooks);
        console.log(collectionBooks);
        return collectionBooks;
    }
};
// search_by_name("Книга о выживании ТОм 1");

// Поиск по автору (функция) === ВЫПОЛНЕНО ===
function search_by_author(author) {
    let author_check = false;
    books.forEach(function (book) {
        if (book.author == author) {
            author_check = true;
        }
    });
    if (author_check === false) {
        console.log("Книги с данным автором не существует!");
    } else {
        console.log("Работаем....");
        let collectionBooks = [];
        books.forEach(function (searchingBook, index) {
            if (searchingBook.author == author) {
                collectionBooks.push(books[index]);
            }
        });
        console.log(collectionBooks);
        return collectionBooks;
    }
};
// search_by_author("Abobus_2");

// Поиск по году (функция) === ВЫПОЛНЕНО ===
function search_by_year(year) {
    let year_check = false;
    books.forEach(function (book) {
        if (book.year == year) {
            year_check = true;
        }
    });
    if (year_check === false) {
        console.log("Книги с данным годом не существует!");
    } else {
        console.log("Работаем....");
        let collectionBooks = [];
        books.forEach(function (searchingBook, index) {
            if (searchingBook.year == year) {
                collectionBooks.push(books[index]);
            }
        });
        // console.log(collectionBooks);
        console.log(collectionBooks);
        return collectionBooks;
    }
};
// search_by_year(2022);

// Удаление книги (функция) === ВЫПОЛНЕНО ===
function deleteBook(id) {
    let id_check = false;
    books.forEach(function (book) {
        if (book.id == id) {
            id_check = true;
        }
    });
    if (id_check === false) {
        console.log("Книга с данным id не существует!");
    } else {
        books.forEach(function (deletingBook, index) {
            if (deletingBook.id == id) {
                books.splice(index, 1);
            }
        });
        console.log("Книга успешно удалена!");
        console.log(books);
    }
};
// deleteBook(1);

// Обновление книги (функция) === ВЫПОЛНЕНО ===
function updateBook(id, author, name, year) {
    let id_check = false;
    books.forEach(function (book) {
        if (book.id == id) {
            id_check = true;
        }
    });
    if (id_check === false) {
        console.log("Книги с данным идентификатором не существует!");
    } else {
        deleteBook(id);
        create(id, author, name, year);
    }
};
// updateBook(1, "ABOSDF", "ЦЕЕЕЕЕЕЗАРЬ", 1289);
