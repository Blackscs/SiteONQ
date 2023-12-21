const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
let transitioning = false;
let autoSlideInterval;

function showSlide(index) {
    if (!transitioning) {
        transitioning = true;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        currentIndex = index;
        const newTransformValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newTransformValue + ')';
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        nextSlide();
    }, 5000); // Mudança automática a cada 5 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

// Adicione event listeners para reiniciar a mudança automática se não houver interação após 5 segundos
let timeout;
document.addEventListener('mousemove', function() {
    clearTimeout(timeout);
    stopAutoSlide();
    timeout = setTimeout(startAutoSlide, 5000);
});

document.addEventListener('keydown', function() {
    clearTimeout(timeout);
    stopAutoSlide();
    timeout = setTimeout(startAutoSlide, 5000);
});

// Adicione um evento de transição para corrigir o problema do slider passando infinitamente
slider.addEventListener('transitionend', function() {
    transitioning = false;
});

// Adicione event listeners para avançar/retroceder manualmente quando os botões são clicados
document.querySelector('.prev-btn').addEventListener('click', function() {
    stopAutoSlide();
    prevSlide();
});

document.querySelector('.next-btn').addEventListener('click', function() {
    stopAutoSlide();
    nextSlide();
});

// Ajuste o tamanho inicial e a transição das imagens
document.addEventListener('DOMContentLoaded', function () {
    slides.forEach(slide => {
        slide.style.transform = 'scale(1)';
    });
});