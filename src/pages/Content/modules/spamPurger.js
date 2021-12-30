import { validContent } from "../../../validators/post_validators/contentValidator";
import { validUser } from "../../../validators/post_validators/userValidator";

export function spamPurger() {
  let postTitles = document.querySelectorAll(".post-item-title");
  let postContents = document.querySelectorAll(".post-item-content");
  for (let i = 0; i < postTitles.length; i++) {
    if (!validPost(getPostData(postTitles[i], postContents[i]))) {
      postTitles[i].style.display = "none";
      postContents[i].style.display = "none";
    }
  }
};



function validPost(data) {
  return validContent(data.content) && validUser(data.user);
}

function getPostData(postTitleNode, postContentNode) {
  let userName = postTitleNode.querySelector(".post-user-name")?.text?.replace("@", "")?.trim()?.toLowerCase();
  let content = postContentNode.querySelector(".post-item-main-body")?.textContent?.toLowerCase();
  return {
    user: userName,
    content: content
  }
}

