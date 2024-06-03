function send_token(message) {
  browser.runtime.sendNativeMessage(
    "com.exaion.update_clouds_yaml",
    message
  );
}

browser.runtime.onMessage.addListener(send_token);
