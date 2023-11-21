const button = document.getElementById('calc');


button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    let età = document.getElementById('age').value;
    let ticket = 0.21 * km ;
    
    if(età < 18){
        sconto = ticket * 0.2;
        ticket = ticket - sconto
        console.log(ticket,'paghi col 20% di sconto');
    }
    else if(età > 64){
        sconto =  ticket * 0.4;
        ticket = ticket - sconto
        console.log(ticket,'paghi col 40% di sconto');
    }
    else {
        console.log(ticket, 'paghi tariffa intera');
    }
    
    let n = ticket.toFixed(2);
    document.getElementById("cost").innerHTML = n;
    document.getElementById("cost").innerHTML = `Il prezzo del biglietto finale è ${n}` + "€";
});


const button2 = document.getElementById('button2');

button.addEventListener('click', function(){
    let nome = document.getElementById('name').value;
    let cognome = document.getElementById('surname').value;

    document.getElementById('show').innerHTML = nome + cognome + n + "€"
})



