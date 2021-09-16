const nameButton = document.getElementById("namebutton");
const petName = document.getElementById("name");
const input = document.getElementById("nameinput");
const petMood = document.getElementById("mood");
const petHunger = document.getElementById("hunger");
const petThirst = document.getElementById("thirst");
const petHealth = document.getElementById("health");

// petHunger = setInterval(() => {
//     petHunger.value -= 10;
// }, 200);
nameButton.addEventListener("click", () => {
    petName.textContent = `Name: ${input.value}`;
    input.value = "";
})