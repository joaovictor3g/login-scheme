module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/login.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },  
      useNullAsDefault: true,
    }
}