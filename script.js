function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

function checkColorScheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const html = document.documentElement

  if (isDarkMode) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
window.addEventListener("load", checkColorScheme)

window.onload = function () {
  var pageTitle = document.title
  var attentionMessage = "Open Me"

  document.addEventListener("visibilitychange", function (e) {
    var isPageActive = !document.hidden

    if (!isPageActive) {
      document.title = attentionMessage
    } else {
      document.title = pageTitle
    }
  })
}
