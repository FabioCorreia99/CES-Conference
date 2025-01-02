import { defineStore } from "pinia";

export const talksStore = defineStore("talks", {
    state: () => ({
        talks: [],
    }),
    getters: {
        getTalkById: (state) => (id) => state.talks.find(talk => talk.id === id),
        getTalksBySpeaker: (state) => (speaker) => state.talks.filter(talk => talk.speaker === speaker),
        getTalksByFilter: (state) => (filter) => state.talks.filter(talk => talk.filters.include(filter)),
        getTalksByDay: (state) => (day) =>  state.talks.filter(talk => talk.day === day)
    },
    actions: {
        addTalk(title, speaker, sumary, desc, filters, room, day, hour) {
            
            const newTalk ={
                id: this.talks.length > 0 ? this.talks[this.talks.length - 1].id + 1 :  0 ,
                title,
                speaker,
                sumary,
                desc,
                filters,
                room,
                day,
                hour,
            }        
            this.talks.push(newTalk);
        },
        removeTalk(talk) {
            const talkIndex = this.talks.indexOf(t => t.id === talk.id);

            if (talkIndex === -1) {
                console.log("Talk not found!");
                return;
            }
            
            this.talks.splice(talkIndex, 1);
        },
        init(){
            if (this.talks.length == 0) {
                const scheduleData = [
                    { 
                        title: "The Future of AI in Everyday Life", 
                        speaker: 1, 
                        sumary: "Explore how AI is reshaping our daily interactions, bringing automation and intelligence to a variety of domains, including healthcare, transportation, and education.", 
                        desc: "Discover the <b>latest</b> advancements in <b>AI</b>, exploring its challenges, future implications, and transformative power across industries. \n\nLearn how businesses are integrating <b>AI</b> into their workflows to enhance productivity and create innovative solutions. \n\nFinally, examine the ethical considerations and governance required to build trust in <b>AI</b> technologies.", 
                        filters: ["AI", "Future", "Tech"], 
                        room: "A101", 
                        day: 7, 
                        hour: "9:00" 
                    },
                    { 
                        title: "Building Scalable Web Applications", 
                        speaker: 2, 
                        sumary: "Learn the secrets of scalable web design, focusing on best practices, tools, and strategies for building robust and maintainable systems that meet high demand.", 
                        desc: "Understand the <b>key</b> principles behind <b>scalable</b> systems, delving into architecture patterns like microservices and serverless. \n\nExplore real-world case studies of businesses scaling their web platforms to millions of users. \n\nFinally, gain insights into common pitfalls and strategies for maintaining performance under pressure.", 
                        filters: ["Web", "Code"], 
                        room: "B102", 
                        day: 7, 
                        hour: "10:00" 
                    },
                    { 
                        title: "Effective Leadership in Tech Teams", 
                        speaker: 3, 
                        sumary: "Leadership skills for thriving tech teams, focusing on motivation, communication, and creating a culture of innovation and accountability.", 
                        desc: "Enhance your <b>leadership</b> skills to <b>motivate</b> and guide technical teams, fostering collaboration and trust. \n\nLearn how to manage conflicts effectively and adapt to the evolving needs of diverse team dynamics. \n\nFinally, explore frameworks for setting clear goals and aligning them with organizational priorities.", 
                        filters: ["Leadership", "Tech", "Teams"], 
                        room: "C103", 
                        day: 7, 
                        hour: "11:00" 
                    },
                    { 
                        title: "Quantum Computing Demystified", 
                        speaker: 4, 
                        sumary: "An introduction to quantum computing, simplifying complex principles and exploring its potential to revolutionize industries like cryptography and optimization.", 
                        desc: "Get a <b>clear</b> understanding of <b>quantum</b> principles, from superposition to entanglement, in this engaging talk. \n\nExplore practical applications such as solving complex optimization problems and securing communication. \n\nLearn about the current state of quantum hardware and what lies ahead in its development.", 
                        filters: ["Future", "Tech"], 
                        room: "A104", 
                        day: 7, 
                        hour: "13:00" 
                    },
                    { 
                        title: "The Rise of Edge Computing", 
                        speaker: 5, 
                        sumary: "Learn how edge computing complements cloud solutions by processing data closer to the source, enabling faster decision-making and reduced latency.", 
                        desc: "Explore <b>innovative</b> use cases for <b>edge</b> computing in real-world scenarios, such as IoT, autonomous vehicles, and smart cities. \n\nUnderstand how edge computing enhances security and reliability in critical systems. \n\nFinally, discover trends and predictions for the future of edge technologies in a connected world.", 
                        filters: ["Edge", "Cloud", "Tech"], 
                        room: "B105", 
                        day: 7, 
                        hour: "14:00" 
                    },
                    { 
                        title: "Cybersecurity Trends for 2025", 
                        speaker: 6, 
                        sumary: "Stay ahead of cybersecurity threats by understanding evolving tactics, technologies, and best practices for securing systems and data.", 
                        desc: "Discover the <b>latest</b> in <b>cybersecurity</b> defense mechanisms, from AI-driven threat detection to zero-trust architectures. \n\nLearn from real-world breaches and understand the strategies attackers use to compromise systems. \n\nFinally, gain practical insights into strengthening organizational resilience against cyber threats.", 
                        filters: ["Cyber", "Security", "Trends"], 
                        room: "C106", 
                        day: 7, 
                        hour: "15:00" 
                    },
                    { 
                        title: "Building Resilient Systems", 
                        speaker: 7, 
                        sumary: "Creating systems that can withstand challenges, ensuring uptime and reliability even in the face of unexpected disruptions.", 
                        desc: "Learn <b>proven</b> techniques for building <b>resilient</b> systems in tech, focusing on redundancy, fault tolerance, and recovery mechanisms. \n\nExplore case studies showcasing successful implementations in diverse industries. \n\nFinally, understand the trade-offs and considerations when designing for resilience.", 
                        filters: ["Systems", "Code"], 
                        room: "A107", 
                        day: 7, 
                        hour: "16:00" 
                    },
                    { 
                        title: "Innovations in AR and VR", 
                        speaker: 8, 
                        sumary: "How AR and VR are transforming industries, from entertainment and education to healthcare and real estate.", 
                        desc: "Dive into the <b>transformative</b> power of <b>AR</b> and <b>VR</b> technologies, examining breakthroughs in hardware and software. \n\nUnderstand how these immersive experiences are being applied to solve real-world problems. \n\nFinally, gain insights into the challenges and opportunities of developing AR/VR solutions.", 
                        filters: ["VR", "Future"], 
                        room: "B108", 
                        day: 7, 
                        hour: "17:00" 
                    },
                    { 
                        title: "Mastering API Design", 
                        speaker: 9, 
                        sumary: "Design APIs that developers love, focusing on usability, consistency, and adhering to modern standards.", 
                        desc: "Understand <b>core</b> principles of <b>API</b> design and usability, from REST to GraphQL and beyond. \n\nExplore tools and frameworks that simplify API development and ensure scalability. \n\nFinally, learn about testing and documentation strategies to streamline developer onboarding.", 
                        filters: ["API", "Design", "Code"], 
                        room: "C109", 
                        day: 7, 
                        hour: "18:00" 
                    },
                    { 
                        title: "The Ethics of Artificial Intelligence", 
                        speaker: 10, 
                        sumary: "Discussing ethical dilemmas in AI, including bias, privacy, and accountability in automated decision-making.", 
                        desc: "Examine <b>critical</b> ethical issues in the <b>development</b> of AI technologies, ensuring fairness and transparency. \n\nLearn about frameworks and guidelines for responsible AI use. \n\nFinally, discuss the societal impact and the role of governments and organizations in shaping ethical AI.", 
                        filters: ["Ethics", "AI", "Tech"], 
                        room: "A110", 
                        day: 8, 
                        hour: "9:00" 
                    },
                    { 
                        title: "Future of Blockchain Beyond Cryptocurrency", 
                        speaker: 11, 
                        sumary: "Explore how blockchain technology is being applied beyond cryptocurrencies in areas like supply chain, healthcare, and finance.", 
                        desc: "Dive deep into <b>blockchain</b> applications revolutionizing industries beyond <b>cryptocurrency</b>. \n\nUnderstand its potential in streamlining supply chain processes and ensuring data integrity in healthcare. \n\nFinally, discover emerging trends and the future outlook for blockchain innovation.", 
                        filters: [ "Future", "Tech"], 
                        room: "B111", 
                        day: 8, 
                        hour: "10:00" 
                    },
                    { 
                        title: "Emerging Trends in Cloud Computing", 
                        speaker: 12, 
                        sumary: "An in-depth look at the future of cloud computing, focusing on serverless, multi-cloud, and green computing initiatives.", 
                        desc: "Uncover the <b>latest</b> innovations in <b>cloud</b> technology, from multi-cloud strategies to energy-efficient architectures. \n\nLearn about the impact of serverless computing and how it enables scalability and cost efficiency. \n\nFinally, understand how green computing initiatives are shaping the cloud's future.", 
                        filters: ["Cloud", "Trends", "Tech"], 
                        room: "A112", 
                        day: 8, 
                        hour: "11:00" 
                    },
                    { 
                        title: "Revolutionizing Healthcare with IoT", 
                        speaker: 13, 
                        sumary: "Learn how IoT devices are transforming the healthcare industry by improving patient outcomes and operational efficiency.", 
                        desc: "Explore real-world use cases of <b>IoT</b> in <b>healthcare</b>, from remote monitoring devices to predictive analytics. \n\nUnderstand how these technologies enhance patient outcomes while optimizing hospital operations. \n\nFinally, examine the challenges and solutions in deploying IoT at scale in healthcare settings.", 
                        filters: ["IoT", "Innovation"], 
                        room: "C113", 
                        day: 8, 
                        hour: "13:00" 
                    },
                    { 
                        title: "The Art of Code Review", 
                        speaker: 14, 
                        sumary: "Master the practice of code review, improving collaboration, code quality, and team dynamics in software projects.", 
                        desc: "Learn the <b>best</b> practices for conducting <b>effective</b> code reviews that foster learning and collaboration. \n\nExplore tools and techniques that streamline the review process and enhance code quality. \n\nFinally, understand the cultural aspects of code reviews and how to integrate them into your team workflows.", 
                        filters: ["Code", "Review", "Quality"], 
                        room: "B114", 
                        day: 8, 
                        hour: "14:00" 
                    },
                    { 
                        title: "DevOps for Modern Software Development", 
                        speaker: 15, 
                        sumary: "Discover how DevOps practices streamline software development and improve collaboration between teams.", 
                        desc: "Understand the <b>principles</b> of <b>DevOps</b> and its role in modern software development. \n\nExplore tools and techniques that enable continuous integration and deployment. \n\nFinally, learn how DevOps fosters collaboration between development and operations teams to deliver value faster.", 
                        filters: ["DevOps", "Software", "Collaboration"], 
                        room: "A115", 
                        day: 8, 
                        hour: "15:00" 
                    },
                    { 
                        title: "Harnessing Big Data for Business Insights", 
                        speaker: 16, 
                        sumary: "Learn how big data analytics can transform decision-making and drive innovation in businesses across industries.", 
                        desc: "Dive into the <b>power</b> of <b>big data</b> analytics to uncover patterns, trends, and actionable insights. \n\nExplore tools and platforms that make big data processing efficient and scalable. \n\nFinally, discover how businesses leverage these insights to stay competitive and innovate.", 
                        filters: ["Analytics", "Business"], 
                        room: "C116", 
                        day: 8, 
                        hour: "16:00" 
                    },
                    { 
                        title: "The Intersection of AI and Ethics", 
                        speaker: 17, 
                        sumary: "Explore the ethical implications of AI technologies, focusing on fairness, accountability, and transparency.", 
                        desc: "Examine <b>key</b> ethical issues surrounding <b>AI</b>, including bias, privacy, and decision-making accountability. \n\nLearn about frameworks and practices to ensure ethical AI deployment. \n\nFinally, discuss the societal impact and strategies for aligning AI innovations with human values.", 
                        filters: ["AI", "Ethics", "Innovation"], 
                        room: "B117", 
                        day: 8, 
                        hour: "17:00" 
                    },
                    { 
                        title: "The Path to Sustainable Technology", 
                        speaker: 18, 
                        sumary: "Discover how technology can contribute to sustainability, focusing on green computing, energy efficiency, and ethical design.", 
                        desc: "Explore the <b>role</b> of <b>technology</b> in driving sustainability across industries. \n\nLearn about green computing initiatives and energy-efficient designs. \n\nFinally, understand the importance of ethical considerations in creating sustainable tech solutions.", 
                        filters: ["Sustainability", "Tech"], 
                        room: "A118", 
                        day: 8, 
                        hour: "18:00" 
                    },
                    {
                        title: "Revolutionary AI in Healthcare",
                        speaker: 19,
                        sumary: "Discover the transformative potential of AI in healthcare, revolutionizing diagnostics, treatment plans, and patient care.",
                        desc: "Explore the <b>groundbreaking</b> applications of <b>AI</b> in healthcare, including predictive analytics for personalized medicine. \n\nLearn how hospitals use AI to optimize resource allocation and improve operational efficiency. \n\nFinally, discuss ethical considerations and challenges in integrating AI into healthcare systems.",
                        filters: ["AI", "Innovation"],
                        room: "C119",
                        day: 8,
                        hour: "9:00"
                    },
                    {
                        title: "Advanced Kubernetes Strategies",
                        speaker: 20,
                        sumary: "Master advanced Kubernetes techniques for managing large-scale containerized applications effectively.",
                        desc: "Delve into <b>advanced</b> Kubernetes concepts such as custom operators, network policies, and service meshes. \n\nUnderstand strategies for scaling clusters and ensuring high availability. \n\nFinally, explore tools for monitoring and securing Kubernetes environments.",
                        filters: ["Cloud"],
                        room: "A120",
                        day: 8,
                        hour: "10:00"
                    },
                    {
                        title: "Ethics in Data Science",
                        speaker: 21,
                        sumary: "A deep dive into ethical considerations in data science, from bias detection to privacy safeguards.",
                        desc: "Understand the <b>importance</b> of ethical principles in <b>data</b> science, including transparency and accountability. \n\nLearn methods for identifying and mitigating algorithmic bias. \n\nFinally, explore case studies highlighting the consequences of unethical data practices.",
                        filters: ["Ethics", "Data", "Science"],
                        room: "B121",
                        day: 8,
                        hour: "11:00"
                    },
                    {
                        title: "The Future of IoT in Smart Cities",
                        speaker: 22,
                        sumary: "Explore how IoT technologies are building smarter, more sustainable cities for the future.",
                        desc: "Dive into <b>IoT</b> solutions shaping <b>smart</b> cities, from intelligent traffic systems to energy-efficient infrastructures. \n\nLearn about the challenges in integrating IoT at scale, including security and interoperability. \n\nFinally, discover initiatives for making cities more sustainable and connected.",
                        filters: ["IoT", "Future"],
                        room: "C122",
                        day: 8,
                        hour: "13:00"
                    },
                    {
                        title: "Next-Gen Programming Paradigms",
                        speaker: 23,
                        sumary: "An introduction to emerging programming paradigms that redefine how we approach software development.",
                        desc: "Discover <b>new</b> programming paradigms like <b>functional-reactive</b> and quantum computing languages. \n\nLearn how these paradigms can simplify complex problem-solving. \n\nFinally, explore real-world applications and how to adapt to these shifts in the software development landscape.",
                        filters: ["Programming", "Innovation", "Code"],
                        room: "A123",
                        day: 8,
                        hour: "14:00"
                    },
                    {
                        title: "Leadership in Agile Environments",
                        speaker: 24,
                        sumary: "Learn how to lead teams effectively in agile software development environments.",
                        desc: "Understand <b>key</b> leadership qualities essential for <b>agile</b> environments, including adaptability and servant leadership. \n\nExplore tools and practices for fostering collaboration and innovation. \n\nFinally, discover how to measure team success in an agile framework.",
                        filters: ["Leadership", "Teams"],
                        room: "B124",
                        day: 8,
                        hour: "15:00"
                    },
                    {
                        title: "Revolutionizing Retail with AR",
                        speaker: 25,
                        sumary: "Explore the impact of augmented reality in transforming the retail experience for consumers.",
                        desc: "Learn how <b>AR</b> is enhancing the <b>retail</b> landscape, from virtual try-ons to immersive shopping experiences. \n\nDiscover success stories from brands leveraging AR to boost customer engagement. \n\nFinally, discuss future trends and the potential of AR to redefine retail.",
                        filters: [ "Innovation"],
                        room: "C125",
                        day: 8,
                        hour: "16:00"
                    },
                    {
                        title: "Securing AI Models in Production",
                        speaker: 26,
                        sumary: "Learn strategies for securing AI models against adversarial attacks and ensuring robust deployments.",
                        desc: "Understand <b>threats</b> to <b>AI</b> systems, including adversarial inputs and data poisoning. \n\nExplore best practices for securing AI pipelines and maintaining model integrity. \n\nFinally, gain insights into frameworks and tools for continuous monitoring of AI security.",
                        filters: ["AI", "Security", "Tech"],
                        room: "A126",
                        day: 8,
                        hour: "17:00"
                    },
                    {
                        title: "Design Thinking in Tech Projects",
                        speaker: 27,
                        sumary: "A practical guide to applying design thinking principles to technology projects for better outcomes.",
                        desc: "Learn the <b>steps</b> of <b>design</b> thinking, from empathizing with users to iterative prototyping. \n\nExplore real-world examples of design thinking applied to tech challenges. \n\nFinally, discover how to integrate design thinking into agile and lean methodologies.",
                        filters: ["Design", "Thinking", "Tech"],
                        room: "B127",
                        day: 8,
                        hour: "18:00"
                    },
                    {
                        title: "Sustainable AI Development",
                        speaker: 28,
                        sumary: "Discover practices for creating AI solutions that are environmentally and socially responsible.",
                        desc: "Explore <b>sustainable</b> approaches to <b>AI</b> development, focusing on energy efficiency and ethical design. \n\nLearn how to measure and reduce the carbon footprint of AI models. \n\nFinally, discuss frameworks for ensuring AI benefits are distributed equitably across society.",
                        filters: ["AI", "Sustainability", "Ethics"],
                        room: "C128",
                        day: 8,
                        hour: "18:00"
                    },
                    {
                        title: "Modern CSS Techniques",
                        speaker: 29,
                        sumary: "Discover the power of modern CSS features like Grid, Flexbox, and custom properties for efficient design.",
                        desc: "Learn how <b>modern</b> CSS capabilities such as <b>Grid</b> and <b>Flexbox</b> simplify responsive design. \n\nUnderstand how custom properties enhance maintainability and scalability in complex projects. \n\nFinally, explore advanced features like container queries and subgrid to future-proof your stylesheets.",
                        filters: ["CSS", "Design", "Web"],
                        room: "A129",
                        day: 9,
                        hour: "9:00"
                    },
                    {
                        title: "Building Components in Vue 3",
                        speaker: 30,
                        sumary: "Master the art of creating reusable and efficient components in Vue 3 applications.",
                        desc: "Dive into the <b>core</b> features of <b>Vue 3</b>, including the Composition API and single-file components. \n\nExplore best practices for structuring and maintaining components in scalable applications. \n\nFinally, discover how to integrate state management and testing to ensure robustness.",
                        filters: ["Vue", "JavaScript", "Frontend"],
                        room: "B130",
                        day: 9,
                        hour: "10:00"
                    },
                    {
                        title: "JavaScript Performance Optimization",
                        speaker: 31,
                        sumary: "Learn techniques to enhance JavaScript performance in web applications for smoother user experiences.",
                        desc: "Understand <b>critical</b> performance bottlenecks in <b>JavaScript</b> applications and how to address them. \n\nExplore tools like Lighthouse and Webpack to analyze and optimize scripts. \n\nFinally, learn strategies for reducing memory leaks and improving runtime efficiency.",
                        filters: ["JavaScript", "Web"],
                        room: "C131",
                        day: 9,
                        hour: "11:00"
                    },
                    {
                        title: "Accessible HTML for All Users",
                        speaker: 32,
                        sumary: "Learn how to write semantic and accessible HTML to improve user experiences for everyone.",
                        desc: "Discover the <b>importance</b> of <b>semantic</b> HTML in building accessible web applications. \n\nUnderstand ARIA roles and attributes to enhance accessibility where native elements fall short. \n\nFinally, explore automated tools and techniques for testing accessibility compliance.",
                        filters: ["HTML", "Accessibility", "Web"],
                        room: "A132",
                        day: 9,
                        hour: "13:00"
                    },
                    {
                        title: "State Management in Vuex",
                        speaker: 33,
                        sumary: "Master Vuex for effective state management in complex Vue.js applications.",
                        desc: "Learn how <b>Vuex</b> simplifies <b>state</b> management in large Vue projects, keeping data consistent across components. \n\nExplore patterns for modularizing and optimizing Vuex stores. \n\nFinally, understand how to integrate Vuex with the Composition API for modern development practices.",
                        filters: ["Vue"],
                        room: "B133",
                        day: 9,
                        hour: "14:00"
                    },
                    {
                        title: "Progressive Web Apps with JavaScript",
                        speaker: 34,
                        sumary: "Discover how to build fast, reliable, and engaging Progressive Web Apps using JavaScript.",
                        desc: "Learn the <b>principles</b> of <b>Progressive</b> Web Apps (PWAs) and their benefits for users and developers. \n\nExplore tools and frameworks to implement service workers, caching strategies, and offline capabilities. \n\nFinally, understand how to enhance PWA adoption with installation prompts and push notifications.",
                        filters: ["JavaScript", "Web"],
                        room: "C134",
                        day: 9,
                        hour: "15:00"
                    },
                    {
                        title: "CSS Animation and Transitions",
                        speaker: 35,
                        sumary: "Learn to create visually engaging animations and transitions using modern CSS techniques.",
                        desc: "Understand the <b>fundamentals</b> of <b>CSS</b> animations and how to implement them effectively. \n\nExplore advanced concepts such as keyframes, easing functions, and performance optimizations. \n\nFinally, discover how to use animations to enhance user experience without compromising usability.",
                        filters: ["CSS", "Web"],
                        room: "A135",
                        day: 9,
                        hour: "16:00"
                    },
                    {
                        title: "Dynamic Forms with Vue",
                        speaker: 36,
                        sumary: "Master dynamic form creation in Vue.js with validation and real-time feedback.",
                        desc: "Learn how to <b>build</b> and manage <b>dynamic</b> forms in Vue.js applications. \n\nUnderstand how to use libraries like Vuelidate or custom validators to handle complex form validations. \n\nFinally, explore techniques for integrating APIs to provide real-time data feedback within forms.",
                        filters: ["Vue", "Frontend"],
                        room: "B136",
                        day: 9,
                        hour: "17:00"
                    },
                    {
                        title: "HTML5 APIs for Modern Web Development",
                        speaker: 37,
                        sumary: "Discover powerful HTML5 APIs that enable modern, interactive web experiences.",
                        desc: "Explore <b>essential</b> <b>HTML5</b> APIs such as Canvas, WebRTC, and WebSockets for creating interactive applications. \n\nLearn how to implement features like offline storage, geolocation, and multimedia controls. \n\nFinally, understand compatibility considerations and polyfills for broader support.",
                        filters: ["HTML", "API", "Web"],
                        room: "C137",
                        day: 9,
                        hour: "18:00"
                    },
                    {
                        title: "Optimizing Vue.js Applications",
                        speaker: 38,
                        sumary: "Enhance the performance of Vue.js applications through optimization techniques and best practices.",
                        desc: "Learn how to <b>optimize</b> <b>Vue.js</b> applications for faster rendering and better user experiences. \n\nExplore strategies like lazy loading, code splitting, and virtual DOM optimizations. \n\nFinally, discover tools and techniques for debugging and monitoring performance issues.",
                        filters: ["Vue", "Frontend"],
                        room: "A138",
                        day: 9,
                        hour: "18:00"
                    }
                ];
                
                // Adicionar as talks ao array
                scheduleData.forEach(talk => {
                    this.talks.addTalk(talk.title, talk.speaker, talk.sumary, talk.desc, talk.filters, talk.room, talk.day, talk.hour);
                });
            }
            
        },
    }
})