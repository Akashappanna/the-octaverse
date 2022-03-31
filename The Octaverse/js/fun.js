<script>
		     function f() {
                      //x.classList.toggle("change");
					  var con = document.getElementsByClassName("nav-switch")[0];
					  con.classList.toggle("change");
					  var nav_tab = document.getElementsByClassName("header__links_nav");
					  if(nav_tab[0].style.display == "block"){
					     nav_tab[0].style.display="none";
						 }else{
						 nav_tab[0].style.display = "block";
						 }
              } 
</script>