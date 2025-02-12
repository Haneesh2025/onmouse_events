var body=document.getElementById("body")
body.style.height="500px"
body.style.width="900px"
body.style.marginTop="100px"
body.style.marginLeft="200px"
body.style.border="2px solid black "

var pic1=document.getElementById("pic1")
var pic2=document.getElementById("pic2")
var pic3=document.getElementById("pic3")
var pic4=document.getElementById("pic4")
var pic5=document.getElementById("pic5")

pic1.style.border="2px solid red"
pic1.style.backgroundImage="url(https://img.freepik.com/premium-photo/female-hands-holding-bouquet-decorated-vintage-style-dark-background_94863-1096.jpg?w=740)"
pic1.style.backgroundSize="cover";


pic2.style.border="2px solid red"
pic2.style.backgroundImage="url(https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
pic2.style.backgroundSize="cover";

pic3.style.border="2px solid red"
pic3.style.backgroundImage="url(https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
pic3.style.backgroundSize="cover";

pic4.style.border="2px solid red"
pic4.style.backgroundImage="url(https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
pic4.style.backgroundSize="cover";

pic5.style.border="2px solid red"
pic5.style.backgroundImage="url(https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
pic5.style.backgroundSize="cover";
 
// Pic 1
function change1(){
    document.getElementById("pic1").style.backgroundImage="url(https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
}

// Pic2
function change2(){
    document.getElementById("pic1").style.backgroundImage="url(https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
}

// Pic3
function change3(){
    document.getElementById("pic1").style.backgroundImage="url(https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
}

// Pic4
function change4(){
    document.getElementById("pic1").style.backgroundImage="url(https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
}

// default pic
function def1(){
    document.getElementById("pic1").style.backgroundImage="url(https://img.freepik.com/premium-photo/female-hands-holding-bouquet-decorated-vintage-style-dark-background_94863-1096.jpg?w=740)"
}
