//To fetch all the data from localjost
fetch('http://localhost:3000/posts')
    .then(result => {
        console.log(result);
    });