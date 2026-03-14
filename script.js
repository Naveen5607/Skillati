<script>
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // 2. Reveal Sections on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);

    // 3. Counter Animation for Stats
    const counters = document.querySelectorAll('.text-4xl'); // Targets the numbers like 150+, 12k+
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
                const count = +counter.innerText.replace(/\D/g, '');
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc) + (counter.innerText.includes('+') ? '+' : '');
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
                }
            };
            updateCount();
        });
    };

    // Trigger counters when section is visible
    // (Optional: You can wrap this in an IntersectionObserver for better performance)
    setTimeout(startCounters, 500); 

    // 4. Simple Form Validation / Interaction
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            if(button.innerText.includes("Join") || button.innerText.includes("Enroll")) {
                console.log("Redirecting to checkout for Skillatinaya...");
                // Add your logic here
            }
        });
    });
</script>
