let cfg = 
{
    client: "sqlite3",
    connection: 
    {
        filename: "./book.db"
    }
};

let knex = require("knex")(cfg);
knex.destroy();
console.log("Done");