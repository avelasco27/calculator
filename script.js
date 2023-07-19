function appendCharacter(character) {
    document.getElementById("result").value += character;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteCharacter() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function calculateResult() {
    var result = document.getElementById("result").value;
    try {
      var answer = eval(result);
      document.getElementById("result").value = answer;
    } catch (error) {
      alert("Invalid calculation");
    }
  }
  