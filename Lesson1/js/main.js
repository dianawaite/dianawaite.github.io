
  let options = {
    year: "numeric"
  };
  document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-US", options);
} 