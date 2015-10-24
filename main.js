searchUrbanDict = function(info){
    var query = info.selectionText;
    var url = info.pageUrl;
    // chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
    // chrome.storage.sync.set({"value": url}, function(){});
    // chrome.storage.sync.get(["value"], function(data) {
    //     alert("value: " + data.url);
    // });

    var storage = chrome.storage.sync;

    var myTestVar = 'myVariableKeyName';

    var obj= {};

    obj[myTestVar] = 'my test var';

    storage.set(obj);

    storage.get(myTestVar,function(result){
      console.log(myTestVar,result);
      //console output = myVariableKeyName {myTestVar:'my test var'}
    });

    storage.get('myTestVar',function(result){
      console.log(result);
      //console output = {myTestVar:'my test var'}
    });
 };


chrome.contextMenus.create({
 title: "Query Urban Dictionary",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});
