document.addEventListener("DOMContentLoaded", function(){
    // declare to click
    var button = document.getElementsByClassName('toClick');
    var content = document.getElementsByClassName('toShow');
    
    for (var i = 0; button.length; i++){
        button[i].onclick = function(){
            if(this.classList[1] == 'white')
            {
                this.classList.remove('white');
                var contentShow = this.getAttribute('data-show');
                var elementShow = document.getElementById(contentShow);
                elementShow.classList.toggle('show');
            }
            else
            {
                for (var k = 0; k < button.length; k++){
                    button[k].classList.remove('white');
                }

                this.classList.toggle('white');

                var contentShow = this.getAttribute('data-show');
                var elementShow = document.getElementById(contentShow);
                for (var i = 0; i < content.length; i++){
                    content[i].classList.remove('show');
                }
                elementShow.classList.toggle('show');
            }
        }
    }

},false)