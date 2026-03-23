// Subtle scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.feature-card, .category-item');
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });

    // Form Submission for WhatsApp
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('lead-name').value;
            const interest = document.getElementById('lead-interest').value;
            const phone = "5531971772093"; // WhatsApp phone
            
            const message = `Olá! Meu nome é ${encodeURIComponent(name)} e tenho interesse no curso de ${encodeURIComponent(interest)}. Vi o site da Estácio Nova Lima e gostaria de mais informações.`;
            const waLink = `https://wa.me/${phone}?text=${message}`;
            
            window.open(waLink, '_blank');
        });
    }
});
