var toastbox = document.getElementById("toast-box");
var btn = document.querySelectorAll("#btns button");

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let toast = document.createElement("div");
    toast.className = "toast";
    let imgs = document.createElement("img");
    imgs.className = "imgs";
    if (e.target.innerHTML == "Succes") {
      imgs.src = "success.png";

      imgs.classList.add("img1");
      toast.classList.add("success");
      toast.appendChild(imgs);
      toast.appendChild(document.createTextNode("Request was successful"));
    } else if (e.target.innerHTML == "Error") {
      imgs.src = "error.png";
      imgs.classList.add("img2");
      toast.appendChild(imgs);
      toast.classList.add("error");
      toast.appendChild(document.createTextNode("Please fix the error"));
    } else if (e.target.innerHTML == "Invalid") {
      toast.appendChild(imgs);
      imgs.src = "invalid.png";
      imgs.classList.add("img3");
      toast.classList.add("invalid");
      toast.appendChild(document.createTextNode("Input is invalid"));
    }

    toastbox.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 5000);
  })
);
