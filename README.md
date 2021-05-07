Technologies Used:-
1. JSON API
2. MongoDB
3. Postman
4. JavaScript(Node.js and Express.js)
5. HTML

DataBase Schema:-
  {
    video_title: String,
    description: String,
    video_URL: String, 
    video_thumbnail: String,
    video_view_count: String,
    likes: String,
    dislikes: String, 
    channel_title: String, 
    channel_description: String, 
    channel_thumbnail: String, 
    channel_subscribers: String
    }
    
Steps completed for submission part:-
1. Creation of API
2. Set-up of DataBase
3. Basic HTML Page
4. Exception Handling where possible

Description of Files:-
1. package.json - API.
2. app.js - connect to localhost, mongoDB and perform Get and Post functions.
3. posts.js - set up router in express for Get and Posts.
4. post.js - determine posting schema.
5. .env - To hide the data(private) not to be visible to the user(or public) like DataBase(id and password).
6. Fetch.js - fetch all the posts into one JavaScript file.
7. index.html - Display all the posts in the HTML page.
