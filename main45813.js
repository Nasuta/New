let endOfThePage = 0;

let preloading = false;

const showPreloader = () => {
  let preloader = document.getElementById("preloader");
  console.log(`showPreloader()`);
  preloader.style.display = "block";
  preloading = true;
};

const hidePreloader = () => {
  let preloader = document.getElementById("preloader");
  console.log(`hidePreloader()`);
  preloader.style.display = "none";
  preloading = false;
};

const getData = () => {
  if (!preloading) {
    showPreloader();
  }

  fetch("https://akademia108.pl/api/ajax/get-users.php")
    .then(response => response.json())
    .then(data => {
      let body = document.body;
      let hr = document.createElement("hr");
      body.appendChild(hr);

      for (let user of data) {
        let pId = document.createElement("p");
        let pName = document.createElement("p");
        let pWebSite = document.createElement("p");

        pId.innerText = `User Id: ${user.id}`;
        pName.innerText = `Name: ${user.name}`;
        pWebSite.innerText = `Website: ${user.website} <br/> ======`;

        body.appendChild(pId);
        body.appendChild(pName);
        body.appendChild(pWebSite);
      }

      
      hidePreloader();

      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    });
};

const scrollToEndOfPage = () => {
  //   console.log(`scrollToEndOfPage()`);
  let doc = document.documentElement;

  // Height includes the content that is invisible
  let scrollHeight = doc.scrollHeight;

  // Pixel's number vertically
  let scrollTop = doc.scrollTop;

  // Inner element's height in px
  let clientHeight = doc.clientHeight;

//   let sumScrollTopClientHeight = scrollTop + clientHeight;

  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  console.log(`scrollHeight: ${scrollHeight}`);
  console.log(`numScrollTopClientHeight: ${sumScrollTopClientHeight}`);
  console.log(`scrollTop: ${scrollTop}`);
  console.log(`clientHeight: ${clientHeight}`);
  console.log(`=====================`);

  if (sumScrollTopClientHeight >= scrollHeight) {
    endOfThePage += 1;

    console.log(`Scrolled to the end of page: ${endOfThePage}`);

    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
