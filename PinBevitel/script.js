let checkbox = false;
let click = 0;
let lenght = 10;
$(function(){
placeNumbs(lenght);
$('.btnReset').on('click', reset);
$('.btnConsole').on('click', displayConsole);
$('#center').on('click',()=>{
    checkbox = !checkbox;
    if(checkbox){
        $('.numb:last-child').addClass('lastnumb');
    }else{
        $('.numb:last-child').removeClass('lastnumb');
    }
})
});

function displayConsole(){
    let items = $('.numbContainer p');
    let index = 1;
    let string = "";

    for (let element of items) {
        if(index % 3 ==0 ){
            string += $(element).text()+"\n";
            console.log(index)
        }else{
            if( checkbox && index == items.lenght-1){
                console.log('asd')
                string +=" "+$(element).text();
            }else{
                string +=$(element).text();
            } 
        }
        
        index++;
    }
    console.log(string)
}

function reset(){
    click = 0;
    $('.displayField p').html('_');
    $('.displayField').css('color','white');
    placeNumbs(10);
    if(checkbox){
        $('.numb:last-child').addClass('lastnumb');
    }
}

function placeNumbs(lenght){
    $('.numbContainer').html('');
    let numbers = [];
    for (let index = 0; index < lenght; index++) {
        numbers.push(index);
    }
    shuffle(numbers);
    for (let index = 0; index < numbers.length; index++) {
        $('.numbContainer').append('<p class="numb">'+numbers[index]+'</p>')
    }
    $('.numb').on('click', dosomething);
}

function dosomething(event){
    //multiplication(event);
    if(click ==3){
        $('.numb').off();
        $('.numb').addClass('numboff')
        }
    displayCode($(event.target).text());
}

function displayCode(code){
    if($('.displayField p').text() == "_"){
        $('.displayField p').html("");
        $('.displayField').css('color', 'black')
    }
    $('.displayField p').append(code);
    click++;
}

function multiplication(item){
    $(item.target).html($(item.target).text()*-1);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }