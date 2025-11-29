# Git 설정 및 GitHub Push 가이드

## 1. Git 설치 확인
```bash
git --version
```

## 2. Git 초기화 및 커밋
```bash
# Git 저장소 초기화
git init

# 사용자 정보 설정 (처음 한 번만)
git config --global user.name "jjang"
git config --global user.email "jjang70.dev@gmail.com"

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 기본 정적 페이지 생성"
```

## 3. GitHub 저장소 생성
1. GitHub.com에 로그인
2. 우측 상단의 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 이름 입력 (예: `fstrepo`)
4. Public 또는 Private 선택
5. "Create repository" 클릭
6. 생성된 저장소의 URL을 복사 (예: `https://github.com/jjang70/fstrepo.git`)

## 4. GitHub에 연결 및 Push
```bash
# 원격 저장소 추가 (아래 URL을 실제 저장소 URL로 변경)
git remote add origin https://github.com/jjang70/fstrepo.git

# 메인 브랜치로 이름 변경
git branch -M main

# GitHub에 push
git push -u origin main
```

## 5. GitHub Pages 활성화
1. GitHub 저장소 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. **Save** 버튼 클릭
5. 몇 분 후 `https://jjang70.github.io/fstrepo` 주소로 접속 가능

## 문제 해결
- Git 명령어가 인식되지 않으면: PowerShell 재시작 또는 Git Bash 사용
- Push 권한 오류: GitHub 인증 확인 (Personal Access Token 필요할 수 있음)

