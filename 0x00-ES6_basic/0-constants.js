export function taskFirst(){
    const task = 'I prefer const when i can.';
    return task;

}

export function getLast(){
    return 'is okay';
}

export function taskNext(){
    let combination = 'But sometimes Let';
    combination += getLast();
    return combination;
}