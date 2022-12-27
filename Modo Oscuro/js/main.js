const btnDay = document.querySelector('#noche');
            btnDay.addEventListener('click', () => {
                document.body.classList.toggle('dark');
                btnDay.classList.toggle('active');
            });