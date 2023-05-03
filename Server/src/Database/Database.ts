import { Connection, createConnection } from "mysql2";

export default class Database{
    Connection!: Connection;
    connectToDatabase() {
        const dbConfig = {
            host: 'localhost',
            user: 'root',
            password: 'M6a2r7k5',
            database: 'BetCat'
          };
        this.Connection = createConnection(dbConfig);
    }
      
    
    CloseDatabase(){
        this.Connection.end()
    }
}