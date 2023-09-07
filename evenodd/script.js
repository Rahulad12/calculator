
var click = document.getElementById('btn');
function checkoddeven(){
    var n = parseInt(document.getElementById('num').value);
    var output = document.getElementById('result')
    function check(n){
        if (n % 2 == 0) {
            // console.log(n + "is even")
            return (n + "" + " IS EVEN");
        }
        else{
            return ( n + "" + " IS ODD");
        }
    }
    output.innerHTML = check(n)
    
}
click.addEventListener('click',checkoddeven)
