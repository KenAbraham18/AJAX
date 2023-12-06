const request = new XMLHTTPRequest();

request.addEventListener('readerstatechange', () => {

    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText);
    } else if(){

    }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
    