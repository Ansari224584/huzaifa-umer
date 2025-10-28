        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Hero Slider Data
        const heroSlides = [
            {
                title: "Full Stack Developer",
                description: " Hi My name is  Huzaifa Umer Ansari I am a  Full Stack Developer  I create beautiful and functional web applications that provide amazing user experiences.",
                background: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            },
            {
                title: "UI/UX Designer",
                description: "Designing intuitive interfaces with a focus on user experience and modern aesthetics.",
                background: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            {
                title: "Problem Solver",
                description: "Finding creative solutions to complex challenges through code and design.",
                background: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            }
        ];

        // Initialize Hero Slider
        const slidesContainer = document.getElementById('slides-container');
        const slideIndicators = document.getElementById('slide-indicators');

        heroSlides.forEach((slide, index) => {
            // Create slide
            const slideElement = document.createElement('div');
            slideElement.className = 'hero-slide';
            slideElement.style.backgroundImage = `url(${slide.background})`;
            
            const slideContent = document.createElement('div');
            slideContent.className = 'hero-content';
            slideContent.innerHTML = `
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
                <a href="#projects" class="btn">View My Work</a>
                <a href="#contact" class="btn">Contact Me</a>
            `;
            
            slideElement.appendChild(slideContent);
            slidesContainer.appendChild(slideElement);
            
            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
            slideIndicators.appendChild(indicator);
        });

        // Hero Slider Functionality
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const indicators = document.querySelectorAll('.indicator');
        
        let currentSlide = 0;
        const slideCount = heroSlides.length;
        
        function goToSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            
            // Update indicators
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            goToSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            goToSlide(currentSlide);
        }
        
        // Auto slide
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Event listeners
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Projects Data with Images
        const projects = [
            {
                id: 1,
                title: "E-commerce Platform",
                description: "A fully responsive e-commerce platform with product catalog, shopping cart, and secure checkout system.",
                category: "web",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
                liveLink: "#",
                githubLink: "#"
            },
            {
                id: 2,
                title: "Task Management App",
                description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
                category: "web",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                technologies: ["Vue.js", "Firebase", "CSS3", "PWA"],
                liveLink: "#",
                githubLink: "#"
            },
            {
                id: 3,
                title: "Data Analytics Dashboard",
                description: "An interactive dashboard for visualizing and analyzing business data with customizable reports.",
                category: "data",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
                liveLink: "#",
                githubLink: "#"
            },
            {
                id: 4,
                title: "Excel Automation Tool",
                description: "A powerful VBA-based tool that automates complex Excel workflows and data processing tasks.",
                category: "automation",
                image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                technologies: ["VBA", "Excel", "Python", "Pandas"],
                liveLink: "#",
                githubLink: "#"
            },
            {
                id: 5,
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing projects and skills with modern design and animations.",
                category: "web",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
                liveLink: "#",
                githubLink: "#"
            },
            {
                id: 6,
                title: "Business Process Automation",
                description: "Custom automation solution that streamlines business processes and reduces manual work by 80%.",
                category: "automation",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                technologies: ["Python", "Selenium", "APIs", "SQL"],
                liveLink: "#",
                githubLink: "#"
            }
        ];

        // Initialize Projects Grid
        const projectsGrid = document.getElementById('projects-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');

        function renderProjects(filter = 'all') {
            projectsGrid.innerHTML = '';
            
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            filteredProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card fade-in';
                projectCard.setAttribute('data-category', project.category);
                
                projectCard.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-overlay">
                            <a href="${project.liveLink}" class="btn" target="_blank">Live Demo</a>
                            <a href="${project.githubLink}" class="btn btn-outline" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">${project.category.toUpperCase()}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.liveLink}" class="btn" target="_blank">View Project</a>
                            <a href="${project.githubLink}" class="btn btn-outline" target="_blank">Code</a>
                        </div>
                    </div>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
            
            // Trigger fade-in animation
            setTimeout(() => {
                document.querySelectorAll('.project-card').forEach(card => {
                    card.classList.add('appear');
                });
            }, 100);
        }

        // Filter Projects
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Filter projects
                const filter = btn.getAttribute('data-filter');
                renderProjects(filter);
            });
        });

        // Initialize projects
        renderProjects();

        // Testimonial Slider
        const testimonialTrack = document.getElementById('testimonial-track');
        const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
        let currentTestimonial = 0;

        function goToTestimonial(index) {
            testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
            
            // Update indicators
            testimonialIndicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
            
            currentTestimonial = index;
        }

        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToTestimonial(index);
            });
        });

        // Auto testimonial slider
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialIndicators.length;
            goToTestimonial(currentTestimonial);
        }, 6000);

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('appear');
                }
            });
        };
        
        window.addEventListener('scroll', fadeInOnScroll);
        
        // Initialize
        fadeInOnScroll();