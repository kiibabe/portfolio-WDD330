window.addEventListener('load', list)

const links = [
    {
      label: "Week 01 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 02 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 03 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week 04 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week 05 Notes",
      url: "week5/index.html"
    }
]

function list() {
    for (const e of links) {
        document.getElementById("list").innerHTML += '<li class="index-bullet"><a href="' + e.url + '">' + e.label + '</a></li>';
    }
}