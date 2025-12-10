// padrão para as strings será aspas simples!

console.log('Exercício 1: Strings de três maneiras diferentes.');
    console.log('Aspas simples');
    console.log("Aspas duplas");
    console.log(`Template literals ou backticks, exibindo uma soma de exemplo: 5 + 5= ${5+5}`);

console.log('\n');

console.log('Exercício 2: Três tipos de numbers.');
    console.log(123);//inteiro
    console.log(3.5);//casa decimal, usa ponto
    console.log((3*(12+4))/8);//aritmética

console.log('\n');

console.log('Exercício 3: Três comparações resultantes em boolean.');
    console.log(5>2);//maior que
    console.log(2<5);//menor que
    console.log('Matheus' != 'João');//diferente

console.log('\n');

console.log('Exercício 4: Três comparações com operadores lógicos.');
    console.log(3==3 && 4>1);//and
    console.log(3==1 || 'Ana' == 'Maria');//or
    console.log(!(2===2));//not

console.log('\n');

console.log('Exercício 5: Operação que emita NaN.');
    console.log('dois'*2);//not a number

console.log('\n');

console.log('Exercício Extra: Crie uma variável chamada isActive com o valor booleano de true. Imprima com console.log o valor da variável');
    let isActive = 2 == 2;
    console.log(isActive);