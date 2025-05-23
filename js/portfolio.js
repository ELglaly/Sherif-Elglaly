const profile = {
    name: "Sherif Elglaly",
    contactEmail: "sherifelglaly@gmail.com",
    phone: "+201026386402",
    address: "Cairo, Egypt",
    githubLink: "https://github.com/ELglaly",
    linkedinLink: "https://www.linkedin.com/in/sherif-elglaly/",
    bio: "Senior Software Engineering Student | USAID Scholar",
    cvLink: "https://drive.google.com/file/d/1fAYtBeMlPgOq1fGOxcNqI4VSxeVBwPjV/view?usp=sharing",
    about: "My name is Sherif Shawshen. preferred by Sherif Elglaly. " +
        "I am a senior Software Engineering student at Assiut University," +
        " currently ranked fourth in my department, and a USAID Scholar as a recipient " +
        "of a USAID scholarship for my bachelor's degree.\n\nWhen I first started studying " +
        "Software Engineering, my goal was to improve my skills in software development and its " +
        "applications. While this focus helped me do well academically, I've always wanted to learn more beyond what was required in my courses. My experiences during my studies, internships, and exchange program have shaped my skills, aspirations, and desire to continue my education.",
    skills: [
        { name: "C#", category: "Programming Languages", level: "Advanced" },
        { name: "Python", category: "Programming Languages", level: "Intermediate" },
        { name: "C++", category: "Programming Languages", level: "Intermediate" },
        { name: "Java", category: "Programming Languages", level: "Advanced" },
        { name: "R", category: "Programming Languages", level: "Beginner" },
        { name: "Design Patterns", category: "Development Principles", level: "Advanced" },
        { name: "SOLID Principles", category: "Development Principles", level: "Advanced" },
        { name: "Data Structures & Algorithms", category: "Development Principles", level: "Advanced" },
        { name: "OOP", category: "Development Principles", level: "Advanced" },
        { name: "Agile", category: "Development Principles", level: "Advanced" },
        { name: "ASP.NET", category: "Web Development", level: "Advanced" },
        { name: "HTML", category: "Web Development", level: "Advanced" },
        { name: "CSS", category: "Web Development", level: "Advanced" },
        { name: "Bootstrap", category: "Web Development", level: "Intermediate" },
        { name: "JSON", category: "Web Development", level: "Advanced" },
        { name: "AJAX", category: "Web Development", level: "Intermediate" },
        { name: "Spring Boot", category: "Web Development", level: "Advanced" },
        { name: "Spring Security", category: "Web Development", level: "Advanced" },
        { name: "Spring Data", category: "Web Development", level: "Advanced" },
        { name: ".NET", category: "Desktop Development", level: "Advanced" },
        { name: "JavaFX", category: "Desktop Development", level: "Advanced" },
        { name: "Git", category: "Version Control", level: "Advanced" },
        { name: "JUnit 5", category: "Testing", level: "Intermediate" },
        { name: "Mockito", category: "Testing", level: "Intermediate" },
        { name: "MySQL", category: "Database", level: "Advanced" },
        { name: "SQL Server", category: "Database", level: "Advanced" },
        { name: "Arabic", category: "Languages", level: "Native" },
        { name: "English", category: "Languages", level: "Fluent" }
    ],
    education: [
        {
            institutionName: "University of Arizona",
            degree: "Non-Degree Seeking, Computer Science",
            location: "Tucson, Arizona, USA",
            startDate: "Aug 2024",
            endDate: "Present",
            grade: "4.00",
            description: "During my time as an exchange student at the University of Arizona, I've had the opportunity to dive into advanced coursework and develop a strong foundation in key areas of Computer Science. I'm proud to have earned a perfect GPA of 4.0."
        },
        {
            institutionName: "Assiut University",
            degree: "Bachelor's degree, Computer Software Engineering",
            location: "Assiut, Egypt",
            startDate: "Sep 2021",
            endDate: "Expected Jun 2025",
            grade: "3.59",
            description: "𝘼𝙘𝙖𝙙𝙚𝙢𝙞𝙘 𝘼𝙘𝙝𝙞𝙚𝙫𝙚𝙢𝙚𝙣𝙩: securing fourth place in the Software Engineering department"
        },
        {
            institutionName: "AUC - School of Continuing Education",
            degree: "Vocational Program, English Language",
            location: "Cairo, Egypt",
            startDate: "Nov 2021",
            endDate: "April 2024",
            grade: "Completed with 93%",
            description: "I completed a Vocational Program in English Language at the American University in Cairo's School of Continuing Education. This program helped me improve my English communication skills, both in speaking and writing. It gave me the confidence to express my ideas clearly and work effectively in teams, which has been really helpful in both my studies and any professional settings."
        }
    ],
    experiences: [
        {
            companyName: "Wavemakers United",
            position: "Software Engineer (Part-time)",
            startDate: "Mar 2024",
            endDate: "Jul 2024",
            description: "I was part of a three-member team developing the company's Educational Platform. My main responsibilities included:\n\n1. 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁 𝗚𝗮𝘁𝗵𝗲𝗿𝗶𝗻𝗴: Collaborated with the team to collect, analyze, and document system requirements, ensuring they matched the platform's goals and user needs.\n2. SRS Documentation: Created a detailed Software Requirements Specification (SRS), covering:\n   • Functional Requirements: User authentication, course management, and reporting.\n   • Non-Functional Requirements: Performance, scalability, and security.\n3. System Design: Assisted in designing the system architecture, defining components, their interactions, and data flow.\n\nSkills: Sustainable Development Goals (SDG), Software Development, Requirements Analysis, System Design, Documentation"
        },
        {
            companyName: "ALMOSTAKBAL TECHNOLOGY",
            position: "Software Engineer Intern",
            startDate: "Sep 2023",
            endDate: "Oct 2023",
            description: "I worked with senior developers to build and optimize key features of the platform, focusing on performance and scalability. This included improving how the platform handled large amounts of data while keeping it fast and reliable.\n\nI also talked directly with customers to understand their needs and challenges. By listening to their feedback, I helped create solutions that worked for them. I followed up to make improvements, ensuring the final product met their expectations and was easy to use.\n\nSkills: Dart, Mobile Applications, Customer Engagement, Performance Optimization, Scalability"
        }
    ],
    projects: [
        {
            id: 1,
            name: "AI-Powered Learning Roadmap Generator",
            type: "Rest API",
            description: "An intelligent and modular Learning Roadmap Generator built with Spring Boot and integrated with AI services. The system creates personalized learning paths based on user preferences, experience levels, and target goals using AI-driven recommendations. It features real-time progress tracking via WebSocket, Redis caching for improved performance, and comprehensive resource management for each milestone.",
            link: "https://github.com/ELglaly/Roadmap-Maker",
            image: "images/icons/github.svg",
            technologiesUsed: [
                "☕ Java 23",
                "🌱 Spring Boot 3.4.3",
                "🔐 Spring Security with JWT",
                "🔄 Spring WebSocket",
                "🗂️ Spring Data JPA",
                "🧠 Spring AI OpenAI",
                "☁️ Google Cloud AI Platform",
                "🛢️ MySQL",
                "⚡ Redis 7.4.2",
                "📦 Maven 3.9.9",
                "🏷️ Lombok",
                "🧩 MapStruct",
                "🧪 JUnit 5"
            ]
        },
        {
            id: 2,
            name: "E-commerce Platform",
            type: "Rest API",
            description: "A robust and scalable e-commerce platform built with Spring Boot. This system enables users to browse products, manage their shopping cart, and complete secure purchases. It includes an admin panel for managing products, orders, and users. Designed with modern best practices, this project is ideal for businesses looking to establish or expand their online presence.",
            link: "https://github.com/ELglaly/Ecommerce-SpringBoot",
            image: "images/icons/github.svg",
            technologiesUsed: [
                "☕ Java",
                "🌱 Spring Boot",
                "🔐 Spring Security",
                "🗂️ Spring Data JPA",
                "📦 Hibernate",
                "✉️ JavaMailSender",
                "🛢️ MySQL",
                "🧪 H2 Database (Testing)",
                "💳 Stripe/PayPal APIs",
                "⚛️ React",
                "🖼️ HTML",
                "🎨 CSS",
                "🧠 JavaScript",
                "⚡ Redis",
                "🧪 Tested with JUnit 5 & Mockito",
                "🔐 JWT-based"
            ]
        },
        {
            id: 3,
            name: "Arabic Compiler",
            type: "MVC Application",
            description: "This project implements a Lexical Analyzer and Parser for a custom programming language that supports Arabic keywords. It features tokenization and syntactic analysis capabilities to build an Abstract Syntax Tree (AST) for source code interpretation.",
            link: "https://github.com/ELglaly/Simple-Arabic-Compiler",
            image:"images/icons/github.svg",
            technologiesUsed: [
                "⚙️ C#",
                "🌐 .NET Core",
                "🧩 ASP.NET",
                "📝 Visual Studio Code",
                "🖼️ HTML",
                "🎨 CSS"
            ]
        },
        {
            id: 4,
            name : "Pharmacy Management System Frontend",
            type: "Desktop Application",
            description: "A comprehensive frontend for a Pharmacy Management System (PMS) designed to streamline pharmacy operations. It supports prescription management, inventory control, sales and billing, reporting, and user management with secure authentication. The system enhances efficiency, accuracy, and customer service while ensuring regulatory compliance.",
            link: "https://github.com/ELglaly/Pharmacy-Frontend",
            image: "images/icons/pharmacy.svg",
            technologiesUsed : [
                "☕ Java",
                "🖼️ JavaFX",
                "🛢️ MySQL",
                "🧪 H2 Database",
                "📄 SRS",
                "🧱 UML",
                "🧪 Test Driven Development (TDD)",
                "🗃️ Java Collections",
                "🎨 JavaFX CSS",
                "🧰 JavaFX Scene Builder"
            ]
        }
    ]
    ,
    certifications: [
        {
            "institutionName": "Amazon",
            "certificateName": "Application Development",
            "certificateLink": "https://www.coursera.org/account/accomplishments/verify/JWABV1WWYVIT",
            "date": "Issued May 2025",
            "description": "Completed with a grade of 96.66% in approximately 22 hours. Skills: Requirements Analysis, System Component Diagramming, Software Methodologies (Agile, Waterfall), Version Control with Git, Git Repository Management"
        },
        {
            institutionName: "Amazon",
            certificateName: "Data Structures and Algorithms",
            certificateLink: "https://coursera.org/share/e3f26c495e8833f45c1360ef919f4ba4",
            date: "Issued Apr 2025",
            description: "Skills: Data Structures, Algorithms, JUnit, Unit Testing, Software Testing, Debugging, Searching Algorithms (Linear Search, Binary Search), Sorting Algorithms (Bubble Sort, Insertion Sort, Merge Sort, Quick Sort), Java Collections (ArrayList, LinkedList, Stack, Queue, Map), Test Driven Development (TDD)"
        },
        {
            institutionName: "Amazon",
            certificateName: "Full Stack Web Development",
            certificateLink: "https://coursera.org/share/1e52f48401c03576a618e04e3c64d392",
            date: "Issued Feb 2025",
            description: "Credential ID 0OF9PN6ZN4EN\nSkills: Java Development · Amazon Web Services (AWS)"
        },
        {
            institutionName: "Amazon",
            certificateName: "Introduction to Software Development",
            certificateLink: "https://coursera.org/share/faaf6f59d30f72ac748c95f4a312db61",
            date: "Issued Jan 2025",
            description: "Credential ID AJCK66X9VSXJ\nSkills: Object-Oriented Programming (OOP)"
        },
        {
            institutionName: "Meta",
            certificateName: "Database Structures and Management with MySQL",
            certificateLink: "https://coursera.org/share/64a78a22c2d4fa3a08bf3988f66b3ca6",
            date: "Issued Jul 2024",
            description: "Skills: Database Management System (DBMS) · SQL · Database Design"
        },
        {
            institutionName: "Meta",
            certificateName: "Introduction to Databases",
            certificateLink: "https://coursera.org/share/bc3473115e683fe0fb7362e474542e51",
            date: "Issued Jun 2024",
            description: "Skills: SQL · Databases · Database Management System (DBMS) · ERD"
        },
        {
            institutionName: "Duolingo English Test",
            certificateName: "English Proficiency Certificate",
            certificateLink: "https://www.duolingo.com/certificates/XYZ789",
            date: "Issued Mar 2024 · Expires Mar 2026",
            description: "English language proficiency certification"
        },
        {
            institutionName: "ICPC Mansoura",
            certificateName: "Game of Coders",
            certificateLink: "https://drive.google.com/drive/folders/1okDaaK--EBTT3rwpUUW2O22QlhdgsbZK",
            date: "Issued Jul 2023",
            description: "Skills: Competitive Programming · Teamwork · Problem Solving · Time Management"
        },
        {
            institutionName: "365 Data Science",
            certificateName: "Introduction to Data and Data Science",
            certificateLink: "https://learn.365datascience.com/certificates/CC-00F8691301",
            date: "Issued May 2023",
            description: "Credential ID CC-00F8691301"
        },
        {
            institutionName: "The American University in Cairo",
            certificateName: "Research and Creativity Convention (EURECA)",
            certificateLink: "https://www.linkedin.com/posts/sherif-elglaly_eurecaconference-research-creativity-activity-7169674281201741824-nZWa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA",
            date: "Issued Feb 2024 · Expired Feb 2024",
            description: "Participation in research convention"
        },
        {
            institutionName: "Amazon Web Services (AWS)",
            certificateName: "AWS Academy Introduction to Cloud Semester 1",
            certificateLink: "https://drive.google.com/file/d/1K_TfdHqTh-Hwf1siZwS8F5VhAVJAVEEA/view",
            date: "Issued Sep 2022 · Expired Dec 2023",
            description: "Skills: Amazon Web Services (AWS) · Cloud Computing"
        },
        {
            institutionName: "Meta",
            certificateName: "Introduction to Databases",
            certificateLink: "https://www.coursera.org/verify/ABC456",
            date: "Issued Jun 2024",
            description: "Skills: SQL · Databases · Database Management System (DBMS) · ERD"
        }
    ],
    awards: [
        {
            id: 1,
            organizationName: "USAID Egypt",
            title: "USAID Scholarship",
            description: "Successfully awarded a scholarship for my bachelor Degree in computer Science with 140 students by the United States Agency for International Development\n(USAID) in collaboration with the American University in Cairo.",
            images: "images/accomplishments/usaid2.jpg",
            link: "#",
            date: "2021-09-23"
        },
        {
            id: 2,
            organizationName: "University of Arizona | Scholarship Program",
            title: "Scholarship Recipient – Semester Abroad (Fall 2024, 4.0 GPA)",
            description: "Awarded a scholarship to study abroad at the University of Arizona for the Fall 2024 semester, achieving a 4.0 GPA. Additionally contributed to research initiatives at the College of Engineering.",
            images: "images/accomplishments/uofajpeg.jpeg",
            date: "2024-8-20 : 2024-12-21",
            link: "https://www.linkedin.com/posts/sherif-elglaly_studyabroad-universityofarizona-softwaredevelopment-activity-7296535485491912704-PM5o?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA"
        },
        {
            id: 3,
            organizationName: "Ministry of Planning and Economic Development & NIGSD",
            title: "Certified Sustainable Development Trainer",
            description: "Officially certified as a Sustainable Development Trainer for the next two years after intensive training in soft skills, sustainable development, and governance, as part of a Train-the-Trainer program.",
            images: "images/accomplishments/tottraining.jpeg",
            date: "2023-10-25",
            link: "https://www.linkedin.com/posts/sherif-elglaly_tot-sustainabledevelopment-sdgs-activity-7227281904629121024-7-mI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA"
        },
        {
            id: 4,
            organizationName: "ICPC Mansoura",
            title: "Top 10 – Game of Coders Competition",
            description: "Awarded for achieving a top 10 position in the Game of Coders competitive programming competition, showcasing strong problem-solving skills and teamwork.",
            images: "images/accomplishments/gameofcoder.jpeg",
            date: "2023-07-26",
            link: "https://drive.google.com/drive/folders/1okDaaK--EBTT3rwpUUW2O22QlhdgsbZK"
        },
        {
            id: 5,
            organizationName: "Hult Prize – Assiut University",
            title: "1st Place – Hult Prize Assiut University",
            description: "Awarded 1st place for a project focused on biofuel production through bacterial fermentation and agricultural waste, showcasing innovation, sustainability, and entrepreneurial spirit.",
            images: "images/accomplishments/hult_prize.jpeg",
            date: "2024-03-01",
            link: "https://www.linkedin.com/posts/pola-frans_hultprizewinner-biofuelinnovation-assiutuniversity-ugcPost-7171944912186294272-iwpL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA"
        },
        {
            id: 6,
            organizationName: "AUC Center for Entrepreneurship and Innovation (CEI)",
            title: "Completion of Entrepreneurship Program & Seed Funding Award",
            description: "Successfully completed an intensive entrepreneurship program at AUC CEI. Pitched the 'NextGen' project, leading to securing $30K in seed funding.",
            images: "images/accomplishments/CEI.jpeg",
            date: "2024-02-01",
            link: "https://www.linkedin.com/posts/sherif-elglaly_entrepreneurship-auc-cei-activity-7298049656280776705-qyvm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA"
        },
        {
            id: 7,
            organizationName: "Ministry of Communications | ITIDA",
            title: "Top 10 Startup – Pre-Incubation Program 2023",
            description: "Led a team of 4 in developing 'The Green Dream' platform, an innovative web-based solution for responsible waste management. Successfully positioned the project among the top 10 startups selected for the prestigious pre-incubation program organized by ITIDA, TIEC, and the Ministry of Communications.",
            images: "images/accomplishments/green_dream_project.jpeg",
            date: "2023-11-01",
            link: "https://www.linkedin.com/posts/sherif-elglaly_itida-tiec-ministryofcommunications-activity-7134283303720824832-zFXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsZRV8Bv4m4WZ1msQzpVXuMyTE8adz5KJA"
        }
    ]
};


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Basic Profile Info
    document.getElementById('profile-name').textContent = `I am ${profile.name}`;
    document.getElementById('profile-bio').textContent = profile.bio;
    document.getElementById('profile-about').textContent = profile.about;
    document.getElementById('cv-link').href = profile.cvLink;
    document.getElementById('linkedin-link').href = profile.linkedinLink;
    document.getElementById('github-link').href = profile.githubLink;
    document.getElementById('contact-email').href = `mailto:${profile.contactEmail}`;
    document.getElementById('contact-email').textContent = profile.contactEmail;
    document.getElementById('contact-phone').href = `tel:${profile.phone}`;
    document.getElementById('contact-phone').textContent = profile.phone;
    document.getElementById('linkedin-contact').href = profile.linkedinLink;
    document.getElementById('github-contact').href = profile.githubLink;
    document.getElementById('say-hello').href = `mailto:${profile.contactEmail}`;

    // Education
    const educationContainer = document.getElementById('education-container');
    profile.education.forEach(edu => {
        const eduBlock = document.createElement('div');
        eduBlock.className = 'timeline__block';
        eduBlock.innerHTML = `
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
                <h4 class="timeline__title">${edu.institutionName}</h4>
                <h4 class="timeline__meta">${edu.location}</h4>
                <h5 class="timeline__meta">${edu.degree}</h5>
                <p class="timeline__timeframe">${edu.startDate} - ${edu.endDate}</p>
                <p class="timeline__timeframe">GPA: ${edu.grade}</p>
            </div>
            <div class="timeline__desc">
                <p>${edu.description}</p>
            </div>
        `;
        educationContainer.appendChild(eduBlock);
    });

    // Experience
    const experienceContainer = document.getElementById('experience-container');
    profile.experiences.forEach(exp => {
        const expBlock = document.createElement('div');
        expBlock.className = 'timeline__block';
        expBlock.innerHTML = `
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
                <h4 class="timeline__title">${exp.companyName}</h4>
                <h5 class="timeline__meta">${exp.position}</h5>
                <p class="timeline__timeframe">${exp.startDate} - ${exp.endDate}</p>
            </div>
            <div class="timeline__desc">
                <p>${exp.description.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        experienceContainer.appendChild(expBlock);
    });

    // Projects

    const projectsContainer = document.getElementById('projects-container');

// Render projects
    profile.projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.className = 'folio-list__item column';
        projectItem.setAttribute('data-animate-el', '');
        projectItem.innerHTML = `
        <div class="folio-list__item-link" " data-project-id="${project.id}">
            <div class="folio-list__item-pic">
                <img src="${project.image}" alt="${project.name}" class="timeline__image" loading="lazy" />
            </div>
            <div class="folio-list__item-text">
                <div class="folio-list__item-cat">${project.type || 'Uncategorized'}</div>
                <div class="folio-list__item-title">${project.name}</div>
            </div>
        </div>
          <div style="margin-bottom: 20px">
              <p>${project.description}</p>
                    <ul class="modal-popup__cat">
                        ${project.technologiesUsed.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
          </div>

          <a href="${project.link}" target="_blank" class="btn btn-primary mt-auto">GitHub link</a>
    `;
        projectsContainer.appendChild(projectItem);
    });


    // Certificates
    const certificatesContainer = document.getElementById('certificateElement');
    profile.certifications.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.setAttribute('data-institution', cert.institutionName.toLowerCase());
        certElement.innerHTML = `
            <div class="timeline" data-animate-el>
                <div class="timeline__block">
                    <div class="timeline__bullet"></div>
                    <div class="timeline__header">
                        <h4 class="timeline__title">${cert.certificateName}</h4>
                        <h5 class="timeline__meta">${cert.institutionName}</h5>
                        <p class="timeline__timeframe">${cert.date}</p>
                        <a href="${cert.certificateLink}" target="_blank" class="btn btn-primary mt-auto"
                        >View Certificate</a>
                    </div>
                </div>
            </div>
        `;
        certificatesContainer.appendChild(certElement);
    });

    // Certificate Filtering
    document.querySelectorAll('#filterCertificate .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#filterCertificate .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            document.querySelectorAll('#certificateElement > div').forEach(cert => {
                if (filter === 'all' || cert.dataset.institution.includes(filter)) {
                    cert.style.display = 'block';
                } else {
                    cert.style.display = 'none';
                }
            });
        });
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    const skillsByCategory = profile.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const skillBlock = document.createElement('div');
        skillBlock.className = 'timeline';
        skillBlock.setAttribute('data-animate-el', '');
        skillBlock.innerHTML = `
            <div class="timeline__block">
                <div class="timeline__bullet"></div>
                <div class="timeline__header">
                    <h4 class="timeline__title">${category}</h4>
                    <ul>
                        ${skills.map(skill => `<li>${skill.name} <span class="skill-level ${skill.level.toLowerCase()}">(${skill.level})</span></li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillBlock);
    });

    // Accomplishments
    const accomplishmentsContainer = document.getElementById('accomplishments-container');
    profile.awards.forEach(award => {
        const awardElement = document.createElement('div');
        awardElement.className = 'timeline';
        awardElement.setAttribute('data-animate-el', '');
        awardElement.innerHTML = `
    <div class="timeline__block">
        <div class="timeline__bullet"></div>
        <div class="timeline__header">
            ${award.id % 2 !== 0 ? `
                <img src="${award.images}" alt="${award.title}" class="timeline__image" loading="lazy" />
                 <img src="images/icons/arrow.png" alt="${award.title}" loading="lazy" class="arrow-down" />
            ` : ''}

            <h4 class="timeline__title">${award.title}</h4>
            <h5 class="timeline__meta">${award.organizationName}</h5>
            <p class="timeline__timeframe">${award.date}</p>
            <p>${award.description}</p>

            ${award.id % 2 === 0 ? `
               <img src="images/icons/arrow.png" alt="${award.title}" class="arrow-up" loading="lazy" />
                <img src="${award.images}" alt="${award.title}" class="timeline__image" loading="lazy" />
            ` : ''}

            <a href="${award.link}" target="_blank" class="btn btn-primary mt-auto">More Details</a>
        </div>
    </div>
`;
        accomplishmentsContainer.appendChild(awardElement);
    });
});