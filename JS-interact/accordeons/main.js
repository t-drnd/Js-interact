let accordeons = document.querySelectorAll('.accordeon')
accordeons.forEach(function (accordeon){
    accordeon.addEventListener('click', function (){
        console.log('Click sur un accordeon');
    })
})