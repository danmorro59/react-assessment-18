import React, {useState, useEffect} from 'react'
const Comments = ({comments, setCommen}) => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.
   
   const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.id)
   }
    
    return (
        <div>
            {comments.map((current) => (
                <div onClick={handleClick} key={current.postId} id={current.postId}>`${current.body}`</div>
                
            ))}
        </div>
    )
}

export default Comments