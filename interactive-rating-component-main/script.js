var current_selected_btn;


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