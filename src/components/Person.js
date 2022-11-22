export const Person = (props) => {
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? 'is': 'is not'} Married</h1>
            {props.friends.map((friend, key) => <h1 key={key}>{friend}</h1>)}
        </div>
    );
};