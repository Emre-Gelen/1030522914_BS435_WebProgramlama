const users = new Map();

function getUser(id){

    return users.get(id);
}

function verifyUser(id, password){

    const user = getUser(id);

    if(!user){
        return false;
    }

    return user.password === password;
}

function createUser(id, password){

    if(getUser(id)){
        return false;
    }

    const user = {
        id: id,
        password: password,
        victories: 0,
        defeats: 0
    };

    users.set(id, user);
    return true;
}

function resetAllUsers(){
    users.clear();
}

function reportEndOfMatch(userId, isVictory){

    const user = getUser(userId);
    if(! user){
        throw "Invalid userId: " + userId;
    }

    if(isVictory) {
        user.victories++;
    } else {
        user.defeats++;
    }
}

const getUsers = () => Array.from(users.values())

const updateUserById = (user) => {
    if(!users.has(user.userId)){
        return false;
    }

    users.set(user.userId,user);
    return true;
}

const getUsersByVictoryCount = (victoryCount) => Array.from(users.values()).filter(f=>f.victories >= victoryCount) 

const getUsersByDefeatCount = (defeatCount) => Array.from(users.values()).filter(f=>f.defeats <= defeatCount) 

const getUsersByDefeatCountAndVictoryCount = (defeatCount,victoryCount) => Array.from(users.values()).filter(f=>f.victories >= victoryCount && f.defeats <= defeatCount);

const getUsersByFirstLetter = (firstLetter) => Array.from(users.values()).filter(f=>f.userName.startsWith(firstLetter));

const initUsers = () =>{
    users.clear();
    counter=0;

    createNewUser('Emre','12345asd',10,15);
    createNewUser('Darius','4578645aoqkw',50,15);
    createNewUser('Draven','klsa45412',40,20);
    createNewUser('Nasus','plska124',60,10);
}
module.exports = {getUser, verifyUser, createUser, resetAllUsers, reportEndOfMatch,getUsers
    ,updateUserById,getUsersByVictoryCount,getUsersByDefeatCount,getUsersByDefeatCountAndVictoryCount
    ,getUsersByFirstLetter,initUsers};
