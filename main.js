



function myFunction(event)
{
event.preventDefault()
let sceltaLavoro= document.getElementById('inputWork').value;
    console.log(sceltaLavoro);
    let NumeroOre = document.getElementById('inputHour').value;
    console.log(NumeroOre);
    let priceBack = 20.5 * NumeroOre; 
    let priceFront = 15.3 * NumeroOre; 
    let priceProject = 33.6 * NumeroOre; 

    if ((sceltaLavoro === 'back')) {
        document.getElementById("bottone").innerHTML= (priceBack.toFixed(2)) ;
    }
    else if ((sceltaLavoro === 'front')) {
        document.getElementById("bottone").innerHTML= (priceFront.toFixed(2))  ;
    }
     else if((sceltaLavoro === 'analisi')){
        document.getElementById("bottone").innerHTML= (priceProject.toFixed(2)) ;
    }
    }


    

    




    

