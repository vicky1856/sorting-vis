// import { array } from './js_files/sorting.js'
async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    //write your code here
    console.log(ele[2].style.height);
    console.log(ele.length)
    console.log(array);
    for(let i = 0; i < ele.length-1; i++){
           
        for(let j = 0; j < ( ele.length - i -1 ); j++){
           

          if(parseInt(ele[j].style.height) >parseInt( ele[j+1].style.height)){
             
            // If the condition is true then swap them
            
            swap(ele[j],ele[j+1]);
          }
          ele[j].style.background='purple';

        }
        ele[0].style.background='purple';
      }
      ele[ele.length  -1 ].style.background='purple';
      // Print the sorted array
      console.log(array);
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});



    