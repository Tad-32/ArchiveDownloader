var nccor1Url= '';

function urlStrip(url) {
    var url1 = url.replace(/var casRecordingURL = |'/g, '');
    var url2 = url1.replace('\t\t\t\t', '');
    var urlParsed = url2.replace(';', '');
    return(urlParsed);
}
function buttonClick() {
    const url = document.getElementById('urlInput').value;
    const proxy_url = 'https://corsproxy.io/?' + encodeURIComponent(url);
    $.get(proxy_url, (data, status) => 
    {
        var el = document.createElement( 'html' );
        el.innerHTML = data;

        var lines = el.innerHTML.split('\n');

        for (var i = 1; i < lines.length; i++) { 
            if (lines[i].includes("var casRecordingURL = \'")) { 
                nccor1Url = urlStrip(lines[i]);
                console.log("This is the Mp4 url for you nerds: " + nccor1Url + ". The problem that I ma haveing is that he site redirects which is why I need to have the user go to the site.");
                window.open(nccor1Url, '_blank');
                break;
            }
        }
    });
};
