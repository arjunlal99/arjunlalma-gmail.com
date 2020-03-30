//browserAction for icon
browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        url:"page.html"
    });
});

//
console.dir(browser.management.getAll());

//add activityLog listener for all extensions
function extensionAll(){
    console.log('inside extensionAll()');

    var gettingAll = browser.management.getAll();
    gettingAll.then((infoArray) => {
        for (info of infoArray){
            
            console.dir(info.name,info.id);
            browser.activityLog.onExtensionActivity.addListener((details) => {
                var sending = browser.runtime.sendMessage(details);
                console.dir(details);
             },info.id);
          
        }
    });
}

extensionAll();
