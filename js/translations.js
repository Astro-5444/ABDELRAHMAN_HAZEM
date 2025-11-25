// Translation object
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact"
    },
    home: {
      title: "Hi, I'm Abdelrhman Hazem Khalil",
      subtitle: "Mechatronics Engineer",
      description: "I am a Mechatronics Engineer graduated from Asia Pacific University, Malaysia, with hands-on experience in machine vision, automation, and robotics. I have built real-time inspection systems and developed advanced vision algorithms.",
      contactBtn: "Contact Me",
      scrollDown: "Scroll down"
    },
    about: {
      title: "About Me",
      subtitle: "My Introduction",
      description: "Mechatronics Engineer from APU with industry experience, 8 completed projects, and strong skills in robotics, machine vision, and embedded systems. I have developed AI‑driven humanoid robots, automation systems, and defect detection solutions using Python, ROS 2, and ESP32. I focus on practical engineering that links hardware with intelligent software.",
      internship: "Internship<br>Experience",
      projects: "Projects<br>Completed",
      companies: "Companies<br>Worked",
      cvBtn: "CV",
      completionBtn: "Completion Letter"
    },
    skills: {
      title: "Skills",
      subtitle: "My Technical Proficiencies",
      programming: "Programming Skills",
      programmingSub: "Vision algorithms & software development",
      automation: "Automation & Robotics",
      automationSub: "Control systems & simulation",
      design: "Design & Simulation",
      designSub: "CAD and system modeling",
      microsoft: "Microsoft Programs",
      microsoftSub: "Office Suite & collaboration tools"
    },
    qualification: {
      title: "Qualification",
      subtitle: "My professional journey",
      education: "Education",
      work: "Work"
    },
    services: {
      title: "Services",
      subtitle: "What I Offer",
      viewMore: "View More",
      s1: {
        title: "Machine Vision<br>Engineer",
        items: [
          "Develop real-time inspection systems.",
          "Implement and optimize vision algorithms using OpenCV and MediaPipe.",
          "Integrate industrial cameras with production lines.",
          "Adjust lighting and thresholds for defect detection."
        ]
      },
      s2: {
        title: "Automation &<br>Robotics Engineer",
        items: [
          "Design automation and control systems.",
          "Develop and simulate robotic systems using ROS 2 and Gazebo.",
          "Integrate microcontrollers such as Arduino and ESP32.",
          "Work collaboratively on engineering projects."
        ]
      },
      s3: {
        title: "Mechatronics<br>Designer",
        items: [
          "Design mechanical components using SolidWorks.",
          "Develop and simulate systems with CX Designer and CX Programmer.",
          "Optimize designs for performance and efficiency.",
          "Create prototypes for automation solutions."
        ]
      }
    },
    projects: {
      title: "Projects",
      subtitle: "Most Recent Projects",
      watchVideo: "Watch Video",
      github: "GitHub Repository",
      cards: [
        {
          title: "ELA: AI-Powered Humanoid Robot (FYP)",
          desc: "Developed a ROS 2-based humanoid robot capable of voice interaction, gesture recognition, and autonomous navigation. Enabled arm control via RViz and integrated MediaPipe.",
          button: "Watch Video"
        },
        {
          title: "Smart AGV for Chili Farm Monitoring (GDP)",
          desc: "Led the machine vision module to detect diseases on chili plants using a custom-trained model. Designed a selective spraying mechanism and supported AGV navigation and electronics.",
          button: "Watch Video"
        },
        {
          title: "Eva AI Desktop Assistant",
          desc: "An intelligent desktop assistant integrating AI‑based task management, scheduling, email handling, and system automation using natural language commands. Powered by Mistral's language models for smooth productivity.",
          button: "GitHub Repository"
        },
        {
          title: "Automatic Stamping System",
          desc: "Designed and simulated an automated stamping sequence using CX Designer and CX Programmer.",
          button: ""
        },
        {
          title: "Scratches and Bent Pins Scanner",
          desc: "A machine-vision inspection system for detecting surface scratches and bent pins on automotive ECUs using the Zebra VS40 smart camera, ensuring high accuracy and reliability.",
          button: "Watch Video"
        },
        {
          title: "Meat Blender Engineering",
          desc: "Designed a meat blender and calculated key mechanical parameters for optimal performance.",
          button: "Watch Video"
        },
        {
          title: "Automated Storage Elevator System",
          desc: "Designed and implemented a storage elevator system using pneumatic air cylinders for motion control.",
          button: ""
        },
        {
          title: "CNC Turning Process Simulation",
          desc: "Simulated and validated CNC turning operations using CNC Simulator Pro, including tool selection, material setup, and G-code programming to optimize machining accuracy.",
          button: "Watch Video"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Get in touch",
      call: "Call Me",
      email: "Email",
      location: "Location",
      name: "Name",
      project: "Project",
      message: "Message",
      send: "Send Message"
    },
    footer: {
      subtitle: "Mechatronics Engineer",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      rights: "© Astro-5444. All rights reserved"
    }
  },
  
  // Arabic translations
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "اتصل بي"
    },
    home: {
      title: "مرحباً، أنا عبدالرحمن حازم خليل",
      subtitle: "مهندس ميكاترونيكس",
      description: "أنا مهندس ميكاترونيكس خريج جامعة آسيا والمحيط الهادئ في ماليزيا، ولدي خبرة عملية في الرؤية الآلية والأتمتة والروبوتات. عملت على أنظمة فحص في الوقت الفعلي وطورت خوارزميات رؤية متقدمة.",
      contactBtn: "اتصل بي",
      scrollDown: "انتقل لأسفل"
    },
    about: {
      title: "عني",
      subtitle: "نبذة عني",
      description: "مهندس ميكاترونيكس خريج APU ولدي خبرة في الصناعة، و8 مشاريع مكتملة، ومهارات قوية في الروبوتات والرؤية الآلية والأنظمة المدمجة. قمت بتطوير روبوتات بشرية مدعومة بالذكاء الاصطناعي وأنظمة أتمتة وحلول كشف العيوب باستخدام Python وROS 2 وESP32. أركز على الحلول الهندسية العملية التي تربط الأجهزة بالبرمجيات الذكية.",
      internship: "خبرة<br>التدريب",
      projects: "المشاريع<br>المكتملة",
      companies: "الشركات<br>التي عملت بها",
      cvBtn: "السيرة الذاتية",
      completionBtn: "خطاب الإكمال"
    },
    skills: {
      title: "المهارات",
      subtitle: "مهاراتي التقنية",
      programming: "مهارات البرمجة",
      programmingSub: "خوارزميات الرؤية وتطوير البرمجيات",
      automation: "الأتمتة والروبوتات",
      automationSub: "أنظمة التحكم والمحاكاة",
      design: "التصميم والمحاكاة",
      designSub: "التصميم ثلاثي الأبعاد ونمذجة الأنظمة",
      microsoft: "برامج مايكروسوفت",
      microsoftSub: "حزمة Office وأدوات التعاون"
    },
    qualification: {
      title: "المؤهلات",
      subtitle: "رحلتي المهنية",
      education: "التعليم",
      work: "العمل"
    },
    services: {
      title: "الخدمات",
      subtitle: "ما أقدمه",
      viewMore: "عرض المزيد",
      s1: {
        title: "مهندس الرؤية الآلية<br>Machine Vision",
        items: [
          "تطوير أنظمة فحص في الوقت الفعلي.",
          "تنفيذ وتحسين خوارزميات الرؤية باستخدام OpenCV وMediaPipe.",
          "دمج الكاميرات الصناعية مع خطوط الإنتاج.",
          "ضبط الإضاءة والعتبات لاكتشاف العيوب."
        ]
      },
      s2: {
        title: "مهندس الأتمتة والروبوتات<br>Automation & Robotics",
        items: [
          "تصميم أنظمة الأتمتة وحلول التحكم.",
          "تطوير ومحاكاة الأنظمة الروبوتية باستخدام ROS 2 وGazebo.",
          "دمج المتحكمات الدقيقة مثل Arduino وESP32.",
          "العمل ضمن فرق هندسية متعددة التخصصات."
        ]
      },
      s3: {
        title: "مصمم ميكاترونيكس<br>Mechatronics Designer",
        items: [
          "تصميم المكونات الميكانيكية باستخدام SolidWorks.",
          "تطوير ومحاكاة الأنظمة باستخدام CX Designer وCX Programmer.",
          "تحسين التصاميم لرفع الكفاءة والأداء.",
          "إنشاء نماذج أولية لأنظمة الأتمتة."
        ]
      }
    },
    projects: {
      title: "المشاريع",
      subtitle: "أحدث المشاريع",
      watchVideo: "شاهد الفيديو",
      github: "GitHub Repository",
      cards: [
        {
          title: "ELA: روبوت بشري مدعوم بالذكاء الاصطناعي (FYP)",
          desc: "تطوير روبوت بشري قائم على ROS 2 قادر على التفاعل الصوتي والتعرف على الإيماءات والتنقل الذاتي. تم تمكين التحكم في الذراع عبر RViz ودمج MediaPipe.",
          button: "شاهد الفيديو"
        },
        {
          title: "AGV ذكي لمراقبة مزرعة الفلفل (GDP)",
          desc: "قيادة وحدة الرؤية الآلية لاكتشاف أمراض الفلفل باستخدام نموذج مدرب خصيصاً. تصميم نظام رش انتقائي ودعم ملاحة AGV والإلكترونيات.",
          button: "شاهد الفيديو"
        },
        {
          title: "مساعد سطح المكتب Eva AI",
          desc: "مساعد ذكي لسطح المكتب يجمع مهام الذكاء الاصطناعي مثل إدارة المهام، الجدولة، البريد الإلكتروني، وتنبيهات النظام عبر أوامر اللغة الطبيعية. يعتمد على نماذج Mistral لرفع الإنتاجية.",
          button: "GitHub Repository"
        },
        {
          title: "نظام الختم التلقائي",
          desc: "تصميم ومحاكاة تسلسل ختم أوتوماتيكي باستخدام CX Designer وCX Programmer.",
          button: ""
        },
        {
          title: "ماسح الخدوش والدبابيس المنحنية",
          desc: "نظام فحص بالرؤية للكشف عن الخدوش والدبابيس المنحنية في وحدات التحكم الإلكترونية للسيارات باستخدام كاميرا Zebra VS40 لضمان دقة عالية.",
          button: "شاهد الفيديو"
        },
        {
          title: "هندسة خلاط اللحم",
          desc: "تصميم خلاط لحم وحساب المعايير الميكانيكية لضمان أداء مثالي.",
          button: "شاهد الفيديو"
        },
        {
          title: "نظام المصعد التخزيني الآلي",
          desc: "تصميم وتنفيذ نظام تخزين قائم على المصعد باستخدام الأسطوانات الهوائية للتحكم في الحركة.",
          button: ""
        },
        {
          title: "محاكاة عملية الخراطة CNC",
          desc: "محاكاة عمليات الخراطة باستخدام CNC Simulator Pro، بما في ذلك اختيار الأدوات، إعداد المادة، وبرمجة G-code لتحقيق أعلى دقة.",
          button: "شاهد الفيديو"
        }
      ]
    },
    contact: {
      title: "اتصل بي",
      subtitle: "ابقَ على تواصل",
      call: "اتصل بي",
      email: "البريد الإلكتروني",
      location: "الموقع",
      name: "الاسم",
      project: "المشروع",
      message: "الرسالة",
      send: "إرسال الرسالة"
    },
    footer: {
      subtitle: "مهندس ميكاترونيكس",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "اتصل بي",
      rights: "© Astro-5444. جميع الحقوق محفوظة"
    }
  }
  
};

