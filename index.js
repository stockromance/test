const codigo = document.querySelector('#codigo');

codigo.addEventListener('keydown', function(e)
{
    var key = e.keyCode; 

    if(key == 13) 
    {
        //tecla enter
        alert('enter');
    }
    else if(key == 9) 
    {
        //tecla tab
        e.preventDefault();
        alert('tab');
    }
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros: teclado y teclado numerico   
    }    
    else if(key == 37 || key == 39 || key == 8 || key == 46 || key == 9)
    {
        //izquierda, derecha, suprimir, borrar, tab
    }
    else
    {        
        e.preventDefault();
    }
});