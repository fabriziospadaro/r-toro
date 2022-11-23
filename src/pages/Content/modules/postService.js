export default function requestPost(txt) {
  if (window.location.pathname.replace("/", "") != "home")
    window.history.pushState("home", '', "https://www.etoro.com/");
  var checkExist = setInterval(function () {
    if (document.querySelector('[automation-id="whats-on-your-mind-button"]') && document.querySelector(".home-feed-card")) {
      document.querySelector('[automation-id="whats-on-your-mind-button"]').click();
      var checkExistWriteText = setInterval(function () {
        if (document.querySelector(".write-post-textarea")) {
          document.querySelector(".write-post-textarea").focus();
          document.querySelector(".write-post-textarea").size = txt.length;
          document.querySelector(".write-post-textarea").value = txt;
          document.querySelector(".write-post-textarea").select();
          clearInterval(checkExistWriteText);
          //getEventListeners($(".write-post-textarea")[0])
          alert("Thank you! Press space TWICE, to confirm and read the message");
        }
      });
      clearInterval(checkExist);
    }
  }, 100);
}