var current_selected_btn;

// // create button from javascript
// window.addEventListener("load", () => {
//     var test = document.getElementById("createBtnInJS")

//     //Create 5 Buttons 
//     for(var i = 0 ; i<5; i++){
//         var button = document.createElement("button");
//         var count = i+1;
//         button.innerHTML = count;
//         button.id = count;
        
//         //Add event click to button
//         button.addEventListener('click',(e) => {
//             current_selected_btn = e.target.id;
//         })
//     }

//     //adding submit event click to submit button
//     var submid_btn = document.getElementById("submid-btn")
//     submid_btn.addEventListener('click', (e) => {
//         submit()
//     })
// })


function click_btn(btn_id)
{
    current_selected_btn = btn_id
}

function submit(){
    var content_box = document.querySelector('.first-content');
    content_box.style.display = 'none'

    var rating = document.querySelector('.rating');
    rating.style.display = 'block'

    var content = `You selected ${current_selected_btn} out of 5`

    console.log(content)
    var result_selection = document.getElementById('result_selection');
    result_selection.innerHTML = content
}