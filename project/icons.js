function pickIcons() {
  var form = document.createElement("form");
  let hour = document.getElementsByClassName("hour"); //kan inte nå denna, hur ska jag lyckas nå den?
  hour.appendChild(form);
  console.log(hour);
}
pickIcons();
