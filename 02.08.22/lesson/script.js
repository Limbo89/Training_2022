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

// Создание книги === ВЫПОЛНЕНО ===
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
            "year": year
        });
        console.log("Книга успешно создана!");
        console.log(books);
    }
};
// create(321, "123", "123fasd", "23423");

// Функцию поиска хотел реализовать по человечески (как нибудь со switch case) но не допер, вообщем наговнокодил @_@"
// Поиск по id === ВЫПОЛНЕНО ===
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
        let book = {};
        books.forEach(function (searchingBook, index) {
            if (searchingBook.id == id) {
                book = books[index];
            }
        });
        console.log(book);
        return book;
    }
};
// search_by_id(2);

// Поиск по имени === ВЫПОЛНЕНО ===
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

// Поиск по автору === ВЫПОЛНЕНО ===
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
        // console.log(collectionBooks);
        console.log(collectionBooks);
        return collectionBooks;
    }
};
// search_by_author("Abobus_2");

// Поиск по году === ВЫПОЛНЕНО ===
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

// Удаление книги === ВЫПОЛНЕНО ===
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

// Обновление книги === ВЫПОЛНЕНО ===
function update(id, author, name, year) {
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
// update(1, "ABOSDF", "ЦЕЕЕЕЕЕЗАРЬ", 1289);
// console.log(books);