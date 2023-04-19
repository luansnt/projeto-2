function calcular(){
    let A = Number(document.querySelector('#txtA').value)
    let B = Number(document.querySelector('#txtB').value)
    let C = Number(document.querySelector('#txtC').value)
    
    const res = document.querySelector('#res')
    var delta = B*B - 4*A*C
   
    if(B == 0){
        var nume = (-C/A > 0) ? (-C/A) : (-C/A) * -1
        
        var semB1 = +(Math.sqrt(nume))
        var semB2 = -(Math.sqrt(nume))
        escreverSemB(A,C,nume,res)
        res.innerHTML += `<p>O X uma linha é igual à ${String(semB1).replace('.',',')} <br> E o X duas linhas é igual à ${String(semB2).replace('.',',')}</p>`

    }else if(delta <= 0 ){
        escreverEqua(res, A,B,C,delta)
        res.innerHTML += "<p> O X é inexistente </p>"

    }else{
        escreverEqua(res, A,B,C,delta)
        var X1 = ((-B + Math.sqrt(delta)) / (2*A))
        var X2 = (-B - Math.sqrt(delta)) / (2*A)
        res.innerHTML += `<p>O X uma linha é igual à ${String(X1).replace('.',',')} <br> E o X duas linhas é igual à ${String(X2).replace('.',',')}</p>`
    }
    
}

function escreverEqua(res, A,B,C, delta){
    res.innerHTML = `<p> &Delta; = ${B}<sup>2</sup> - 4 x ${A} x ${C} </p>`
    res.innerHTML += `<p> &Delta; = ${B**2} - ${4*A*C}</p>`
    res.innerHTML += `<p> &Delta; = ${delta}</p>`
}

function escreverSemB(A,C,nume,res){
    res.innerHTML = `<p> x<sup>2</sup> = ${-C}/${A}</p>`
    res.innerHTML += `<p> x<sup>2</sup> = ${-C/A }</p>`
    res.innerHTML += `<p> x = &PlusMinus; &Sqrt;${nume}</p>`
}

