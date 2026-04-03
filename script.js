document.addEventListener('DOMContentLoaded', function() {
    // Translations
    const translations = {
        en: {
            about: 'About',
            education: 'Education',
            skills_title: 'Skills & Technologies',
            projects: 'Projects',
            experience_title: 'Experience',
            contact: 'Contact',
            hero_title: 'Hi, I\'m <span>Hüseyin Cengiz</span>',
            hero_subtitle: 'Electrical & Computer Engineering Student',
            about_title: 'About Me',
            about_text1: 'I am a passionate engineering student with a double major in Electrical & Electronics Engineering and Computer Engineering at Çukurova University.',
            about_text2: 'I have a strong interest in software development, embedded systems, and IoT technologies. My goal is to combine my knowledge from both fields to create innovative solutions.',
            education_title: 'Education',
            edu_date3: '2026 - Present',
            edu_title3: 'Çukurova University',
            edu_desc3: 'Electrical & Electronics Engineering - M.Sc. (Power Electronics)',
            edu_date1: '2020 - 2025',
            edu_title1: 'Çukurova University',
            edu_desc1: 'Electrical & Electronics Engineering - Bachelor\'s Degree',
            edu_date2: '2022 - 2025',
            edu_title2: 'Çukurova University',
            edu_desc2: 'Computer Engineering - Double Major Program',
            projects_title: 'Projects',
            contact_title: 'Get In Touch',
            contact_text: 'Feel free to reach out for collaborations or just to say hi!',
            footer_text: '© 2023 Hüseyin Cengiz. All rights reserved.',
            view_project: 'View Project',
            technologies: 'Technologies Used',
            live_demo: 'Live Demo',
            source_code: 'Source Code',
            exp_date1: 'Summer 2023',
            exp_title1: 'Software Development Intern',
            exp_desc1: 'ABC Tech Company - Developed backend APIs and contributed to IoT projects',
            exp_date2: '2022-2023',
            exp_title2: 'Freelance Developer',
            exp_desc2: 'Worked on various web development and automation projects for clients',
            //download_cv: 'Download CV'
        },
        tr: {
            about: 'Hakkımda',
            education: 'Eğitim',
            skills_title: 'Yetenekler & Teknolojiler',
            projects: 'Projeler',
            experience_title: 'Deneyim',
            contact: 'İletişim',
            hero_title: 'Merhaba, Ben <span>Hüseyin Cengiz</span>',
            hero_subtitle: 'Elektrik Elektronik ve Bilgisayar Mühendisliği Öğrencisi',
            about_title: 'Hakkımda',
            about_text1: 'Çukurova Üniversitesi\'nde Elektrik-Elektronik Mühendisliği ve Bilgisayar Mühendisliği çift anadal programında öğrenciyim.',
            about_text2: 'Yazılım geliştirme, gömülü sistemler ve IoT teknolojilerine büyük ilgi duyuyorum. Amacım, her iki alandaki bilgimi birleştirerek yenilikçi çözümler üretmek.',
            education_title: 'Eğitim',
            edu_date3: '2026 - Devam Ediyor',
            edu_title3: 'Çukurova Üniversitesi',
            edu_desc3: 'Elektrik-Elektronik Mühendisliği - Yüksek Lisans - Güç Elektroniği',
            edu_date1: '2020-2025',
            edu_title1: 'Çukurova Üniversitesi',
            edu_desc1: 'Elektrik-Elektronik Mühendisliği - Lisans Derecesi',
            edu_date2: '2022-2025',
            edu_title2: 'Çukurova Üniversitesi',
            edu_desc2: 'Bilgisayar Mühendisliği - Çift Anadal Programı',
            projects_title: 'Projeler',
            contact_title: 'İletişim',
            contact_text: 'İşbirliği için veya sadece merhaba demek için bana ulaşabilirsiniz!',
            footer_text: '© 2023 Hüseyin Cengiz. Tüm hakları saklıdır.',
            view_project: 'Projeyi Görüntüle',
            technologies: 'Kullanılan Teknolojiler',
            live_demo: 'Canlı Demo',
            source_code: 'Kaynak Kod',
            exp_date1: 'Yaz 2023',
            exp_title1: 'Yazılım Geliştirme Stajyeri',
            exp_desc1: 'ABC Teknoloji Şirketi - Backend API\'ler geliştirdim ve IoT projelerine katkıda bulundum',
            exp_date2: '2022-2023',
            exp_title2: 'Serbest Çalışan Geliştirici',
            exp_desc2: 'Çeşitli web geliştirme ve otomasyon projeleri üzerinde müşteriler için çalıştım',
            //download_cv: 'CV İndir'
        }
    };

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Language Toggle
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || 
                     (navigator.language.startsWith('tr') ? 'tr' : 'en');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'hero_title') {
                    const translation = translations[lang][key];
                    const start = translation.indexOf('<span>');
                    const end = translation.indexOf('</span>');
                    if (start !== -1 && end !== -1) {
                        const beforeSpan = translation.substring(0, start);
                        const spanContent = translation.substring(start + 6, end);
                        const afterSpan = translation.substring(end + 7);
                        element.innerHTML = beforeSpan + '<span>' + spanContent + '</span>' + afterSpan;
                    } else {
                        element.textContent = translation;
                    }
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        renderProjects(lang);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentLang = this.getAttribute('data-lang');
            setLanguage(currentLang);
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInsideMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Logo click handler
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            if (navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Active Navigation on Scroll
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Scroll Progress Bar
    function updateProgressBar() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + "%";
    }

    // Projects Data
    const projects = [
        {
            id: 'project1',
            title: {
                en: 'Smart Home Automation',
                tr: 'Akıllı Ev Otomasyonu'
            },
            description: {
                en: 'IoT-based home automation system with voice control',
                tr: 'Ses kontrollü IoT tabanlı ev otomasyon sistemi'
            },
            image: 'img/home.jpg',
            details: {
                en: 'Developed a smart home system using Raspberry Pi and various sensors that can be controlled via mobile app and voice commands. Features include lighting control, temperature monitoring, and security alerts. The system uses MQTT protocol for communication and integrates with Google Assistant for voice control.',
                tr: 'Raspberry Pi ve çeşitli sensörler kullanarak mobil uygulama ve ses komutlarıyla kontrol edilebilen bir akıllı ev sistemi geliştirdim. Aydınlatma kontrolü, sıcaklık izleme ve güvenlik uyarıları gibi özellikler içerir. Sistem iletişim için MQTT protokolünü kullanır ve ses kontrolü için Google Assistant ile entegre olur.'
            },
            tags: ['IoT', 'Python', 'Raspberry Pi', 'MQTT', 'Home Assistant'],
            liveLink: 'https://youtu.be/aC4WuSHwFys?si=P0J63OXSqoHqJeug',
            sourceLink: '#'
        },
        {
            id: 'project2',
            title: {
                en: 'License Plate Recognition',
                tr: 'Plaka Tanıma Sistemi'
            },
            description: {
                en: 'Computer vision system using OpenCV and Python',
                tr: 'OpenCV ve Python tabanlı görüntü işleme sistemi'
            },
            image: 'img/plate.jpg',
            details: {
                en: 'YOLO-based detection model achieving 92% accuracy under various lighting conditions. Implemented plate segmentation and OCR for character recognition with real-time processing capability. The system can process multiple video streams simultaneously and includes a web dashboard for monitoring.',
                tr: 'Farklı aydınlatma koşullarında %92 doğruluk sağlayan YOLO tabanlı model geliştirildi. Gerçek zamanlı işleme yeteneği ile plaka segmentasyonu ve OCR uygulandı. Sistem aynı anda birden fazla video akışını işleyebilir ve izleme için bir web kontrol paneli içerir.'
            },
            tags: ['Python', 'OpenCV', 'YOLO', 'OCR', 'Computer Vision'],
            liveLink: '#',
            sourceLink: '#'
        },
        {
            id: 'project3',
            title: {
                en: 'Interactive Quiz Platform',
                tr: 'Etkileşimli Quiz Platformu'
            },
            description: {
                en: 'Full-stack web application for quizzes',
                tr: 'Quizler için full-stack web uygulaması'
            },
            image: 'img/quiz.jpg',
            details: {
                en: 'Built with React frontend and Node.js backend featuring real-time scoring, user authentication, admin panel, and dynamic question generation with multiple question types. Includes user profiles, leaderboards, and quiz statistics. Deployed using Docker and managed with CI/CD pipelines.',
                tr: 'React önyüz ve Node.js arka yüz ile geliştirildi. Gerçek zamanlı skorlama, kullanıcı girişi, yönetici paneli ve çoklu soru tipleri ile dinamik soru üretme özellikleri eklendi. Kullanıcı profilleri, liderlik tabloları ve quiz istatistikleri içerir. Docker kullanılarak dağıtıldı ve CI/CD pipeline\'ları ile yönetildi.'
            },
            tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST API', 'Docker'],
            liveLink: 'https://cengiz321.github.io/isgHayrat/',
            sourceLink: '#'
        }
    ];

    // Render Projects
    function renderProjects(lang = currentLang) {
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title[lang]}" 
                         onerror="this.src='https://via.placeholder.com/600x400/3498db/ffffff?text=Project+Image'">
                </div>
                <div class="project-info">
                    <h3>${project.title[lang]}</h3>
                    <p>${project.description[lang]}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="view-project" data-project="${project.id}">
                        ${translations[lang].view_project}
                    </a>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-project');
                const project = projects.find(p => p.id === projectId);
                if (project) openProjectModal(project, lang);
            });
        });
    }

    // Open Project Modal
    // Open Project Modal
    function openProjectModal(project, lang) {
        const modal = document.getElementById('project-modal');
        const modalBody = modal.querySelector('.modal-body'); // modal-content değil, içindeki body
        
        modalBody.innerHTML = `
            <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">${project.title[lang]}</h2>
            <div style="margin-bottom: 1.5rem;">
                <img src="${project.image}" alt="${project.title[lang]}" 
                     style="width: 100%; border-radius: 8px; margin-bottom: 1rem;"
                     onerror="this.src='https://via.placeholder.com/600x400/3498db/ffffff?text=Project+Image'">
            </div>
            <p style="line-height: 1.8; margin-bottom: 1.5rem;">${project.details[lang]}</p>
            <div class="modal-tech">
                <h3>${translations[lang].technologies}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="modal-links" style="display: flex; gap: 1rem; margin-top: 2rem;">
                ${project.liveLink !== '#' ? 
                    `<a href="${project.liveLink}" target="_blank" class="cv-button" style="text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i> ${translations[lang].live_demo}
                    </a>` : ''
                }
                ${project.sourceLink !== '#' ? 
                    `<a href="${project.sourceLink}" target="_blank" class="cv-button" style="text-decoration: none; background-color: var(--secondary-color);">
                        <i class="fab fa-github"></i> ${translations[lang].source_code}
                    </a>` : ''
                }
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle

        // Kapatma butonu kontrolü
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        // Dışarı tıklayınca kapatma (Link tıklamasını bozmamak için kontrol eklendi)
        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize
    setLanguage(currentLang);
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        updateActiveNav();
        updateProgressBar();
    });

    // Add animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.timeline-item, .skill-category, .project-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }

    // Initial animation check
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});