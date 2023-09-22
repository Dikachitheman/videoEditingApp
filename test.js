let videoEdit = require("./videoEdit");


    // let duration = 4;
    // let image = `./videos/asset-2.png`;
    // let title = 'hhh';

    // async function someAsyncFunction() {
    //   try {
    //     const result = await videoEdit.convert(duration, image, title);
        
    //     // Handle success
    //     console.log(`Conversion successful. Result: ${result}`);
    //   } catch (error) {
    //     // Handle error
    //     console.error(`Error during conversion: ${error}`);
    //   }
    // }
    
    // someAsyncFunction();
  


      let video = `./demo.mp4`;
      let audio = `./videos/xdrake.mp3`;
      let title = 'demo';

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