const userName='user';
const inputName='User';
console.log(userName.toLowerCase());
console.log(inputName.toUpperCase());
console.log(userName.toLocaleLowerCase())
if(userName.toLowerCase()==inputName.toLowerCase()){
    console.log("Valid user");
}
else{
    console.log("Invalid user");
}
