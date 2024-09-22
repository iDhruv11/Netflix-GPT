export const verifyName = (users, name, profileIndex) => {
    const userFound = users.find( user => user.name == name )
    if(userFound == undefined){
        return false;
    }
    return userFound.name != users[profileIndex].name;
}