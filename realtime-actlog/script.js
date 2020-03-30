function getMessage(request,sender,sendResponse){
    let p = document.createElement("p");
    p.textContent = JSON.stringify(request);
    document.body.appendChild(p);
}

browser.runtime.onMessage.addListener(getMessage);