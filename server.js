const http = require('express');
const pokemon = require("./pokedex-20201127MMDD.json");
const app = express();
const argument = process.argv.slice(2)
var bodyparser = require("body-parser");
app.use(bodyParser.json());

app.listen(arg[0], function(){
    console.log(
        "pokedex on http://localhost:"+arg[0]
    )
})

app.use("/", function (request, response){
    return response.res.json("salut");
})

app.get("/api/pokemon/", function (request,response){
    return response.res.json(pokemon);
})

const server = http.createServer(requestListener);
server.listen(8080);



