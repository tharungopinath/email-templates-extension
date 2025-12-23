console.log("Email Templates Extension has started!");

function checkForCompose() {
    const gmailToolbar = document.querySelector('.btC');
    const outlookToolbar = document.querySelector('[aria-label="Command toolbar"]');

    if (gmailToolbar) {
        console.log("Found gmail compose window!");
    }

    if (outlookToolbar){
        console.log("Found outlook compose window!");
    }
}

setInterval(checkForCompose, 2000);