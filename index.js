$(document).ready(function () {
  // Define the canvas element
  const canvas = document.getElementById("chart");

  // Set the canvas width and height
  canvas.width = 500;
  canvas.height = 300;

  // Get the canvas context
  const ctx = canvas.getContext("2d");

  // Draw the background
  ctx.fillStyle = "wheat";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Define the positions of the planets
  const positions = [
    { name: "Sun", x: 250, y: 80 },
    { name: "Moon", x: 150, y: 250 },
    { name: "Mercury", x: 200, y: 400 },
    { name: "Venus", x: 350, y: 350 },
    { name: "Mars", x: 400, y: 200 },
    { name: "Jupiter", x: 100, y: 350 },
    { name: "Saturn", x: 300, y: 150 },
    { name: "Uranus", x: 450, y: 250 },
    { name: "Neptune", x: 50, y: 200 },
    { name: "Pluto", x: 200, y: 100 },
  ];

  // Define the colors of the signs
  const signColors = {
    Aries: "#FF0000",
    Taurus: "#FFA500",
    Gemini: "#FFFF00",
    Cancer: "#00FF00",
    Leo: "#0000FF",
    Virgo: "#4B0082",
    Libra: "#8B00FF",
    Scorpio: "#FF00FF",
    Sagittarius: "#FF1493",
    Capricorn: "#00CED1",
    Aquarius: "#7CFC00",
    Pisces: "#FF4500",
  };

  // Define the sign of each planet
  const planetSigns = {
    Sun: "Leo",
    Moon: "Cancer",
    Mercury: "Virgo",
    Venus: "Libra",
    Mars: "Aries",
    Jupiter: "Sagittarius",
    Saturn: "Capricorn",
    Uranus: "Aquarius",
    Neptune: "Pisces",
    Pluto: "Scorpio",
  };
  ctx.beginPath();

  ctx.moveTo(0, 0); // starting point at (50, 50)
  ctx.lineTo(canvas.width, canvas.height); // ending point at (150, 150)
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2; // set line thickness to 5 pixels
  ctx.stroke();

  ctx.moveTo(canvas.width, 0);
  ctx.lineTo(0, canvas.height);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(0, canvas.height / 2);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.moveTo(canvas.width / 2, canvas.height);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.moveTo(canvas.width, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, 0);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  //-- HOUSES----------------------------
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(0, 0);
  ctx.lineTo(canvas.width / 4, canvas.height / 4);
  ctx.lineTo(canvas.width / 2, 0);
  ctx.closePath(); // close the path
  ctx.fillStyle = "blue"; // set fill color to blue
  ctx.fill(); // fill the triangle with the blue color
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 2;
  ctx.stroke();

  //-- PLANETS ----------------------------
  ctx.beginPath();
  ctx.arc(canvas.width/10,canvas.width/10, canvas.width/60, 0, 8 * Math.PI);
  ctx.fillStyle = "brown"; // set fill color to blue
  ctx.fill(); // fill the triangle with the blue color

  ctx.stroke();
  // Draw the planets
//   for (const planet of positions) {
//     const signColor = signColors[planetSigns[planet.name]];

//     // Draw the planet circle
//     ctx.beginPath();
//     ctx.fillStyle = "green";
//     ctx.arc(planet.x, planet.y, 20, 0, 2 * Math.PI);
//     ctx.fill();

//     // Draw the planet name
//     ctx.fillStyle = "white";
//     ctx.font = "bold 12px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(planet.name, planet.x, planet.y + 30);

//     // Draw the planet sign color
//     ctx.fillStyle = signColor;
//     ctx.beginPath();
//     ctx.arc(planet.x, planet.y, 15, 0, 2 * Math.PI);
//     ctx.fill();
//   }

  let data = [];

  $("#btn").click(function () {
    //---------------------------------------
    const value = $("input").val();
    //---------------------------------------
    console.log("------------> !", data);
    data.push(value);
    //---------------------------------------
    $("input").val("");
    $("#my-list").empty();
    let listItems = data.map(function (item) {
      return $("<li>").text(item);
    });
    $("#my-list").append(listItems);
    //---------------------------------------

    // etc.
  });
});

// $.get(
//   'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GBPUSD&apikey="MDFI1JR0I0S8DQSZ',
//   (e) => {
//     console.log(e);
//   }
// );



