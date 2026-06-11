const projects = {
  professional: [
    {
      title: "Stella",
      url: "https://github.com/jihoonkim0508/Stella",
      image: "assets/Stella.png",
      tags: ["Unity", "C#", "GitHub"],
      desc: "Unity 기반 3D 로그라이트 프로젝트입니다. 별자리 콘셉트를 바탕으로 전투, 독창적인 스킬 시스템, 보스전, 스테이지 진행 구조를 구현했습니다.",
      items: ["플레이어 조작", "전투 타격감", "스테이지 진행 구조"]
    },
    {
      title: "Daily Emergency Response VR",
      url: "https://github.com/jihoonkim0508/Daily-Emergency-Response-VR",
      image: "assets/Daily-Emergency-Response-VR.png",
      tags: ["Unity", "C#", "VR"],
      desc: "일상 속 비상 상황 대응을 연습할 수 있는 VR 프로젝트입니다. Unity 기반으로 제작한 교육 콘텐츠입니다.",
      items: ["VR 상호작용 설계"]
    },
    {
      title: "minewalker",
      url: "https://github.com/hyunhomon/minewalker",
      image: "assets/MineWalker.png",
      tags: ["Unity", "C#"],
      desc: "지뢰찾기인데 걸어다닙니다. Unity 기반으로 만든 간단한 프로젝트입니다.",
      items: ["지뢰찾기 시스템", "맵 알고리즘", "지뢰 생성 알고리즘", "플레이어 입력"]
    },
    {
      title: "ST-07",
      url: "https://github.com/jihoon58/ST-07",
      image: "assets/ST-07.png",
      tags: ["Unity", "C#"],
      desc: "Unity 기반 2D 좀비 서바이벌 게임입니다. 파밍, NPC 기반 미션을 통해서 엔딩을 보는 게임입니다.",
      items: ["플레이어 전반", "전투 시스템", "맵 생성 알고리즘", "세이브&로드 기능"]
    }
  ],
  personal: [
    {
      title: "ResetFlow",
      url: "https://github.com/jihoonkim0508/ResetFlow",
      image: "assets/ResetFlow.png",
      tags: ["Python"],
      desc: "Windows 포맷 후 자기만의 컴퓨터 세팅을 자동화하는 프로그램입니다. 다양한 커스터마이징, 롤백 기능이 포함되어 있습니다.",
      items: ["윈도우 작업", "테스트", "자동화 프로세서", "오류시 롤백 기능"]
    },
    {
      title: "LabLogAuto",
      url: "https://github.com/jihoonkim0508/LabLogAuto",
      image: "assets/LabLogAuto.png",
      tags: ["Python"],
      desc: "실습일지 작성을 자동화한 프로그램입니다.",
      items: ["반복적으로 수행해야 하는 작업 자동화"]
    },
    {
      title: "LookAndSaySequence",
      url: "https://github.com/jihoon58/lookandsaysequence",
      image: "assets/LookAndSaySequence.png",
      tags: ["C#"],
      desc: "look-and-say 수열을 계산하는 알고리즘입니다.",
      items: ["Look-and-Say"]
    }
  ]
};

const tagClass = (tag) => {
  const normalized = tag.toLowerCase();
  if (normalized === "c++") return "cpp";
  if (normalized === "c#") return "csharp";
  return normalized.replace(/[^a-z0-9]+/g, "-");
};

const createProjectCard = (project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const tags = project.tags
    .map((tag) => `<span class="tag ${tagClass(tag)}">${tag}</span>`)
    .join("");

  const items = project.items.length
    ? `<ul class="contrib-list">${project.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";

  article.innerHTML = `
    <a class="project-image" href="${project.url}" target="_blank" rel="noreferrer">
      <img src="${project.image}" alt="${project.title} 프로젝트 미리보기" loading="lazy">
      <span class="project-title">${project.title}</span>
    </a>
    <p class="project-desc">${project.desc}</p>
    <h4 class="card-label">주요 기능</h4>
    ${items}
    <h4 class="card-label">Tech Stack</h4>
    <div class="tag-row">${tags}</div>
  `;

  return article;
};

document.querySelector("#professional-grid").append(
  ...projects.professional.map(createProjectCard)
);

document.querySelector("#personal-grid").append(
  ...projects.personal.map(createProjectCard)
);

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menubar-items");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".menubar-items a[href^='#']")];

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}, { threshold: [0.25, 0.55] });

sections.forEach((section) => observer.observe(section));
