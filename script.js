// Setup the HTML string

const gallaryItemList = [
  {
    id: 1,
    title: "Valley of Rocks",
    src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PXAvj69xDIteF0johfQRTXdqf0IlBzySYw&usqp=CAU",
    description:
      "The Valley of Rocks, sometimes called Valley of the Rocks, is a dry valley that runs to the coast in north Devon. England, about 1 kilometre (0.6 mi) to the west of the village of Lynton.",
  },
  {
    id: 2,
    title: "Dorset",
    src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsjRPyU2OJ7183d42us_ET0nj6ZbpcBSqJQ&usqp=CAU",
    description:
      " Dorset is a county in southwest England. It’s known for the Jurassic Coast, a long stretch on the English Channel where the cliffs contain many fossils, and rock formations showmillions of years of geological history.",
  },
  {
    id: 3,
    title: "Seven Sister",
    src: "https://www.mirygiramondo.com/wp-content/uploads/2020/06/seven-sisters.jpg",
    description:
      "  The Seven Sisters are a series of chalk sea cliffs on the English Channel coast, and are a stretch of the sea-eroded section of the South Downs range of hills, in the county of East Sussex, in south-east England. ",
  },
  {
    id: 4,
    title: "Cornwall",
    src: " https://globalgrasshopper.com/wp-content/uploads/2012/04/Mousehole-Cornwall.jpg",
    description:
      "  Cornwall is noted for its geology and coastal scenery. A large part of the Cornubian batholith is within Cornwall. The north coast has many cliffs where exposed geological formations are studied.",
  },
  {
    id: 5,
    title: "Zennor Head",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLM45NoNP6g3tu2NQmiPKgsbLyUXlFgFpaxQ&usqp=CAU",
    description:
      "  It is a 750m long promontory on the Cornish coast of England,between Pendour Cove and Porthzennor Cove.it lies 1 km north-west of the village of Zennor and 1.6 km east of the next promontory, Gurnard's Head.",
  },
  {
    id: 6,
    title: "East Sussex",
    src: " https://your.eastsussex.gov.uk/wp-content/uploads/2018/07/Cuckmere-Haven.-1280x640.jpg ",
    description:
      "   East Sussex is a county in South East England on the English Channel coast. It is bordered by the counties of Kent to the north and east,West Sussex to the west, and Surrey for a short distance to the north-west.",
  },
];

var list = document.querySelector("#gallery");

// Loop through each gallery and create a list item
gallaryItemList.forEach(function (item) {
  // inject each list item into the ul
  list.innerHTML +=
    '<div class="container-item"> <div id="explain"><h4>' +
    item.title +
    "</h4><p id=" +
    item.id +
    ">" +
    item.description +
    '</p> <button onClick ="hide(' +
    "'" +
    item.id +
    "'" +
    ') "> Detail </button> </div><img src="' +
    item.src +
    ' " /></div>';
});

function hide(obj) {
  var el = document.getElementById(obj);
  if (el.style.display == "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

/*
const readMoreBtn = document.querySelector(".read-more-btn");
const desc = document.querySelector(".close");

readMoreBtn.addEventListener("click", (e) => {
  desc.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read more") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read more";
  }
});
*/
