
document.addEventListener('DOMContentLoaded', function () {

    var tipElems = document.getElementsByClassName('tooltip');

    for(var i =0; i<tipElems.length; i++){

        tipElems[i].addEventListener('mouseover', function () {
            var popUp = document.createElement('span');
            popUp.classList.add('tooltipText');
            popUp.innerText = this.dataset.text;
            this.appendChild(popUp);
        });

        tipElems[i].addEventListener('mouseout', function () {
            this.removeChild(this.lastChild);
        });
    }
});