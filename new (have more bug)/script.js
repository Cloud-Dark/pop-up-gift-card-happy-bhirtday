(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;
  console.log("wat", card);
  openB.addEventListener("click", function() {
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 1000);
  });

  closeB.addEventListener("click", function() {
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function() {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });
})();
// Assuming you have an HTML file with an element with id "card" to print the JSON content
const cardDiv = document.getElementById('card');

// Fetch the JSON file
fetch('./config.json')
  .then(response => response.json())
  .then(data => {
    // Access the required values from the JSON data
    const namaAnda = data.nama_anda;
    const namaPasangan = data.nama_pasangan;
    const kalimat = data.kalimat;
    
    // Generate the HTML content
    const htmlContent = `
      <div id="card">
        <div id="card-inside">
          <div class="wrap">
            <center>
              <p class="animated infinite wobble"><b><u>Happy Birthday ${namaPasangan}</u></b></p>
            </center>
            <p> &nbsp;<i class="em-svg em-blush"></i></p>
            <div id="text_kalimat">
              ${kalimat}
            </div>
            <u>Made With <b><i class="em-svg em-heart"></i></b><br><b> By </b> <b>${namaAnda}</b></u>
          </div>
        </div>
        <div id="card-front">
          <div class="wrap">
            <h1 class="animated infinite swing">Happy Birthday ${namaPasangan}</h1>
            <div class="cake_and_velas">
              <!-- Additional HTML content here -->
            </div>
          </div>
        </div>
      </div>
    `;

    // Print the HTML content to the cardDiv element
    cardDiv.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error:', error);
  });
