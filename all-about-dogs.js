//breeds.html
function description1() {
  document.getElementById("description1").innerHTML = "The Labrador Retriever, often abbreviated to Labrador or Lab, is a breed of retriever-gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. The Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.";
  document.getElementById('lab').remove();
}
function description2() {
  document.getElementById("description2").innerHTML = "The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name <q>retriever</q> refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.";
  document.getElementById('golden').remove();
}
function description3() {
  document.getElementById("description3").innerHTML = "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised.";
  document.getElementById('poodle').remove();
}
function description4() {
  document.getElementById("description4").innerHTML = "The Bulldog, also known as the English Bulldog or British Bulldog, is a medium-sized dog breed. It is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose. The Kennel Club, the American Kennel Club, and the United Kennel Club oversee breeding records.";
  document.getElementById('bulldog').remove();
}
function description5() {
  document.getElementById("description5").innerHTML = "The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare.";
  document.getElementById('beagle').remove();
}
function description6() {
  document.getElementById("description6").innerHTML = "The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. According to the FCI, the breed's English language name is German Shepherd Dog.";
  document.getElementById('german').remove();
}


//index.html
function readMore() {
  var halfway = document.getElementById("halfway");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  
  if (halfway.style.display === "none") {
    halfway.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  else {
    halfway.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


//age-calc.html
function CalculateAge(){
  
  var userDateinput = document.getElementById("dob").value;  
  console.log(userDateinput);
       
  var birthDate = new Date(userDateinput);
  console.log(" birthDate"+ birthDate);
       
  var difference=Date.now() - birthDate.getTime(); 
            
  var  ageDate = new Date(difference); 
  var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
  alert(calculatedAge + " years old");
}
  
  