(function () {
    //Referral Code
    var ref = window.location.search.substr(1).split("&").map(function (item) {
        return item.split("=");
    }).filter(function (c) { return c[0] == "ref"; });
    //Attach ref to all a href tag
    if (ref.length > 0) {
        document.querySelectorAll("a").forEach(function (x) { x.href = x.href + "?ref=" + ref[0][1] })
    }
})();