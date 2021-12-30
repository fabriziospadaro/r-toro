import { validContent } from "../../../validators/post_validators/contentValidator";
import { validUser } from "../../../validators/post_validators/userValidator";

export function spamPurger() {
  let posts = document.querySelectorAll(".post-item");
  let purged = 0;

  for (let i = 0; i < posts.length; i++) {
    let postTitle = posts[i].querySelector(".post-item-title");
    let postContent = posts[i].querySelector(".post-item-content");
    if (postTitle == undefined || postContent == undefined)
      continue;
    if (!validPost(getPostData(postTitle, postContent))) {
      posts[i].style.display = "none";
      purged++;
    }
  }
  return purged;
};



function validPost(data) {
  console.log(data);
  if (data.content === undefined && data.user === undefined)
    return true;
  return validContent(data.content) && validUser(data.user);
}

function getPostData(postTitleNode, postContentNode) {
  let userName = postTitleNode.querySelector(".post-user-name")?.text?.replace("@", "")?.trim()?.toLowerCase();
  userName ||= postTitleNode.querySelector(".feed-info").textContent?.match(/@\w* /)[0]?.replace("@", "")?.toLowerCase();
  let content = postContentNode.querySelector(".post-item-main-body")?.textContent?.toLowerCase();
  content ||= postContentNode.innerText?.toLowerCase();
  return {
    user: userName,
    content: content
  }
}

