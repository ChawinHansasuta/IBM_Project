function compute(p, r, y)
{
    let pvalue;
    p = parseFloat(p);
    r = parseFloat(r);
    y = parseFloat(y);

    pvalue = p * Math.pow(1 + (r / 100), y);
    pvalue = pvalue.toFixed(2);
    display("result", pvalue);
    return pvalue;
}

function display(ElementID, pvalue){
    document.getElementById(ElementID).innerHTML = "result: " + pvalue;
}
        