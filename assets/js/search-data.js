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
          description: "",
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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-stochastic-resetting-in-discrete-time-quantum-dynamics-steady-states-and-correlations-in-few-qubit-systems-has-been-published-in-quantum-vol-9-p-1742",
          title: 'Our paper Stochastic Resetting in Discrete-time Quantum Dynamics: Steady States and Correlations in...',
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
