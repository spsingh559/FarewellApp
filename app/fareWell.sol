pragma solidity ^0.4.24;

contract fareWell {
    
     struct post {
         uint _id;
         string sender;
         string to;
         string message;
         string timeStamp;
    }
    
    
    mapping (uint => post) public allPost;
    post[] public postArray;
    
    function createPost( uint _id, string sender, string to,string message,  string timeStamp) public {
        post memory tmpPost = post({
            _id:_id,
            sender:sender,
            to:to,
            message:message,
            timeStamp:timeStamp
        });
        
        allPost[_id]=tmpPost;
        postArray.push(tmpPost);
        
    }
    
    function getPostArrayLength( ) public returns (uint len) {
        return postArray.length;
    }
    
    function getPostByIndex (uint index) public returns (uint _id, string sender, string to,string message, string timeStamp){
    post memory tmpPost = postArray[index];
    return (tmpPost._id, tmpPost.sender, tmpPost.to, tmpPost.message,tmpPost.timeStamp);
}
}