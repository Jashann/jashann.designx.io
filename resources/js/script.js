window.onload = contentLoaded;

let nShow = false; let sShow = false; let clicked = false;

function contentLoaded()
{
//  Start of mobile header
    const headerM = document.querySelector(".container-m");
    
    header.onclick = function(e)
    {
        let target = e.target.id;
        
        if(target == "nav-tog" )
        {
            let navbar = document.querySelector("header #navbar"); clicked=true;
            if(!nShow)
            {   
                if(sShow)
                {
                    searchbar.style.display = "none"; 
                    sShow = false;
                }
                navbar.style.display = "block";
                nShow = true;
            }
            else
            {
                navbar.style.display = "none"; 
                nShow = false;  
            }
        }
        if(target == "search-i")
        {
            let searchbar = document.querySelector("#searchbar"); clicked=true;
            if(!sShow)
            {
                if(nShow)
                {
                    navbar.style.display = "none"; 
                    nShow = false;
                }
                searchbar.style = "display : block";
                sShow = true;
            }
            else
            {
                searchbar.style = "display : none";
                sShow = false;
            }
            
        }
    }//End of header
    
//    Start of Welcome show
      if(document.title==="Home-th")
      {
               let btn = $('#find-w');
                
               btn.on("click",function()
               {
                   $("#find-p").slideToggle(1000);
               });
      }
//    End of Welcome show 
    
//  Start of Services
    const section4 = document.querySelector("#section-4"); 
    section4.addEventListener('click',hideOrShow);
    function hideOrShow(e)
    {
        if(e.target.tagName=="IMG")
        {
            let img = e.target;
            let service = img.parentElement;
            let p = service.querySelector("p");
            if(!p.classList.contains('open'))
                p.classList.add('open');
            else
                p.classList.remove('open');
            
        }
    }
//    End of Services
    
//   Start of Smooth Navbar
    $('#navbar a').click(function(e)
    {
        if(e.hash!=='')
        {
            console.log(e.hash);
        }
    })
//   End of Smooth Navbar
}//End of contentLoaded

// Start of Window Size Function
function size()
{
    let w = window.innerWidth;
        if((sShow===true || nShow===true) && w>=958 && clicked===true)
        {
            document.querySelector("#navbar").style.display = 'block';
            document.querySelector("#searchbar").style.display = 'block';
            sShow=false; nShow=false;
        }
        if((sShow===false || nShow===false) && w<=568 && clicked===true)
        {
            document.querySelector("#navbar").style.display = 'none';
            document.querySelector("#searchbar").style.display = 'none';
            sShow=true; nShow=true;
        }
}
document.body.onresize =size ;

// End of Window Size Function

