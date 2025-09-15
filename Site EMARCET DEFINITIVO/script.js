   // Script do Carrossel
        let currentIndex = 0;
        const carrossel = document.querySelector('.carrossel');
        const items = document.querySelectorAll('.carrossel-item');
        const totalItems = items.length;
        const indicadoresContainer = document.querySelector('.carrossel-indicadores');

        // Cria indicadores
        items.forEach((_, index) => {
            const indicador = document.createElement('div');
            indicador.classList.add('indicador');
            if(index === 0) indicador.classList.add('ativo');
            indicador.addEventListener('click', () => goToSlide(index));
            indicadoresContainer.appendChild(indicador);
        });

        function updateCarrossel() {
            carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.indicador').forEach((indicador, index) => {
                indicador.classList.toggle('ativo', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarrossel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarrossel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarrossel();
        }

        // Event Listeners
        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.prev').addEventListener('click', prevSlide);

        // Auto-advance (opcional)
        setInterval(nextSlide, 5000);