// Edit this file to update your profile. Research in preparation is separate from published work.
window.PROFILE = {
  "firstName": "Dushyant",
  "lastName": "Bharadwaj",
  "subtitle": "MCS student @ UIUC",
  "photo": "assets/dushyant.jpg",
  "email": "db50@illinois.edu",
  "socials": {
    "LinkedIn": "https://www.linkedin.com/in/dushyant-bharadwaj-497215221/",
    "DBLP": "https://dblp.org/pid/417/7517.html"
  },
  "cv": "",
  "about": [
    "I am a Master of Computer Science (MCS) student at the University of Illinois Urbana-Champaign (UIUC), working with Prof. Charith Mendis and Prof. Gagandeep Singh.",
    "My research lies at the intersection of AI and formal methods. On one hand, I study how learning and synthesis techniques can be used to automate and improve formal methods (AI for formal methods). On the other, I develop formal infrastructures for building and accelerating trustworthy AI systems using formal methods (formal methods for AI).",
    "Before joining UIUC, I graduated in Computer Science from the University of California, Irvine (UCI) in 2025, completing both the Campuswide Honors Collegium (CHC) and the ICS Honors Program, and was inducted into Phi Beta Kappa. During my time at UCI, I conducted research with the Dutt Research Group."
  ],
  "affiliations": {
    "University of Illinois Urbana-Champaign": "https://siebelschool.illinois.edu/",
    "Charith Mendis": "https://charithmendis.com/",
    "Gagandeep Singh": "https://ggndpsngh.github.io/"
  },
  "news": [
    {
      "date": "Jul 2026",
      "text": "RuleFlow: Learning Reusable Program Transformations via LLM-Guided Rule Synthesis appears at COLM 2026.",
      "links": {
        "paper": "https://openreview.net/forum?id=Zmh7XeI4h2",
        "code": "https://github.com/ADAPT-uiuc/RuleFlow"
      }
    },
    {
      "date": "Aug 2025",
      "text": "Joined the Master of Computer Science (MCS) program at UIUC.",
      "links": {}
    },
    {
      "date": "Jun 2025",
      "text": "Graduated in Computer Science from the University of California, Irvine.",
      "links": {}
    }
  ],
  "research": [
    {
      "title": "AI for Formal Methods",
      "description": "I use machine learning and program synthesis to automate the construction and improvement of formal analysis tools.",
      "projects": [
        {
          "title": "RuleFlow",
          "description": "RuleFlow uses LLMs to discover optimizations for Pandas programs and generalizes them into reusable rewrite rules. A compiler then applies those rules to new programs without calling an LLM during deployment. This separates the cost of discovering optimizations from the process of repeatedly applying them.",
          "status": "",
          "image": "assets/ruleflow.png",
          "imageAlt": "RuleFlow architecture: SnippetGen discovers optimizations, RuleGen generalizes rewrite rules, and CodeGen applies them to test-time notebooks.",
          "showImage": true,
          "links": {
            "COLM 2026": "https://openreview.net/forum?id=Zmh7XeI4h2",
            "GitHub": "https://github.com/ADAPT-uiuc/RuleFlow"
          },
          "imageLink": "assets/ruleflow-diagram.pdf"
        }
      ]
    },
    {
      "title": "Formal Methods for AI",
      "description": "I develop formal foundations and infrastructure for reliable AI analysis and certification.",
      "projects": [
        {
          "title": "Scepter",
          "description": "Scepter specializes neural network certifiers to the architecture of the neural network, thereby accelerating their execution. It does so by separating architecture-dependent structural decisions from numerical computation and resolving structural work ahead of time, producing a reusable sequence of numerical operations. This specialization leads to speedups over hand-tuned certifiers.",
          "status": "Work in progress",
          "image": "assets/scepter-stage.svg",
          "imageAlt": "An execution of tensor operations is split into descriptor computations performed before certification and a residual program that consumes every descriptor as a constant and processes payloads at run time.",
          "showImage": true,
          "links": {},
          "imageLink": "assets/scepter-stage.svg"
        }
      ]
    }
  ],
  "publications": [
    {
      "title": "RuleFlow: Learning Reusable Program Transformations via LLM-Guided Rule Synthesis",
      "authors": "Avaljot Singh*, Dushyant Bharadwaj*, Stefanos Baziotis, Kaushik Varadharajan, Charith Mendis",
      "venue": "Conference on Language Modeling (COLM), 2026",
      "note": "* Equal contribution.",
      "abstract": "RuleFlow combines LLM-based optimization discovery with compiler-based deployment. It generalizes program-specific optimizations into reusable rewrite rules, allowing a compiler to optimize new Pandas programs without repeated LLM calls.",
      "links": {
        "Paper": "https://openreview.net/forum?id=Zmh7XeI4h2",
        "Code": "https://github.com/ADAPT-uiuc/RuleFlow"
      }
    },
    {
      "title": "CoSense: Context- and Noise-Aware Object Detection in Autonomous Driving With Synthetic Data Generation",
      "authors": "Hamidreza Alikhani, Dushyant Bharadwaj, Hangyeol Jung, Nikil Dutt",
      "venue": "IEEE Embedded Systems Letters, vol. 18, no. 4, pp. 288–291, 2026",
      "abstract": "",
      "links": {
        "IEEE Xplore": "https://ieeexplore.ieee.org/document/11260471",
        "DOI": "https://doi.org/10.1109/LES.2025.3634531"
      }
    }
  ],
  "workInProgress": [
    {
      "title": "Scepter",
      "description": "Architecture specialization for efficient execution of generated neural network certifiers.",
      "status": "In preparation."
    }
  ],
  "education": [
    {
      "dates": "2025 – Present",
      "title": "Master of Computer Science (MCS)",
      "organization": "University of Illinois Urbana-Champaign",
      "detail": "Prof. Charith Mendis"
    },
    {
      "dates": "Graduated 2025",
      "title": "Undergraduate studies in Computer Science",
      "organization": "University of California, Irvine",
      "detail": "Graduated with honors · Phi Beta Kappa"
    }
  ],
  "experience": [
    {
      "dates": "Fall 2025 – Present",
      "title": "Graduate Research",
      "organization": "University of Illinois Urbana-Champaign",
      "detail": "Research on program optimization, compiler techniques, and efficient neural network certification."
    },
    {
      "dates": "At UC Irvine",
      "title": "Undergraduate Research",
      "organization": "University of California, Irvine",
      "detail": "Research experience in efficient and reliable machine learning systems, including work on CoSense."
    }
  ],
  "service": [
    {
      "dates": "Fall 2026",
      "title": "Co-organizer, UIUC Compiler Seminar",
      "organization": "University of Illinois Urbana-Champaign",
      "detail": "Co-organized with Avaljot Singh."
    }
  ],
  "office": [
    "Room 2107",
    "Siebel Center for Computer Science",
    "201 N. Goodwin Avenue",
    "Urbana, IL 61801"
  ],
  "aboutLinks": {
    "Prof. Charith Mendis": "https://charithmendis.com/",
    "Prof. Gagandeep Singh": "https://ggndpsngh.github.io/",
    "Dutt Research Group": "https://duttgroup.ics.uci.edu/",
    "University of Illinois Urbana-Champaign (UIUC)": "https://siebelschool.illinois.edu/",
    "University of California, Irvine (UCI)": "https://ics.uci.edu/",
    "Campuswide Honors Collegium (CHC)": "https://catalogue.uci.edu/honors/",
    "ICS Honors Program": "https://ics.uci.edu/honors/",
    "Phi Beta Kappa": "https://phibetakappa.uci.edu"
  }
};
