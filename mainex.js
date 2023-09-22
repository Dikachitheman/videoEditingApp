const port = 3000,
 http = require("http"),
 router = require("./router"),
 videoEdit = require("./videoEdit"),
 fs = require('fs'),
 path = require('path'),

plainTextContentType = {
    "Content-Type": "text/plain"
},
htmlContentType = {
    "Content-Type": "text/html"
},

customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
    console.log(`Error reading the ${file}...`);
    console.log(`${errors}`);
    }
    res.end(data);
    });
};

router.get("/", (req, res) => { 
    res.writeHead(200, htmlContentType);
    customReadFile("vid.html", res);
});

router.get("/vid.css", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/css"});
    customReadFile("vid.css", res);
});

router.get("/script.js", (req, res) => {
    res.writeHead(200, "OK", "Content-Type: text/javascript");
    customReadFile("script.js", res);
});

router.get("/trim", (req, res) => {
    res.writeHead( 200 , { "Content-Type" : "text/javascript"});
    videoEdit.trim();
    res.end();
});

router.post("/trim", (req, res) => {
    var body = [];
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });

    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
        let bodyJSON = JSON.parse(body);
        console.log(bodyJSON.tdStart);
        // console.log(typeof bodyJSON);
    });

    videoEdit.trim();
    
    res.writeHead( 200 , { "Content-Type" : "text/plain"});
    res.end("POSTED");
});

router.post("/saveTrim", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
      body.push(bodyData);
  });
  
  req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      let bodyJSON = JSON.parse(body);
      console.log(bodyJSON.selectFile[0]);
      // console.log(typeof bodyJSON);

      let video = `./videos/${bodyJSON.selectFile[0]}.mp4`;
      let end = bodyJSON.endTime;
      let start = bodyJSON.startTime;
      let title = bodyJSON.title;

      async function someAsyncFunction() {
        try {
          const result = await videoEdit.addNumbersWithTheShellScript(start, end, video, title);
          
          // Handle success
          console.log(`Conversion successful. Result: ${result}`);
        } catch (error) {
          // Handle error
          console.error(`Error during conversion: ${error}`);
        }
      }
      
    someAsyncFunction();

      console.log(video);
  })
  
  res.writeHead( 200 , { "Content-Type" : "text/plain"});
  res.end("POSTED");
});

router.post("/addAudio", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
      body.push(bodyData);
  });
  
  req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      let bodyJSON = JSON.parse(body);
      // console.log(bodyJSON.selectFile[0]);
      // console.log(typeof bodyJSON);

      let video = `./videos/${bodyJSON.second[0]}.mp3`;
      let audio = `./videos/${bodyJSON.third[0]}.mp4`;
      let title = bodyJSON.title;

      async function someAsyncFunction() {
        try {      
          const result = await videoEdit.addAudio(audio, video, title);
          
          // Handle success
          console.log(`Conversion successful. Result: ${result}`);
        } catch (error) {
          // Handle error
          console.error(`Error during conversion: ${error}`);
        }
      }
      
    someAsyncFunction();
 
      console.log(video);
  })
  
  res.writeHead( 200 , { "Content-Type" : "text/plain"});
  res.end("POSTED");
});

router.post("/saveConvert", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
      body.push(bodyData);
  });
  
  req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      let bodyJSON = JSON.parse(body);
      // console.log(bodyJSON.selectFile[0]);
      // console.log(typeof bodyJSON);

      let duration = `${bodyJSON.duration[0]}`;
      duration = parseInt(duration);
      let image = `./videos/${bodyJSON.selectFile[0]}.png`;
      let title = bodyJSON.title;

      async function someAsyncFunction() {
        try {
          const result = await videoEdit.convert(duration, image, title);
          
          // Handle success
          console.log(`Conversion successful. Result: ${result}`);
        } catch (error) {
          // Handle error
          console.error(`Error during conversion: ${error}`);
        }
      }
      
      someAsyncFunction();

  })
  
  res.writeHead( 200 , { "Content-Type" : "text/plain"});
  res.end("POSTED");
});


router.post("/saveConcat", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
      body.push(bodyData);
  });
  
  req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      let bodyJSON = JSON.parse(body);
      // console.log(bodyJSON.selectFile[0]);
      // console.log(typeof bodyJSON);

      let mergeList = bodyJSON.merge;

      const formattedLines = mergeList.map(item => `file './videos/${item}.mp4'`);
      const content = formattedLines.join('\n');

      fs.writeFileSync('file.txt', content);

      let title = bodyJSON.title;

      async function someAsyncFunction() {
        try {
          const result = await videoEdit.concat(title);
          
          // Handle success
          console.log(`Conversion successful. Result: ${result}`);
        } catch (error) {
          // Handle error
          console.error(`Error during conversion: ${error}`);
        }
      }
      
      someAsyncFunction();

  })
  
  res.writeHead( 200 , { "Content-Type" : "text/plain"});
  res.end("POSTED");
});


router.post("/saveOverlay", (req, res) => {
  var body = [];
  req.on("data", (bodyData) => {
      body.push(bodyData);
  });
  
  req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      let bodyJSON = JSON.parse(body);
      // console.log(bodyJSON.selectFile[0]);
      // console.log(typeof bodyJSON);

      let zero = `./videos/${bodyJSON.zero[0]}.mp4`;
      let one = `./videos/${bodyJSON.one[0]}.png`;
      let width = `${bodyJSON.width}`;
      let height = `${bodyJSON.height}`;
      let left = `${bodyJSON.left}`;
      let top = `${bodyJSON.top}`;
      let title = bodyJSON.title;

      width = parseInt(width);
      height = parseInt(height);
      left = parseInt(left);
      top = parseInt(top);

      async function someAsyncFunction() {
        try {
          const result = await videoEdit.overlay(zero, one, width, height, left, top, title);
          
          // Handle success
          console.log(`Conversion successful. Result: ${result}`);
        } catch (error) {
          // Handle error
          console.error(`Error during conversion: ${error}`);
        }
      }
        
      someAsyncFunction();


      console.log(zero);
      console.log(one);
      console.log(width);
      console.log(height);
      console.log(left);
      console.log(top);
      console.log(title);
  })
  
  res.writeHead( 200 , { "Content-Type" : "text/plain"});
  res.end("POSTED");
});

// router.post("/uploadd", (req, res) => {
//   if (req.method === 'POST') {
//     let data = '';

//     req.on('data', chunk => {
//       data += chunk;
//     });

//     req.on('end', () => {
//       // Assuming the client sends the video as a binary payload
//       const videoBuffer = Buffer.from(data, 'binary');
      
//       // Save the video to a file
//       const videoFilePath = path.join(__dirname, 'uploaded_video.mp4');
      
//       fs.writeFile(videoFilePath, videoBuffer, err => {
//         if (err) {
//           res.statusCode = 500; // Internal Server Error
//           res.end('Error saving the video.');
//         } else {
//           res.statusCode = 200;
//           res.end('Video uploaded successfully.');
//         }
//       });
//     });
//   } else {
//     res.statusCode = 405; // Method Not Allowed
//     res.end();
//   }
// });


http.createServer(router.handle).listen(port);       

console.log(`The server has started and is listening on port number:
http://localhost:${port}`);

