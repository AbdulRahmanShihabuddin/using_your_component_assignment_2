import { useState } from "react";
import Likebutton from "./likebutton";

const PostCard = ({post}) => {
    const [liked , setLiked]=useState(post.isLiked);

    const handleToggleLike = () => {
        setLiked(!liked);
    }
    return (
        <div style={{
            border: '8px solid green',
            padding: '20px',
            margin: '20px',
            borderRadius:"10px"
        }}>
            <img src={post.profileImage} alt={post.username} style={{ width: '100px', borderRadius: '50%' }}/>
            <h3>{post.username}</h3>
            <p>{post.content}</p>
            <Likebutton isLiked={liked} onToggleLike={handleToggleLike}/>
        </div>
    )
}

export default PostCard;