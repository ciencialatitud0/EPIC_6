document.addEventListener('DOMContentLoaded', function() {
  // Mentor data — keys match the data-mentor attribute on each
  // .mentor-card's "Read More" button, in the same order as the cards.
  const mentorData = {
    mentor1: {
      name: "Lupe Villegas, PhD",
      title: "Cellular & Biomedical Image Analysis",
      affiliation: "Instituto de Investigaciones Biomédicas Sols-Morreale (CSIC-UAM), Madrid",
      bio: "I am a physicist with a deep passion for the medical sciences, driven by a longstanding fascination with the complexity of biological systems. This curiosity led me to pursue a Master's in Bioengineering and Biophysics, followed by a PhD in Biomedical Engineering. I am currently a researcher in the imAIgene lab at the Instituto de Investigaciones Biomédicas Sols-Morreale (CSIC-UAM) in Madrid, as part of the CSIC Momentum program, applying machine learning to cell image analysis.",
      achievements: [
        "Researcher, imAIgene lab, Instituto de Investigaciones Biomédicas Sols-Morreale (CSIC-UAM)",
        "Selected for the CSIC Momentum Program, funded by the European Commission – NextGenerationEU"
      ],
      courses: [
        "Bioimage Analysis",
        "Data Science for Biological Data"
      ]
    },
    mentor2: {
      name: "Daysi Quinatoa, PhD",
      title: "Astrophysics and Data Analysis",
      affiliation: "Pontificia Universidad Católica del Ecuador (PUCE), Quito",
      bio: "Daysi holds a PhD in Astrophysics from the Instituto de Física y Astronomía, Universidad de Valparaíso, Chile. Her research focuses on the role of atomic and molecular gas in the evolution of galaxies, including the first ground-based detection of a submillimeter water line in local ultraluminous infrared galaxies using APEX-SEPIA. She is now based at PUCE's Facultad de Ciencias Exactas, Naturales y Ambientales in Quito.",
      achievements: [
        "First ground-based detection of the 752 GHz water line in local ULIRGs using APEX-SEPIA (MNRAS, 2023)",
        "Doctoral research at the Instituto de Física y Astronomía, Universidad de Valparaíso, Chile",
        "Research stay at the Laboratoire de Physique Subatomique et Cosmologie, France"
      ],
      courses: [
        "Observational Astronomy",
        "Data Analysis for Astrophysics"
      ]
    },
    mentor3: {
      name: "Pablo Rodríguez López, PhD",
      title: "Quantum Physics, Statistical Physics, and Materials Physics",
      affiliation: "Universidad Rey Juan Carlos (URJC), Madrid",
      bio: "Pablo is Profesor Titular de Universidad at Universidad Rey Juan Carlos (URJC), Madrid, in the Grupo de Sistemas Complejos y Física Fundamental. He holds a Licenciatura, Master's, and PhD in Physics from Universidad Complutense de Madrid, and completed postdoctoral research at Universidad Carlos III de Madrid, Loughborough University, LPTMS-CNRS, USF, and ICMM. His research spans fluctuation-mediated interactions — the Casimir effect, radiative heat transfer, and quantum friction — as well as the transport properties of 2D and topological materials such as graphene, Chern insulators, and Weyl semimetals.",
      achievements: [
        "Author of 'Contemporary Quantum Mechanics in Practice' (Cambridge University Press)",
        "Over 30 papers in journals including Rev. Mod. Phys., Phys. Rev. Lett., Nature Communications, and Phys. Rev. B",
        "Marie Curie IEF (2011) and Juan de la Cierva-Incorporación (2015) fellow"
      ],
      courses: [
        "Finite Element Methods",
        "Quantum and Statistical Physics"
      ]
    },
    mentor4: {
      name: "Andrés Morales-Navarrete, PhD",
      title: "Computational Biophysics & Machine Learning for Biology",
      affiliation: "Universidad de Las Américas (UDLA), Quito",
      bio: "Hernán Andrés Morales-Navarrete holds a PhD (summa cum laude) in Computational Biology from the Max Planck Institute of Molecular Cell Biology and Genetics in Dresden, Germany, with a specialization in bioimage analysis, machine learning, and computational embryology. He is a Research Professor at Universidad de Las Américas in Quito, Ecuador, with extensive experience in computational research and programming education. His work has been recognized internationally, including a feature in Nature Methods' Method of the Year 2023.",
      achievements: [
        "Nature Methods - Work featured in Method of the Year (2023)",
        "Physics Without Frontiers Grant Awardee (2023, 2024)",
        "EPIC School of Programming for Scientific Research Coordinator",
        "Summa cum laude PhD thesis award, MPI-CBG Dresden"
      ],
      courses: [
        "Bioimage Analysis",
        "Computational Embryology",
        "Machine Learning for Biological Data"
      ]
    },
    mentor5: {
      name: "Paulina Vizcaíno, PhD",
      title: "Computer Science & Data Science Education",
      affiliation: "Universidad Internacional del Ecuador (UIDE), Quito",
      bio: "Paulina holds a Doctorate in Education and is a Full Professor and Director of the Computer Science degree program at Universidad Internacional del Ecuador (UIDE). Her work focuses on artificial intelligence, software development, and cybersecurity, and she has led efforts to strengthen the Computer Science program's ties with industry through active learning methodologies and applied research.",
      achievements: [
        "Director, Computer Science degree program, UIDE",
        "Full Professor, Department of Computer Science, UIDE",
        "Research on virtual learning spaces and the impact of COVID-19 on university education"
      ],
      courses: [
        "Introduction to Python for Scientific Computing",
        "Data Handling and Programming Fundamentals"
      ]
    },
    mentor6: {
      name: "Helga Dénes, PhD",
      title: "Radio Astronomy & Astrophysics",
      affiliation: "Universidad San Francisco de Quito (USFQ)",
      bio: "Helga Dénes has a Master's degree in Astronomy from Eötvös Loránd University in Budapest, Hungary, and a PhD in Astrophysics (2015) from Swinburne University of Technology in Melbourne, Australia. After her PhD, she was a postdoctoral researcher jointly at CSIRO Astronomy and Space Science in Sydney and at the Australian National University in Canberra, and later at ASTRON, the Netherlands Institute for Radio Astronomy. She is now a Professor at Universidad San Francisco de Quito (USFQ). Helga's main scientific interest is how the gas content of galaxies influences their evolution, and she is a member of the Apertif, WALLABY, and GASKAP survey teams, the International Astronomical Union (IAU), and the Astronomical Society of Australia (ASA).",
      achievements: [
        "New H I scaling relations to probe the H I content of galaxies via global H I-deficiency maps",
        "Cold gas outflows from the Small Magellanic Cloud traced with ASKAP",
        "H I-deficient galaxies in intermediate-density environments",
        "Calibrating the HISA temperature: measuring the temperature of the Riegel-Crutcher cloud"
      ],
      courses: [
        "Galaxy evolution",
        "Gas content of galaxies",
        "Radio astronomy surveys"
      ]
    },
    mentor7: {
      name: "Wladimir Banda-Barragán, PhD",
      title: "Computational Astrophysics",
      affiliation: "Universidad Yachay Tech, Urcuquí",
      bio: "I am a computational astrophysicist working at the boundary between astrophysical gas dynamics and magnetohydrodynamics. I am originally from Quito, Ecuador. I did my undergraduate studies at the Physics Department of Escuela Politécnica Nacional in Quito, and completed my PhD at the Research School of Astronomy and Astrophysics of the Australian National University in Canberra. I have worked as a physics lecturer and astrophysics researcher at several institutes, including Ecuador's Meteorology Office (INAMHI), Observatorio Astronómico de Quito, Universidad Técnica de Ambato, Hamburg Observatory of Hamburg University, and more recently I joined Universidad Yachay Tech in Urcuquí. I use supercomputers to numerically simulate astrophysical gases in the interstellar and circumgalactic media, relating the results to telescope observations of dense gas clouds embedded in hot winds, high-velocity clouds in galactic outflows, and turbulent clouds in the Galactic centre.",
      achievements: [
        "Shock-multicloud interactions in galactic outflows – II. Radiative fractal clouds and cold gas thermodynamics",
        "Structure and kinematics of shocked gas in Sgr B2: further evidence of a cloud-cloud collision from SiO emission maps",
        "Shock-multicloud interactions in galactic outflows – I. Cloud layers with lognormal density distributions",
        "Filament formation in wind-cloud interactions. II. Clouds with turbulent density, velocity, and magnetic fields"
      ],
      courses: [
        "Magnetohydrodynamics",
        "Astrophysical gas dynamics",
        "Galactic winds and the Galactic centre"
      ]
    },
    mentor8: {
      name: "Iván Reyes Chacón, MgTI, MCs",
      title: "Cybersecurity and Business Technology and Systems Management",
      affiliation: "Universidad Internacional del Ecuador (UIDE), Quito",
      bio: "Iván Reyes Chacón is a prominent leader in the academic and technological fields, with over a decade of experience in university-level management and teaching. He serves as the Academic Coordinator of Graduate Programs at UIDE's School of Computer Science, where he also coordinates the Master's in Cybersecurity. Iván holds two master's degrees, in Cybersecurity and in Business Technology and Systems Management. As a consultant in Digital Transformation and Applied Artificial Intelligence for Business, his technical background includes software development in Python, Java, Go, and C#, as well as forensic system analysis.",
      achievements: [
        "Academic Coordinator of Graduate Programs, School of Computer Science, UIDE",
        "Coordinator, Master's in Cybersecurity, UIDE",
        "Consultant in Digital Transformation and Applied AI for Business"
      ],
      courses: [
        "Cybersecurity and Digital Risk Management",
        "Machine Learning Concepts for Scientific Data",
        "Forensic Analysis of Information Systems"
      ]
    },
    mentor9: {
      name: "Reidel González Paz, Eng.",
      title: "Software Engineering & Applied AI",
      affiliation: "Universidad Internacional del Ecuador (UIDE), Quito",
      bio: "Reidel is a Software Engineer with two decades of IT experience, starting his career in 2006 at DESOFT (Cuba's national software development enterprise) as a developer and systems specialist. Based in Ecuador since 2015, he works as an independent consultant building custom software solutions — from ERPs and POS systems to APIs, electronic invoicing, and laboratory management software. He currently teaches Artificial Intelligence, Cybersecurity, and Software Development at UIDE, including the Master's in Applied AI, and has mentored students to top honors in international technology competitions.",
      achievements: [
        "Over 20 years of professional software engineering experience (since 2006)",
        "Full-time online faculty at UIDE — AI, Cybersecurity, Software Development, and the Master's in Applied AI",
        "Built the ManaBiche ERP system on AWS (S3, RDS, EC2, Lambda, SNS, SES, DynamoDB), in continuous development for over 6 years",
        "Nearly 9 years supporting the Versat Sarasola ERP at DESOFT, Cuba, across dozens of client institutions",
        "Mentored a student to a Platinum award (top prize) in Software Development at Infomatrix 2025"
      ],
      courses: [
        "Machine Learning",
        "Applied Artificial Intelligence",
        "Web & Cloud Systems Development"
      ]
    },
    mentor10: {
      name: "Marcela Gallegos Altamirano, MSc.",
      title: "Systems Engineering & Digital Business",
      affiliation: "Universidad Politécnica Salesiana",
      bio: "Marcela Gallegos Altamirano holds a degree in Systems Engineering from Universidad Politécnica Salesiana and a Master's degree in Communication Networks from Pontificia Universidad Católica del Ecuador (PUCE). Since 2018, she has been a member of IEEE, actively participating in technology, innovation, and leadership initiatives. She currently teaches in the Digital Business program at Universidad Politécnica Salesiana, where she has led courses in programming, technology, and applied engineering. She previously spent six years managing a research data center, and her work focuses on technology, education, and community-outreach projects that promote digital skills, innovation, and inclusion.",
      achievements: [
        "IEEE member since 2018, active in technology, innovation, and leadership initiatives",
        "Six years managing a research data center",
        "Professor, Digital Business program, Universidad Politécnica Salesiana",
        "M.Sc. in Communication Networks, Pontificia Universidad Católica del Ecuador (PUCE)"
      ],
      courses: [
        "Programming Fundamentals",
        "Applied Engineering & Technology",
        "Digital Business & Innovation"
      ]
    },
    mentor11: {
      name: "Marco Vinueza Bustamante, Eng.",
      title: "Telecommunications Engineering & RF Systems",
      affiliation: "Escuela Politécnica Nacional / IEEE Región 9",
      bio: "Marco Alfonso Vinueza Bustamante is a Telecommunications Engineer from Escuela Politécnica Nacional (Ecuador), where he graduated Summa Cum Laude and received academic excellence scholarships. His areas of interest include RF engineering, mobile networks, wireless communications, IoT, and next-generation connectivity technologies. He has taken part in research projects on antenna design, sensor networks, and embedded systems, with publications indexed in IEEE Xplore and Scopus. He is also an active IEEE volunteer, holding leadership roles in IEEE MTT-S, IEEE ComSoc, and IEEE Region 9, where he drives mentorship, training, and technical activities for students and young professionals across Latin America.",
      achievements: [
        "Summa Cum Laude graduate, Escuela Politécnica Nacional, with academic excellence scholarships",
        "Research on antenna design, sensor networks, and embedded systems",
        "Publications indexed in IEEE Xplore and Scopus",
        "Leadership roles in IEEE MTT-S, IEEE ComSoc, and IEEE Region 9"
      ],
      courses: [
        "RF Engineering Fundamentals",
        "Wireless Communications & IoT",
        "Next-Generation Connectivity Technologies"
      ]
    },
  };

  // Mentor modal functionality
  const mentorButtons = document.querySelectorAll('.mentor-more');
  const mentorModal = document.getElementById('mentorModal');
  const modalTitle = document.querySelector('#mentorModal .modal-title');
  const modalBody = document.querySelector('#mentorModal .modal-body');

  mentorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const mentorId = this.getAttribute('data-mentor');
      const mentor = mentorData[mentorId];
      if (!mentor) return;

      modalTitle.textContent = mentor.name;

      let achievementsHTML = '';
      (mentor.achievements || []).forEach(achievement => {
        achievementsHTML += `<li>${achievement}</li>`;
      });

      let coursesHTML = '';
      (mentor.courses || []).forEach(course => {
        coursesHTML += `<li>${course}</li>`;
      });

      modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-8">
            <h4>${mentor.title}</h4>
            ${mentor.affiliation ? `<p><strong>${mentor.affiliation}</strong></p>` : ''}
            <p>${mentor.bio}</p>

            ${achievementsHTML ? `<h5>Key Achievements</h5><ul>${achievementsHTML}</ul>` : ''}
            ${coursesHTML ? `<h5>Courses & Workshops</h5><ul>${coursesHTML}</ul>` : ''}
          </div>
        </div>
      `;

      // Show modal (using Bootstrap's modal method)
      $('#mentorModal').modal('show');
    });
  });
});
