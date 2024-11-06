// Write your code here!
//remove <main> w/ id 'main'
//has a 'newHeader' variable that points to an <h1> node
main.remove("main")

const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = ("is the champion")
document.body.appendChild(newHeader);