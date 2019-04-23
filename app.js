let cfg = require("./knex-cfg").sqlite;
let knex = require("knex")(cfg);

knex.select("title", "rating").from("book").asCallback(function(err, rows)
{
    if(err) { console.error(err); }
    else
    {
        console.log(rows);
    }
    knex.destroy();
    console.log("Done");
});
