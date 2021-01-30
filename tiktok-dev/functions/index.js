const functions = require("firebase-functions");
const TikTokScraper = require("tiktok-scraper");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Retrieves the user information
exports.getUserInfo = functions.https.onCall(async (data, context) => {
  const { username } = data;
  const userObject = await TikTokScraper.user(username);

  const userInfo = userObject.collector[0];

  if (!userInfo) {
    return userObject;
  }

  const name = userInfo.authorMeta.nickName;
  const image = userInfo.authorMeta.avatar;
  const followers = userInfo.authorMeta.fans;
  const numVideos = userInfo.authorMeta.video;

  let numViews = 0;
  let numLikes = 0;
  let numComments = 0;
  let numShares = 0;
  userObject.collector.forEach((video) => {
    numViews += video.playCount;
    numLikes += video.diggCount;
    numComments += video.commentCount;
    numShares += video.shareCount;
  });

  const engagementRate = parseFloat(
    (
      ((numLikes + numComments + numShares) / numVideos / followers) *
      100
    ).toFixed(2)
  );

  const finalUserObject = {
    name,
    image,
    followers,
    numVideos,
    numViews,
    numLikes,
    numComments,
    numShares,
    engagementRate,
  };

  return finalUserObject;
});
