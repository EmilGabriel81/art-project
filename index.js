

// var section = document.querySelectorAll('.section');
// console.log(section);


checkImage();
// checkDescription();



function checkImage() {
  var imgList = document.getElementsByTagName("img");
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].onclick = function(){
      window.open(
        this.src,
        "My Image",
        "resizable=yes,scrollbars=yes, width=1024, height=768"
      );
      console.log("image clicked", this);
    };
  }
}//checkImage()

function checkDescription() {
  var descList = document.getElementsByClassName("about");
  console.log(descList);
  for (var i = 0; i < descList.length; i++) {
    descList[i].onclick = function () {
      window.open(this.innerHTML, 
        "Description", 
        "width=640, height=480");
      console.log("description clicked"+this.textContent);
    }   
  }  
}//checkDescription()


