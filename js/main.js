try {
  let options = {
    year: "numeric"
  };
  document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}
}