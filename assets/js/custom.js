            // nav active
            let items = document.querySelectorAll('#nav-mobile li');
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', printDetails);
            }

            function printDetails(e) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains("active")) {
                        items[i].classList.toggle("active");
                    }
                }
                this.classList.add("active");
            }


            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.scrollspy');
                var instances = M.ScrollSpy.init(elems);
            });

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems);
            });

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.parallax');
                var instances = M.Parallax.init(elems);
            });

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.tooltipped');
                var instances = M.Tooltip.init(elems, {delay: 150});
            });

            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.fixed-action-btn');
                var instances = M.FloatingActionButton.init(elems, {
                    direction: 'top',
                    hoverEnabled: false
                });
            });