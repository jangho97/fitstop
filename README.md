# 🚗 FITSTOP AI 정비소 (성경 인물편)

믿음의 여정을 달리는 청년들을 위한 대화형 위로 웹앱입니다.  
성경 속 인물들과 실시간 채팅을 통해 고민을 나누고 성경 말씀 기반의 격려를 받을 수 있어요.

---

## 📁 프로젝트 구조
pitstop-ai/
├── public/images # 정비사 프로필 이미지
├── src/
│ ├── assets/theme.ts # 공통 색상/폰트 테마
│ ├── data/ # 정비사, 성구 데이터
│ ├── components/ # UI 컴포넌트
│ ├── pages/ # 페이지 라우팅
│ └── utils/getReply.ts # 응답 생성 로직
├── .gitignore
├── netlify.toml # Netlify 배포 설정
├── package.json # 의존성 및 실행 스크립트
├── tsconfig.json # TypeScript 설정
└── README.md


---

## ✅ 로컬 테스트 체크리스트

### 🔍 1. 메인 페이지 (인트로)
- [x] 상태 체크리스트 선택/해제 작동
- [x] 버튼 클릭 시 `/select`로 이동

### 🔍 2. 정비사 선택 페이지
- [x] 인물 카드 정상 출력 (이름, 키워드, 이미지, 인트로)
- [x] 카드 클릭 시 `/chat/[id]`로 이동

### 🔍 3. 대화 페이지
- [x] 인사말 출력
- [x] 고민 입력 후 응답 출력
- [x] 성구 포함 응답 및 말풍선 스타일 확인

### 🔍 4. 정비 완료 페이지
- [x] `/end` 접속 시 완료 메시지 출력
- [x] 버튼 클릭 시 메인으로 이동

### 🔍 5. 기타
- [x] 이미지 정상 로딩 여부 확인
- [x] 모바일 대응 여부 점검

---

## ▶️ 실행 방법

```bash
# 1. 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 정적 빌드 후 배포 (Netlify 등)
npm run build && npm run export
