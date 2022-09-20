$(document).ready(function(){
    $(".tabArea .tab li a").on("click", function(){
        const num = $(".tabArea .tab li a").index($(this));
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabCont").removeClass("on");


        $(`.tabArea .tab li:eq(` + num +`)`).addClass("on");
        $(`.tabArea .tabCont:eq(` + num +`)`).addClass("on");
    });
});



// const tab1 = document.getElementById('tab_1')
// const tab2 = document.getElementById('tab_2')
// const cont1 = document.getElementById('cont_1')
// const cont2 = document.getElementById('cont_2')

// let select = 1

// const changeOption = () => {
//     select == 1 ? (
//         tab1.classList.value = 'tab tab_active',
//         cont1.classList.value = 'cont cont_active'
//     )
//     :(
//         tab1.classList.value = 'tab',
//         cont1.classList.value = 'cont'
//     )

//     select == 2 ? (
//         tab2.classList.value = 'tab tab_active',
//         cont2.classList.value = 'cont cont_active'
//     )
//     :(
//         tab2.classList.value = 'tab',
//         cont2.classList.value = 'cont'
//     )
// }

// tab1.addEventListener('click', () => {
//     select = 1
//     changeOption()
// })

// tab2.addEventListener('click', () => {
//     select = 2
//     changeOption()
// })