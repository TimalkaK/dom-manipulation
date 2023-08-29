  
  // Removing elements (nodes) from the DOM
  // const resetGame = () => {
  //   if (document.getElementById("outcome")) {
  //     const outcome = document.body.lastChild;
  //     document.body.removeChild(outcome);
  //   }
  // };
  

const getPassword = () => {

  let count = 0

  const input = document.getElementById("password").value.length;
  const progress = document.getElementById("progress");

  let progressValue = input * 5;

  if (progress.value < 100){
    progress.setAttribute("value", progressValue);
  }

  if (progress.value < 40){
      //turn into a function variable 
      const newPara = document.createElement("p");
      const text = document.createTextNode("Should be longer");
      newPara.appendChild(text);
  
      const beforePara = document.getElementById("progress");
      document.body.insertBefore(newPara, beforePara);
  }else if (progress.value >=40 && progress.value < 60){

      const newPara = document.createElement("p");
      const text = document.createTextNode("Pretty good");
      newPara.appendChild(text);
  
      const beforePara = document.getElementById("progress");
      document.body.insertBefore(newPara, beforePara);

  }else if (progress.value >= 60){
    const newPara = document.createElement("p");
    const text = document.createTextNode("Grrrreat!");
    newPara.appendChild(text);

    const beforePara = document.getElementById("progress");
    document.body.insertBefore(newPara, beforePara);

  }

  if(input < 8){
    progress.style.accentColor="red";

  }else if(input >= 8 && input < 12){
    progress.style.accentColor="orange";
  }else{
    progress.style.accentColor="green";
  }
}

const password = document.getElementById("password");
password.addEventListener("input", getPassword);