// Current language state
let currentLang = 'en';

// CV file paths
const cvPaths = {
  en: 'assets/pdf/Abdelrhman-CV-EN.pdf',
  ar: 'assets/pdf/Abdelrhman-CV-AR.pdf'
};

// Translation function
function translatePage(lang) {
  try {
    currentLang = lang;
    
    // Update language button text FIRST (so it always updates even if translation fails)
    const langBtn = document.getElementById('lang-button');
    if (langBtn) {
      // Clear and set the button text
      langBtn.innerHTML = '';
      langBtn.textContent = lang === 'en' ? 'ع' : 'EN';
      // Also set as data attribute for debugging
      langBtn.setAttribute('data-lang', lang);
    }
    
    const t = translations[lang];
    
    if (!t) {
      console.error('Translation not found for language:', lang);
      return;
    }
    
    // Update HTML language attribute but keep layout direction LTR
    document.documentElement.lang = lang;
  
  // Navigation
  document.querySelector('a[href="#home"]').innerHTML = `<i class="uil uil-estate nav__icon"></i> ${t.nav.home}`;
  document.querySelector('a[href="#about"]').innerHTML = `<i class="uil nav__icon uil-user"></i> ${t.nav.about}`;
  document.querySelector('a[href="#skills"]').innerHTML = `<i class="uil nav__icon uil-file-alt"></i> ${t.nav.skills}`;
  document.querySelector('a[href="#services"]').innerHTML = `<i class="uil nav__icon uil-briefcase-alt"></i> ${t.nav.services}`;
  document.querySelector('a[href="#projects"]').innerHTML = `<i class="uil nav__icon uil-scenery"></i> ${t.nav.projects}`;
  document.querySelector('a[href="#contact"]').innerHTML = `<i class="uil nav__icon uil-message"></i> ${t.nav.contact}`;
  
  // Home section
  document.querySelector('.home__title').textContent = t.home.title;
  document.querySelector('.home__subtitle').textContent = t.home.subtitle;
  document.querySelector('.home__description').textContent = t.home.description;
  document.querySelector('.home__data .button').innerHTML = `${t.home.contactBtn} <i class="uil uil-message button__icon"></i>`;
  document.querySelector('.home__scroll-name').textContent = t.home.scrollDown;
  
  // About section
  document.querySelector('#about .section__title').textContent = t.about.title;
  document.querySelector('#about .section__subtitle').textContent = t.about.subtitle;
  document.querySelector('.about__description').textContent = t.about.description;
  
  const aboutInfoNames = document.querySelectorAll('.about__info-name');
  aboutInfoNames[0].innerHTML = t.about.internship;
  aboutInfoNames[1].innerHTML = t.about.projects;
  aboutInfoNames[2].innerHTML = t.about.companies;
  
  const aboutButtons = document.querySelectorAll('.about__buttons .button');
  aboutButtons[0].innerHTML = `${t.about.cvBtn} <i class="uil uil-download-alt button__icon"></i>`;
  aboutButtons[0].href = cvPaths[lang];
  aboutButtons[1].innerHTML = `${t.about.completionBtn} <i class="uil uil-download-alt button__icon"></i>`;
  
  // Skills section
  document.querySelector('#skills .section__title').textContent = t.skills.title;
  document.querySelector('#skills .section__subtitle').textContent = t.skills.subtitle;
  
  const skillsTitles = document.querySelectorAll('.skills__title');
  const skillsSubtitles = document.querySelectorAll('.skills__subtitle');
  skillsTitles[0].textContent = t.skills.programming;
  skillsSubtitles[0].textContent = t.skills.programmingSub;
  skillsTitles[1].textContent = t.skills.automation;
  skillsSubtitles[1].textContent = t.skills.automationSub;
  skillsTitles[2].textContent = t.skills.design;
  skillsSubtitles[2].textContent = t.skills.designSub;
  skillsTitles[3].textContent = t.skills.microsoft;
  skillsSubtitles[3].textContent = t.skills.microsoftSub;
  

  // Qualification section
  document.querySelector('.qualification.section .section__title').textContent = t.qualification.title;
  document.querySelector('.qualification.section .section__subtitle').textContent = t.qualification.subtitle;
  document.querySelectorAll('.qualification__button')[0].innerHTML = `<i class="uil uil-graduation-cap qualification__icon"></i> ${t.qualification.education}`;
  document.querySelectorAll('.qualification__button')[1].innerHTML = `<i class="uil uil-briefcase-alt qualification__icon"></i> ${t.qualification.work}`;
  
  // ================= SERVICES =================
  document.querySelector('#services .section__title').textContent = t.services.title;
  document.querySelector('#services .section__subtitle').textContent = t.services.subtitle;

  const serviceTitles = document.querySelectorAll('.services__title');
  if (serviceTitles[0] && t.services.s1) serviceTitles[0].innerHTML = t.services.s1.title;
  if (serviceTitles[1] && t.services.s2) serviceTitles[1].innerHTML = t.services.s2.title;
  if (serviceTitles[2] && t.services.s3) serviceTitles[2].innerHTML = t.services.s3.title;

  const serviceButtons = document.querySelectorAll('.services__button');
  serviceButtons.forEach(btn => {
    if (btn.childNodes[0] && t.services.viewMore) {
      btn.childNodes[0].textContent = t.services.viewMore + " ";
    }
  });

  const modalTitles = document.querySelectorAll('.services__modal-title');
  if (modalTitles[0] && t.services.s1) modalTitles[0].innerHTML = t.services.s1.title;
  if (modalTitles[1] && t.services.s2) modalTitles[1].innerHTML = t.services.s2.title;
  if (modalTitles[2] && t.services.s3) modalTitles[2].innerHTML = t.services.s3.title;

  const modalItems = document.querySelectorAll('.services__modal-service p');
  if (modalItems[0] && t.services.s1 && t.services.s1.items && t.services.s1.items[0]) modalItems[0].textContent = t.services.s1.items[0];
  if (modalItems[1] && t.services.s1 && t.services.s1.items && t.services.s1.items[1]) modalItems[1].textContent = t.services.s1.items[1];
  if (modalItems[2] && t.services.s1 && t.services.s1.items && t.services.s1.items[2]) modalItems[2].textContent = t.services.s1.items[2];
  if (modalItems[3] && t.services.s1 && t.services.s1.items && t.services.s1.items[3]) modalItems[3].textContent = t.services.s1.items[3];

  if (modalItems[4] && t.services.s2 && t.services.s2.items && t.services.s2.items[0]) modalItems[4].textContent = t.services.s2.items[0];
  if (modalItems[5] && t.services.s2 && t.services.s2.items && t.services.s2.items[1]) modalItems[5].textContent = t.services.s2.items[1];
  if (modalItems[6] && t.services.s2 && t.services.s2.items && t.services.s2.items[2]) modalItems[6].textContent = t.services.s2.items[2];
  if (modalItems[7] && t.services.s2 && t.services.s2.items && t.services.s2.items[3]) modalItems[7].textContent = t.services.s2.items[3];

  if (modalItems[8] && t.services.s3 && t.services.s3.items && t.services.s3.items[0]) modalItems[8].textContent = t.services.s3.items[0];
  if (modalItems[9] && t.services.s3 && t.services.s3.items && t.services.s3.items[1]) modalItems[9].textContent = t.services.s3.items[1];
  if (modalItems[10] && t.services.s3 && t.services.s3.items && t.services.s3.items[2]) modalItems[10].textContent = t.services.s3.items[2];
  if (modalItems[11] && t.services.s3 && t.services.s3.items && t.services.s3.items[3]) modalItems[11].textContent = t.services.s3.items[3];

  
  // ================= PROJECTS =================
  document.querySelector('#projects .section__title').textContent = t.projects.title;
  document.querySelector('#projects .section__subtitle').textContent = t.projects.subtitle;

  // Update projects by matching data-i18n attributes or by index
  // This ensures we update all slides including Swiper duplicates
  if (t.projects.cards) {
    // Get all project titles to identify which project each slide represents
    const allProjectTitles = document.querySelectorAll('.portfolio__title');
    
    allProjectTitles.forEach((titleEl) => {
      // Try to get the data-i18n attribute to identify the project index
      const dataI18n = titleEl.getAttribute('data-i18n');
      let projectIndex = -1;
      
      if (dataI18n) {
        // Extract index from data-i18n like "projects.cards.0.title"
        const match = dataI18n.match(/projects\.cards\.(\d+)\.title/);
        if (match) {
          projectIndex = parseInt(match[1], 10);
        }
      }
      
      // If we couldn't get index from data-i18n, try to find it by parent slide position
      if (projectIndex === -1) {
        const slide = titleEl.closest('.portfolio__content');
        if (slide) {
          const swiperWrapper = slide.closest('.swiper-wrapper');
          if (swiperWrapper) {
            const allSlides = swiperWrapper.querySelectorAll('.portfolio__content');
            const slideIndex = Array.from(allSlides).indexOf(slide);
            // Swiper duplicates slides, so we need to find the original index
            // Original slides are typically in positions 0-7, duplicates come after
            projectIndex = slideIndex % 8;
          }
        }
      }
      
      // Update this slide if we found a valid project index
      if (projectIndex >= 0 && projectIndex < t.projects.cards.length) {
        const card = t.projects.cards[projectIndex];
        const slide = titleEl.closest('.portfolio__content');
        
        if (slide && card) {
          // Update title
          titleEl.textContent = card.title;
          
          // Update description
          const descEl = slide.querySelector('.portfolio__description');
          if (descEl) {
            descEl.textContent = card.desc;
          }
          
          // Update button
          const buttonEl = slide.querySelector('.portfolio__button');
          if (buttonEl) {
            const buttonSpan = buttonEl.querySelector('span');
            if (buttonSpan && card.button) {
              buttonSpan.textContent = card.button;
            }
          }
        }
      }
    });
  }
  
  // Contact section
  document.querySelector('#contact .section__title').textContent = t.contact.title;
  document.querySelector('#contact .section__subtitle').textContent = t.contact.subtitle;
  
  const contactTitles = document.querySelectorAll('.contact__title');
  contactTitles[0].textContent = t.contact.call;
  contactTitles[1].textContent = t.contact.email;
  contactTitles[2].textContent = t.contact.location;
  
  const contactLabels = document.querySelectorAll('.contact__label');
  contactLabels[0].textContent = t.contact.name;
  contactLabels[1].textContent = t.contact.email;
  contactLabels[2].textContent = t.contact.project;
  contactLabels[3].textContent = t.contact.message;
  
  document.querySelector('.contact__form button').innerHTML = `${t.contact.send} <i class="uil uil-message button__icon"></i>`;
  
  // Footer
  document.querySelector('.footer__subtitle').textContent = t.footer.subtitle;
  const footerLinks = document.querySelectorAll('.footer__link');
  footerLinks[0].textContent = t.footer.services;
  footerLinks[1].textContent = t.footer.projects;
  footerLinks[2].textContent = t.footer.contact;
  document.querySelector('.footer__copy').textContent = t.footer.rights;
  
  // Save preference
  localStorage.setItem('preferredLanguage', lang);
  } catch (error) {
    console.error('Error in translatePage:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';

  // Always apply the saved language
  translatePage(savedLang);

  // Add event listener to language button
  const langBtn = document.getElementById('lang-button');
  if (langBtn) {
    // Click handler for language toggle
    const newClickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Toggle language: if current is 'en', switch to 'ar', otherwise switch to 'en'
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      console.log('Switching from', currentLang, 'to', newLang); // Debug log
      translatePage(newLang);
    };
    
    // Remove old listener and add new one
    langBtn.removeEventListener('click', newClickHandler);
    langBtn.addEventListener('click', newClickHandler);
  } else {
    console.error('Language button not found!');
  }
});
