import { DataSource } from "typeorm";
import {Coutomer} from "./entities/Customers.js"
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "coutomerdb",
    synchronize: true,
    logging: false,
    entities:  [Coutomer],
    
})
export default AppDataSource ;