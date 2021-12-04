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
    },
    {
      label: "Challenge One",
      url: "week6/index.html"
    }
]

const links2 = [
    {
      label: "Week 07 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 08 Notes",
      url: "week8/index.html"
    },
    {
      label: "Week 09 Notes",
      url: "week9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },
    {
      label: "Challenge Two",
      url: "block2challenge/index.html"
    }
]

function list() {
    for (const e of links) {
        document.getElementById("list").innerHTML += '<li class="index-bullet"><a href="' + e.url + '">' + e.label + '</a></li>';
    }
    for (const e of links2) {
        document.getElementById("list2").innerHTML += '<li class="index-bullet"><a href="' + e.url + '">' + e.label + '</a></li>';
    }
}