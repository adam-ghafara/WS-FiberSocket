var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://official-joke-api.appspot.com/jokes/ten", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
hasil = "";
txt = "";
txt1 = "";

fetch("https://official-joke-api.appspot.com/jokes/ten", requestOptions)
  .then((response) => response.text())
  .then((result) => tampilkan(result))
  .catch((error) => console.log("error", error));

function tampilkan(result) {
  console.log(result);
  hasil = JSON.parse(result);
  txt = hasil.forEach(isitabel);
}

function isitabel(value) {
  txt = txt + trnyatabel.replace("#TEXT#", "type: " + value.type + "");
  txt = txt + trnyatabel.replace("#TEXT#", "setup: " + value.setup + "");
  txt = txt + trnyatabel.replace("#TEXT#", "punchline: " + value.punchline + "");

  document.getElementById("konten").innerHTML = txt;
}
trnyatabel = `
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `;
