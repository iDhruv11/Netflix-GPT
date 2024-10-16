export const verifyName = (users, name, profileIndex) => {
    if( name == users[profileIndex].name ) return false
    const userFound = users.find( user => user.name == name )
    if(userFound == undefined){
        return false;
    }
    // return userFound.name != users[profileIndex].name;
    return true
}