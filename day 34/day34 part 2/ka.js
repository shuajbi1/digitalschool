   var circle = document.getElementById("circle");

        function randomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function showCircle() {
            var size = Math.random() * 200 + 50;
            var top = Math.random() * (window.innerHeight - size);
            var left = Math.random() * (window.innerWidth - size);

            circle.style.display = "block";
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.top = top + 'px';
            circle.style.left = left + 'px';
            circle.style.backgroundColor = randomColor();
        }

        showCircle();