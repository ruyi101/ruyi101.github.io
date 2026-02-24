// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of projects in machine learning, quantum computing, and reinforcement learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-won-3rd-place-and-the-amazon-braket-prize-at-qhack-2024-for-our-quantum-convolutional-neural-network-project-for-phase-identification",
          title: 'Won 3rd place and the Amazon Braket Prize at QHack 2024 for our...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-arxiv-je-irt-a-geometric-lens-on-llm-abilities-through-joint-embedding-item-response-theory-arxiv-2509-22888",
          title: 'New preprint on arXiv: JE-IRT: A Geometric Lens on LLM Abilities through Joint...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-eacl-2026-findings-towards-robust-evaluation-of-visual-activity-recognition-resolving-verb-ambiguity-with-sense-clustering",
          title: 'Paper accepted at EACL 2026 (Findings): Towards Robust Evaluation of Visual Activity Recognition:...',
          description: "",
          section: "News",},{id: "projects-easy21-reinforcement-learning",
          title: 'Easy21 Reinforcement Learning',
          description: "Tabular RL agents for the Easy21 card game (David Silver&#39;s RL course)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-qcnn-for-phase-identification",
          title: 'QCNN for Phase Identification',
          description: "Quantum Convolutional Neural Networks for quantum phase identification — QHack 2024 (3rd Place + Amazon Braket Prize)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-nanogpt",
          title: 'NanoGPT',
          description: "An 11M-parameter GPT trained from scratch on Shakespeare and Hemingway",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%68%79%61%6F%37%33%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ruyi101", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nLvEViYAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hong-yao", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
