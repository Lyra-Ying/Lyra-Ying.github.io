const fs = require('fs');

const readme = `<h1 align="center">Lyra&#65288;&#21016;&#28386;&#65289;&#20010;&#20154;&#23398;&#26415;&#20027;&#39029;</h1>

<p align="center">
  <strong>AI Undergraduate @ <a href="https://www.xmu.edu.cn/">Xiamen University</a></strong><br/>
  Knowledge Graphs | NLP | LLM Agents
</p>

<p align="center">
  <a href="mailto:liuying07@stu.xmu.edu.cn"><img src="https://img.shields.io/badge/Email-liuying07%40stu.xmu.edu.cn-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="https://github.com/Lyra-Ying"><img src="https://img.shields.io/badge/GitHub-Lyra--Ying-181717?style=flat-square&logo=github" alt="GitHub"/></a>
  <img src="https://komarev.com/ghpvc/?username=Lyra-Ying&style=flat-square&color=blue" alt="Profile views"/>
</p>

<img align="right" src="./liuying.jpg" width="210" style="border-radius: 50%;" alt="Lyra profile photo"/>

## About Me

- **Name:** Lyra (&#21016;&#28386;)
- **Undergraduate:** Artificial Intelligence, [School of Informatics](https://informatics.xmu.edu.cn/), [Xiamen University](https://www.xmu.edu.cn/)
- **Political status:** Probationary CPC Member (&#20013;&#20849;&#39044;&#22791;&#20826;&#21592;)
- **Research:** Knowledge-enhanced LLMs, low-hallucination scientific writing agents, epistemic knowledge graphs, and retrieval-augmented generation
- **Additional background:** 3D vision and generative reconstruction for cross-modal knowledge grounding

## Education

- **2023.09 - Present:** B.Eng. student, [School of Informatics](https://informatics.xmu.edu.cn/), [Xiamen University](https://www.xmu.edu.cn/).
- **2020.09 - 2023.06:** Student, Anhui Dingyuan High School.

## Research Interests

- **Knowledge Graphs & Epistemic Modeling:** tri-level epistemic graphs, multi-granular knowledge extraction, argumentative relation mining, and information-theoretic evaluation for low-hallucination survey synthesis.
- **LLM Agents for Scientific Research:** scientific writing agents, tool-augmented reasoning, code-to-paper automation, multi-modal research workflows, and task planning for academic tasks.
- **3D Vision & Cross-Modal Generation:** 3D Gaussian Splatting, multi-view reconstruction, cultural heritage restoration, and cross-modal alignment to ground knowledge graphs in visual data.

## Selected Research Manuscripts

**From Code to Paper: An Author-Guided Agent and Benchmark for Method Drafting and Figure Generation**  
Manuscript under review. Contributed to the author-guided agent framework, AuthorMarkers intermediate representation, intent-code alignment, benchmark construction, and multi-dimensional evaluation.

**TEG: Tri-Level Epistemic Graphs for Survey Synthesis**  
Manuscript under review. Worked on epistemic graph modeling, multi-granularity argument extraction, relation reasoning, and entropy-based controversy quantification for low-hallucination survey synthesis.

## Skills

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch"/>
  <img src="https://img.shields.io/badge/3DGS-111827?style=flat-square" alt="3D Gaussian Splatting"/>
  <img src="https://img.shields.io/badge/NeRF-0F766E?style=flat-square" alt="NeRF"/>
  <img src="https://img.shields.io/badge/Stable%20Diffusion-6D28D9?style=flat-square" alt="Stable Diffusion"/>
  <img src="https://img.shields.io/badge/RAG-2563EB?style=flat-square" alt="RAG"/>
  <img src="https://img.shields.io/badge/GraphRAG-0EA5E9?style=flat-square" alt="GraphRAG"/>
  <img src="https://img.shields.io/badge/LLM%20Agent-F97316?style=flat-square" alt="LLM Agent"/>
  <img src="https://img.shields.io/badge/Experiment%20Design-475569?style=flat-square" alt="Experiment Design"/>
  <img src="https://img.shields.io/badge/Visualization-16A34A?style=flat-square" alt="Visualization"/>
</p>

## Projects

**Vmamba-based 3D Restoration of Ancient Architectural Paintings**  
National Undergraduate Innovation Project, core member, 2024.09-2026.04.  
Built toward heritage structure reconstruction and restoration, leading to the 3D reconstruction manuscript under revision.

**Dual-Graph Enhanced Interactive LLM System for Low-Hallucination Long-Form Writing**  
National Undergraduate Innovation Project, core member, 2024.10-2026.04.  
Supported TEG-based survey synthesis, graph-guided reasoning, and long-form academic writing.

**President's Fund Extension Project in Low-Hallucination Scientific Writing**  
Participant, 2025.03-2027.03.  
Extended graph-enhanced writing and knowledge modeling research.

**Legal Multimodal Intelligent QA Assistant**  
University innovation training project, participant, 2024.07-2026.07.  
Worked on legal data cleaning and domain-specific large-model data support.

**LLM-Assisted Radiation Source Localization and Radio Map Construction**  
University innovation training project, project leader, 2024.07-2026.04.  
Led algorithm optimization, simulation experiments, and radio map modeling.

**FastGS-based Digital Restoration of Minnan Heritage Paintings**  
Research climbing program, participant, 2025.04-2027.04.  
Focused on fast and consistent 3D Gaussian editing for cultural heritage restoration.

## Awards and Honors

**2026**
- Provincial Second Prize, China Collegiate Computing Design Competition, Fujian Division.

**2025**
- Provincial Second Prize, Challenge Cup Extracurricular Academic Science and Technology Works Competition, Fujian Province.
- Provincial First Prize, China Undergraduate Mathematical Contest in Modeling.
- Gold Award, Baotai Cup Xiamen University Student Innovation Competition.
- Outstanding Student Cadre, Xiamen University.
- Outstanding Merit Student, Xiamen University.

**2024**
- Provincial First Prize, Huawei ICT Competition Practice Track, Fujian Province.

## GitHub Stats

<p>
  <img src="https://github-readme-stats.vercel.app/api?username=Lyra-Ying&show_icons=true&count_private=true&hide_border=true" alt="Lyra-Ying GitHub stats"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lyra-Ying&layout=compact&hide_border=true" alt="Top languages"/>
</p>

## Contact

- Email: [liuying07@stu.xmu.edu.cn](mailto:liuying07@stu.xmu.edu.cn)
- GitHub: [Lyra-Ying](https://github.com/Lyra-Ying)

## Links to Add

- Blog:
- Google Scholar:
- ORCID:
- CV:
- Project pages:
`;

fs.writeFileSync('README.md', readme);
console.info('Writing to README.md');
