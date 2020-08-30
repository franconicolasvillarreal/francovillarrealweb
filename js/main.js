$( document ).ready(function() {
    let first_h1 = $('#first_h1');
    let first_h2 = $('#first_h2');
    let h1text = first_h1.text().split("");
    let h2text = first_h2.text().split("");
    first_h1.text(" ");
    first_h2.text(" ");
    let typeText1Finish = false;

    let i1 = 0;
    let typeText1 = setInterval(function(){ 
        if(i1 < h1text.length){
            first_h1.text(first_h1.text() + h1text[i1]);
            i1++;
        } else {
            typeText1Finish = true;
            clearInterval(typeText1);
        }
    }, 200)

    let i2 = 0;
    let typeText2 = setInterval(function(){ 
        if(typeText1Finish){
            if(i2 < h2text.length){
                first_h2.text(first_h2.text() + h2text[i2]);
                i2++;
            } else {
                clearInterval(typeText2);
            }
        }
        
    }, 200)

});