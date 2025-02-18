

const Likebutton = ({ isLiked, onToggleLike }) => {
    return(
        <button 
        onClick={onToggleLike} 
        style={{
            background: 'none',
            border: '1px solid red',
            cursor: 'pointer',
            color: isLiked ? 'red' : 'gray',
            fontSize: '16px',
        }}>
            {isLiked ? '❤️ Liked' : '🤍 Like' }
        </button>
    )
}
export default Likebutton;