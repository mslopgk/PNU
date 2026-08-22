# s31 Context

## Glossary

### Design (디자인)
**시각적 요소**. CSS 토큰(컬러/타이포/스페이싱), 컴포넌트 스타일(쉐도우/보더/라디우스), 모션·인터랙션(키프레임/hover/scroll), 레이아웃 리듬, 이미지 트리트먼트(블렌드모드/오버레이)가 여기에 속한다.

### Content (내용)
**상세한 콘텐츠**. HTML 텍스트 노드, 데이터 값(숫자/이름/날짜), 섹션·카드의 개수와 순서(IA), 이미지 자산. **이번 작업에서 절대 건드리지 않는다.**

### "준비 중" placeholder
콘텐츠 상태 중 하나. 텍스트("준비 중", "교수진 정보 준비 중" 등)는 그대로 두되, 해당 상태에 한해 별도의 시각 트리트먼트(coming-soon 디자인)를 적용한다. 정보 부재를 의도된 디자인으로 보이게 만드는 것이 목적.

### PNU 모노톤 (Monotone Blue)
s31·s32가 공유하는 컬러 정책. `--gold`, `--amber`, `--violet`, `--rose` 등 액센트 토큰이 모두 `#143F90` 계열 PNU 블루로 통일된다. **버그가 아니라 의도된 브랜드 톤이다.** 변별력은 컬러가 아니라 세리프 타이포, 이미지 블렌드모드, 쉐도우 깊이로 만든다.

### Motion Budget
s31에 도입할 모션 6종. **양보다 시그니처 집중**.
- **Hero scroll-line** (`.hero` 하단, s30 `.scroll-line` 패턴 복제)
- **카운터 카운트업** 6개 (`.counter-n`, `IntersectionObserver` + `requestAnimationFrame`, 1회 트리거)
- **Hero `.b-img` 듀오톤 hover** (`mix-blend-mode: luminosity` + `opacity:.6`)
- **`.hl-headline .grad` 시머** (`background-position` 키프레임, 8s linear infinite)
- **Partners marquee** — 17개 칩 무한 띠 (우→좌, 30s linear infinite, hover 정지)
- **`@keyframes drift` 7개 중복을 1개로 통합** (시각 효과 0, 코드 정리)

도입하지 않는 것: 섹션 진입 fade-up(흔함), `.fq-fab` 펄스(미미), 추가 키프레임 신설.

### 96px Deco Initial
s30의 `.aura-letter` 패턴 도입. **`.hub-mini::before`와 `.dept-card::before`**에 96px Noto Serif KR italic 이니셜을 absolute 배치. 색상은 `var(--blue-tint)` (페이드된 PNU 블루). 내용 텍스트는 카드 데이터에서 첫 글자를 `attr(data-letter)` 또는 클래스로 매핑 — 마크업은 `data-*` 속성만 추가하므로 디자인 hook으로 간주.

### Card System
- **Resting shadow 도입**: `.b-card`, `.dept-card`, `.fac-card`, `.pg-card`, `.hub-mini`에 `box-shadow: 0 2px 8px rgba(15,31,69,.06)` 기본값
- **Hover shadow**: `0 14px 38px rgba(15,31,69,.16)` (s30 패턴)
- **Border-radius 스케일 통일**: 12 / 16 / 20px 3단계만 사용 (기존 7~28px 11종 → 3종)
- **Tinted hover**: `.hub-mini.green:hover` 등 카테고리 카드는 PNU 블루 톤다운 배경 hover

### Section Rhythm
- **Padding 변주**: 모든 섹션 96px → `96 / 72 / 54` 3단 리듬
- **배경 휘도 확대**: 현재 `--bg-alt:#F8FAFC` vs `--bg-section:#F1F5F9` (4 휘도) → `--bg-alt:#F5F7FA`, `--bg-section:#E8EEF5` (10+ 휘도)로 차이 명확화
- **achievement-banner 도입**: 카운터 위에 22px height 가로 스트립 (`linear-gradient(90deg, var(--pnu-blue), var(--blue-tint))`) 추가
"준비 중" placeholder가 들어간 영역에 적용하는 시각 트리트먼트.
- **블루 톤다운 카드**: `background: linear-gradient(var(--blue-pale), white)`, `border: 1px dashed var(--blue-tint)`, 텍스트 `opacity: .6`
- **우측 상단 외곽선 뱃지**: "Coming Soon" (Noto Serif KR italic, 11px), `border: 1px solid var(--blue-tint)`, transparent bg
- **Lab 표**: 행 전체가 아닌 "준비 중" 셀만 톤다운 + 점선 보더. 뱃지는 안 붙임(노이즈 방지)
- Hook: `.is-pending` 클래스 또는 `[data-status="pending"]` 속성 — wrapper에 추가하는 것은 디자인 변경으로 간주

### Serif Typography
s31의 한글 세리프 페어링. **`Noto Serif KR` 단독 사용** (s32의 `Nanum Myeongjo`는 도입하지 않음 — s32보다 절제). 라틴 문자와 숫자는 기존 산세리프(`Pretendard`, `Outfit`) 그대로. 적용 대상은 `.hl-headline .accent`(히어로 강조어), `.s-title em`(섹션 제목 강조), 그리고 새로 도입할 96px 데코 이니셜. 카운터 숫자는 산세리프 유지(가독성).
