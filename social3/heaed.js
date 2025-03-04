document.addEventListener('DOMContentLoaded', loadHeader);
           
function loadHeader(){
    
    document.getElementById('header-container').innerHTML = fetch('header.html');
}