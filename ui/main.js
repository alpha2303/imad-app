// Counter code
var button = document.getElementById('counter');
button.onclick = function (){
    
  
};

//Name Submit

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
      // Create a request object
    
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in variable.
    
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           // Take some action
           if(request.status === 200){
              // Capture the list of names and render it as a list
                    var names = request.responseText;
                    names = JSON.parse(names);
                  var list = '';
                  for(var i=0;i<names.length;i++){
                      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
           }
    }
    
    // Make a request
    
    request.open('GET','http://rahulpavithran99.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
  // Make a request to the server and send a name
    };
  
};
