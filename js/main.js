window.addEventListener('load', list)

const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
]

function list() {
    for (const e of links) {
        document.getElementById("list").innerHTML += '<li><a href="' + e.url + '">' + e.label + '</a></li>';
    }
}