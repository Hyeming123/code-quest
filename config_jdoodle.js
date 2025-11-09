// JDoodle API 설정
// JDoodle은 무료 온라인 컴파일 서비스입니다.
// 공개 API 엔드포인트를 사용하므로 별도의 API 키가 필요하지 않습니다.

const JDOODLE_API_URL = 'https://api.jdoodle.com/v1/execute';

// JDoodle 클라이언트 ID와 클라이언트 시크릿 (공개 테스트용)
// 프로덕션 환경에서는 자신의 클라이언트 ID와 시크릿을 사용하세요
const JDOODLE_CLIENT_ID = 'YOUR_CLIENT_ID'; // JDoodle에서 발급받은 클라이언트 ID
const JDOODLE_CLIENT_SECRET = 'YOUR_CLIENT_SECRET'; // JDoodle에서 발급받은 클라이언트 시크릿

// C 코드를 JDoodle API로 컴파일하는 함수
async function compileCode(code) {
  try {
    const payload = {
      clientId: JDOODLE_CLIENT_ID,
      clientSecret: JDOODLE_CLIENT_SECRET,
      script: code,
      language: 'c',
      versionIndex: '5' // C 언어 버전
    };

    const response = await fetch(JDOODLE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      output: result.output || '',
      error: result.error || '',
      statusCode: result.statusCode
    };
  } catch (error) {
    return {
      success: false,
      error: `컴파일 오류: ${error.message}`,
      output: ''
    };
  }
}

// Firebase 설정 (선택사항 - 로그인 기능을 위해)
const firebaseConfig = {
  apiKey: "AIzaSyBpXt13oLYfr4SzA5EtYRcjddvZCRTuUSI",
  authDomain: "code-quest-4918e.firebaseapp.com",
  projectId: "code-quest-4918e",
  storageBucket: "code-quest-4918e.firebasestorage.app",
  messagingSenderId: "22281251552",
  appId: "1:22281251552:web:3cfb4d84d3313949243e85",
  measurementId: "G-94FKSPBZ2S"
};
