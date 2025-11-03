# Code Quest - C언어 온라인 컴파일러

브라우저에서 바로 C 코드를 작성하고 실행할 수 있는 온라인 컴파일러입니다.

## 🚀 기능

- **온라인 편집기**: 별도의 설치 없이 브라우저에서 C 코드 작성
- **즉시 컴파일**: 작성한 코드를 바로 컴파일하고 실행
- **실시간 결과 확인**: 코드 실행 결과를 즉시 확인
- **오류 메시지**: 컴파일 오류 및 런타임 오류 표시
- **반응형 디자인**: 모든 기기에서 사용 가능

## 📋 사용 방법

1. **메인 페이지** (`index.html`)에서 프로젝트 소개 확인
2. **실습** 메뉴에서 온라인 컴파일러로 이동
3. 코드 편집 영역에 C 코드 입력
4. **▶ 실행** 버튼 클릭하여 코드 실행
5. 실행 결과 확인

## 💻 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Paiza API (C 코드 컴파일 및 실행)
- **Hosting**: GitHub Pages

## 📁 파일 구조

```
code-quest/
├── index.html          # 메인 페이지
├── editor.html         # 온라인 컴파일러
├── styles.css          # 공통 스타일시트
├── README.md           # 프로젝트 설명
└── .gitignore          # Git 무시 파일
```

## 🔧 설정 및 배포

### 로컬에서 실행

1. 저장소 클론
```bash
git clone https://github.com/agrowingturtle-rgb/code-quest.git
cd code-quest
```

2. 로컬 웹 서버 실행
```bash
# Python 3
python -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000
```

3. 브라우저에서 `http://localhost:8000` 접속

### GitHub Pages 배포

1. 저장소 설정에서 GitHub Pages 활성화
2. 소스를 `main` 브랜치로 설정
3. `https://agrowingturtle-rgb.github.io/code-quest` 에서 접속 가능

## 📝 예제 코드

### Hello World
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### 덧셈
```c
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("a + b = %d\n", a + b);
    return 0;
}
```

### 반복문
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }
    return 0;
}
```

## ⚠️ 제한사항

- 실행 시간 제한: 30초
- 파일 입출력 제한 가능
- 외부 라이브러리 사용 제한 가능
- 무한 루프 자동 중단

## 🐛 알려진 문제

- 일부 시스템 함수가 제한될 수 있음
- 네트워크 연결이 필요함

## 📚 학습 자료

- [C 언어 기초](https://www.tutorialspoint.com/cprogramming/)
- [C 표준 라이브러리](https://en.cppreference.com/w/c)

## 📄 라이선스

MIT License

## 👤 작성자

agrowingturtle-rgb

## 🤝 기여

버그 리포트나 기능 제안은 Issues를 통해 제출해주세요.

---

**마지막 업데이트**: 2025년 11월 3일
