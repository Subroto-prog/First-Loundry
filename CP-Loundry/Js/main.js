// setInterval(() => {
//     document.querySelector(".kelip").classList.toggle("isVisible");
// }, 1000);

/**
 * onload="kedip()"
 * function kedip() {
           if(document.getElementById("kedip")) {
               var d = document.getElementById("kedip") ;
               d.style.color = (d.style.color == 'blue'?'white':'blue');
               setTimeout('blinker()', 900);
            }
        }
 */

function kelip(){
    const text1 =  document.querySelector("#kelip");
    const text2 =  document.querySelector("#kelip2");
    const text3 =  document.querySelector("#marq");
    const text = [text1, text2, text3]
    setInterval(function () {
        // text1.style.color = "red";
        // text2.style.color = "yellow";
        text[0].style.color = "red";
        text[1].style.color = "yellow";
        text[2].style.color = "gold";
        
        setTimeout(function () {
            text1.style.color = "aqua";
            text2.style.color = "green";
            text3.style.color = "green";
          
        }, 500);
    }, 1000);
}


function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("jam").innerHTML = hours + " : " + minutes + " : " + seconds;
    // + " "+amPm;
    var jamnya = setTimeout(realtimeClock, 500);

}

function kelipJam()
{
     // Kelip Warna
     const jam =  document.querySelector("#jam");
     setInterval(() => {
         jam.style.color = "red";
         setTimeout(() => {
             jam.style.color = "aqua";
         }, 500);
     }, 1500);
}

function tglNow()
{
    const textTgl =  document.querySelector("#tgl");

    var today = new Date();
    arr_bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    var tgl = today.getDate()
    var bulan = arr_bulan[today.getMonth()]
    var tahun = today.getFullYear()

    textTgl.innerHTML = tgl + "-" + bulan + "-" + tahun; 


}