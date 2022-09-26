/*
Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"*/
function deleteSymbols (Text,[a,b]){
    let newString = ('');
    for( let value in Text){
            if(Text[value]===a || Text[value] === b) {
                delete(value);
            } else{
                newString += Text[value];
            }
    }
    return (newString);
}
const newText = deleteSymbols('Hello world',['l','d']);
console.log(newText);