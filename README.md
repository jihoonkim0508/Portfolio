# 김지훈 포트폴리오

게임 개발과 개인 프로젝트를 소개하는 정적 포트폴리오 웹사이트입니다.
HTML, CSS, JavaScript로 구성하며 GitHub Pages로 배포합니다.

**웹사이트: [jihoonkim0508.github.io/Portfolio](https://jihoonkim0508.github.io/Portfolio/)**

## 파일 구성

- `index.html`: 소개, 기술, 프로젝트, 연락처 섹션
- `style.css`: 레이아웃과 반응형 스타일
- `script.js`: 프로젝트 카드 데이터와 메뉴 동작
- `assets/`: 프로젝트 이미지

## 로컬 실행

저장소를 내려받은 뒤 `index.html`을 브라우저로 열면 됩니다. 별도 패키지 설치나 빌드 과정은 없습니다.

로컬 HTTP 서버가 필요하면 Python이 설치된 환경에서 저장소 루트에서 실행합니다.

```sh
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 수정과 배포

- 프로젝트 카드의 제목, 설명, 링크, 이미지는 `script.js`에서 수정합니다.
- 상단 대표 프로젝트와 소개 문구는 `index.html`에서 수정합니다.
- GitHub Pages는 `main` 브랜치의 루트(`/`)를 배포합니다.

최신 대표 프로젝트와 개발 상태는 [GitHub 프로필](https://github.com/jihoonkim0508)에서도 확인할 수 있습니다.

## 라이선스

저장소의 [MIT 라이선스](LICENSE)를 참고하세요.
