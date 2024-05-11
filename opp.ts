import inquirer from "inquirer"

class person{

    private personality:string

    public constructor(){
        this.personality = "Mystery"
    }

    public askQuestion(answer:number):void{
        if(answer===1){
            this.personality="Extrovert"
        }else if(answer===2){
            this.personality="Introvert"
        }else{
            this.personality="You are still a mystery";
        }
    }

    public getPersonality():string{
        return this.personality
    }
}

class student extends person{

    public name:string
    
    public constructor(){
        super()
        this.name=""
    }
}

try{

const {answer} = await inquirer.prompt({
    message:"Type 1 if you like to talk to others and type 2 if you rather keep it to yourself.",
    name:"answer",
    type:"number",
})

let myPerson = new person()
myPerson.askQuestion(answer)
console.log(`Your are a ${myPerson.getPersonality()}`);

const {answer2} = await inquirer.prompt({
    message:"What is your name?.",
    name:"answer2",
    type:"input",
})

let mystudent = new student()
mystudent.name = answer2
console.log(`Your name is ${mystudent.name} and your personality is ${mystudent.getPersonality()}`);


}
catch{
    console.log("Please enter a number");
    
}

