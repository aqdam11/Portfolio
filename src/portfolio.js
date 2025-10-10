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
  title: "Hi all, I'm Aqdam cjkc",
  subTitle: emoji(
    "I love Cloud and enjoy building reliable, scalable, and automated infrastructure—especially in Azure. I have hands-on experience with CI/CD pipelines, IaC and containerized applications. I thrive on solving challenges at the intersection f development, infrastructure, and automation. Outside the world of pipelines and deployments, you’ll often find me sketching, playing chess, catching up on F1, lifting at the gym, reading fiction, playing tennis or discovering new places. "
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
      "⚡ Fix Issues"
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
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      desc: "Participated in the Research of Effect of Coarse Aggregate on Self Compacting Concrete and published 1 paper.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
      desc: "Worked as a Devops Engineer supporting Microsoft Client to help build s",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "Design Intern",
      company: "Design Tree Service Consultant Pvt Ltd",
      companylogo: require("./assets/images/des.png"),
      date: "July 2019 – August 2019",
      desc: "Worked on School Building Design"
      
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
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/az900.png"),
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
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/gcp.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/verify/professional-cert/S8F5ZWG9H78R"},
      ]
    },
    {
      title: "HackerRank - SQL (Intermediate)",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
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
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
