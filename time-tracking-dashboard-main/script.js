var jsonData;

async function getData() {
    const response = await fetch('./data.json');
    jsonData = response.json()
    return jsonData;
  }
  
jsonData = await getData();
setText('daily')


var links = document.querySelectorAll(".link");
for (var link of links) {
    link.addEventListener("click", function (e) {
        console.log(e.target)
        for (var inlink of links) {
            inlink.classList.remove("active");
        }
        e.target.classList.add("active");
        var menu = e.target.innerHTML.toLowerCase()
        setText(menu);
    });
}


function setText(menu) {
    var menuText;

    switch (menu) {
        case 'weekly':
            menuText = "week";
            break;
        case 'monthly':
            menuText = "month";
            break;
        case 'daily':
            menuText = "yesterday";
            break;
    }

    for (var data of jsonData) {
        var dataFromMenu = data.timeframes[menu];
        var info = data.title.toLowerCase().replace(" ", '-');
        var doc = document.getElementById(info);
        var current = doc.querySelector('.current-record')
        var previous = doc.querySelector('.previous-record')
        current.innerHTML = dataFromMenu.current + 'hrs'
        previous.innerHTML = 'Last ' + menuText + '-' + dataFromMenu.previous + 'hrs'
    }
}