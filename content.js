console.log("Email Templates Extension has started!");

function checkForCompose() {
    const gmailToolbar = document.querySelectorAll(".btC");
    gmailToolbar.forEach((toolbar) => {
        if (!toolbar.querySelector(".myTemplates")) {
            console.log("Found a new Gmail window!");
            toolbar.appendChild(createButton());
        }
    });
    
    const outlookSendButton = document.querySelectorAll("[data-testid='ComposeSendButton']");
    outlookSendButton.forEach((sendButton) => {
        if (sendButton && sendButton.parentElement){
            const toolbar = sendButton.parentElement;
            if (!toolbar.querySelector(".myTemplates")) {
                console.log("Found a new Outlook window!");
                toolbar.appendChild(createButton());
            }
        }
    });
}

function  createButton () {
    const templateButton = document.createElement("button");
    templateButton.innerText = "Templates";
    templateButton.className = "myTemplates";
    

    templateButton.onclick = (e) => {
        e.preventDefault();
        const clicked = e.target;
        const emailBox = clicked.closest("div[role='region']") || 
                        clicked.closest("div[role='dialog']") || 
                        clicked.closest("div[role='main']") || 
                        clicked.closest("table");

        if (emailBox) {
            let body = emailBox.querySelector('div[aria-label^="Message body" i][contenteditable="true"]');

            if (!body) {
                body = emailBox.querySelector('div[role="textbox"][contenteditable="true"]');
            }

            if (body) {
                body.focus(); 
                const template = "Hi, my name is ____\n\nI wanted to reach out regarding...";
                document.execCommand("insertText", false, template);
            } else {
                console.log("found the window, but couldnt find the body");
            }
        }
        else {
            console.log("couldnt find window for email composition");
        }
    }

    return templateButton;
}

setInterval(checkForCompose, 2000);