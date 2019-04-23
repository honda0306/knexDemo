module.exports = 
{
    // pg: 
    // {
        // host: 'localhost',
        // user: 'postgres',
        // database: 'book',
        // password: 'passw0rd',
    // },

    sqlite:
    {
        client: "sqlite3",
        connection: 
        {
            filename: "./books.sqlite"
        }
    }
};