
        function openYoutube() {
            window.open("https://youtube.com/@akhandpratapsinghh", "_blank");
        }

        // Smooth scrolling for nav links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });