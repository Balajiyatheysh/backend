const express = require('express')
const app = express()
require('dotenv').config()


const port =3000

const githUser={
  "login": "Balajiyatheysh",
  "id": 46724511,
  "node_id": "MDQ6VXNlcjQ2NzI0NTEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/46724511?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Balajiyatheysh",
  "html_url": "https://github.com/Balajiyatheysh",
  "followers_url": "https://api.github.com/users/Balajiyatheysh/followers",
  "following_url": "https://api.github.com/users/Balajiyatheysh/following{/other_user}",
  "gists_url": "https://api.github.com/users/Balajiyatheysh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Balajiyatheysh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Balajiyatheysh/subscriptions",
  "organizations_url": "https://api.github.com/users/Balajiyatheysh/orgs",
  "repos_url": "https://api.github.com/users/Balajiyatheysh/repos",
  "events_url": "https://api.github.com/users/Balajiyatheysh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Balajiyatheysh/received_events",
  "type": "User",
  "site_admin": false,
  "name": "BalajiYatheysh",
  "company": "CognitiveClouds",
  "blog": "",
  "location": "India, Bengaluru",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 1,
  "following": 8,
  "created_at": "2019-01-15T18:51:38Z",
  "updated_at": "2023-11-08T18:56:02Z"
  };

app.get('/',(req, res)=>{
  res.send('Hello world')
})

app.get('/twitter', (req, res)=>{
  res.send('balajiyatheysh')
})

app.get('/login',(req, res)=>{
  res.send('<h1>hahhahhha please login</h1>')
})

app.get('/coffee',(req, res)=>{
  res.send('<h2>Coffee broo</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githUser);
})

app.listen(process.env.PORT, ()=>{
  console.log(`first example app listening on pont number ${port}`)
})