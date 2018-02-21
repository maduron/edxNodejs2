
curl "http://localhost:3000/posts" 

curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 

curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Loved Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 

curl "http://localhost:3000/posts" 

curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Primordial Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": "I am textually excited!"}' "http://localhost:3000/posts/1"

curl "http://localhost:3000/posts" 

curl -H 'Content-Type: application/json' -X POST -d '{"text": "Just to comment"}' "http://localhost:3000/posts/1/comments"

curl -H 'Content-Type: application/json' -X POST -d '{"text": "Just to comment without limitation"}' "http://localhost:3000/posts/1/comments"

curl "http://localhost:3000/posts" 

curl -X DELETE "http://localhost:3000/posts/1/comments/0" 

curl "http://localhost:3000/posts" 

curl -H 'Content-Type: application/json' -X PUT -d '{"text": "Just to comment timidly"}' "http://localhost:3000/posts/1/comments/0"

curl "http://localhost:3000/posts" 

curl -X DELETE "http://localhost:3000/posts/0" 

curl "http://localhost:3000/posts" 
