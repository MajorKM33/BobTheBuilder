var socketio = require("socket.io");
var mongoose = require("mongoose");
var Models = require("./database/Models.js")(mongoose);
mongoose.connect('mongodb://localhost/test6');
var Operations = require("./database/Operations.js");
var db;
var fs = require("fs");
var qs = require("querystring");
var http = require("http");
var server = http.createServer(function (req, res) {
    //console.log("żądany przez przeglądarkę adres: " + req.url)

    switch (req.method) {
        case "GET":

        if (req.url === "/index.html") {
            fs.readFile("index.html", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
        /*
        else if (req.url === "/style.css") {
        fs.readFile("style.css", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
    })
}
*/

else if (req.url === "/three.js") {
    fs.readFile("three.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/Western_Normal.js") {
    fs.readFile("Western_Normal.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
/*
else if (req.url === "/jquery-1.12.2.js") {
fs.readFile("jquery-1.12.2.js", function (error, data) {
res.writeHead(200, { 'Content-Type': 'application/javascript' });
res.write(data);
res.end();
})
}*/
else if (req.url === "/Intro.js") {
    fs.readFile("Intro.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/Ui.js") {
    fs.readFile("Ui.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/ElementSiatki.js") {
    fs.readFile("ElementSiatki.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/Klocek.js") {
    fs.readFile("Klocek.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/Main.js") {
    fs.readFile("Main.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}

break;

case "POST":
/*
function servResp(req, res) {

var allData = "";

req.on("data", function (data) {
//console.log("data: " + data)
allData += data;
})

req.on("end", function (data) {

var finish = qs.parse(allData)

if (finish.state == 1) {

var folderList = [];
var fileList = [];

fs.readdir(__dirname + "/mp3", function (err, files) {
if (err) {
return console.log(err);
}
//
files.forEach(function (file) {
console.log(file);
folderList.push(file);
});

fs.readdir(__dirname + "/mp3/" + folderList[finish.targetFolder], function (err, files) {
if (err) {
return console.log(err);
}
//
files.forEach(function (file) {
console.log(file);
fileList.push(file);
});

finish.foldersList = folderList;
finish.filesList = fileList;
console.log(JSON.stringify(finish, null, 4));
res.end(JSON.stringify(finish, null, 4));

});

});


}

//console.log(JSON.stringify(finish));
//console.log(allData)
//console.log("pawnTable = " + finish.state);

})

}

servResp(req, res)
*/
break;

}
})

console.log("Serwer działa.");
server.listen(3000);
var io = socketio.listen(server);
var obj;

io.sockets.on("connection", function (client) {
    console.log("klient sie podłączył"+ client.id)
    // client.id - unikalna nazwa klienta generowana przez socket.io

    client.emit("onconnect", {
        clientName:client.id
    })

    client.on("brickClick", function (data) {
        console.log( data.ki + " - " + data.kj + " - " + data.kk + " - " + data.kd );
        client.broadcast.emit("brickClick", { ki: data.ki, kj: data.kj, kk: data.kk, kd: data.kd });
    })

    client.on("brickClickMove", function (data) {
        console.log( data.ki + " - " + data.kj + " - " + data.kk + " - " + data.kd );
        client.broadcast.emit("brickClickMove", { ki: data.ki, kj: data.kj, kk: data.kk, kd: data.kd });
    })

    client.on("brickClickStep", function (data) {
        client.broadcast.emit("brickClickStep", { dr: data.dr });
    })

    client.on("brickClickRotate", function (data) {
        console.log( data.ki + " - " + data.kj + " - " + data.kk + " - " + data.kd );
        client.broadcast.emit("brickClickRotate", { ki: data.ki, kj: data.kj, kk: data.kk, kd: data.kd });
    })

    client.on("changeColor", function (data) {
        client.broadcast.emit("changeColor", { change: data.change });
    })

    client.on("disconnect", function () {
        console.log("klient się rozłącza")
    })

})

function takeData( data ){
    obj = data;
    console.log(obj);
}

function connectToMongo() {

    db = mongoose.connection;

    //przy wystąpieniu błędu

    db.on("error", function () {
        console.log("problem z mongo")
    });

    //przy poprawnym połaczeniu z bazą

    db.once("open", function () {
        console.log("mango jest podłączone - można wykonywać operacje na bazie");


        var opers = new Operations();

        var podatnik = new Models.Podatnik(
            {
                imie:		"Andrzej",
                nazwisko:	"Kowalski",
                podatek:	10,
                alive:		true,
                age:		20

            });

            podatnik.validate(function (err) {
                if( err )
                    console.log(err);
            });

            //opers.InsertOne(podatnik);

            //opers.SelectAll(Models.Podatnik)

            //opers.SelectByImie(Models.Podatnik, "Andrzej", 5)

            //opers.UpdateImie(Models.Podatnik, "Jan","Piotr")

            //opers.DeleteAll(Models.Podatnik)

            opers.SelectAndLimit (Models.Podatnik,1 ,function (data) {
                //console.log(data);
                takeData(data);
            })
    });

    //przy rozłaczeniu z bazą

    db.once("close", function () {
        console.log("mongodb zostało odłączone");
    });
}

connectToMongo();
