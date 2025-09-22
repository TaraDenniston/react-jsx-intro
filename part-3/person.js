const Person = (props) => {
    let displayName = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
    let hobbyList = props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>
                Name: {displayName} <br />
                Age: {props.age} <br />
                Hobbies:
                <ul>
                    {hobbyList}
                </ul>
            </p>
            <h3>{props.name}, {props.age >= 18 ? "please go vote!" : "you must be 18 to vote"}</h3>
            <hr />
        </div>
    );
};