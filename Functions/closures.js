function outerFunction(animal) {

    function innerFunction() {
        console.log(`Inside the ${animal} enclosure`);
    }

    return innerFunction;
}

const lionEnclosure = outerFunction('Lion');
const elephantEnclosure = outerFunction('Elephant');

lionEnclosure(); 
elephantEnclosure(); 

//--------------------------------------

function outerFunction(outerValue) {

    function innerFunction(innerValue) {
        console.log(`Outer value: ${outerValue}`);
        console.log(`Inner value: ${innerValue}`);
    }

    return innerFunction;
}

const closure1 = outerFunction('First');
const closure2 = outerFunction('Second');

closure1('One'); 
closure2('Two'); 
