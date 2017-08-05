let login = (username, password) => {
    if(username !== 'admin' || password!=='rad' ){
        console.log("incorrect login!");
    }
};

login('admin','ddd');