$(document).ready(function(){
  updateHead();

  displayNavigationBar();

  displaySideBar();

  updateFooter();
});

function updateHead(){
  console.log("updateHead...");

  var html = "<meta charset='utf-8'>";
  html += "<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
  html += "<title>Phillip Patrick</title>";
  html += "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS' crossorigin='anonymous'>";
  html += "<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>";
  html += "<link href='https://fonts.googleapis.com/css?family=Fredericka+the+Great|Special+Elite|Life+Savers' rel='stylesheet'>";
  html += "<link rel='stylesheet' href='css/styles.css'>";
  html += "<link rel='shortcut icon' href='img/favicon-green.ico' type='image/x-icon'>";
  html += "<link rel='icon' href='img/favicon-green.ico' type='image/x-icon'>";
  html += "<link rel='stylesheet' href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'>";
  html += "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' integrity='sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut' crossorigin='anonymous'></script>";
  html += "<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' integrity='sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k' crossorigin='anonymous'></script>";
  html += "<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->";
  html += "<!--[if lt IE 9]>";
  html += "<script src='https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js'></script>";
  html += "<script src='https://oss.maxcdn.com/respond/1.4.2/respond.min.js'></script>";
  html += "<![endif]-->";

  $('head').prepend(html);
}

function displayNavigationBar(){
  console.log("displayNavigationBar...");

  var html = "<nav id='my-navbar' class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' role='navigation'>";
  html += "<a class='navbar-brand d-flex w-50 mr-auto' href='#'>Phillip Patrick</a>";
  html += "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
  html += "<span class='navbar-toggler-icon'></span>";
  html += "</button>";
  html += "<div class='collapse navbar-collapse w-100' id='navbarSupportedContent'>";
  html += "<ul class='navbar-nav w-100 justify-content-center'>";
  html += "<li class='nav-item'>";
  html += "<a href='https://github.com/phillipnpatrick' target='_blank' title='GitHub' class='social-icon'><i class='fab fa-github'></i></a>";
  html += "</li>";
  html += "<li class='nav-item'>";
  html += "<a href='https://www.linkedin.com/in/phillipnpatrick/' target='_blank' title='LinkedIn' class='social-icon'><i class='fab fa-linkedin'></i></a>";
  html += "</li>";
  html += "</ul>";
  html += "<ul class='nav navbar-nav ml-auto w-100 justify-content-end'>";
  html += "<li class='nav-item'>"
  html += "<a class='nav-link' href='home.html'>Home</a>";
  html += "</li>";
  html += "<li class='nav-item'>";
  html += "<a class='nav-link' href='personal.html'>Hobbies</a>";
  html += "</li>";
  html += "<li class='nav-item'>";
  html += "<a class='nav-link' href='professional.html'>Professional</a>";
  html += "</li>";
  html += "<li class='nav-item'>";
  html += "<a class='nav-link' href='faq.html'>FAQ</a>";
  html += "</li>";
  html += "<li class='nav-item'>";
  html += "<a class='nav-link' href='contact.html'>Contact</a>";
  html += "</li>";
  html += "</ul>";
  html += "</div>";
  html += "</nav>";

  $("#navigationBar").append(html);
}

function displaySideBar(){
  console.log("displaySideBar...");

  var html = "<h6>Technology Used on this Site</h6>";
  html += "<div id='sidebarTechnology' class='technology'>";
  html += addLanguage("bootstrap", "sidebar-icon-language");
  html += addLanguage("css3", "sidebar-icon-language");
  html += addGitHub("sidebar-icon-language", "https://github.com/phillipnpatrick/portfolio", "");
  html += addLanguage("heroku", "sidebar-icon-language");
  html += addLanguage("html5", "sidebar-icon-language");
  html += addLanguage("javascript", "sidebar-icon-language");
  html += addLanguage("jquery", "sidebar-icon-language");
  html += "</div>";

  $(".sidebar").append(html);
}

function updateFooter(){
  console.log("updateFooter...");

  $("footer").append("<hr><div id='copyright' class='copyright'>&copy; 2019 | Phillip N. Patrick</div>");
}
