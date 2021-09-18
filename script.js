var form = document.getElementById('form');

var output = document.getElementById('output');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var tax = form['tax'].value;
    var amount = form['amount'].value;
    output.innerHTML = `<p>The taxable amount on Ghs ${amount} is Ghs${amount*(tax/100)}</p>`
});
