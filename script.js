tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                anton: ['Anton', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            colors: {
                'brand-green': '#25D366',
            }
        }
    }
}

function applyTheme(isModern) {
    const retro = document.getElementById('design-original');
    const modern = document.getElementById('design-modern');

    if (!retro || !modern) return;

    if (isModern) {
        retro.classList.replace('md:block', 'md:hidden');
        modern.classList.replace('md:hidden', 'md:block');
    } else {
        retro.classList.replace('md:hidden', 'md:block');
        modern.classList.replace('md:block', 'md:hidden');
    }
}

function toggleThemes() {
    const retro = document.getElementById('design-original');
    if (!retro) return;
    const isCurrentlyRetro = retro.classList.contains('md:block');
    applyTheme(isCurrentlyRetro);
}

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) translateY(-10px)';
            item.style.zIndex = '30';
            item.style.boxShadow = '0 20px 40px -10px rgba(228, 224, 225, 0.2)';
            
            skillItems.forEach(other => {
                if (other !== item) {
                    other.style.opacity = '0.2';
                    other.style.filter = 'blur(4px)';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) translateY(0)';
            item.style.zIndex = '1';
            item.style.boxShadow = 'none';
            
            skillItems.forEach(other => {
                other.style.opacity = '1';
                other.style.filter = 'none';
            });
        });
    });
});

function sendToWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const phoneNumber = "27768519561"; 
    const baseText = `Hi, I'm from your portfolio website!\n` +
                     `\n` +
                     `Name: ${name}\n` +
                     `Email: ${email}\n` +
                     `Message: ${message}`;

    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank').focus();
}
