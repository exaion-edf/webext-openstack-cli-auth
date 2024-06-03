tok = document.getElementById("token");

if (!!tok) {
  value = tok.getAttribute("value");
  if (!!value) {
    browser.runtime.sendMessage({"url": document.URL, "token": value});
  }
}
