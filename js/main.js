let news = document.querySelector(".news");
let news2 = document.querySelector(".news2");
let news3 = document.querySelector(".news3");
let news4 = document.querySelector(`[data-name*="carousel-inner"]`);
let news5 = document.querySelector(".news5");
let news6 = document.querySelector(".news6");

let params = {
  iD: 0,
  start: 0,
  limit: 30,
};

let params2 = {
  iD: 0,
  start: 0,
  limit: 3,
};

let params3 = {
  iD: 0,
  start: 0,
  limit: 4,
};

let numArticles = 0;
// on page load get number of articles for pager
if (numArticles == 0) {
  countNumArticles();
  countNumArticles2();
  countNumArticles3();
  countNumArticles4();
  countNumArticles5();
  countNumArticles6();
}
// Count Articles XMLHttpRequest
function countNumArticles() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api-for-gallery/gallery",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles(params);
    }
  };
  xhr.send();
}

function countNumArticles2() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/experts",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles2(params2);
    }
  };
  xhr.send();
}

function countNumArticles3() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/pricing",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles3(params2);
    }
  };
  xhr.send();
}

function countNumArticles4() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/banners",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles4(params2);
    }
  };
  xhr.send();
}

function countNumArticles5() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/our_service",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles5(params3);
    }
  };
  xhr.send();
}

function countNumArticles6() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/experts",
    true
  );
  xhr.onload = function () {
    if (this.status == 200) {
      numArticles = JSON.parse(this.responseText).length;
      console.log(numArticles);
      getArticles6(params2);
    }
  };
  xhr.send();
}
// Get Articles XMLHttpRequest
function getArticles(params) {
  let request = "";
  let count = 0;
  if (params.iD == 0) {
    request = "_limit=" + params.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api-for-gallery/gallery?" +
      request,
    true
  );

  console.log(xhr);

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        if (item.id > params.start) {
          output += "<div class='col-md-4 col-sm-4' id='imagegallery'>";
          output += "<div class='card' id='card4'>";
          output += "<i><img id='img1' src='" + item.image + "' alt='#'/></i>";
          output += " </div>";
          output += "</div>";
          console.log(item.image);
        }
      });
      news.innerHTML = output;
    }
  };
  xhr.send();
}

function getArticles2(params2) {
  let request = "";
  let count = 0;
  if (params2.iD == 0) {
    request = "limit=" + params2.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/experts?" +
      request,
    true
  );

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        console.log(item.Image);
        if (item.id > params2.start) {
          output += "<div class='col-md-4'>";
          output += "<div id='exp' class='experts_box'>";
          output += "<div class='experts_img'>";
          output += "<figure><img src='" + item.Image + "' alt='#'/></figure>";
          output += "</div>";
          output += "<div class='meet'>";
          output += "<h3>" + item.Name + "</h3>";
          output += "<p>" + item.Introduction + "</p>";
          output += "</div>";
          output += "</div>";
          output += "</div>";
        }
      });
      news2.innerHTML = output;
    }
  };
  xhr.send();
}

function getArticles3(params2) {
  let request = "";
  let count = 0;
  if (params2.iD == 0) {
    request = "_start=" + params2.start + "&_limit=" + params2.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/pricing?" +
      request,
    true
  );

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        if (item.id > params2.start) {
          output += "<div class='col-md-4'";
          output += "<div class=card>";
          output += "<div class='pricing_box'>";
          output += "<div class='pricing_box_ti'>";
          output +=
            "<h3> <span>$</span>" + item.Price + "/" + item.Type + "</h3>";
          output += "</div>";
          output += "<div class='our_pricing'>";
          output += "<span>" + item.Title + "</span>";
          output += "<p>" + item.Intro + "</p>";
          output += "</div>";
          output += "</div>";
          output +=
            "<a class='read_more mar_top' href='./appointment.html'> Book Now</a>";
          output += "</div>";
          output += "</div>";
        }
      });
      news3.innerHTML = output;
    }
  };
  xhr.send();
}

