const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
      }
  ]
  
for (const e of links) {
    document.getElementById("test").innerHTML += '<li><a href="' + e.url + '">' + e.label + '</a></li>';
}