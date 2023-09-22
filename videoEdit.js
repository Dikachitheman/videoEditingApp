const { exec } = require( 'child_process' );

exports.trim = () => {
    // vidEl.src = "./yuii.mp4";
    console.log("ye");
};


// startButton.addEventListener('click', () => {
		
exports.addNumbersWithTheShellScript = (startTimeInput, endTimeInput, video, title ) =>
{
    return new Promise((resolve, reject) => {
        const command = `sh ./sh-files/trim.sh ${startTimeInput} ${endTimeInput} ${video} ${title}` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing shell script: ${error}');
                reject(error);
                return;
            }

            if (stderr) {
                console.error('Shell script returned an error: ${stderr}' );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error('Error executing shell script: ${error}' );
            reject(error);
        });
    });
};

exports.restart = () => {
    const command = `sh ./sh-files/restart.sh` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing shell script: ${error}`);
                reject(error);
                return;
            }

            if (stderr) {
                console.error(`Shell script returned an error: ${stderr}` );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error(`Error executing shell script: ${error}` );
            reject(error);
        });
}

exports.addAudio = (audio, video, title ) =>
{
    return new Promise((resolve, reject) => {
        const command = `sh ./sh-files/audio.sh ${audio} ${video} ${title}` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing shell script: ${error}');
                reject(error);
                return;
            }

            if (stderr) {
                console.error('Shell script returned an error: ${stderr}' );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error('Error executing shell script: ${error}' );
            reject(error);
        });
    });
};

exports.convert = (duration, image, title) =>
{
    return new Promise((resolve, reject) => {
        const command = `sh ./sh-files/image.sh ${duration} ${image} ${title}` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing shell script: ${error}`);
                reject(error);
                return;
            }

            if (stderr) {
                console.error(`Shell script returned an error: ${stderr}` );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error(`Error executing shell script: ${error}` );
            reject(error);
        });
    })

    .catch((error) => {
        console.error(`Unhandled rejection: ${error}`);
        throw error; 
    });
};

exports.overlay = (zero, one, width, height, left, top, title) =>
{
    return new Promise((resolve, reject) => {
        const command = `sh ./sh-files/overlay.sh ${zero} ${one} ${width} ${height} ${left} ${top} ${title}` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing shell script: ${error}');
                reject(error);
                return;
            }

            if (stderr) {
                console.error('Shell script returned an error: ${stderr}' );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error('Error executing shell script: ${error}' );
            reject(error);
        });
    });
};

exports.concat = (title) =>
{
    return new Promise((resolve, reject) => {
        const command = `sh ./sh-files/concat.sh ${title}` ;

        const script = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing shell script: ${error}');
                reject(error);
                return;
            }

            if (stderr) {
                console.error('Shell script returned an error: ${stderr}' );
                reject(stderr);
                return;
            }

            const result = parseInt(stdout.trim());
            resolve(result);
        });

        script.on('error', (error) => {
            console.error('Error executing shell script: ${error}' );
            reject(error);
        });
    });
};

    // newvideo = "output7.mp4";

// startTimeInput = "00:00:02";
// endTimeInput = "00:00:06";

// addNumbersWithTheShellScript(startTimeInput, endTimeInput )

// .then(() => {

//     document.getElementById("video").src = newvideo;
// })
//     .catch((error) => {
//     console.error('Error:', error);
// });