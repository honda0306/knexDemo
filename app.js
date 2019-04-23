let config = {
    client: "sqlite3",
    connection: {
        filename: "./book.sqlite"
    }
};

let knex = require("knex")(cfg);

console.log("Done");