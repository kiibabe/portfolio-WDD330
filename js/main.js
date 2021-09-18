
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

let list = document.getElementsByTagName("ol");
for (const element of links) {
    document.getElementsByTagName("ol").innerHTML = '<li><a href="' + url + '">' + label + '</a></li>';
}