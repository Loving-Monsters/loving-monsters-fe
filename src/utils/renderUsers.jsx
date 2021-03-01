export default renderUsers = (userArray) => {
    return userArray.map(user => {
        return <Player
            key={user.id}
            position={user.position}
            direction={user.dir}
            userName={user.userName}
        />;
    });
};
