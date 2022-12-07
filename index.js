// $(document).ready(function(){

//     $('#menu').click(function(){
//       $(this).toggleClass('fa-times');
//       $('header').toggleClass('toggle');
//     });
  
//     $(window).on('scroll load',function(){
  
//       $('#menu').removeClass('fa-times');
//       $('header').removeClass('toggle');
  
//       if($(window).scrollTop() > 0){
//         $('.top').show();
//       }else{
//         $('.top').hide();
//       }
  
//     });
  
//     // smooth scrolling 
  
//     $('a[href*="#"]').on('click',function(e){
  
//       e.preventDefault();
  
//       $('html, body').animate({
  
//         scrollTop : $($(this).attr('href')).offset().top,
  
//       },
//         500, 
//         'linear'
//       );
  
//     });
  
//   });
  let sidemenu = document.getElementById("SideBar");

const openMenu = () => {
	sidemenu.style.right = "0";
}

const closeMenu = () => {
	sidemenu.style.right = "-200px";
}

  // const Nav = () => {
  //   return `<nav class="nav" role="navigation">
      
  //   // <h3 class="logo" id="change">Portfo<span>lio</span></h3>
  //   <ul class="nav__items" id="SideBar">
  //     <li class="nav__item">
  //       <a href="#top" class="nav__link">Home</a>
  //     </li>
  //     <li class="nav__item">
  //       <a href="#About" class="nav__link">About</a>
  //     </li>
  
  //     <li class="nav__item">
  //     <a href="./img/Krishna Keshav Resume.pdf" download="Krishna Keshav Resume" title="Download Resume" class="nav__link">Resume</a>
  //     </li>
      
  //     <li class="nav__item">
  //       <a href="#Skills" class="nav__link">Skills</a>
  //     </li>
  //     <li class="nav__item">
  //       <a href="#projects" class="nav__link">Projects</a>
  //     </li>
  //     <li class="nav__item">
  //       <a href="#contact" class="nav__link">Contact</a>
  //     </li>
  
  //     <li class="nav__item">
  //       <a href="#Git" class="nav__link">Contribution</a>
  //     </li>
      
  
  //         <i class="fa-sharp fa-solid fa-xmark" onclick="closeMenu()"></i>
  //   </ul>
  //     <i class="fa-solid fa-bars" onclick="openMenu()"></i>
  // </nav>`
  // }

  // document.querySelector("#nav").innerHTML = Nav();
  
  const skills = () => {

    return `<div class="row">
    
    <h1 class="heading"> <span>My</span>Skills</h1>
    <div class="Myslills">
      <ul class="Thechical">
        <li><img src="./img/Java-PNG-Clipart.png" class="project__logo" alt="Java" /></li>
        <li><img src="./img/spring.png" class="project__logo" alt="Springboot" /></li>
        <li><img src="./img/mysql.png" class="project__logo" alt="MySql" /></li>
        <li><img src="./img/hibernate.png" class="project__logo" alt="Hibernate" /></li>
        <li><img src="./img/js-logo.png" class="project__logo" alt="JavaScript" /></li>
        <li><img src="./img/dsa.webp" class="project__logo" alt="DSA" /></li>
        <li><img src="./img/HTML5_Logo_512.png" class="project__logo" alt="HTML" /></li>
        <li><img src="./img/css-3-logo-png-transparent.png" class="project__logo" alt="CSS" /></li>
        <li><img src="./img/git.png" class="project__logo" alt="Git" /></li>
        <p></p>
      </ul>
    </div>
  </div>`
  
  }
  document.querySelector("#Skills").innerHTML = skills();

  const root = document.documentElement;
  const Elements = getComputedStyle(root).getPropertyValue("--Myslills-elements-displayed");
  const MySkills = document.querySelector("ul.Thechical");
  
  root.style.setProperty("--Myslills-elements", MySkills.children.length);
  
  for (let i = 0; i < Elements; i++) {
    MySkills.appendChild(MySkills.children[i].cloneNode(true));
  }

document.getElementById("resume_button_1").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1wpB4xqCoIRlumqVN95RXQl6OEbWncXKe/view?usp=sharing", "_blank");

})

document.getElementById("resume_button_2").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1wpB4xqCoIRlumqVN95RXQl6OEbWncXKe/view?usp=sharing", "_blank");

})

  const Href = () => {
    let Src = [
      "./img/Java-PNG-Clipart.png",
      "./img/js-logo.png",
      "./img/spring.png",
      "./img/hibernate.png",
      "./img/mysql.png",
      "./img/dsa.webp",
      "./img/HTML5_Logo_512.png",
      "./img/css-3-logo-png-transparent.png",
      "./img/git.png",
    ];
    return Src;
  };
  
  const TechStack = () => {
    let skills = ["Java", "Mysql", "Spring boot", "JavaScript", "DSA", "Hibernate", "HTML", "CSS", "Git",]
    return skills;
  }
  const len = TechStack();
  
  const Src = Href();
