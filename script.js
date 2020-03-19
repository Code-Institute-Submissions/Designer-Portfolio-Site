$(document).ready(function(){
    $('#sidebarCollapse').click(function(){
        // alert('hi')
        $('#nav-bar').toggleClass('active')
        $('#sidebarCollapse i').toggleClass('fa-rotate-180')
    })

})