const nameButton = document.getElementById("namebutton");
const petName = document.getElementById("name");
const input = document.getElementById("nameinput");
const petMood = document.getElementById("mood");
const petHunger = document.getElementById("hunger").value;
const petThirst = document.getElementById("thirst").value;
const petHealth = document.getElementById("health").value;



nameButton.addEventListener('click', () => {
    petName.textContent = `Name: ${input.value}`;
    input.value = "";
   })




class pet {
    constructor (name, health, hunger, mood, thirst){
        this.petName = name;
        this.petHealth = health;
        this.petHunger = hunger;
        this.petThirst = thirst;
        this.petMood = mood;
    }
}



