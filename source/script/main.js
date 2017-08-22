var isLoaded = false;
var CONTENT = {};
var POSTS = [];
var CATEGORIES = {};
var TAGS = {};
var CURRENT = -1;

$(window).ready(function() {
    if (getHash() == "" || getHash() == "#") gotoHash("/home");
    loadContents(() => {
        flashHashEvent("");
    });
    prepareSong();
});

var loadContents = (callback) => {
    if (CONTENTURL == "" || isLoaded) {
        callback();
        return;
    }
    $.get(CONTENTURL, (e) => {
        if (e) {
            isLoaded = true;
            CONTENT = e;
            initContent();
            showArticle();
            loadArticleByNum(0, true);
        }
        callback();
    });
}

var getIndexBySlug = (e) => {
    for (var i = 0; i < POSTS.length; i++) {
        if (POSTS[i].slug == e) return i;
    }
    return -1;
}

var initContent = () => {
    POSTS = CONTENT.posts;
    for (var i in POSTS) {
        var _t = POSTS[i].tags;
        for (var j in _t) {
            if (TAGS.hasOwnProperty(_t[j].name)) {
                TAGS[_t[j].name].push(i);
            } else {
                TAGS[_t[j].name] = [i];
            }
        }
        var _c = POSTS[i].categories;
        for (var j in _c) {
            if (CATEGORIES.hasOwnProperty(_c[j].name)) {
                CATEGORIES[_c[j].name].push(i);
            } else {
                CATEGORIES[_c[j].name] = [i];
            }
        }
    }
}

var showMenu = (e = 1) => {
    if (e != 1) {
        if (e == 0) {
            $("#menu").removeClass("show");
            $("#open").removeClass("opened");
        } else {
            $("#menu").addClass("show");
            $("#open").addClass("opened");
        }
        return;
    }
    if ($("#menu").hasClass("show")) {
        $("#menu").removeClass("show");
        $("#open").removeClass("opened");
    } else {
        $("#menu").addClass("show");
        $("#open").addClass("opened");
    }
}

var addTable = (a, b, c) => {
    var _t = $("#linktable");
    var html = _t.html();
    
    html += `<a href="${a}"><li>${b}</li><p>${c}</p></a>`;
    _t.html(html);
}

var clearTable = () => {
    var _t = $("#linktable");
    _t.html("");
}

var showHome = () => {
    $("#mainpage").addClass("showmain");
    loadArticleByNum(0, true);
}

var showLink = () => {
    clearTable();
    for (var i in FRIENDLIST) {
        var name = i;
        if (FRIENDLIST[i].indexOf("https://") == 0) {
            name = "<green>[SSL]</green> " + i;
        }
        addTable(`${FRIENDLIST[i]}`, name, FRIENDLIST[i]);
    }
}

var showCati = (e = null) => {
    clearTable();
    if (!e) {
        for (var i in CATEGORIES) {
            addTable(`#/category/${i}`, i, CATEGORIES[i].length);
        }
    } else {
        if (CATEGORIES.hasOwnProperty(e)) {
            var _p = CATEGORIES[e];
            for (var i in _p) {
                addTable(`#/article/${POSTS[_p[i]].slug}`, POSTS[_p[i]].title, POSTS[_p[i]].excerpt || POSTS[_p[i]].title);
            }
        } else {
            gotoHash("/category");
        }
    }
}

var showTag = (e = null) => {
    clearTable();
    if (!e) {
        for (var i in TAGS) {
            addTable(`#/tag/${i}`, i, TAGS[i].length);
        }
    } else {
        if (TAGS.hasOwnProperty(e)) {
            var _p = TAGS[e];
            for (var i in _p) {
                addTable(`#/article/${POSTS[_p[i]].slug}`, POSTS[_p[i]].title, POSTS[_p[i]].excerpt || POSTS[_p[i]].title);
            }
        } else {
            gotoHash("/tag");
        }
    }
}

var showArticle = () => {
    clearTable();
    for (var i = 0; i < POSTS.length; i++) {
        addTable(`#/article/${POSTS[i].slug}`, POSTS[i].title, POSTS[i].excerpt || POSTS[i].title);
    }
}

var loadArticleByName = (e) => {
    loadArticleByNum(getIndexBySlug(e));
}

var loadArticleByNum = (e, keepHash=false) => {
    if (e >= 0 && e < POSTS.length) {
        var _p = POSTS[e];
        if (window.location.hash != "#/article/" + _p.slug) {
            if (!keepHash) {
                gotoHash("/article/" + _p.slug);
            }
        } else {
            $("#mainpage").removeClass("showmain");
        }
        $("#atitle").html(_p.title);
        $("#atime").html(_p.date);
        buildList("#acate", "#/category/", _p.categories);
        buildList("#atag", "#/tag/", _p.tags);
        $("#acontent").html(_p.content);
        CURRENT = e;
        $('code').each(function(i, block) {hljs.highlightBlock(block);});
        toTop();
    }
    showMenu(0);
}

var buildList = (a, b, c) => {
    var element = $(a);
    var html = "";
    for (var i in c) {
        html += `<a href="${b}${c[i].name}"><li class="fa">${c[i].name}</li></a>`;
    }
    element.html(html);
}

var next = () => {
    loadArticleByNum(CURRENT + 1);
}

var prev = () => {
    loadArticleByNum(CURRENT - 1);
}

var toTop = () => {
    window.scrollTo(0, 0);
}

var prepareSong = () => {
    nplayerList = SONGLIST;
    if (nplayerList.length) {
        playMusic(nplayerList[currentPlay]);
    }
}