function getArticles4(params2) {
  let request = "";
  let count = 0;
  if (params2.iD == 0) {
    request = "limit=" + params2.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/banners?" +
      request,
    true
  );

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        if (item.id > params2.start) {
          if (item.id == 1) {
            output += "<div class= 'carousel-item active ' >";
            output += "<div class= 'container-fluid ' >";
            output += "<div class= 'carousel-caption relative ' >";
            output += "<div class= 'row d_flex ' >";
            output += "<div class= 'col-md-6 ' >";
            output +=
              "<img class= 'bann_img ' src= " + item.images + " alt= '#' / >";
            output += "</div >";
            output += "<div class= 'col-md-6 ' >";
            output += "<h1 >" + item.Title + "</h1 >";
            output += "<p >" + item.More + "</p >";
            output +=
              "<a class= 'get_btn ' href= '/contact-us/online-booking ' role= 'button ' >Get Appoinment</a >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
          } else {
            output += "<div class= 'carousel-item' >";
            output += "<div class= 'container-fluid ' >";
            output += "<div class= 'carousel-caption relative ' >";
            output += "<div class= 'row d_flex ' >";
            output += "<div class= 'col-md-6 ' >";
            output +=
              "<img class= 'bann_img ' src= " + item.images + " alt= '#' / >";
            output += "</div >";
            output += "<div class= 'col-md-6 ' >";
            output += "<h1 >" + item.Title + "</h1 >";
            output += "<p >" + item.More + "</p >";
            output +=
              "<a class= 'get_btn ' href= '/contact-us/online-booking ' role= 'button ' >Get Appoinment</a >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
            output += "</div >";
          }
        }
        console.log(output);
      });
      news4.innerHTML = output;
    }
  };
  xhr.send();
}

function getArticles5(params3) {
  let request = "";
  let count = 0;
  if (params3.iD == 0) {
    request = "_limit=" + params3.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/our_service?" +
      request,
    true
  );

  console.log(xhr);

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        if (item.id > params3.start) {
          output += "<div class='col-md-3 col-sm-6'>";
          output += "<div class='we_box'>";
          output += "<i><img src='" + item.Image_intro + "' alt='#'/></i>";
          output += "<h3>" + item.Title + "</h3>";
          output += "<p>" + item.Intro + "</p>";
          output += "<br> <br>";
          output +=
            "<a href='#' class='read_more mar_top' data-toggle='modal' data-target='#sp" +
            item.id +
            "'>Read More</a>";
          output += "</div>";
          output += "</div>";
          //Modal
          output +=
            "<div class='modal fade' id='sp" +
            item.id +
            "' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
          output += "<div class='modal-dialog modal-lg' style='top: 90px'>";
          output += "<div class='modal-content'>";
          output += "<div class='modal-header'>";
          output +=
            "<h1 class='modal-title' id='exampleModalLabel'>" +
            item.Title +
            "</h1>";
          output +=
            "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
          output += "<span aria-hidden='true'>&times;</span>";
          output += "</button>";
          output += "</div>";
          output += "<div class='modal-body'>";
          output += "<div class='container-fluid'>";
          output += "<div class='row'>";
          output += "<div class='col-md-4'>";
          output +=
            "<img src='" +
            item.Image +
            "' alt='#' class='card-img-top' alt='#'>";
          output += "</div>";
          output += "<div class='col-md-8'>";
          output += "<p><h4 class='card-title'>" + item.Title + "</h4></p>";
          output += "<p><strong>Price: $" + item.Price + "NZD</strong></p>";
          output += "<br>";
          output += "<p>" + item.More + "</p>";
          output += "</div>";
          output += "</div>";
          output += "</div>";
          output += "</div>";
          output += "<div class='modal-footer'>";
          output +=
            "<button type='button' class='read_more mar_top' data-dismiss='modal'>Close</button>";
          output += "</div>";
          output += "</div>";
          output += "</div>";
          output += "</div>";
        }
      });
      news5.innerHTML = output;
    }
  };
  xhr.send();
}

function getArticles6(params2) {
  let request = "";
  let count = 0;
  if (params2.iD == 0) {
    request = "_limit=" + params2.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://my-json-server.typicode.com/kronlam99/chi-thanh-lam-json-api/experts?" +
      request,
    true
  );

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (item) {
        console.log(item.Image);
        if (item.id > params2.start) {
          if (item.id % 2 == 0) {
            output += "<div class='about slin'>";
            output += "<div class='container'>";
            output += "<div class='row d_flex-2'>";
            output += "<div class='col-md-6'>";
            output += "<div class='titlepage'>";
            output += "<h3 id='name'>" + item.Name + "</h3>";
            output += "<br>";
            output += "<p>" + item.More + "</p>";
            output += "</div>";
            output += "</div>";
            output += "<div class='col-md-6'>";
            output += "<div class='about_img'>";
            output +=
              "<figure><img src='" + item.Image + "' alt='#'/></figure>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "<br>";
          } else {
            output += "<div class='about slin'>";
            output += "<div class='container'>";
            output += "<div class='row d_flex-2'>";
            output += "<div class='col-md-6'>";
            output += "<div class='about_img'>";
            output +=
              "<figure><img src='" + item.Image + "' alt='#'/></figure>";
            output += "</div>";
            output += "</div>";
            output += "<div class='col-md-6'>";
            output += "<div class='titlepage'>";
            output += "<h3 id='name'>" + item.Name + "</h3>";
            output += "<br>";
            output += "<p>" + item.More + "</p>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "</div>";
            output += "<br>";
          }
        }
      });
      news6.innerHTML = output;
    }
  };
  xhr.send();
}
