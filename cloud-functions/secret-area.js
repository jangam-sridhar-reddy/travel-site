exports.handler = function(event, context, callback){
    callback(null, {
        statusCode : 200,
        body : "sridhar"
    });
    // let body;
    // let bodyContent = `
    //     <h3>Welcome to the secret area</h3>
    //     <p>Here We can tell you that the sky is <strong>blue</strong>, and two plus two equals to four.</p>
    // `;

    // if(event.body){
    //     body = JSON.parse(event.body);
    // } else {
    //     body = {}
    // }

    // if(body.password === "javascript"){
    //     callback(null, {
    //         statusCode : 200,
    //         body : bodyContent
    //     });
    // } else {
    //     callback(null, {
    //         statusCode : 401
    //     });
    // }

    
}