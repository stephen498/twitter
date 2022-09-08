import React,{ Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
export default class Signup extends Component {
    state={
        step:1,
        email:'',
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        country:'',
        levelOfEducation:'',
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({step:step-1});
    }

     nextStep=()=>{
        const {step}=this.state;
        this.setState({step:step+1});
    }
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});
    }
    render(){
        const{step}=this.state;
        const{email,username,password,firstName,lastName,country,levelOfEducation}=this.state;
        const values = {
          email,
          username,
          password,
          firstName,
          lastName,
          country,
          levelOfEducation,
        };
         const names = [
      {
        id: 0,
        stuId: 3374,
        name: "Adeyemi Buhari",
        track: "Cloud Engineering",
        circle: 145,
        img: "https://avatars.githubusercontent.com/u/62425852?s=400&u=157c27b3c52cfcadb6c2c5e8513b7ad897e7fc5a&v=4",

        description: {
          intro: "There is no cloud. It’s just someone else’s computer",
          introdetails:
            "I've been obsessed with the idea of using software to solve practical problems since I wrote my first program in Qbasic and manipulated it to produce the desired output. I am passionate about solving the never-ending puzzle that is software engineering. I believe in the power of programming to change and improve people's lives all over the world. Adeyemi Buhari Opeyemi is a Junior Web Developer who has worked in the frontend team of some amazing organizations. Design thinking, problem solving, communication, education, and training are all areas in which I excel. If you are a company looking for a web presence or an employer looking to hire, please contact me here. In previous years, I had the opportunity to intern with TIIDELAB, an organization that assists passionate students and graduates in developing their skills in software engineering, as well as providing softskills with full curriculum to assist fellows in building a public profile. Moving forward on my journey, I decided to focus on becoming a world class cloud engineer in the coming years, assisting organizations to scale applications, manage resources, provide server security, and collaborate with in-house software engineering teams to negotiate seamless ways to provide and scale applications. I am currently studying cloud engineering at Altschool Africa, a recognized institution in Africa and beyond. Altschool Africa is for individuals looking to gain technical skills and kickstart a career in Software Engineering.",
        },

        socialmedia: {
          linkedin:
            "https://www.linkedin.com/in/adeyemi-buhari-opeyemi-3aa4781b5/",
          github: "https://github.com/buhari44",
          twitter: "https://twitter.com/Cloud_Lordd",
          portfolio: "",
          slackHandle: "cloudlord",
        },

        experience: {
          first: "FrontEnd Engineer Intern @TIIDELAB",
          second: "Program Manager @Novustack",
          third: "",
        },

        project: {
          first: {
            projectname: "FORBES",
            projectdescription:
              "A platform that was built on forbes api,it display and give extensive informations on current richest folks in the world",
            projectlink: "https://afrikaforbes.netlify.app/",
          },
          second: {
            projectname: "Box-Monie",
            projectdescription:
              "A financial platform that allow users to contibute and take turns by creating cohort that contain certain number of user.Still in progress.",
            projectlink: "http://boxmonie.com/",
          },

          third: {
            projectname: "The-Life-Changer",
            projectdescription:
              "The life changer is a platform where 2021 Jamb Applicants can find Questions and Answers to the Life Changer Novel.",
            projectlink: "https://savethenextjambites.netlify.app/",
          },
        },
      },
      {
        id: 1,
        stuId: 2557,
        name: "Funmilayo Fagoyinbo",
        track: "Cloud Engineering",
        circle: 361,
        img: "https://github.com/Adephumie.png",

        description: {
          intro:
            "Problem solving is the most important aspect of my personality. I also enjoy helping people figure things out.",
          introdetails:
            "Having spent some years in the pharmaceutical industry as a Medical Sales Representative, starting a family, and thinking of the way forward, I decided to tap into my love for IT.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/funmifago/",
          github: "https://github.com/Adephumie",
          twitter: "https://twitter.com/funmifago",
          portfolio: "https://github.com/Adephumie",
          slackHandle: "Adefunmilayo",
        },

        project: {
          first: {
            projectname: "Webpage",
            projectdescription:
              "I did this project to test out my knowledge on flexbox, indexing, and positioning.",
            projectlink: "https://adephumie.github.io/webpage/",
          },

          second: {
            projectname: "Assignment",
            projectdescription:
              "My first AltSchool Assignment. I remember staying awake just to understand CSS and I was eventually able to pull of the website. That encouraged me to work on more projects.",
            projectlink:
              "https://adephumie.github.io/AltSchoolfirstassignment/",
          },

          third: {
            projectname: "A Landing page",
            projectdescription:
              "I built this to learn how to implement a Hero page on a webiste. I learnt how to implement positioning and Z-index in my codes.",
            projectlink: "https://adephumie.github.io/landingpage/",
          },

          fourth: {
            projectname: "Blog",
            projectdescription:
              "Worked on this project when I hadn't gained in-depth knowledge of CSS.",
            projectlink: "https://adephumie.github.io/MyBlog/",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "OSC COllege of Fashion",
          third: "Obafemi Awolowo University, Ile-Ife.",
        },
      },
      {
        id: 2,
        stuId: 2098,
        name: "Ayibakepreye Omusuku",
        track: "Frontend Engineering",
        circle: 106,
        img: "https://avatars.githubusercontent.com/u/104953950?s=400&u=6aeabe9e947a409d87969eca26573c4f86a8a910&v=4",
        description: {
          intro:
            "Being creative in terms of problem-solving, effective-communicator and result oriented, i pride myself in delivering the best on each project i am affiliated with",

          introdetails:
            "I'm a Software Engineer based in Lagos Nigeria who is currently enrolled as a Sidehustle intern. I specialize in building exceptional digital experiences with clean designs and thoughtful interactions. My focus is on creating engaging, acessible and performant interfaces for humans as well as contributing in building useful open-source projects. I have a B.Eng in Biomedical Engineering from All Nations University and i am currently enrolled for two diplomas and a certification program in software engineering and REact JS from: AltSchool Africa, ALX Africa and Side Hustle.",
        },

        socialmedia: {
          linkedin:
            "https://www.linkedin.com/in/ayibakepreye-omusuku-234554172/",
          github: "https://github.com/PreyeO",
          twitter: "https://twitter.com/pomusuku",
          portfolio: "",
          slackHandle: "AYIBAKEPREYE OMUSUKU",
        },

        experience: {
          first: "FrontEnd Engineer Intern @Sidehustle",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "TO-DO's",
            projectdescription:
              "A platform that was built to help make a daily to do list. The user marks out any goal achieved on the list",
            projectlink: "https://preyetodos.netlify.app/",
          },
          second: {
            projectname: "Stop-Watch",
            projectdescription:
              "A counter watch use during games to count down time.",
            projectlink: "https://preyesproject.netlify.app/",
          },
        },
      },
      {
        id: 3,
        stuId: 1844,
        name: "Lydia Ojoawo",
        track: "Backend Engineering",
        circle: 237,
        img: "https://github.com/Lydia02.png",

        description: {
          intro: "Problem solving, learning, and documentating my journey.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/lydia-ojoawo/",
          github: "https://github.com/Lydia02",
          twitter: "https://twitter.com/shubby_boo",
          portfolio: "https://github.com/Lydia02",
          slackHandle: "Lydia Ojoawo",
        },

        project: {
          first: {
            projectname: "Portfolio",
            projectdescription:
              "I did this project to test out my knowledge in html, css, and Javascript.",
            projectlink: "https://lydiaojoawo.netlify.app/",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Obafemi Awolowo University, Ile-Ife.",
        },
      },

      {
        id: 4,
        stuId: 5337,
        name: "Edikan Ekanem",
        track: "Frontend Engineering",
        circle: 80,
        img: "https://avatars.githubusercontent.com/u/84722535?v=4",

        description: {
          intro:
            "I'm a Software Engineer, Animation & Voice Over Artist, and Freelancer.",
          introdetails:
            "From an early age I have always been deeply interested in computing. In my opinion nothing on the planet can measure the exponential growth and excitement in the computing industry, an industry which I am proud to be a part of, particularly Software Engineering. With the right knowledge and skills, everything can be automated, and manual procedures can be eliminated. This is my motivation. In the face of an unpredictably evolving world, I want to create systems (apps, websites) that are efficient, dependable, and safe.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/edikan-ekanem-343ab41b1/",
          github: "https://github.com/EdisCode",
          twitter: "https://twitter.com/didi_ekanem",
          portfolio: "https://ediscode.github.io/edikanekanem/",
          slackHandle: "Edikan Ekanem",
        },

        experience: {
          first: "FrontEnd Engineer Intern @Greystone Limited",
          second: "Product Manager @Jenieks Global",
        },
      },

      {
        id: 5,
        stuId: 4536,
        name: "Awosise Oluwaseun",
        track: "Backend Engineering",
        circle: 271,
        img: "https://avatars.githubusercontent.com/u/66667958?v=4",
        description: {
          intro: "Passionate about how and why it works that way",
          introdetails:
            "Having taken a little delve into the world of genetics and bioinformatics, I love for software engineering was spawned. From using some of the biological tools to actually wanting to know what goes on behind the scene and her am I wanting to be able to build and design what goes on behind the scene of most of these biological tools.",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/oluwaseun-awosise/",
          github: "https://github.com/jhhornn",
          twitter: "https://twitter.com/jhhornn",
          portfolio: "",
          slackHandle: "Oluwaseun",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 6,
        stuId: 4804,
        name: "Adeniyi Olanrewaju",
        track: "Backend Engineering",
        circle: 273,
        img: "https://github.com/engrmarkk.png",

        description: {
          intro:
            "Being creative is an aspect of my personality. I love to brainstorm on special ways to achieve a task.",
          introdetails:
            "I am a tech enthusiast with a high interest in software development, I wish to a great developer in few years time, so i took this chance to learn and work towards in achievung my dream in the tech world!.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/iamengrmark/",
          github: "https://github.com/engrmarkk",
          twitter: "https://twitter.com/iamengrmark",
          portfolio: "",
          slackHandle: "Adeniyi Olarewaju",
        },

        project: {
          first: {
            projectname: "Assignment",
            projectdescription:
              "My first AltSchool Assignment. The development of a static unresponsive portfolio along with the deisgn of a non-functional calculator.",
            projectlink: "https://ALTSCHOOLASSIGNMENT01.engrmark.repl.co",
          },

          second: {
            projectname: "Webpage",
            projectdescription:
              "I did this project to test out my knowledge on media query.",
            projectlink: "https://New-one.engrmark.repl.co",
          },

          third: {
            projectname: "A Quiz platform",
            projectdescription:
              "I designed this implementing my understanding of Javascript. A quiz platform where you get  to answer 10 questions in a minute, you get your result displayed to you if you fail to finish up before 1 min. It was fun to code.",
            projectlink: "https://quiz-1.engrmark.repl.co",
          },

          fourth: {
            projectname: "A Qoute Generator",
            projectdescription:
              "I had to understand how Promise, Async/Await workd before moving to my track, so i was able to design a quote generator with what i learnt from it.",
            projectlink: "https://Quote-Gen.engrmark.repl.co",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Ekiti State University, Ado Ekiti",
          third:
            "United Universal Comprehensive College, Governor's Road, Ikotun, Lagos State.",
        },
      },

      {
        id: 7,
        stuId: 3075,
        name: "Ojoachele Onuh",
        track: "Frontend Engineering",
        circle: 139,
        img: "https://github.com/Achele.png",

        description: {
          intro:
            "I'm a software engineer, fashion designer and an Entrepreneur",
          introdetails:
            "I enjoy implementing user interface designs using languages like HTML, CSS, JavaScript",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/achele/",
          github: "https://github.com/Achele",
          twitter: "https://twitter.com/ojoachele",
          portfolio: "https://github.com/Achele",
          slackHandle: "Onuh Ojoachele",
        },

        project: {
          first: {
            projectname: "Basketball-Scoreboard",
            projectdescription:
              "This was my first javascript project, built from scracth by me. It shows a score board of both the home and guest team in a basketball game, number of fouls commited by both teams, and a new game button that resets everything back to zero for the commencement of a fresh game. ",
            projectlink:
              "https://achele.github.io/Basketball-Scoreboard-Project/",
          },
          second: {
            projectname: "Metric-Imperial-unit-Converter",
            projectdescription:
              "This project converts to Metres/Feet, Litres/Gallons and Kilogram/Pounds.",
            projectlink:
              "https://achele.github.io/Metric-Imperial-Unit-Converter/",
          },

          third: {
            projectname: "product-preview-card-component",
            projectdescription:
              "I built this to learn how to implement a mobile-first workflow. Users should be able to view the optimal layout depending on their device's screen",
            projectlink: "https://savethenextjambites.netlify.app/",
          },
        },
      },

      {
        id: 8,
        stuId: 4858,
        name: "Adedolapo Olutuyo",
        track: "Cloud Engineering",
        circle: 409,
        img: "https://avatars.githubusercontent.com/u/85107972?v=4",
        description: {
          intro:
            "Passionate about eventually creating video games that tell a story and playing professional football.",
          introdetails: "",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/adedolapo-o-968841b6/",
          github: "https://github.com/tuyojr",
          twitter: "https://twitter.com/tuyojjr",
          portfolio: "",
          slackHandle: "tuyo",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 9,
        stuId: 4003,
        name: "Robert Adoga",
        track: "Frontend Engineering",
        circle: 45,
        img: "https://avatars.githubusercontent.com/u/67406036?s=400&u=4957631083a3dbb56376f698fb8c420c3195635f&v=4",
        description: {
          intro: "I believe in reality, Also, very creative in solving problem",

          introdetails:
            "I'm a Software Engineer based in Benin, Edo State Nigeria. I specialize in biulding software to user satisfaction , with clean UI. My focus is on creating engaging, accessible and performant interfaces for humans as well as contributing in building useful open-source projects. I am currenting running a degree in University of Cross River State (UNICROSS) Depertment of computer Science and  currently enrolled for a diploma and a certification program in software engineering and REact JS from: AltSchool Africa.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/robertadoga",
          github: "https://github.com/lilbobb",
          twitter: "https://twitter.com/BobAdoga",
          portfolio: "",
          slackHandle: "Robert Adoga U.",
        },

        experience: {
          first: "",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "leadTracker",
            projectdescription:
              "A Chrome Extension that keep track of url and save them for reference",
            projectlink: "https://stellular-pie-5c56fb.netlify.app/",
          },
          second: {
            projectname: "Metric/Imperical Unit Conversion",
            projectdescription:
              "A Unit converter that converts length, volumn and mass.",
            projectlink: "https://lucent-chimera-8fe115.netlify.app/",
          },
        },
      },

      {
        id: 10,
        stuId: 2755,
        name: "Sunday JIMOH",
        track: "Backend Engineering",
        circle: 248,
        img: "https://avatars.githubusercontent.com/u/31360475?v=4",
        description: {
          intro:
            "I am the Backend Dude. I am geared towards building high- performing and innovative products following best practices and industry standards.",
          introdetails:
            "Don't stress it. Just encapsulate it. I am proud to be a part of this Software Engineering Program.I am geared towards building high- performing and innovative products following best practices and industry standards. I’m passionate about solving problems, With the right knowledge and skills, everything can be automated, and manual procedures can be eliminated. This is my motivation. In the face of an unpredictably evolving world, I want to create systems (apps, websites) that are efficient, dependable, and safe. I am currently studying backend engineering at Altschool Africa, a recognized institution in Africa and beyond. Altschool Africa is for individuals looking to gain technical skills and kickstart a career in Software Engineering.",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/sunday-jimoh-1195b8173/",
          github: "https://github.com/sunday4me",
          twitter: "https://twitter.com/sunnet4me",
          portfolio: "",
          slackHandle: "Sunday4me",
        },
      },

      {
        id: 11,
        stuId: 9890,
        name: "Kareem Opeyemi",
        track: "Frontend Engineering",
        circle: 153,
        img: "https://avatars.githubusercontent.com/u/88961549?v=4",
        description: {
          intro: "Frontend is beautiful",
          introdetails:
            "Technology is fascinating and it has permeated every sector of every economies in the world. The world of frontend appeals to me and I am taking it one console.log(), one display flex and one div tag at a time",
        },
        socialmedia: {
          linkedin: "",
          github: "https://github.com/talentlessDeveloper",
          twitter: "https://twitter.com/talentless_dev",
          portfolio: "",
          slackHandle: "Ope Kareem",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 12,
        stuId: 1699,
        name: "Abdulbasit Yusuf",
        track: "Frontend Engineering",
        circle: 9,
        img: "https://avatars.githubusercontent.com/u/53506936?s=400&u=87a35d9d2de9c191a560d23e501acb83b25103b0&v=4",
        description: {
          intro: "WOrld Class Software Engineer in Training",
          introdetails:
            "Highly motivated software engineer in training with a flair for developing interactive and responsive websites, skilled with basic HTML, CSS and JavaScript",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/jideotetic/",
          github: "https://github.com/jideotetic",
          twitter: "https://twitter.com/habdulbasheet",
          portfolio: "https://jideotetic.github.io",
          slackHandle: "Yusuf Abdulbasit",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "Cloudlord-and-pals",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 13,
        stuId: 4101,
        name: " Ayomide Victor",
        track: "Front-End Engineering",
        circle: 168,
        img: "",

        description: {
          intro:
            "Problem solving is the most important aspect of my personality. I enjoy thinking outside the box and always listen when others speak",
          introdetails:
            "I'm a Software Engineer and Front-end developer who currently interns as a Software Engineer at ALX AFRICA. I'm passionate about sharing knowledge, documentation, web engineering, implementing and converting attractive designs, prototypes, and wireframes made by the UI/UX team while ensuring responsiveness for mobile, web, and all devices..",
        },

        socialmedia: {
          linkedin: "HTTPS://WWW.LINKEDIN.COM/IN/AYOMIDE-VICTOR-A7918B1B0/",
          github: "https://github.com/midevictor",
          twitter: "https://twitter.com/mide_victor",
          portfolio: "",
          slackHandle: "Ayomide Victor",
        },

        experience: {},

        project: {
          first: {
            projectname: "Chat_Me App",
            projectdescription:
              "I built a responsive social media clone where I made use of both Facebook and Instagram interfaces. This was a personal project in which I was able to design an excellent user interface, implement the dark and light mode theme, and make it possible for users to search for friend requests sent.",
            projectlink: "https://midevictor.github.io/ChatMe/",
          },
          second: {
            projectname: "GitHub Finder",
            projectdescription:
              "The logic behind this project was to create an alternative solution to help users around the world search for different GitHub users with their repositories. GitHub Finder provides instant feedback on any keyword entered into the search key by fetching all pieces of information from the Github API and providing instant results.",
            projectlink: "https://midevictor.github.io/GitHub-Finder-/",
          },

          third: {
            projectname: "Pay-Me Admin Dashboard",
            projectdescription:
              "I built a responsive admin dashboard that allows users to manage their company's payroll, manage employees, and manage their company's bank accounts. This was a personal project in which I was able to design an excellent user interface, implement the dark and light mode theme. ",
            projectlink:
              "https://midevictor.github.io/PayMe-Administration-Dashboard/",
          },
        },
      },

      {
        id: 14,
        stuId: 4754,
        name: "Jamilu Jibrilla",
        track: "Frontend Engineering",
        circle: 188,
        img: "https://avatars.githubusercontent.com/u/60932535?v=4",
        description: {
          intro: "Hello, i am Jamil. A frontend developer",
          introdetails:
            "I am a software engineering student and also a frontend web developer with experience building fast and reliable apps using html, css, javascript, react, react-redux, tailwind, git and github.",
        },
        socialmedia: {
          linkedin:
            "https://www.linkedin.com/mwlite/in/jamilu-jibrilla-575441211",
          github: "https://github.com/jamilu-jibrilla",
          twitter:
            "https://twitter.com/Jb_jameel?t=hxPI15fFFDf66MPX20UDiQ&s=09",
          portfolio: "https://jamilu-jibrilla.github.io/portfolio/",
          slackHandle: "Jamilu JIbrilla",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 15,
        stuId: 5327,
        name: "Titilola Shittu",
        track: "Frontend Engineering",
        circle: 79,
        img: "https://avatars.githubusercontent.com/u/81013123?v=4",

        description: {
          intro: "Biochemist, Content writer, Frontend engineering student",
          introdetails:
            "Tech enthusiast passionate about learning tech stacks to create technology and elevate people. I'm also a freelance writer specialized in the blockchain niche, I write about NFTs, DeFi, Web3. My interest is connecting with more web developers and creating awesome user experiences.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/titilolashittu",
          github: "https://github.com/lhorla",
          twitter: "https://twitter.com/errbodylovslola",
          portfolio: "",
          slackHandle: "lhorla",
        },

        experience: {
          first: "Social media manager @AdsCentral",
          second: "Content writer @Inclide",
          third: "Contributing writer @OperaNewsNigeria",
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Olabisi Onabanjo University, Ago Iwoye, Ogun State.",
        },
      },

      {
        id: 16,
        stuId: 3506,
        name: "Adisa Barakat",
        track: "Backend Engineering",
        circle: 260,
        img: "https://ca.slack-edge.com/T03898UQN23-U039TQVU9UJ-c649a9a3cccf-512",

        description: {
          intro:
            "Problem solving is the most important aspect of my personality. I enjoy thinking outside the box and always listen when others speak",
          introdetails:
            "Transitioning into tech is one of my best decisions I've taken. I fell in love with tech in my last year in school. Coming from a non tech background and now catching up real quick is captivating. I am a software engineer, I love logical reasoning, solving problemms and making a change. I love to gain knowlege and I challenge myself to be the best version of myself. ",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/adekhemieadisa/",
          github: "https://github.com/Adekhemie",
          twitter: "https://twitter.com/adisa_adekhemie",
          portfolio: "",
          slackHandle: "Adekhemie",
        },

        experience: {
          first: "Data Sccientist Intern @TechBridge Consulting",
        },

        project: {
          first: {
            projectname: "Mini-portfolio",
            projectdescription:
              "I built a mini porfolio which comprises of my experience, a brief introduction about myself, education background, hobbies and the likes. It took some days before I could finish this project befoer I was just getting a hang of CSS ",
            projectlink: "https://Altschool-project.adisabarakat.repl.co",
          },
          second: {
            projectname: "Responsive calculator",
            projectdescription:
              "I had to practice more on my Javascript so I decided to build this responsive calculator and as well fine tune my CSS knowledge",
            projectlink: "https://adekemi02.github.io/responsive-calculator/",
          },

          third: {
            projectname: "Responsive Form Validation",
            projectdescription:
              "I built this responsive form validation to further broaden my knowledge of CSS and JavaScript. The form throws an error message if one field is not inputed or does not follow the proper format of the field.",
            projectlink:
              "https://Responsiveness-and-Media-Queries.adisabarakat.repl.co",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Yaba College of Technology",
        },
      },

      {
        id: 17,
        stuId: 4137,
        name: "Adeola Michael",
        track: "Front-End Engineering",
        circle: 171,
        img: "https://avatars.githubusercontent.com/u/62425852?s=400&u=157c27b3c52cfcadb6c2c5e8513b7ad897e7fc5a&v=4",

        description: {
          intro:
            "Software Engineer, Content Creator, and Communications Executive",
          introdetails: "Smooth, Steady, Secure User Interface",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/adeolaadetunji",
          github: "https://github.com/TheDeola",
          twitter: "https://twitter.com/deolacodes",
          portfolio: "https://thedeola.netlify.app/",
          slackHandle: "TheDeola",
        },

        experience: {
          first: "Consultant",
          second: "FrontEnd Engineer Intern",
          third: "Operations Manager",
        },

        project: {
          first: {
            projectname: "Phonie",
            projectdescription:
              "A mini web app to detect the network carrier of all Nigerian phone numbers",
            projectlink: "https://phonie.netlify.app/",
          },

          second: {
            projectname: "Box-Monie",
            projectdescription:
              "A platform that allow creatives to showcase and share their talent and portfolio.",
            projectlink: "https://sunnyside-main.netlify.app/",
          },

          third: {
            projectname: "Color-Flipper",
            projectdescription:
              "A UI showcasing random primary and secondary colors.",
            projectlink: "https://thedeola-color-flipper.netlify.app/",
          },
        },
      },
      {
        id: 18,
        stuId: 2000,
        name: "Oloto Samson",
        track: "Backend Engineering",
        circle: 262,
        img: "https://avatars.githubusercontent.com/u/40104447?v=4",
        description: {
          intro: "I am the backend guy",
          introdetails: "Don't stress it. Just encapsulate it.",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/oloto-samson/",
          github: "https://github.com/oloto",
          twitter: "https://twitter.com/olotosamson",
          portfolio: "",
          slackHandle: "Samguine",
        },
        experience: {
          first: "",
          second: "",
          third: "",
        },
        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },

      {
        id: 19,
        stuId: 4884,
        name: "Abdulmuizz Abubakar",
        track: "Frontend Engineering",
        circle: 65,
        img: "https://avatars.githubusercontent.com/u/49520914?s=400&v=4",
        description: {
          intro: "A Frontend engineer",
          introdetails:
            "A tech enthusiast who focuses on solving problems and building products to improve the lives of users.",
        },
        socialmedia: {
          linkedin: "www.linkedin.com/in/abdulmuizzabubakar/",
          github: "https://github.com/MuizzBakar",
          twitter: "https://twitter.com/iam_bakar",
          portfolio: "",
          slackHandle: "Muizz Bakar",
        },
        experience: {
          first: "Administrative Officer",
          second: "Project Administrator",
          third: "Client Service",
        },
        project: {
          first: {
            projectname: "Bootstrap Website",
            projectdescription:
              "A project done with bootstrap 4, an animation library,animate css and wow js for the scroll reveal",
            projectlink: "https://muizzbakar.github.io/bootstrap-website/",
          },
          second: {
            projectname: "Product Landing Page",
            projectdescription: "A simple product landing page",
            projectlink: "https://muizzbakar.github.io/product-landing-page/",
          },
        },
      },

      {
        id: 20,
        stuId: 2867,
        name: "Philemon Nwanne",
        track: "Cloud Engineering",
        circle: 364,
        img: "https://avatars.githubusercontent.com/u/108567784?v=4",

        description: {
          intro: "Cloud",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/philnwanne/",
          github: "https://github.com/philemonnwanne",
          twitter: "https://twitter.com/#",
          portfolio: "https://github.com/philemonnwanne",
          slackHandle: "Philemon Nwanne",
        },

        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "/",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Michael Okpara Federal University",
        },
      },

      {
        id: 21,
        stuId: 3397,
        name: "Excel Nwachukwu",
        track: "Frontend Engineering",
        circle: 145,
        img: "https://avatars.githubusercontent.com/u/32638510?v=4",
        description: {
          intro:
            "I started with persistence and, now consistency has been the fuel leading me through",
          introdetails:
            "A self-taught Frontend Web Developer. I have experience building functional UI and frontend web applications. Over the course of my learning journey, I have grown comfortable working with a wide range of frontend technologies like: HTML5 | CSS/SASS | Bootrap5 | JavaScript. I wrote my first programmable code back in university but not until after graduation did I take it upon myself to really master the brains behind the magic intentionally. Over the past year, I been learning and practicing with different web technologies especially Javascript and I believe I am more than ready to take my career to a whole new phase. I strongly believe in the power of programming to change and improve people's lives through accessible and usable frontend products. I'm always on the lookout for possible opportunities to get even better and open to entry-level frontend engineering roles or internships, preferably remotely or on-premises.",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/trillionclues-excel/",
          github: "https://github.com/trillionclues",
          twitter: "https://twitter.com/trillionclues",
          portfolio: "https://trillionclues.vercel.app/",
          slackHandle: "Excel",
        },
        experience: {
          first: "Software Engineer Intern @alx_africa",
          second: "Frontend Developer Intern @SideHustle",
          third: "IT Support specialist",
        },
        project: {
          first: {
            projectname: "web3 Drag n' Drop Game",
            projectdescription:
              "A drag and drop game that allows players to drag and drop their favourite cryptocurrencies into their respective market cap position with a button to verify the selection. Built using HTML5 Drag and Drop Api.",
            projectlink: "http://web3-drag-drop-game.vercel.app/",
          },
          second: {
            projectname: "StreamIt",
            projectdescription:
              "A movie recommendation app that displays different list of movies accoridng to their respective genres, rating and other features like producers and watch time.",
            projectlink: "https://streamit-movie-app.vercel.app/",
          },
        },
      },

      {
        id: 22,
        stuId: 1586,
        name: "David Udo",
        track: "Backend Engineering",
        circle: 234,
        img: "https://avatars.githubusercontent.com/u/65337929?s=400&u=581247bf98945f211499778231e26b73ff576b27&v=4",

        description: {
          intro:
            "I want to be the best at what I do, make so much money and live a soft life.",
          introdetails:
            "I am a Backend Engineering Student at Altschool Africa training to become a top-tier Software Engineer. I am also a Mechanical Engineering student and just recently discovered my interest in software development. In addition to software engineering, I am learning data science with DataCamp to supplement my backend skills.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/david-udo-1713b3231",
          github: "https://github.com/davidudo",
          twitter: "https://twitter.com/_davidudo",
          portfolio:
            "https://elfin-quality-396.notion.site/David-Udo-s-Portfolio-3ce211c9e26c4b3da8cbf7a9e9c4d7f7",
          slackHandle: "David Udo",
        },

        experience: {
          first: "Mechanical Engineering Intern @ Ibom Power Plant",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "Advice Generator",
            projectdescription: "Frontend Mentor challenge.",
            projectlink: "https://davidudo.github.io/advice-generator/",
          },
          second: {
            projectname: "Huddle",
            projectdescription: "Frontend Mentor challenge.",
            projectlink: "https://davidudo.github.io/huddle-website-01/",
          },

          third: {
            projectname: "Fylo",
            projectdescription: "Frontend Mentor challenge.",
            projectlink:
              "https://midevictor.github.io/PayMe-Administration-Dashboard/",
          },
        },
      },

      {
        id: 23,
        stuId: 3351,
        name: "Lawrence Franklin",
        track: "Frontend",
        circle: 140,
        img: "https://res.cloudinary.com/dalu46/image/upload/v1660327695/dalu_zrfc1o.png",

        description: {
          intro: "Talk to me about JavaScript. I love OpenSource. Let's do DSA",
          introdetails: "I'm a frontend developer",
        },

        socialmedia: {
          linkedin:
            "https://www.linkedin.com/in/lawrence-franklin-chukwudalu-782687228/",
          github: "https://github.com/Dalu46",
          twitter: "https://twitter.com/iam_franklin10",
          portfolio: "",
          slackHandle: "Lawrence Franklin Chukwudalu",
        },

        experience: {
          first: "FrontEnd Engineer Intern in my mind🥲",
          second: "Technical writer @Medusa",
          third: "",
        },

        project: {
          first: {
            projectname: "CGPA Calculator",
            projectdescription: "A project for calculating CGPA results.",
            projectlink: "https://cgpa-calculator1.netlify.app",
          },
          second: {
            projectname: "QR Code Generator",
            projectdescription:
              "An application that generates QR codes based on any text (including URLs) you pass to it.",
            projectlink: "https://qr-code-generator1.netlify.app",
          },

          third: {
            projectname: "Random Advice Generator",
            projectdescription: "An application that generates ramdom advices.",
            projectlink: "https://my-advice-generator1.netlify.app",
          },
        },
      },

      {
        id: 24,
        stuId: 2678,
        name: "Anietie Akpanumoh",
        track: "Frontend Engineering",
        circle: 123,
        img: "https://avatars.githubusercontent.com/u/102967666?v=4",

        description: {
          intro:
            "I embrace lifelong learning and aspire to be the best in all I do, showing professional distinction.",
          introdetails:
            " I am a solution-oriented Front-End Developer and an adventurer with a professional background in IT Support and Network Security. I worked as an IT Support personnel for three years and developed an interest in Software Engineering. I am motivated by the opportunity that software development provides to positively impact the life of an individual and the community at large.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/anietieakpanumoh/",
          github: "https://github.com/AnietieAkpanumoh",
          twitter: "https://twitter.com/tukooldegreat",
          portfolio: "https://github.com/AnietieAkpanumoh?tab=repositories",
          slackHandle: "Anietie Akpanumoh",
        },

        project: {
          first: {
            projectname: "A Landing page",
            projectdescription:
              "I practiced my knowledge of HTML, CSS, and media queries by creating this order summary landing page, a challenge on Frontendmentor. I also hosted the result on Netlify.",
            projectlink:
              "https://anietieakpanumoh.github.io/first-responsive-project-order-summary-using-css-grid/",
          },

          second: {
            projectname: "A landing page",
            projectdescription:
              "I practiced my knowledge of HTML, CSS, and media queries by creating this 3-column preview card component landing page, a challenge on Frontendmentor",
            projectlink:
              "https://anietieakpanumoh.github.io/Preview-column-component/",
          },

          third: {
            projectname: "SchoolStat - A simple dashboard for a tech school",
            projectdescription:
              "A simple dashboard for a tech school built together with my circle teammates in Altschool Africa. This project was to solidify what we had learned in HTML, CSS and JavaScript",
            projectlink:
              "https://anietieakpanumoh.github.io/Circle-123-SchoolStat/",
          },

          fourth: {
            projectname: "A Landing page",
            projectdescription:
              "I worked on a QR-Code component landing page on frontendmentor to test my knowledge on HTML, CSS and media queries.",
            projectlink:
              "https://anietieakpanumoh.github.io/QR-CODE-COMPONENT/",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "University of Uyo, Akwa Ibom State",
        },
      },
      {
        id: 25,
        stuId: 3568,
        name: "Bukola Testimony",
        track: "Cloud Engineering",
        circle: 381,
        img: "https://hero-page.bukola19.repl.co/Buk_testimony.jpg",

        description: {
          intro:
            "I am a HR professional and a Software Developer with basic interest in Cloud Engineering. I love to solve problems and also have fun while learning new things. I want to make a lot of money and travel the world.",
          introdetails:
            " I am curious and love to learn new things. I try to look for faster and simpler ways to solve a problem. ",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/bukola-testimony-58277b97/",
          github: "https://github.com/Bukola-Testimony",
          twitter: "https://twitter.com/BukolaTestimony",
          portfolio: "https://bukola-testimony.github.io/My-Portfolio-website/",
          slackHandle: "Bukola Testimony",
        },

        project: {
          first: {
            projectname: "A Redactr App",
            projectdescription:
              "This is a hackathon project done with some team mates in Altschool Africa. It takes words/text inputs and returns a redacted sentence/words as specified by users",
            projectlink: "https://bukola-testimony.github.io/Redactr-App/",
          },

          second: {
            projectname: "A Product-Preview-Card",
            projectdescription:
              "I worked on a Product-preview-card on frontendmentor to test my knowledge on HTML, CSS and media queries.",
            projectlink:
              "https://bukola-testimony.github.io/Frontend-Mentor-Product-preview-card/",
          },

          third: {
            projectname: "A Rock-paper-scissors",
            projectdescription:
              "This is a Rock-paper-scissors game. A simple python project inspired by 100days of code by Angela Yu.",
            projectlink:
              "https://github.com/Bukola-Testimony/Rock-paper-scissors",
          },

          fourth: {
            projectname: "Treasure Island",
            projectdescription:
              "This is a game. A simple python project inspired by 100days of code by Angela Yu.",
            projectlink:
              "https://github.com/Bukola-Testimony/My-treasure-island",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Ladoke Akintola University of Technology",
        },
      },
      {
        id: 26,
        stuId: 1731,
        name: "Samson Okeji",
        track: "Backend Engineering",
        circle: 12,
        img: "https://avatars.githubusercontent.com/u/67550977?v=4",

        description: {
          intro: "Baddass Backend Engineer, passionate about open-source",
          introdetails:
            "I'm a Software Engineer, creative and resilient, one who is passionate about all software development phases, writing clean codes, and enjoys solving complex problems. Currently improving my skills by studying for a diploma in software engineering with focus in Backend Engineering at AltSchool Africa. I'm passionate about knowledge sharing, documentation, software engineering, and others. I create technical content and build useful [open-source projects] (https://github.com/Psalmzee)",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/samson-okeji-001b1913a/",
          github: "https://github.com/Psalmzee",
          twitter: "https://twitter.com/SammyOkeji",
          portfolio: "https://github.com/Psalmzee?tab=repositories",
          slackHandle: "Samson Okeji",
        },

        experience: {
          first: "Back-End Engineer @Business Codes Technologies Limited",
          second: "Software Engineering Intern @Microsoft x Elev8",
          third: "Software Engineering Intern @Microsoft x Tech4dev",
        },

        project: {
          first: {
            projectname: "EfoodBank",
            projectdescription:
              "A react web-based app that is aimed at connecting potential Benefactors of food items/charity with potential beneficiaries, this is in-line with the vision of SDG GOAL 2: Zero Hunger.",
            projectlink: "samsonokeji-efoodbank.netlify.app/",
          },
          second: {
            projectname: "PHONIE",
            projectdescription:
              "This is a web based app built with HTML5, CSS3, and Vanilla JavaScript to detect your network provider after accepting user input of any valid Nigerian phone number.",
            projectlink: "phonie-network-detector.netlify.app/",
          },

          third: {
            projectname: "DATAGRID",
            projectdescription:
              "A re-usable datagrid component in React/Typescript supported bv a light-weight server using node.js",
            projectlink:
              "https://samsonokeji-datagrid-klas-challenge.netlify.app/",
          },

          fourth: {
            projectname: "My-Portfolio",
            projectdescription:
              "More personalized Information about me written with HTML5, CSS3 and Vanilla JS",
            projectlink: "https://samsonokeji-portfolio.netlify.app/",
          },
        },
      },

      {
        id: 27,
        stuId: 4797,
        name: "Bernard Kwame",
        track: "Backend Engineering",
        circle: 273,
        img: "https://github.com/Bsolodzi.png",

        description: {
          intro:
            "I am studying the ways of a snake, hoping to become a world class software engineer in the near future. I am also interested in Data Science and engineering",
          introdetails:
            "Outside tech, I am currently a final year student of Bachelor of Medical Laboratory Sciences.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/bernard-kwame-solodzi/",
          github: "https://github.com/Bsolodzi",
          twitter: "https://twitter.com/boss_assignment",
          portfolio: "https://altschoolass1.bsolodzi.repl.co/index.html",
          slackHandle: "Bernard Kwame Solodzi",
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "University of Health and ALlied Sciences, Ho Ghana",
        },

        project: {
          first: {
            projectname: "Assignment",
            projectdescription:
              "I built an about me page as an assignemnet given to me at AltSchool",
            projectlink: "https://altschoolass1.bsolodzi.repl.co/index.html",
          },
        },
      },

      {
        id: 28,
        stuId: 2698,
        name: "Nzubechi Ahamefula",
        track: "Frontend Engineering",
        circle: 125,
        img: "https://avatars.githubusercontent.com/u/101618685?v=4",

        description: {
          intro:
            "I embrace lifelong learning and aspire to be the best in all I do, showing professional distinction.",
          introdetails:
            " I am a solution-oriented Front-End Developer and an adventurer",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/nzubechi-ahamefula-750382238",
          github: "https://github.com/Zubby003",
          twitter: "https://twitter.com/Zubby_Ahamefula",
          portfolio: "https://github.com/Zubby003?tab=repositories",
          slackHandle: "Nzubechi Ahamefula",
        },
      },

      {
        id: 29,
        stuId: 5272,
        name: "King Igbozuruike",
        track: "Cloud Engineering",
        circle: 224,
        img: "https://avatars.githubusercontent.com/u/104108166?s=400&u=c9c6cd41a4fd324fa2bedcfa1543ab5008e8c871&v=4",

        description: {
          intro: "I dream to work for Microsoft!",
          introdetails:
            "I am a Cloud Engineering Student at Altschool Africa training to become a top-tier Software Engineer. I currently not in University as I am an extremely young man. Don't ask me my age. But I plan to major in Computer Science though.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/thetechking/",
          github: "https://github.com/kingigbozuruike",
          twitter: "https://twitter.com/the_techking",
          portfolio: "",
          slackHandle: "The Tech King",
        },

        experience: {
          first: "AltSchool Student. Obviously!",
          second: "Microsoft Intern in my dream!",
          third: "",
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "University of Uyo, Akwa Ibom State",
        },

        project: {
          first: {
            projectname: "School Dashboard",
            projectdescription: "AltSchool Holiday challenge.",
            projectlink: "https://Circle-224-SchoolStat.circle2-2-4.repl.co",
          },
          second: {
            projectname: "Web Search",
            projectdescription:
              "I don't really have projects online, so if you click on this link it will probably lead you to Google!",
            projectlink: "https://google.com",
          },

          third: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
      },
      {
        id: 30,
        stuId: 2708,
        name: "Obaloluwa Oladunjoye",
        track: "Frontend Engineering",
        circle: 126,
        img: "https://avatars.githubusercontent.com/u/98332219?s=96&v=4",

        description: {
          intro:
            "I'm a Software engineer, social media manager and a lover of dogs. when i'm not writing codes, I watch random tutorial videos and videos of the science of things.",
          introdetails:
            "Student at Altschool Africa and the University of Ibadan. I delight in knowing how things work and how magic is made using the internet. Still a bubbling newbie in the tech space. I've worked with different teams to carry out assignments and little projects, and I hope to improve by the day. ",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/obasavvy",
          github: "https://github.com/litobalolu",
          twitter: "https://twitter.com/obasavvy",
          portfolio: "",
          slackHandle: "Obasa",
        },
        project: {
          first: {
            projectname: "Personal Tracker",
            projectdescription:
              "A tracker design for people who workout and watch their regular activities",
            projectlink: "https://peteloba.obaloluwaoladun.repl.co/",
          },
          second: {
            projectname: "Ajim Capital",
            projectdescription:
              "A company that invests in the future of Startups. Built to handle financial problems startups might encounter ",
            projectlink: "https://ajimcapital.obaloluwaoladun.repl.co/",
          },
        },
      },

      {
        id: 31,
        stuId: 1942,
        name: "Joseph Alagi",
        track: "Cloud Engineering",
        circle: 344,
        img: "https://avatars.githubusercontent.com/u/63665248?s=400&u=959450b47c05b94d39aea291c56dcb586e0b4e0a&v=4",

        description: {
          intro: "i JUST WANNA LIVE A SOFT LIFE WITH PURPOSE",

          introdetails:
            "I'm a Software Engineer, Product Manager, and a Cloud Engineering Student who currently works as a Admin Executive at [Plus Acuity Media Ltd](https://www.acuityng.com/) a sister company of [Mediareach OMG Nigeria](https://www.mediareachomd.com/) I'm passionate about learning, sharing knowledge, documentation, web engineering, Building Tech-Products, Health and Fitness, Cloud Computing, and others. I create technical content (on my [Blog](https://medium.com/@AlagiJoseph), build useful [open-source projects](https://github.com/JosephAlagi), speak at some meetups/conferences, build technical communities...",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/alagi-joseph-57605993/",
          github: "https://github.com/Joseph-Alagi-Okebe",
          twitter: "https://twitter.com/AlagiJoseph",
          portfolio: "https://joseph-alagi.joe996-html.repl.co/",
          slackHandle: "Joseph Alagi",
        },

        experience: {
          first: "FrontEnd Engineer Student @AltschoolAfrica",
          second: "Cloud Engineer Student @AltschoolAfrica",
          third: "Cloud Engineer Intern @Amazon",
        },

        project: {
          first: {
            projectname: "ABOUT ME PAGE",
            projectdescription: "A webpage that describes me",
            projectlink: "https://joseph-alagi.joe996-html.repl.co/",
          },
          second: {
            projectname: "SIMPLE WEBPAGE",
            projectdescription:
              "I was tasked to build a simple webpage describing myself using only HTML",
            projectlink: "https://joseph-alagi-okebe.github.io/AJstyles/",
          },
        },

        education: {
          first: "GODFREY OKOYE UNIVERSITY, ENUGU B.SC GEOLOGY AND MINING",
          second: "HEALTH SAFETY AND ENVIRONMENT, NOVELLE CENTER",
          third: "PROJECT MANAGEMENT, GOOGLE",
          fourth:
            "ALTSCHOOL SCHOOL OF SOFTWARE ENGINEERING. DIPLOMA IN CLOUD ENGINEERING(In View)",
        },
      },

      {
        id: 32,
        stuId: 5326,
        name: "Ekunola Paul",
        track: "Frontend Engineering",
        circle: 79,
        img: "https://avatars.githubusercontent.com/u/72552585?s=400&u=18b971e008c8db3636198303ad415a26e27319a3&v=4",

        description: {
          intro: "I'm a software engineer, and an Entrepreneur",
          introdetails:
            "Student at Altschool Africa and Olabisi Onabanjo University. I excel and I'm invested in every stage of the life cycle of software development, including design implementation, coding, debugging, testing, and maintenance.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/ekunola-paul-42712b1aa/",
          github: "https://github.com/pscon",
          twitter: "https://twitter.com/PSCON3",
          portfolio: "https://ekunola-paul.netlify.app/",
          slackHandle: "pscon",
        },

        experience: {
          first: "",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "Google Clone",
            projectdescription:
              "A web Application similar to google, where you can search and surf the internet, view pictures, videos and news about your search topic...",
            projectlink: "https://fastidious-belekoy-d1d97f.netlify.app/",
          },
          second: {
            projectname: "Dashboard",
            projectdescription:
              "The Dashboard is a visual display of all of your data. A dashboard usually sits on its own page and receives information from a linked database. ",
            projectlink: "https://cute-bonbon-7ba896.netlify.app/",
          },
        },
        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Olabisi Onabanjo University",
        },
      },

      {
        id: 33,
        stuId: "5311",
        name: "Fahd Abdulrazzaq",
        track: "Cloud Engineering",
        circle: 349,
        img: "https://avatars.githubusercontent.com/u/105148062?s=96&v=4",

        description: {
          intro:
            "  I'm that guy who slides into your dm with multiple questions. Always Seeking Knowledge",
          introdetails:
            "The Greatest Knowledge A Person Can Acquire Over The course of his or her lifetime is that he or she knows nothing, I live my life by this. Always Learning, Always Seeking for Knowledge",
        },

        socialmedia: {
          linkedin: "",
          github: "https://github.com/fahd-abdulrazzaq",
          twitter: "https://twitter.com/AbdulrazzaqFahd",
          portfolio: "https://github.com/fahd-abdulrazzaq",
          slackHandle: "Fahd Abdulrazzaq",
        },

        project: {
          first: {
            projectname: "Profile Page",
            projectdescription:
              "just a random page i created which contains a breif description of me, a calculator and a login page",
            projectlink: "https://github.com/fahd-abdulrazzaq/About-Me.git",
          },

          second: {
            projectname: "Assignment",
            projectdescription: "My Second Altschool Assignment",
            projectlink:
              "https://github.com/fahd-abdulrazzaq/Abdulrazzaq-Fahd-Assignment-2.git",
          },

          third: {
            projectname: "Random Animations",
            projectdescription:
              "Just A Page With Random A nimations I created for fun",
            projectlink:
              "https://github.com/fahd-abdulrazzaq/Random-Animation.git",
          },

          fourth: {
            projectname: "login page",
            projectdescription:
              "This is just a random login page i created to practice my css animation and design skills",
            projectlink: "https://github.com/fahd-abdulrazzaq/Log-in-page.git",
          },
        },

        education: {
          first: "Federal University Of Technology,Minna",
          second: "Altschool Africa",
          third: "Google.com",
        },
      },

      {
        id: 34,
        stuId: 4446,
        name: "Jael-Praise David",
        track: "Frontend Engineering",
        circle: 178,
        img: "https://avatars.githubusercontent.com/u/108879387?s=400&u=373f1824a07a448e5b15ff9591f87a835fe43a25&v=4",

        description: {
          intro:
            "A Computer Engineer, trainning to be a Software Engineer at AltSchool.",
          introdetails:
            "I am a serial business owner, dogged entrepreneur and most importantly, a Computer Hardware Engineer with dreams of building robot that can work perfectly in deep space. Becoming a robotics enginner with execellent full-Stack Engineering skills is a step in the right direction and that's why I am taking this step.",
        },

        socialmedia: {
          github: "https://github.com/PR41S3",
          twitter: "https://twitter.com/jaelpraise",
          portfolio: "",
          slackHandle: "Jael David",
        },

        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
        education: {
          first: "IGBINEDION UNIVERSITY OKADA. B.ENG COMPUTER ENGINEERING",
          second: "OSISATECH COE ENUGU. PGDE.COMPUTER ENGINEERING EDUCATION",
          third:
            "NATIONAL OPEN UNIVERSITY, V.I, LAGOS STUDY CENTRE. MSC. INFORMATION TECHNOLOGY(In View)",
          fourth:
            "ALTSCHOOL SCHOOL OF SOFTWARE ENGINEERING. DIPLOMA IN FRONTEND ENGINEERING(In View)",
        },
      },

      {
        id: 35,
        stuId: 4665,
        name: "Okpala Joseph",
        track: "Frontend Engineering",
        circle: 59,
        img: "https://avatars.githubusercontent.com/u/105152644?v=4",

        description: {
          intro: "Hello there, my name is Joseph",
          introdetails:
            "I am a software engineering student currently at Altschool Africa. I am working towards being a world-class engineer",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/joseph-okpala-1371351aa/",
          github: "https://github.com/JosephOkpala",
          twitter: "https://twitter.com/unorthodox__dev",
          portfolio: "",
          slackHandle: "Joseph Okpala",
        },

        experience: {
          first: "Designer @Deezey Media",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "Manage Landing Page",
            projectdescription: "A Frontend Mentor Challenge",
            projectlink: "https://manage-5zs.pages.dev/",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },

          third: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
        },
      },

      {
        id: 36,
        stuId: 2175,
        name: "Okpala Kosiosochukwu",
        track: "Cloud Engineering",
        circle: 286,
        img: "",

        description: {
          intro:
            "Trusting in the process of being a Cloud Engineer learning at Altschool",
          introdetails:
            "A virtual assistant amongst other things and  chef in my spare time.",
        },

        socialmedia: {
          linkedin:
            "https://www.linkedin.com/in/emmanuella-kosisochukwu-okpala-222b7219a",
          github: "https://github.com/Kossiso",
          twitter: "https://twitter.com/kosi_eo",
          slackHandle: "Okpala Kosi",
        },

        experience: {
          first: "Exploration Geologist @Etazuma Group WA",
          second: "Laboratory Geologist @Ministry Of Works",
        },

        project: {
          first: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
          second: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },

          third: {
            projectname: "",
            projectdescription: "",
            projectlink: "",
          },
        },
        education: {
          first: "GODFREY OKOYE UNIVERSITY, ENUGU B.SC GEOLOGY AND MINING",
          second: "HEALTH SAFETY AND ENVIRONMENT, NOVELLE CENTER",
          third: "PROJECT MANAGEMENT, GOOGLE",
          fourth:
            "ALTSCHOOL SCHOOL OF SOFTWARE ENGINEERING. DIPLOMA IN CLOUD ENGINEERING(In View)",
        },
      },

      {
        id: 37,
        stuId: "5155",
        name: "IKEM ADAOBI",
        track: "Backend Engineering",
        circle: 275,
        img: "https://avatars.githubusercontent.com/u/95231247?v=4",

        description: {
          intro:
            "  I'm that woman that detests Mediocrity with a WORLD-CLASS mindset..",
          introdetails:
            "I am a mother, a community advocate at [flgw](flgw.org), Scrum Master intern at [digital abundance](digitalabundance.io) and an aspiring software engineer. I aspire to be the best in all i do. It's World-class or Nothing!! ",
        },

        socialmedia: {
          linkedin:
            "[IkemAda](https://www.linkedin.com/in/ikem-ada-799961223/)",
          github: "[Violacordis](github.com/Violacordis)]",
          twitter: "[@ikemviola](twitter.com/ikemviola)",
          portfolio: "[Violacordis](github.com/Violacordis)",
          slackHandle: "Ikem Violacordis",
        },

        project: {
          first: {
            projectname: "My portfolio",
            projectdescription:
              "My portfolio. A project that started as a task from Altschool. Gradually remodifying it ",
            projectlink: "https://violacordis.github.io/My-Portfolio/",
          },

          second: {
            projectname: "A Redactr App",
            projectdescription:
              "An app that scrambles words that a user wants hidden. It's a circle hackathon from altschool. I collaborated with my team mates to come up with this piece",
            projectlink:
              "https://violacordis.github.io/Circle-275-Redactr-Project/",
          },

          third: {
            projectname: "Metric/Imperical Unit Conversion",
            projectdescription:
              "This is a metric/imperial unit convertion that converts any input value to Mass(kilograms/pounds), Volume(liters/Gallons), and Length(meter/feet).",
            projectlink:
              "https://violacordis.github.io/Metric-Unit-Conversion/",
          },

          fourth: {
            projectname: "Basket ball score board",
            projectdescription:
              "This is a basketball score board project that displays the score of both teams (home and guest) and highlights the winning team, losing team as well as when they are at draw",
            projectlink:
              "https://violacordis.github.io/Basketball-Score-board/",
          },
        },

        education: {
          first:
            "Michael Okpara University of Agriculture, Umudike, Abia State.",
          second: "Queen of the Rosary College (Q.R.C.) Onitsha",
          third: "Altschool",
        },
      },

      {
        id: 38,
        stuId: 5395,
        name: "Ozuem Eugene",
        track: "Front-End Engineering",
        circle: 59,
        img: "https://avatars.githubusercontent.com/u/62425852?s=400&u=157c27b3c52cfcadb6c2c5e8513b7ad897e7fc5a&v=4",

        description: {
          intro: "Black Bruce Wayne",
          introdetails:
            "Ozuem Eugene is a Junior Web Developer who has worked in the frontend team of some amazing organizations. Design thinking, problem solving, communication, education, and training are all areas in which I excel. If you are a company looking for a web presence or an employer looking to hire, please contact me here. In previous years, I had the opportunity to intern with TIIDELAB, an organization that assists passionate students and graduates in developing their skills in software engineering, as well as providing softskills with full curriculum to assist fellows in building a public profile. Moving forward on my journey, I decided to focus on becoming a world class cloud engineer in the coming years, assisting organizations to scale applications, manage resources, provide server security, and collaborate with in-house software engineering teams to negotiate seamless ways to provide and scale applications. I am currently studying cloud engineering at Altschool Africa, a recognized institution in Africa and beyond.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/eugene-chuks-364270134",
          github: "https://github.com/preeaacchh",
          twitter: "https://twitter.com/preeaacchh",
          portfolio: "",
          slackHandle: "preeaacchh",
        },

        experience: {
          first: "None",
          second: "FrontEnd Engineer Intern",
          third: "",
        },
      },

      {
        id: 39,
        stuId: 3555,
        name: "Ejiroghene Laurel",
        track: "Cloud Engineering",
        circle: 379,
        img: "https://github.com/EjiroLaurelD.png",

        description: {
          intro: "I am a Software Engineering student and a Cake Artist",
          introdetails:
            "I am a Software Engineer and Business woman who currently is learning to be a world class Cloud/Devops Engineer at AltSchool Africa. I am passionate about sharing knowledge, learning and mastering cloud technologies, making sweet treats, and putting smiles on the faces of people.",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/ejiroghenelaureldafe/",
          github: "https://github.com/EjiroLaurelD",
          twitter: "https://twitter.com/L4laurel",
          portfolio: "https://github.com/EjirolaurelD",
          slackHandle: "Ejiroghene Laurel Dafe",
        },

        project: {
          first: {
            projectname: "Portfolio project",
            projectdescription:
              "Altschool portfolio project. This was my first time working with html and css",
            projectlink: "https://ALTSchool-Assignment-1-1.dafelaurel.repl.co",
          },

          second: {
            projectname: "holiday hackathon",
            projectdescription: "Altschool circle 379 Holiday Hackathon .",
            projectlink: "https://Circle-379.repl.co",
          },

          third: {
            projectname: "phonie project",
            projectdescription:
              "I built this myself to learn how to use javascript on an actual project.",
            projectlink: "https://phonie-project-practice.dafelaurel.repl.co",
          },

          fourth: {
            projectname: "Laurel Cakes",
            projectdescription:
              "currently working on building a website page for my business.",
            projectlink: "https://Laurel-cakes.dafelaurel.repl.co",
          },
        },

        education: {
          first: "AltSchool Africa School of Engineering.",
          second: "Delta State University, Abraka",
          third: "",
        },
      },

      {
        id: 40,
        stuId: 3574,
        name: "Onah Anthony",
        track: "cloud Engineering",
        circle: 381,
        img: "https://avatars.githubusercontent.com/u/104945173?v=4",

        description: {
          intro: "i am student at altschool struggling to make it under cloud ",
          introdetails: "I enjoy group work",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/anthony-onah-ba8498249/",
          github: "https://github.com/onahanthony",
          twitter: "https://twitter.com/AnthonyOnah9",
          portfolio: "",
          slackHandle: "Onah Anthony",
        },

        experience: {
          first: "None",
          second: "",
          third: "",
        },

        education: {
          first: "GODFREY OKOYE UNIVERSITY, ENUGU B.SC GEOLOGY AND MINING",
          second: "HEALTH SAFETY AND ENVIRONMENT, NOVELLE CENTER",
          third: "PROJECT MANAGEMENT, GOOGLE",
          fourth:
            "ALTSCHOOL SCHOOL OF SOFTWARE ENGINEERING. DIPLOMA IN CLOUD ENGINEERING(In View)",
        },
      },

      {
        id: 41,
        stuId: "2548",
        name: "Gloria John",
        track: "Cloud Engineering",
        circle: 361,
        img: "https://avatars.githubusercontent.com/u/99645583?v=4",

        description: {
          intro:
            "Getting to learn new things, solving problems and being part of an amazing community with like minds is something I always look forward to",
          "my faourite quote":
            "Hold the Vision, drop the excuse, remember your why. Swerve around obstacles…trust the process. Happiness and success will find you. — Karen Salmansohn",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/gloria-john-118731197/",
          github: "https://github.com/J-Gloria",
          twitter: "https://twitter.com/glowriiyajhon",
          "my blog": "",
          slackHandle: "Gloria John",
        },

        education: {
          first: "University of Benin",
          second: "Altschool Africa",
          third: "",
        },
      },

      {
        id: 42,
        stuId: 5260,
        name: "Abiola Ayodele",
        track: "Frontend Engineering",
        circle: 78,
        img: "https://avatars.githubusercontent.com/u/67319772?v=4",

        description: {
          intro:
            "I am babboeCodes😁 and It is my desire to attain and maintain a high degree of professionalism and contribute significantly to the organizational growth and development through diverse skills while providing innovative solutions capable of satisfying and maintaining the corporate interest of my employer and customers..",
          introdetails:
            "Software Engineer | Frontend | Student @AltschoolAfrica | HTML | CSS | JavaScript | React | Analytical Skills, problem solver with keen eyes for details",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/abiola-ayodele-5a10651b7/",
          github: "https://github.com/babboe1",
          twitter: "https://twitter.com/ausstinab",
          portfolio: "https://babboecodes.netlify.app/",
          slackHandle: "babboeCodes",
        },

        experience: {
          first: "Freelancer",
          second: "FrontEnd Engineer Intern @I4GXZURI",
          third: "FrontEnd Engineer Intern @SideHustle",
        },

        project: {
          first: {
            projectname: "babboeCodes Portfolio",
            projectdescription:
              "A multi page Portfolio website for babboeCodes, but with HTML, CSDS and JavaScript(Vanilla), It was built with a lot of animations and features like toogle-dark-mode, and definitely serves its purpose for what is intended for.",
            projectlink: "https://babboecodes.netlify.app/",
          },
          second: {
            projectname: "ShadyRymes Interior Design",
            projectdescription:
              "This is Shady-Rymes, an Interior design Landing page that displays a collection of carpentry works used for interiors designs. Users can browse through to pick a design of their choice. This webpage also packs quite a number of features thatmakes the user experience awesome.",
            projectlink: "https://interior-design-landing-page.netlify.app/",
          },

          third: {
            projectname: "Loop-studio Landion page",
            projectdescription:
              "This is a solution to the Loopstudios landing page challenge on Frontend Mentor.This webpage is a landing page of a studio that gives users immersive experience in Interactive VR. Built with wonderful animation that immerses the user and serves is purpose as a center of attraction.",
            projectlink: "https://loopstudio-landings-page.netlify.app/",
          },
        },
      },

      {
        id: 43,
        stuId: 4550,
        name: "Marvelous Ejiogu",
        track: "Front-End Engineering",
        circle: 313,
        img: "https://avatars.githubusercontent.com/u/104576133?s=400&u=f68ce51fb39eec364f0811acbdc82065e41847bc&v=4",

        description: {
          intro:
            "I'm training to be a World Class Software Developer. Proudly.",
          introdetails:
            "I'm a Software Engineer and a Virtual Assistant. A student at AltSchool Africa. I'm also learning to be a Technical writer. I'm adventurous, and passionate about sharing knowledge, data science and web development. I'm open to opportunities in different forms- internship, hackathons, or bootcamps. Aim is to be a problem-solving developer",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/marvelous-ejiogu/",
          github: "https://github.com/Marvy-E",
          twitter: "https://twitter.com/Ejii_baby",
          portfolio: "https://github.com/Marvy-E",
          slackHandle: "Marvelous Ejiogu",
        },

        experience: {
          "How long?": "Well, I'm barely 5months into programming.",
        },

        project: {
          first: {
            projectname: "Qr-code-component",
            projectdescription:
              "This was my first design, made with HTML and CSS. I remember it being a bit tough lol. But we're growing.",
            projectlink: "https://marvy-e.github.io/qr-code-component/",
          },
          second: {
            projectname: "Calculator",
            projectdescription:
              "My first Javascript project. It was fun. Especially when I had to reinforce some teachings we had on the subject matter, I was able to build this responsive calculator with HTML, CSS and javascript. I am looking forward to doing more.",
            projectlink: "https://marvy-e.github.io/Calculator/",
          },

          third: {
            projectname: "Phonie project",
            projectdescription:
              "This is AltSchool's holiday hackathon's project. I and my team mates (TopGs) took it up to solidify our knowledge of HTML, CSS and Javascript. ",
            projectlink: "https://marvy-e.github.io/TopGs/",
          },
        },
      },
      {
        id: 44,
        stuId: 3795,
        name: "Pelumi Olukayode",
        track: "Frontend Engineering",
        circle: 161,
        img: "https://avatars.githubusercontent.com/u/93484706?v=4",

        description: {
          intro:
            "I am Pelumi Olukayode,A young, motivated individual with background knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my abilities to the advantage of the company while having the scope to develop my own dexterity.",
          introdetails:
            "Software Engineer | Frontend Developer | Student @AltschoolAfrica | HTML | CSS | JavaScript | Git and GitHub | Analytical Skills, Problem solving, Team-Work",
        },
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/pelumi-olukayode-45a7b2216",
          github: "https://github.com/OluPel",
          twitter: "https://twitter.com/OluPel",
          slackHandle: "Pelumi",
        },
        education: {
          first: "UNIVERSITY OF ILORIN, ILORIN. B.Sc INDUSTRIAL CHEMISTRY",
          second:
            "ALTSCHOOL SCHOOL OF SOFTWARE ENGINEERING. DIPLOMA IN FRONTEND ENGINEERING(In View)",
        },
      },
      {
        id: 45,
        stuId: 2060,
        name: "Promise Orung",
        track: "Frontend Engineering",
        circle: 102,
        img: "https://media-exp1.licdn.com/dms/image/C5603AQESmzLhXpgF4w/profile-displayphoto-shrink_400_400/0/1608045988555?e=1666828800&v=beta&t=6o33F9BlUs4FbR-sDpHaS-K1crXQB_d3t2mpiozJFGc",

        description: {
          intro:
            "I'm a Software engineer, I embrace lifelong learning and aspire to be the best in all I do, showing professional distinction.",
          introdetails:
            "Student at Altschool Africa and Fellow at Women Techsters. I've worked with different teams to carry out assignments and little projects, and I hope to improve by the day. ",
        },

        socialmedia: {
          linkedin: "https://www.linkedin.com/in/promiseorung/",
          github: "https://github.com/Orung",
          twitter: "https://twitter.com/Promiseorung",
          portfolio: "",
          slackHandle: "Promise Orung",
        },

        experience: {
          first: "",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "Personal Tracker",
            projectdescription:
              "A tracker design for people who workout and watch their regular activities",
            projectlink: "https://peteloba.obaloluwaoladun.repl.co/",
          },
          second: {
            projectname: "Ajim Capital",
            projectdescription:
              "A company that invests in the future of Startups. Built to handle financial problems startups might encounter ",
            projectlink: "https://ajimcapital.obaloluwaoladun.repl.co/",
          },
        },
      },
      {
        id: 46,
        stuId: 4125,
        name: "John Ekunola",
        track: "Frontend Engineering",
        circle: 170,
        img: "https://avatars.githubusercontent.com/u/51181625?s=400&u=d08ed5e667f6b4cd1eb9557eb0c0574325eaa16c&v=4",

        description: {
          intro:
            "I solve problems with code and find inspiration in everyday things, pushing my boundaries, and allowing myself to think out of the box.",
          introdetails: "Frontend developer and student at Altschool Africa.",
        },

        socialmedia: {
          linkedin: "https://linkedin.com/in/ekunolajohn/",
          github: "https://github.com/Jizzyjay",
          twitter: "https://twitter.com/Oluwatosin_EJ",
          portfolio: "https://www.johnekunola.com/",
          slackHandle: "John Ekunola",
        },

        experience: {
          first: "",
          second: "",
          third: "",
        },

        project: {
          first: {
            projectname: "Dashboard",
            projectdescription: "Dashboard(using Html, Css and Javascript).",
            projectlink: "https://johndashboaard.netlify.app/",
          },
          second: {
            projectname: "TravelX",
            projectdescription: "TravelX Landing Page(using Gatsby).",
            projectlink: "https://travex.netlify.app/",
          },
        },
      },
      {
        id: 47,
        stuId: 3443,
        name: "Taiwo Stephen",
        track: "Frontend Engineering",
        circle: 150,
        img: "https://avatars.githubusercontent.com/u/99148339?s=400&u=1bb8d958247b6d985a4ea0d41c3689b42cf812d2&v=4",
        description: {
          intro:
            "I'm a Software engineer, I embrace lifelong learning and aspire to be the best in all I do, showing professional distinction.",
          introdetails:
            "Student at Altschool Africa and control engineer at Transmission Company of Nigeria. I've worked with different teams to carry out assignments and little projects, and I hope to improve by the day. ",
        },
        friends: [{
          linkedin: "https://www.linkedin.com/in/stephen-taiwo-b5807419b",
          github: "https://github.com/stephen498",
          twitter: "https://twitter.com/taiwo_op1",
          twitterHandle:"@taiwo_op1",
          portfolio: "https://github.com/stephen498",
          slackHandle: "Taiwo Stephen Opeyemi",
        }],
        socialmedia: {
          linkedin: "https://www.linkedin.com/in/stephen-taiwo-b5807419b",
          github: "https://github.com/stephen498",
          twitter: "https://twitter.com/taiwo_op1",
          twitterHandle:"@taiwo_op1",
          portfolio: "https://github.com/stephen498",
          slackHandle: "Taiwo Stephen Opeyemi",
        },
        experience: {
          first:
            "Control Engineer at Nigerian Television Authority(NTA),Ibadan",
          second: "Electrical personnel at Simeon Engineering,Oluyole Ibadan",
          third:
            "Control Engineer at SCADA DEPT in National Control Center,Transmission Company of Nigeria(TCN)",
        },
        project: {
          first: {
            projectname: "Redact App",
            projectdescription:
              "A redact app for people to scrambble words that wants to be hidden",
            projectlink: "https://github.com/stephen498/Redact-app",
          },
          second: {
            projectname: "Bank_atm",
            projectdescription: "An atm for making withdrawal",
            projectlink: "https://github.com/stephen498/Bank_atm",
          },
          third: {
            projectname: "alt_schoolproject",
            projectdescription: "Profile page",
            projectlink: "https://github.com/stephen498/alt_schoolproject",
          },
        },
      },
    ];
        switch (step) {
          case 1:
            return (
              <UserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <PersonalDetails
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 3:
            return (
              <Confirmation
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                values={values}
                names={names}
              />
            );
          case 4:
            return <Success values={values} names={names} />;
            
        }
    }
}