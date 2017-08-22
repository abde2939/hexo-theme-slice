var getHash = () => {
    return window.location.hash;
}

var sliceHash = (e) => {
    var q = e.indexOf("#");
    return e.substring(q+1);
}

var gotoHash = (e) => {
    window.location.hash = e;
}

var flashHashEvent = (e) => {
    var oldUrl = sliceHash(e.hasOwnProperty("oldURL") ? e.oldURL : "");
    var newUrl = sliceHash(e.hasOwnProperty("newURL") ? e.newURL : window.location.href);
    
    if (newUrl.indexOf("/") != 0) {
        gotoHash("/home");
        return;
    }
    
    var routers = newUrl.substring(1).split("/");
    if (routers.length < 1) {
        gotoHash("/home");
        return;
    }
    
    var pre = routers[0];
    //console.log(pre);
    if (pre == "article" || pre == "tag" || pre == "category") {
        if (routers.length == 2) {
            doFuncS[pre](routers[1]);
        } else {
            if (pre == "article") {
                gotoHash("/home");
                return;
            } else {
                doFunc[pre]();
            }
        }
    } else {
        if (doFunc.hasOwnProperty(pre)) {
            doFunc[pre]();
        }
    }
}

window.onhashchange = (e) => {
    flashHashEvent(e);
}

var doFuncS = {
    "article": (e) => {
        loadArticleByName(e);
    },
    "tag": (e) => {
        showMenu(2);
        showTag(e);
    },
    "category": (e) => {
        showMenu(2);
        showCati(e);
    }
}

var doFunc = {
    "home": () => {
        showMenu(0);
        showArticle();
        showHome();
    },
    "tag": () => {
        showMenu(2);
        showTag();
    },
    "category": () => {
        showMenu(2);
        showCati();
    },
    "link": () => {
        showMenu(2);
        showLink();
    }
}