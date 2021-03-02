export default objectArray => {
    return objectArray.map(({ position, dimension }, index) => {
        return <Wall
            key={index}
            position={position}
            dimension={dimension}
        />;
    });
};
