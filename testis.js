let videoEdit = require("./videoEdit");


let duration = 4;
let image = `./videos/aax.png`;
let title = 'ddaax';

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