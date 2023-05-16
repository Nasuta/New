window.onload = function () {
  var button = document.createElement("button");
  button.innerText = "Click me";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(request.responseText);
        var div = document.createElement("div");
        div.setAttribute("id", "dane-programisty");
        div.innerHTML =
          "<p>Imię: " +
          data.imie +
          "</p>" +
          "<p>Nazwisko: " +
          data.nazwisko +
          "</p>" +
          "<p>Zawód: " +
          data.zawod +
          "</p>" +
          "<p>Firma: " +
          data.firma +
          "</p>";
        button.parentNode.insertBefore(div, button.nextSibling);
      } else if (request.readyState === 4 && request.status !== 200) {
        console.error(error);
      }
    };
    request.open(
      "GET",
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
      true
    );
    request.send();
  });
};
