const multiplyy = (num1, num2) => {
    console.log(num1 * num2);
}

module.exports = {
    multiplyy
};

let userDetails = os.userInfo().username;
FileSystem.appendFile(`h-hi.txt`, `Hello ${userDetails}`,(err)=> {
    
})