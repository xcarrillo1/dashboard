function WebsiteVis(props) {
    return (
        <div className= "visits">
            <h4>Website visitors</h4>
            <h3>{props.visits}</h3>
        </div>
    );
}

export default WebsiteVis;