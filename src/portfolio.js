/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aqdam Rahman. ",
  title: "Hi! I'm Aqdam",
  subTitle: emoji(
    "I love Cloud and enjoy building reliable, scalable, and automated infrastructure especially in Azure. I have hands-on experience with CI/CD pipelines, IaC and containerized applications. I thrive on solving challenges at the intersection of development, infrastructure, and automation. Outside the world of pipelines and deployments, you’ll often find me sketching, playing chess, catching up on F1, lifting at the gym, reading fiction, playing tennis or discovering new places. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aqdam11",
  linkedin: "https://www.linkedin.com/in/aqdamrahman/",
  gmail: "aqdam.1js16cv006@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/aqdam.poke",
  medium: "https://medium.com/@aqdampoke62",
  instagram: "https://instagram.com/aqdam_rahman",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY CLOUD ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build Reliable, Scalable Infra"
    ),
    emoji("⚡ Automate Stuffs"),
    emoji(
      "⚡ Fix Servers"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-cloud"
    },
    {
      skillName: "SaaS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Suse",
      fontAwesomeClassname: "fab fa-suse"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "JSS Academy of Technical Education, Bangalore",
      logo: require("./assets/images/jssate.png"),
      subHeader: "Bachelor's in Engineering",
      duration: "August 2016 - July 2020",
      desc: "Scored an average of 60%",
      descBullets: [
        "Published Research Paper on Effect of size of Coarse Aggregate on Self Compacting Concrete of M50 Grade."
      ]
    },
    {
      schoolName: "MDB DAV Public School, Bankura",
      logo: require("./assets/images/dav.png"),
      subHeader: "Physics Chemistry Maths - Comp Sc",
      duration: "April 2014 - March 2016",
      desc: "Scored an average of 85%",
      descBullets: [
        "Participated in zonal Kho-Kho tournament",
        "Achieved multiple medals in athletics."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Azure", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Scripting/Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Deployment",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Devops Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/accen.png"),
      date: "October 2021 – November 2025",
      desc: "Worked as a Devops Engineer supporting Microsoft Client",
      descBullets: [
        "Built and managed CI/CD pipelines with Jenkins and Docker to automate the build process of applications.",
        "Led end-to-end cluster buildouts for Nutanix along with Azure infra setup for each location, ensuring seamless integration and optimized performance.",
        "Implemented System automation using scripting languages Python and Bash, cutting manual work by 60%.",
        "Deployed applications to the cloud using ARM template with CI/CD pipeline in Azure Devops.",
        "Performed provisioning of new Customer and Decommissioning of existing customer for BareMetal servers.",
        "Performed end-to-end datacenter build and on requirement of discrete server installation.",
        "Worked on script for swap of servers, Firmware Upgrade and Gen IO Testing",
        "Worked closely with on-site Network Engineers to configure/troubleshoot switches, routers and managed NetApp storage Solution"
      ]
    },
    {
      role: "Design Intern",
      company: "Design Tree Service Consultant Pvt Ltd",
      companylogo: require("./assets/images/des.png"),
      date: "July 2019 – August 2019",
      desc: "Worked on School Building Design",
      descBullets: [
        "Assisted in the architectural planning and layout design for a school building project.",
        "Created 2D and 3D design models using AutoCAD",
        "Performed structural load testing on columns and slabs to assess their strength and stability.",
        "Conducted site analysis and gathered data to support sustainable design solutions."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Personal Projects",
  projects: [
    {
      image: require("./assets/images/2048.png"),
      projectName: "2048 Game",
      projectDesc: "DevSecOps: Deployed the 2048 Game on Docker and Kubernetes with Jenkins CI/CD.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/aqdam11/2048-Game"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jenkins.png"),
      projectName: "Website Automation",
      projectDesc: "Deploying and Automating website to Azure VM",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/aqdam11/Deploying-Website-to-Azure-VM"
        }
      ]
    },
    {
      image: require("./assets/images/paper.png"),
      projectName: "Paper Publication",
      projectDesc: "Study fresh and mechanical properties of M50 grade Self Compacting Concrete by changing the size of coarse aggregate.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.irjet.net/archives/V7/i8/IRJET-V7I8424.pdf"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tableau.png"),
      projectName: "Covid19 India Analysis and Dashboard Visualization using Tableau",
      projectDesc: "An interactive Tableau dashboard that analyzes and visualizes the spread, trends, and impact of COVID-19 across India using real-time and historical data.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://public.tableau.com/app/profile/aqdam.rahman/viz/Covid19India_16193394243840/Covid19IndiaAnalysis"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/a.png"),
      projectName: "College Building Design",
      projectDesc: "Created 3D Image of the college building using AutoCAD",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://aqrdesigner.blogspot.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle:
        "The skill of an Azure Administrator, covering how to implement and manage core Azure services, including storage, compute, and networking",
      image: require("./assets/images/az104.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-gb/users/rahmanaqdam-0904/credentials/6057f2ad1afe5531?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals                     AZ900",
      subtitle:
        "Foundational understanding of cloud computing and Microsoft Azure services",
      image: require("./assets/images/az901.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-gb/users/rahmanaqdam-0904/credentials/1bb8d1285b81c12a?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },

    {
      title: "Cloud Engineering with Google Cloud Specialization",
      subtitle: "Learned to design, build and manage cloud solution on Google Cloud. Covers key areas like setting up and securing netowrks, running application on Google Kubernetes Engine, and managing cost and security.",
      image: require("./assets/images/gcp.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/verify/professional-cert/S8F5ZWG9H78R"},
      ]
    },
    {
      title: "HackerRank - SQL (Intermediate)",
      subtitle: "Completed Certifcation from HackerRank by solving problems that focus on concepts and technique necessary for more complex data manipulation, analysis and query optimization.",
      image: require("./assets/images/hr.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/4e9ed4118cb3"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@aqdampoke62/what-is-docker-38afcd25757e",
      title: "What is Docker?",
      description:
        "Learn Docker in a simple way!"
    },
    {
      url: "https://medium.com/@aqdampoke62/what-is-jenkins-378cdd8ac702",
      title: "What is Jenkins?",
      description:
        "Learn Jenkins in a simple way!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Coming Soon.. 😅"
  ),

  talks: [
    {
      title: "Construction in Progress! 🚧 ",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Sometime in the future...",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9591587443",
  email_address: "aqdam.1js16cv006@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
