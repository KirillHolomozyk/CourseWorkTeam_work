//for third_page.html !!!!

let but_arr = document.querySelectorAll('button');
let svg_ups = document.querySelectorAll('.up');

let svg_down = document.querySelectorAll('.down');

let arrow = [false, false, false];
function f10(point) {
    // console.log(this);
    // console.log(point);
    if(arrow[point] == false){
        for(let i =0; i<svg_ups.length; i++){
            svg_ups[point].style.display = 'inline';
            svg_down[point].style.display = 'none';
        }
        showList(point);
        arrow[point] = true;
    }
    else{
        for(let i =0; i<svg_ups.length; i++){
            svg_ups[point].style.display = 'none';
            svg_down[point].style.display = 'inline';
        }
        hideList(point);
        arrow[point] = false;
    }

}

for (let i = 0; i < but_arr.length; i++) {
    but_arr[i].onclick = () =>{
        f10(i);
    }
}

function showList(point){
    return 1 ; //here will be table with data
}

function hideList(point){
    return 0; // hide table with data
}