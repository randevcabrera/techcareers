document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup');
  var closePopup = document.getElementById('closePopup');

  closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('careerQuiz');
    const nextButton = document.getElementById('nextButton');
    const questionContainer = document.getElementById('questionContainer');
    const progressBar = document.getElementById('progress');
    const resultDiv = document.getElementById('result');
    
    const questions = [
        { text: "1. What interests you the most?", options: ["A", "Solving security threats", "B", "Analyzing data", "C", "Setting up networks", "D", "Designing websites", "E", "Helping people with tech issues", "F", "Managing databases", "G", "Writing software"] },
            // Question 2
            {
              text: "2. Which subject do you enjoy the most in school?",
              options: [
                "A", "CSS .Net Programming (Cybersecurity)",
                "B", "Practical Research 1, Practical Research 2",
                "C", "UCSP (Networking or Systems)",
                "D", "Contemporary Arts (Art or Web Design)",
                "E", "General Mathematics or CSS .java (Computer Science)"
              ]
            },
            // Question 3
            {
              text: "3. How do you approach problem-solving?",
              options: [
                "A", "Analyzing threats and vulnerabilities",
                "B", "Interpreting data and finding insights",
                "C", "Systematically troubleshooting network issues",
                "D", "Creatively designing user interfaces",
                "E", "Communicating effectively and providing support",
                "F", "Organizing and querying databases",
                "G", "Writing efficient and effective code"
              ]
            },
            // Question 4
            {
              text: "4. What excites you the most about working in IT?",
              options: [
                "A", "Protecting systems from cyber threats",
                "B", "Analyzing large datasets to find trends",
                "C", "Maintaining and configuring networks",
                "D", "Designing and developing websites",
                "E", "Assisting users with technical issues",
                "F", "Managing and organizing databases",
                "G", "Developing new software applications"
              ]
            },
            // Question 5
            {
              text: "5. Which tools or technologies are you most interested in learning?",
              options: [
                "A", "Security software and protocols",
                "B", "Data analysis tools (e.g., R, SQL)",
                "C", "Network hardware and configurations",
                "D", "Web development frameworks (e.g., HTML, CSS, JavaScript)",
                "E", "Helpdesk software",
                "F", "Database management systems (e.g., MySQL, Oracle)",
                "G", "Programming languages (e.g., Java, Python)"
              ]
            },
            // Question 6
            {
              text: "6. How do you stay updated with the latest technology trends?",
              options: [
                "A", "Following cybersecurity news",
                "B", "Participating in data science communities",
                "C", "Exploring new networking technologies",
                "D", "Learning from web development tutorials",
                "E", "Participating in tech support communities",
                "F", "Keeping up with database advancements",
                "G", "Reading tech blogs and forums"
              ]
            },
            // Question 7
            {
              text: "7. What is your preferred work environment?",
              options: [
                "A", "A secure environment monitoring for threats",
                "B", "Analyzing data independently or with a small team",
                "C", "Configuring and maintaining network systems",
                "D", "A creative space designing websites",
                "E", "Helping users resolve technical issues",
                "F", "Managing large databases",
                "G", "A collaborative team working on software projects"
              ]
            },
            // Question 8
            {
              text: "8. What type of projects do you enjoy working on?",
              options: [
                "A", "Security audits and threat assessments",
                "B", "Data analysis projects",
                "C", "Network setup and maintenance",
                "D", "Web design and development",
                "E", "Providing technical support and troubleshooting",
                "F", "Database design and management",
                "G", "Software development and coding"
              ]
            },
            // Question 9
            {
              text: "9. What kind of work gives you the most satisfaction?",
              options: [
                "A", "Identifying and fixing security issues",
                "B", "Discovering insights from data",
                "C", "Ensuring network stability",
                "D", "Creating visually appealing websites",
                "E", "Solving technical problems for others",
                "F", "Structuring and managing data effectively",
                "G", "Building functional software"
              ]
            },
            // Question 10
            {
              text: "10. What is your favorite aspect of technology?",
              options: [
                "A", "Security and protection",
                "B", "Data and analytics",
                "C", "Networking and systems",
                "D", "Design and creativity",
                "E", "Technical support and user help",
                "F", "Databases and information",
                "G", "Programming and development"
              ]
            },
            {
                text: "11. How do you handle challenging tasks?",
                options: [
                  "A", "By ensuring systems are secure",
                  "B", "By analyzing data to find solutions",
                  "C", "By systematically troubleshooting",
                  "D", "By approaching them creatively",
                  "E", "By communicating and resolving issues",
                  "F", "By organizing and managing data",
                  "G", "By coding and problem-solving"
                ]
              },
              // Question 12
              {
                text: "12. What role do you see yourself in a team?",
                options: [
                  "A", "Security specialist",
                  "B", "Data analyst",
                  "C", "Network administrator",
                  "D", "Web designer",
                  "E", "Tech support expert",
                  "F", "Database manager",
                  "G", "Software developer"
                ]
              },
              // Question 13
              {
                text: "13. How do you prioritize tasks?",
                options: [
                  "A", "By evaluating security risks",
                  "B", "By assessing data importance",
                  "C", "By considering network impact",
                  "D", "By design and usability needs",
                  "E", "By urgency of tech support",
                  "F", "By database efficiency",
                  "G", "By software functionality"
                ]
              },
              // Question 14
              {
                text: "14. What kind of challenges do you enjoy facing?",
                options: [
                  "A", "Cyber threats and attacks",
                  "B", "Complex data analysis",
                  "C", "Network issues",
                  "D", "Design challenges",
                  "E", "Technical support problems",
                  "F", "Data management",
                  "G", "Software bugs"
                ]
              },
              // Question 15
              {
                text: "15. What are your strengths?",
                options: [
                  "A", "Attention to detail and security",
                  "B", "Analytical thinking",
                  "C", "Systematic problem-solving",
                  "D", "Creativity and design skills",
                  "E", "Communication and tech support",
                  "F", "Organization and data management",
                  "G", "Coding and development"
                ]
              },
              // Question 16
              {
                text: "16. What type of tasks do you prefer?",
                options: [
                  "A", "Security assessments",
                  "B", "Data analysis",
                  "C", "Network configuration",
                  "D", "Web design",
                  "E", "Tech support",
                  "F", "Database management",
                  "G", "Software coding"
                ]
              },
              // Question 17
              {
                text: "17. What motivates you the most?",
                options: [
                  "A", "Ensuring security",
                  "B", "Discovering data patterns",
                  "C", "Keeping systems running",
                  "D", "Creating beautiful designs",
                  "E", "Helping others with tech issues",
                  "F", "Managing data efficiently",
                  "G", "Building useful software"
                ]
              },
              // Question 18
              {
                text: "18. What is your approach to learning new things?",
                options: [
                  "A", "Through security courses and certifications",
                  "B", "By practicing data analysis",
                  "C", "Hands-on network configuration",
                  "D", "Online tutorials and design practice",
                  "E", "Helping others and gaining experience",
                  "F", "Working with database systems",
                  "G", "Coding challenges and projects"
                ]
              },
              // Question 19
              {
                text: "19. How do you approach teamwork?",
                options: [
                  "A", "Ensuring team security",
                  "B", "Contributing data insights",
                  "C", "Coordinating network tasks",
                  "D", "Collaborating on design projects",
                  "E", "Providing support and assistance",
                  "F", "Managing team data",
                  "G", "Coding with the team"
                ]
              },
              // Question 20
              {
                text: "20. What is your career goal?",
                options: [
                  "A", "To become a cybersecurity expert",
                  "B", "To excel in data science",
                  "C", "To be a top network administrator",
                  "D", "To create amazing websites",
                  "E", "To be an IT support guru",
                  "F", "To manage large databases",
                  "G", "To develop cutting-edge software"
                ]
              }            
          ];

    let currentQuestionIndex = 0;
    const totalQuestions = questions.length;
    let answers = {};

    function showQuestion(index) {
        const question = questions[index];
        const optionsHtml = question.options.map((opt, i) => i % 2 === 0 ? `<label class="option"><input type="radio" name="q${index+1}" value="${opt}">${question.options[i+1]}</label>` : '').join('');
        questionContainer.innerHTML = `<p>${question.text}</p>${optionsHtml}`;
        updateProgressBar(index);
    }

    function updateProgressBar(index) {
        const progressPercentage = ((index + 1) / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    nextButton.addEventListener('click', function() {
        const formData = new FormData(form);
        const answer = formData.get(`q${currentQuestionIndex + 1}`);
        if (!answer) {
            alert("Please select an answer.");
            return;
        }
        answers[`q${currentQuestionIndex + 1}`] = answer;

        if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            const result = calculateCareerPath(answers);
            resultDiv.innerText = `Your ideal IT career is: ${result.career}`;
            form.style.display = 'none';
            if (result.redirectUrl) {
                setTimeout(() => {
                    window.location.href = result.redirectUrl;
                }, 3000);
            }
        }
    });

    function calculateCareerPath(answers) {
        const careerScores = {
            "A": 0,
            "B": 0,
            "C": 0,
            "D": 0,
            "E": 0,
            "F": 0,
            "G": 0
        };

        for (const answer of Object.values(answers)) {
            careerScores[answer]++;
        }

        const highestScore = Math.max(...Object.values(careerScores));
        const highestCategories = Object.keys(careerScores).filter(category => careerScores[category] === highestScore);

        let career = '';
        let redirectUrl = '';

        if (highestCategories.includes('A')) {
            career = 'Cybersecurity Specialist';
            redirectUrl = 'cybersecurity.html';
        } else if (highestCategories.includes('B')) {
            career = 'Data Scientist';
            redirectUrl = 'datascience.html';
        } else if (highestCategories.includes('C')) {
            career = 'Network Administrator';
            redirectUrl = 'networkadmin.html';
        } else if (highestCategories.includes('D')) {
            career = 'Web Designer';
            redirectUrl = 'webdesigner.html';
        } else if (highestCategories.includes('E')) {
            career = 'IT Support Specialist';
            redirectUrl = 'itsupport.html';
        } else if (highestCategories.includes('F')) {
            career = 'Database Manager';
            redirectUrl = 'databasemanager.html';
        } else if (highestCategories.includes('G')) {
            career = 'Software Developer';
            redirectUrl = 'softwaredevelopment.html';
        }

        return { career, redirectUrl };
    }

    showQuestion(currentQuestionIndex);
});