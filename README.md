# Assignment 5 Tweet Analysis

MongoDB queries analyzing tweets from the 2020 IEEE VIS Conference

## Setup

Follow MongoDB setup with the canvas modules

## Queries

Run any query with "node <filename>":

- query1.js — Count of tweets that aren't retweets or replies
- query2.js — Top 10 screen names by follower count
- query3.js — User with the most tweets
- query4.js — Top 10 users by average retweets (>= 3 tweets)
- query5.js — Separates the embedded user data into its own "users" collection and creates a "tweets_only" collection that references users by id

## Query Responses

- Query 1: Tweets that are not retweets or replies: 998

- Query 2:
Top 10 screen_names by followers:
1. MSFTResearch - 513811 followers
2. darenw - 80358 followers
3. ComputerSociety - 57455 followers
4. AlbertoCairo - 57407 followers
5. visualisingdata - 50158 followers
6. RealGeneKim - 49293 followers
7. dataandme - 45659 followers
8. siggraph - 38562 followers
9. huggingface - 31273 followers
10. WorldProfessor - 29717 followers

Query 3: Most tweets: tmrhyne with 156 tweets

Query 4:
Top 10 by avg retweets (tweeted more than 3 times):
1. DamonCrockett - avg 16.8 retweets (5 tweets)
2. antarcticdesign - avg 14 retweets (4 tweets)
3. mjskay - avg 13.83 retweets (6 tweets)
4. AlbertoCairo - avg 13.71 retweets (7 tweets)
5. chadstolper - avg 13.5 retweets (4 tweets)
6. miskaknapek - avg 12.86 retweets (7 tweets)
7. SlaveSocieties - avg 12.57 retweets (7 tweets)
8. domoritz - avg 12.5 retweets (4 tweets)
9. flekschas - avg 12.29 retweets (7 tweets)
10. KadekASatriadi - avg 12 retweets (4 tweets)

Query 5:
Creating users collection...
Users collection created with 1135 unique users.
Creating tweets_only collection...
Tweets_Only collection created with 3325 tweets (user info replaced with user_id).

## Tech

- Node.js
- MongoDB
