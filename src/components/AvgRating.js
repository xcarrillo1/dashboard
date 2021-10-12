function AvgRating (props) {
    return (
        <div className= "rating">
            <h4>Average Rating</h4>
            <h4>{props.rating}</h4>
        </div>
    );
}

export default AvgRating;