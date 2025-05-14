/** @type {import("prettier").Config} */
module.exports = {
    // 문장 끝에 세미콜론 붙임
    semi: true,
  
    // 문자열은 따옴표 대신 홑따옴표 사용
    singleQuote: true,
  
    // 가로 너비는 80자까지 허용
    printWidth: 80,
  
    // 들여쓰기는 스페이스 2칸
    tabWidth: 2,
  
    // 중괄호 안에 공백 추가: { foo: bar }
    bracketSpacing: true,
  
    // 화살표 함수 매개변수가 하나일 땐 괄호 생략
    arrowParens: 'always',
  
    // 파일 끝에 자동 개행 (기본값은 true)
    // endOfLine: 'auto'
  };
  