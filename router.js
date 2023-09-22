const fs = require("fs");

const 
 htmlContentType = {
    "Content-Type": "text/html"
 },

 routes = { 
 "GET": {
"/info": (req, res) => {
res.writeHead(200, {"Content-Type": "text/plain"
})

res.end("Welcome to the Info Page!")
}
 },

 'POST': {}
 };

exports.handle = (req, res) => {
 try {
 if (routes[req.method][req.url]) {
    routes[req.method][req.url](req, res);
 }
 
 else if (req.url.indexOf(".mp4") !== -1) {
    res.writeHead(200, {"Content-Type": "video/mp4"});
    customReadFile(`./videos/${req.url}`, res);
 }

 else if (req.url.indexOf(".png") !== -1) {
   res.writeHead(200, {"Content-Type": "image/png"});
   customReadFile(`./videos/${req.url}`, res);
}

 else {
res.writeHead(404, htmlContentType);
res.end("<h1>No such file exists</h1>");
 }
 } catch (ex) {
 console.log("error: " + ex);
 }
};
exports.get = (url, action) => {
 routes["GET"][url] = action;
};
exports.post = (url, action) => {
 routes["POST"][url] = action;
};

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
   if (errors) {
   console.log(`Error reading the ${file}...`);
   }
   res.end(data);
    });
   };
   