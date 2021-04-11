const animateElement = ( element, speed ) => {
    let textAsArray = element.text().split("");
    element.text(" ");
    let i = 0;

    const writeText = setInterval( () => { 
        if(i < textAsArray.length){
            element.text(element.text() + textAsArray[i]);
            i++;
        } else {
            clearInterval(writeText);
        }
    }, speed);
};

$( document ).ready(function() {
    const speed = 200;
    const elementToAnimate = $('#first_h1');
    animateElement( elementToAnimate, speed);
});