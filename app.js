    var arrows = document.getElementsByTagName('span');
        var div = document.getElementsByTagName('div');
        var l = 0;

        arrows[1].onmouseover = () => {
            l++;
            for (var i of div) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-400px"; }
                

                if (l == 2) { i.style.left = "-800px"; }

                if (l == 3) { i.style.left = "-1200px"; }

                if (l == 4) { i.style.left = "-1600px"; }

                
            }
        }
        arrows[0].onmouseover = () => {
            l--;
            for (var i of div) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-400px"; }
                if (l == 2) { i.style.left = "-800px"; }
                if (l == 3) { i.style.left = "-1200px"; }
                if (l == 4) { i.style.left = "-1600px"; }
               
            }
        }
        