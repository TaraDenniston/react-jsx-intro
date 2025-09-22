const App = () => {
    return (
        <div>
            <Person 
                name="Caleb" 
                age={23} 
                hobbies={['snow skiing', 'water skiing', 'camping', 'learning']}
            />
            <Person 
                name="Alexandra" 
                age={35} 
                hobbies={['reading', 'yoga', 'laughing', 'baking']}
            />
            <Person 
                name="August" 
                age={16} 
                hobbies={['playing games', 'drawing', 'crocheting']}
            />
        </div>
    );
};