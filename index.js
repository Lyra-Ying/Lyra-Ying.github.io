const fs = require('fs');

const readme = `<h1 align="center">Lyra's Homepage</h1>

<p align="center">
  <strong>AI Undergraduate @ Xiamen University</strong><br/>
  3D Vision | Generative Reconstruction | Scientific LLM Agents
</p>

<p align="center">
  <a href="mailto:liuying07@stu.xmu.edu.cn"><img src="https://img.shields.io/badge/Email-liuying07%40stu.xmu.edu.cn-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="https://github.com/Lyra-Ying"><img src="https://img.shields.io/badge/GitHub-Lyra--Ying-181717?style=flat-square&logo=github" alt="GitHub"/></a>
  <img src="https://komarev.com/ghpvc/?username=Lyra-Ying&style=flat-square&color=blue" alt="Profile views"/>
</p>

<img align="right" src="https://avatars.githubusercontent.com/Lyra-Ying" width="210" alt="Liu Ying profile photo"/>

## About Me

I am **&#21016;&#28322; (Liu Ying / Lyra)**, an undergraduate student majoring in **Artificial Intelligence** at **Xiamen University**. My research focuses on **3D Gaussian Splatting**, **NeRF-style reconstruction**, **generative 3D editing**, and **LLM agents for scientific writing**.

- I have spent **one and a half years as an on-site research intern** at the [MAC Lab, Xiamen University](https://mac.xmu.edu.cn/), working on 3D vision, generative reconstruction, and LLM-agent research.
- **Research Internship:** University of Science and Technology of China, AI research direction, 2025.11-2026.05.

## Research Interests

- **3D Vision:** 3D Gaussian Splatting, NeRF, multi-view generation, fast 3D scene editing, cultural heritage reconstruction.
- **LLM Agents:** scientific writing agents, RAG, GraphRAG, ToG/ToG 2.0, tool calling, task planning.
- **Knowledge Modeling:** tri-level epistemic graphs, hypergraphs, argument graph construction, entropy-based controversy quantification.
- **Controllable Generation:** Stable Diffusion restoration, multi-view image inpainting, Depth Anything alignment, cross-view consistency.

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

## Publications

**From Code to Paper: An Author-Guided Agent and Benchmark for Method Drafting and Figure Generation**  
*Co-first author, second author · NeurIPS 2026, CCF A, Under Review*  
Designed the author-guided agent framework and AuthorMarkers intermediate representation; built intent parsing, code evidence scanning, intent-code alignment, benchmark construction, and multi-dimensional evaluation.  
**Results:** faithfulness +0.956, figure readability +0.762, overall quality +9.4.

**EGSeditor: Efficient 3D Scene Editing in 200 Seconds via Dataset-Level Multi-View Optimization**  
*Co-first author, third author · ACM MM 2026, CCF A, Under Review*  
Worked on experimental design, GaussCtrl/SplatFlow baseline reproduction, Tanks & Temples and DeepBlending validation sets, and multi-metric evaluation including FID, CLIP-T, cross-view consistency, and inference time.

**Stable Diffusion-Enhanced 3D Gaussian Splatting for Efficient Neural Reconstruction of Chinese Heritage Structures**  
*Second author · Major Revision, 2026*  
Proposed transfer-style and iterative restoration strategies for large missing regions and local weathering; integrated Stable Diffusion multi-view pre-restoration with Depth Anything depth alignment.  
**Results:** PSNR +13%, SSIM +22%, LPIPS -30%, model storage -45.6%.

**TEG: Tri-Level Epistemic Graphs for Survey Synthesis**  
*Third author · PPSN 2026, CCF B, Under Review*  
Contributed to tri-level epistemic graph modeling, multi-granularity argument extraction, relation reasoning, and entropy-based controversy quantification for low-hallucination survey synthesis.

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
Connected with the ACM MM EGSeditor work on fast and consistent 3D Gaussian editing.

## Awards

- Provincial First Prize, China Undergraduate Mathematical Contest in Modeling, 2025.12.
- Provincial Second Prize, Challenge Cup Fujian Academic and Technological Works Competition, 2025.11.
- Provincial First Prize, Huawei ICT Competition Practice Track, 2024.12.
- Gold Award, Baotai Cup Xiamen University Innovation Competition, 2025.08.
- Outstanding Merit Student, Xiamen University, 2024.09.

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
