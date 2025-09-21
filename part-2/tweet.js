const Tweet = (props) => {
    return (
        <div>
            <h3>{props.name} (@{props.username})</h3>
            <p>{props.message}</p>
            <p><small>{props.date}</small></p>
            <hr />
        </div>
    );
};