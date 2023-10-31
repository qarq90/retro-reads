let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
    });

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");

    });



    function checkcookie(){

        if (document.cookie)
        {
            
            var usermm = getCookie("useremail")
            var userp = getCookie("userpass")
            document.getElementById("setmail").value = usermm ;
            document.getElementById("setpass").value = userp ;
        }
        else
        {
            alert("No previous Sign in")
        }
    }


    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }


    function setcookie(){
        
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let normieDate = new Date()
        let expDate = new Date(normieDate.getFullYear(),normieDate.getMonth()+1,normieDate.getUTCDate())
        
        const m = document.getElementById("usermail").value;
        const p = document.getElementById("userpassword").value;


            if(!m.match(mailformat))
            {
                alert("Enter valid email address");
            }
            else if(p.length < 5)
            {
                alert("Password length must be greater than 4 digits");
            }
            else
            {
                document.cookie="useremail="+m+";expires="+expDate;
                document.cookie="userpass="+p+";expires="+expDate;
            }

            
        window.location.href = "index.html"
    }


   function loginbtn()
    {
        
        if (document.cookie){
        window.location.href = "index.html"
        }
        else
            {
                alert("Please sign up first")
            }
    }