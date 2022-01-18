var form = document.getElementById("mainForm")
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var search = document.getElementById("search").value;
  var uName = search.split(' ').join('');
  var fullQuery = "https://api.github.com/users/"+uName;
  document.getElementById("result").innerHTML = "";
  fetch(fullQuery)
  .then(function(result){
    // if not found
    if(!result.ok){
      document.getElementById("result").innerHTML = `<h3>Profile not found</h3>`
      throw Error(res.statusText);
    }
    // read as json and pass data to next then
    else{
      return result.json();
    }
  })
  .then((data) => {
      document.getElementById("result").style.backgroundColor = "#2f2f2fbe";
      document.getElementById("result").innerHTML = `
        <div class=column style="height: 150px;">
          <a target="_blank" href="https://github.com/${uName}"><img id="profilePhoto" src="${data.avatar_url}"></img></a>
        </div>
        <div class="column" style="width: 310px;">
          <h3 style="padding-right: 10px;"><a target="_blank" href="${data.html_url}">${uName}</a></h3>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-code-branch"></i></span>Public Repos : ${data.public_repos}</li>
            <li><span class="fa-li"><i class="fas fa-user-plus"></i></span>Followers : ${data.followers}</li>
            <li><span class="fa-li"><i class="fas fa-calendar-check"></i></span>Created at : ${data.created_at}</li>
            <li><span class="fa-li"><i class="fas fa-calendar-day"></i></span>Updated at : ${data.updated_at}</li>
          </ul>
        </div>`
  })
})
