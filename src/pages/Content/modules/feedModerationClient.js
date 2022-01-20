import { validContent } from "../../../validators/post_validators/contentValidator";
import { validTags } from "../../../validators/post_validators/tagLimitValidator";
import { validUser } from "../../../validators/post_validators/userValidator";

export default class FeedModerationClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.resetFeed.bind(this));
    this.storeClient.afterSet.push(this.moderateFeed.bind(this));
    this.lastPostCount = 0;
    this.hiddenPosts = [];
    this.posts = [];
  }

  get moderationShouldHappen() {
    let postCount = document.querySelectorAll(".post-item").length;
    if (this.storeClient.get(["feedSettings", "enabled"]) && postCount != this.lastPostCount) {
      this.lastPostCount = postCount;
      return true;
    }
    return false;
  }

  moderateFeedRoutine() {
    if (this.moderationShouldHappen)
      this.moderateFeed();
  }

  moderateFeed() {
    if (this.storeClient.get(["feedSettings", "enabled"])) {
      let purged = 0;
      this.posts = document.querySelectorAll(".post-item");
      for (let i = 0; i < this.posts.length; i++) {
        let postTitle = this.posts[i].querySelector(".post-item-title");
        let postContent = this.posts[i].querySelector(".post-item-content");
        if (postTitle == undefined || postContent == undefined)
          continue;
        if (!this.validPost(this.getPostData(postTitle, postContent))) {
          this.posts[i].style.display = "none";
          this.hiddenPosts.push(this.posts[i]);
          purged++;
        }
      }
      console.log("Moderated: " + purged);
      return purged;
    }
  }

  resetFeed() {
    for (let node of this.hiddenPosts)
      node.style.display = "block";
    this.hiddenPosts = [];
  }

  validPost(data) {
    if (data.content === undefined && data.user === undefined)
      return true;
    return (
      validContent(data.content, this.storeClient) &&
      validUser(data.user, this.storeClient) &&
      validTags(data.content, this.storeClient)
    )
  }

  getPostData(postTitleNode, postContentNode) {
    let userName = postTitleNode.querySelector(".post-user-name")?.text?.replace("@", "")?.trim()?.toLowerCase();
    userName ||= postTitleNode.querySelector(".feed-info").textContent?.match(/@\w* /)[0]?.replace("@", "")?.toLowerCase();
    let content = postContentNode.querySelector(".post-item-main-body")?.textContent?.toLowerCase();
    content ||= postContentNode.innerText?.toLowerCase();
    return {
      user: userName,
      content: content
    }
  }
}

