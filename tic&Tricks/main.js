// Page Reload With Javascript Different Way

// No. Zero: Without JS only HTML Meta tag
// add   <meta http-equiv="refresh" content="5"> in the header 

// No. One: window.location.reload();
//  উপায় একঃ reload() ব্যাবহার করে  
    // document.location.reload();
//  অথবা, 
    // window.location.reload();
// উপায় দুইঃ setTimeout() ব্যাবহার করে। 
// পেজ টি প্রতি ৫ সেকেন্ড পর পর রিফ্রেশ/রিলোড হবে
// setTimeout(() =>{
//     document.location.reload();
// }, 5000);

// উপায় তিনঃ history.go() ব্যাবহার করে 
// প্রতি মুহূর্তে পেজ টি রিফ্রেশ হতে থাকবে 
// history.go();

// see button code

// উপায় একঃ reload() ব্যাবহার করে (উদাহরণ) 
// একটা পেজ লোড হবার ৫ সেকন্ড পর এর সাহায্য রিফ্রেশ হবে। [1000 ms = 1 S] 
// function timeReload(duration){
//     setTimeout("location.reload(true);",duration);
// }
// window.onload = timeReload(5000);

