// Mock data for Ben Pollins Tech Portfolio

export const personalInfo = {
  name: "BEN POLLINS",
  title: "CLOUD CONSULTANT",
  location: "London, N6",
  email: "benpollins@hotmail.com",
  website: "benpollins.com",
  linkedin: "linkedin.com/in/ben-pollins",
  github: "github.com/BPollins",
  headshot: "/images/Headshot_New_Compressed.JPG",
  welcomeMessage: "Welcome! I created this website to share my CV and to showcase some of my personal Data Science projects - feel free to look around and be sure to reach out if anything takes your interest.",
  signature: "- Ben"
};

export const summary = "Curious and engaged tech professional with a strong appetite for learning and growth. Skilled in optimising cloud infrastructure to support business goals and proficient in data processing, visualisation, and machine learning to develop impactful, data-driven solutions. Comfortable delivering software development work within Agile environments and experienced in team leadership, project management, and cross-functional collaboration – with a proven track record of driving meaningful, positive change in the teams I work in. Known for my enthusiasm and aptitude for problem-solving and pro-active approach to work.";

export const technologies = [
  "AWS EC2", "Fargate", "ECS", "Lambda", "S3", "Route 53", "Dynamo DB", "IAM", "CloudWatch",
  "Fault Injection Service", "Python", "Scikit-Learn", "Pandas", "SQL Server", "TypeScript",
  "Apache JMeter", "Cypress", "PySpark", "NumPy", "GitHub Workflows", "Jupyter Notebook",
  "Microsoft Excel", "HTML", "CSS"
];

export const skills = [
  "Cloud Quality Engineering", "Test Automation", "Infrastructure Performance Testing",
  "CI/CD", "Agile Working", "Problem Solving", "Project Management", "Team Leadership",
  "Stakeholder Management", "Communication", "Emotional Intelligence", "Self-Motivation",
  "Ownership", "Adaptability", "Resilience"
];

export const experience = [
  {
    title: "Cloud Consultant",
    company: "Capacitas",
    period: "Nov 2024 - Present",
    description: "I create value for clients through a variety of cloud-centric services including:",
    responsibilities: [
      "Planning, assuring and coordinating wide-scale cloud migration for multi-million user websites with zero down-time",
      "Empowering software development teams by creating functional and non-functional test automation via GitHub Workflows and implementing in CI/CD pipelines",
      "Interrogation and analysis of cloud performance to identify architectural bottlenecks and instigate change",
      "Preparing clients for peak traffic periods and managing cloud spend through capacity management and cost-optimisation",
      "Driving continuous improvement within my team through streamlining of our test approach and reporting pipelines"
    ]
  },
  {
    title: "Data Scientist",
    company: "The Mezz Lender",
    period: "Dec 2023 - October 2024",
    responsibilities: [
      "Championed data transformation within the company, successfully moving from a gut-feel approach to operations, to a data-driven strategy",
      "Leveraged machine learning to develop a loan risk calculator to underpin the deal selection process",
      "Streamlined data collection, interrogation and management through automated data flows",
      "Conducted exploratory analysis of customer data to understand client patterns and advise business strategy",
      "Using enhanced processes, we green-lit over £5 million of loans with increased certainty and reduced operational overhead"
    ]
  },
  {
    title: "BMS Software Engineer",
    company: "Laing O'Rourke",
    period: "Oct 2023 - Nov 2024",
    responsibilities: [
      "Developed building automation software for life-safety-critical systems on a construction project valued at over £1 billion",
      "Created front-end and back-end integrations for clients to manage and control equipment in the building"
    ]
  },
  {
    title: "Senior Mechanical Engineer",
    company: "Laing O'Rourke",
    period: "Oct 2022 - Oct 2023",
    responsibilities: [
      "Managed the design, construction and commissioning of mechanical, electrical and public health systems across 5 major construction projects with a total value of over £500 million, personally delivering £12 million of work"
    ]
  }
];

