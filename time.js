function display_ct5()
{
    var x = new Date()

    var minutes = (x.getMinutes() < 10 ? '0' : '') + x.getMinutes();
    var seconds = (x.getSeconds() < 10 ? '0' : '') + x.getSeconds();
    var x1 = x.getHours( ) + ":" + minutes + ":" +  seconds;
    document.getElementById('time').innerHTML = x1;
    display_c5();
}
function display_c5()
{
    var refresh=1000;
    mytime=setTimeout('display_ct5()', refresh)
}
display_c5()