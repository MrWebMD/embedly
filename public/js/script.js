let slideController;
let resultEmbedLinkNode;

const main = () => {

  slideController = new SlideController();

  resultEmbedLinkNode = document.createTextNode("");

  document.querySelector(".embedLink").appendChild(resultEmbedLinkNode);

  resultEmbedLinkNode.nodeValue = "No embeds created yet";

  document.embedForm.onsubmit = embedFormSubmitHandler;

};


const embedFormSubmitHandler = (event) => {
  event.preventDefault();

  let { description, image, title, redirect, siteName } = event.target.elements;

  let embedData = {
    description: description.value,
    image: image.value,
    title: title.value,
    redirect: redirect.value,
    siteName: siteName.value
  };

  slideController.next();

  createEmbed(embedData)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      
      if(res.status !== 200) {
        resultEmbedLinkNode.nodeValue = res.message;
      } else {
        let embedLink = `http://${location.hostname}/e/${res.shortKey}`
        resultEmbedLinkNode.nodeValue = `Here's your embed link: ${embedLink}`
      }
      slideController.next();
    });

};

const createEmbed = (embedData) =>
  fetch("/api/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(embedData),
  });

window.onload = main;