export const education = [
  {
    title: "AWS Cloud Certified Solutions Architect Associate",
    institution: "Udemy",
    period: "Aug 2025 - Present",
    type: "certification"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    institution: "Udemy",
    period: "May 2024",
    type: "certification"
  },
  {
    title: "Data Science Bootcamp",
    institution: "HyperionDev",
    period: "Dec 2023 - Feb 2024",
    type: "bootcamp"
  },
  {
    title: "Various Courses",
    institution: "Codecademy",
    period: "2022 - 2023",
    grade: "Pass",
    type: "course",
    description: "Self-directed learning in various courses including:",
    courses: [
      "Machine Learning with PySpark",
      "Machine Learning/AI Engineering with data pre-processing, model selection, feature engineering and hyperparameter tuning",
      "Natural Language Processing with SpaCy",
      "Front-End Software Engineering"
    ]
  },
  {
    title: "Mechanical Engineering MEng",
    institution: "University of Bristol",
    period: "2015 - 2019",
    grade: "1st",
    type: "degree",
    description: "Utilised MATLAB for data processing and visualisation on coursework and completed projects including:",
    projects: [
      "Engineered a 3D printer capable of scanning and printing on unknown surfaces. Used MATLAB to compile and refine the scanned data and mapping the print to the new surface",
      "Developing an augmented reality application for the Microsoft HoloLens to test a student-built racecar's dimension against competition rules – leveraging Unity and C#"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Automated Schematic Reader",
    description: "Machine Learning application that reads mechanical schematics and automatically counts components, removing manual errors and saving time in construction procurement.",
    fullDescription: [
      "As a Mechanical Engineer working in construction, I used mechanical schematics (system drawings) daily to understand the systems, identify the scope of work, and inform commissioning strategies.",
      "One particular use of these drawings is the initial take-off of all components (i.e. counting up all pumps, valves, meters, etc.) so the correct materials can be purchased in the required quantities. While this is an essential task for the estimating and procurement stages of all projects, it has always been done the same way: one person is given a stack of drawings to review and count manually. Not only is this a very slow and time-consuming process, but the final totals almost always contain human error, leading to costly re-orders and delays to the project.",
      "To solve this, I have created an application to remove the manual nature of this task - allowing users to import a pdf file of their drawing, returning a table that summarises all components and their quantities.",
      "Written in Python, the application reads the drawing, identifies pipework components and leverages Machine Learning to classify and tally the results.",
      "While this solves one problem - it is only just the start! Training a model to read and understand schematics can have huge applications across construction, from interrogating system design in the early stages of the project to advising plant-replacement strategies following handover - this tool has only scratched the surface."
    ],
    technologies: ["Python", "Machine Learning", "Computer Vision", "PDF Processing"],
    category: "Machine Learning",
    image: "/images/mechanical-pipework.jpg",
    github: "https://github.com/BPollins/SchematicReader"
  },
  {
    id: 2,
    title: "Personal Finance Analysis",
    description: "Exploratory data analysis of 8 years of banking transactions using Python and matplotlib, identifying spending patterns and achieving £100/month savings.",
    fullDescription: [
      "Many modern banking apps have in-built tools to assist customers with budgeting - from classifying transactions to tracking your spending at specific retailers, these tools provide interesting insight into the customer and where their money is spent.",
      "Having banked with the same company for the last 8 years, I do not have these nifty tools at my disposal. To gain the same level of insight into my spending, I decided to download all transaction data from my account, and using Python and the matplotlib library I undertook an exploratory analysis of this information.",
      "Using the limited information in each transaction's description, I could identify characteristic trends in my spending, allowing me to effectively budget my finances and save up to £100 a month."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis", "EDA"],
    category: "Data Analysis",
    image: "/images/personal-finances.jpg",
  },
  {
    id: 3,
    title: "Loan Risk Predictor with PySpark",
    description: "Scalable machine learning model built with PySpark achieving 90%+ accuracy in predicting loan defaults, with comprehensive feature engineering and hyperparameter tuning.",
    fullDescription: [
      "Predicting loan defaults is crucial for financial institutions to minimize risk and make informed lending decisions. By identifying potential defaulters early, banks and lenders can take proactive measures to mitigate losses, adjust credit policies, and offer tailored financial solutions. Predicting these defaults is an interesting challenge, so in this project I developed a machine learning model to do just that, using data obtained from Kaggle and using PySpark for data processing.",
      "Using Python and PySpark I loaded the data and started investigating - looking for high-level patterns in the distribution of the data and exploring the correlation between variables. I then looked to clean and preprocess the data by handling missing values, encoding categorical variables, and normalising numerical features. Careful feature engineering and model selection allowed me to create new features that captured the complex relationships within the data and find the most suitable algorithms to model them, ready for an iterative process of hyperparameter tuning to optimize performance.",
      "The result was an algorithm that could predict a loan default with an accuracy and recall of over 90% - and one that could be reliably scaled by multitudes with ease."
    ],
    technologies: ["PySpark", "Python", "Machine Learning", "Scikit-Learn", "Feature Engineering"],
    category: "Machine Learning",
    image: "/images/data-on-screen.jpg",
    github: "https://github.com/BPollins/Loan_Risk_Predictor_With_PySpark"
  }
];

export const interests = [
  "Founder, chairman and goalkeeper of a Sunday-league football team",
  "Run a regular badminton tournament for friends and family",
  "Design and fabricate household items using CAD software and 3D printer",
  "Trained in martial arts and hold a black belt in Karate"
];