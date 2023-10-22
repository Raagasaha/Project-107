function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4j7flqlKZ/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -  '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -  '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        ++random_number_r+","+random_number_g+","+random_number_r+")";

     img1 = document.getElementById('moo');
  img2 = document.getElementById('bark');
 img3 = document.getElementById('meow');
   img4 = document.getElementById('roar');

   if (results[0].label == "Moo") {
    img1.src = 'https://i.postimg.cc/F1tGWQwc/cow-moo.gif';
    
   } else if (results[0].label == "Barking") {
 
     img2.src = 'https://i.postimg.cc/v85PT4nt/1426001329-1283665577.gif';
      
   }
 else if (results[0].label == "Meow") {
 
       img3.src = 'https://i.postimg.cc/m2JNSR7g/raw.gif';
 }
       else if (results[0].label == "Roar") {
       
              img4.src = 'https://i.postimg.cc/254w6Jb8/lion-roar.gif';
   }else {
     img1.src = 'background_noise.jpeg';
     img2.src = 'background_noise.jpeg';
      img3.src = 'background_noise.jpeg';
       img4.src = 'background_noise.jpeg';

   }
 }
}
