

 // ===================================
    // Skills Progress Animation
    // ===================================
    function animateSkillBars() {
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const targetWidth = progress.getAttribute('data-progress');
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progress.style.width = targetWidth + '%';
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        skillProgress.forEach(progress => {
            observer.observe(progress);
        });
    }
    
    animateSkillBars();