"use strict"

class User{
    constructor(username,email,password){
        this.username  = username;
        this.email = email;
        this.password = password;
        
    }
    
    static countUsers(){
        console.log("there are 10 users");
    }
    
    register(){
        console.log(this.username+" is now registered");
    }
    
}

let bob = new User('bob','bob@mail.com','bob123');

bob.register();

User.countUsers();


class Member extends User{
    constructor(username,email,password,memberPassage){
        super(username,email,password);
        this.memberPassage = memberPassage;
    }
    getPassage(){
        console.log(this.username+' is registered to '+this.memberPassage);
    }
}

let nm = new Member('mike','m@gol.com','mike','special');

nm.register();
nm.getPassage();
    