//send a request and get back a responce form the server
fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    let sectionEl = document.querySelector("#main");
    console.log(data);
    for (const post of data.data.children) {
      //creating Div Element
      let divEl = document.createElement("div");
      //adding title to the page
      let titleEl = document.createElement("h1");
      titleEl.innerText = post.data.title;
      //putting title in Div
      divEl.appendChild(titleEl);

      //add Image !!!!!! (easies is using thumbnail)
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", post.data.thumbnail);
      //putting image in div
      divEl.appendChild(imgEl);

      //ad Working link !!!!
      let linkEl = document.createElement("a");
      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${post.data.permalink}`
      );
      linkEl.innerText = "click me";
      //putting link in div
      divEl.appendChild(linkEl);

      //putting Div into section
      sectionEl.appendChild(divEl);
    }
  });
