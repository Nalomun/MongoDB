const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db("ieeevisTweets");
    const tweets = db.collection("tweets");

    // A tweet is a retweet if retweeted_status exists
    // A tweet is a reply if in_reply_to_screen_name is not null
    const count = await tweets.countDocuments({
      retweeted_status: { $exists: false },
      in_reply_to_screen_name: null,
    });

    console.log(`Tweets that are not retweets or replies: ${count}`);
  } finally {
    await client.close();
  }
}

main();
