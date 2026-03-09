const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db("ieeevisTweets");
    const tweets = db.collection("tweets");

    // Drop existing collections if they exist (for re-runnability)
    const collections = await db.listCollections().toArray();
    const colNames = collections.map((c) => c.name);
    if (colNames.includes("users")) await db.collection("users").drop();
    if (colNames.includes("tweets_only"))
      await db.collection("tweets_only").drop();

    // Step 1: Create users collection with unique users
    // Group by user.id to get unique users, take the first occurrence of user data
    console.log("Creating users collection...");
    await tweets
      .aggregate([
        {
          $group: {
            _id: "$user.id",
            userData: { $first: "$user" },
          },
        },
        {
          $replaceRoot: { newRoot: "$userData" },
        },
        { $out: "users" },
      ])
      .toArray();

    const userCount = await db.collection("users").countDocuments();
    console.log(`Users collection created with ${userCount} unique users.`);

    // Step 2: Create tweets_only collection
    // Copy all tweet fields but replace the embedded user object with just the user id
    console.log("Creating tweets_only collection...");
    await tweets
      .aggregate([
        {
          $addFields: {
            user_id: "$user.id",
          },
        },
        {
          $project: {
            user: 0, // remove the embedded user object
          },
        },
        { $out: "tweets_only" },
      ])
      .toArray();

    const tweetCount = await db.collection("tweets_only").countDocuments();
    console.log(
      `Tweets_Only collection created with ${tweetCount} tweets (user info replaced with user_id).`
    );
  } finally {
    await client.close();
  }
}

main();
