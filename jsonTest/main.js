// $(() => {
    
//     $.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json', (data)=>{
//     console.log(data.title);
//     console.log(data.language);
// //     console.log(data.posts.length);
// //     console.log(data.posts[0].title);
  
// //     console.log('posts:');
// //     data.posts.forEach((post) => {
// //         console.log(post.title);

// //         console.log('tags:');
// //         post.tags.forEach((tag) =>{
// //             console.log(tag);
// //         })
// //     });
// //     });


// // });

// // API EXERCISE 1
// // Skills: API’s, jQuery’s get method
// // Task: Create a webpage that displays the posts from the AWW Subreddit.
// // Build Specifications
// // Use jQuery to request data from the https://www.reddit.com/r/aww/.json API.
// // Display the results on the page.
// // At a minimum, include a title and thumbnail image

// $(() => {
//     $.get('https://www.reddit.com/r/aww/.json ', (resolveData) => {
//        console.log(resolveData.data.children);
    

//     resolveData.data.children.forEach((child) => {
//         console.log(child.data.title);
//         $("body").append(`<h1> ${child.data.title}</h1>`);
//         $("body").append(`<img src="${child.data.thumbnail}"/> `);
        
//  });


// //        resolveData.data.children.forEach((child) => {
// //         console.log(child.data.thumbnail);
// //         // $("body").append(`<img src="${child.data.thumbnail}"/> `);
// //  });

// });
// });

$(() =>{
    $('#btnSubmit').on('click', () => {
        $.ajax({
            url: "http://httpbin.org/post",
            data: {
                state: "MI",
                city: "Grand Rapids"
            },
      

            method: "POST"
     }) 
     .done((response) => {
         console.log(response);
     });
    });
});



// $(()=>{
//     $("#btnSubmit").on("click", ()=>{
//         $.ajax({
//             url:
//             data:
//             method:
//         }).done((response)=>{
//             console.log(response);
//         });
//     });
// });

// "use strict";
// $(()=>{
//     $("#btnSubmit").on("click", ()=>{
//         $.ajax({
//             url: "http://httpbin.org/post",
//             data: {
//                 "state":"Michigan",
//                 "city":"Grand Rapids"
//             },
//             method: "POST"
//         }).done((response)=>{
//             console.log(response);
//         });
//     });
// });