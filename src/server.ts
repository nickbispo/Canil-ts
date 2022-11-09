import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import path from "path";
import mainRotes from "./routes/Router";


const server = Express();
const port = Number(process.env.PORT) || 3030;
const hostname = process.env.HOSTNAME as string;

// set the view engine to ejs
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
// set public folder
server.use(Express.static(path.join(__dirname, '../public')));

server.use(mainRotes);

server.listen(port, hostname, () => {
  console.log(`server listening in port: ${port}`)
});
