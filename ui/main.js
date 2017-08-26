
//Login Credential submission

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
      // Create a request object
    
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in variable.
    
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           // Take some action
           if(request.status === 200){
             console.log("Credentials correct");
             alert("User logged in successfully");
           }
           else if (request.readyState === 403){
               alert("Username/password is incorrect!");
           }
           else if (request.readyState === 500){
               alert("Something went wrong with the server! We're trying to fix it.... ")
           }
       }
    };
    // Make a request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://rahulpavithran99.imad.hasura-app.io/login' + name,true);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify({username: username, password: password}));
};
