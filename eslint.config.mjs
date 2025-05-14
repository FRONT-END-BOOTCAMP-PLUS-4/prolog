// ESM 환경에서 __dirname, __filename 사용을 위한 유틸
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// ESLint의 기존 extends 구문을 FlatConfig에서 사용할 수 있게 해주는 도우미
import { FlatCompat } from '@eslint/eslintrc';

// ESM 환경에서 현재 파일의 디렉토리 경로를 구함
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// compat 인스턴스 생성 - baseDirectory는 현재 디렉토리로 설정
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// FlatConfig 방식의 ESLint 설정 내보내기
const eslintConfig = [
  // ✅ 기존 ESLint 설정 방식과 호환되는 extends 불러오기
  ...compat.extends(
    'eslint:recommended',                      // 기본 JavaScript 권장 규칙
    'plugin:@typescript-eslint/recommended',   // TypeScript 규칙
    'plugin:react/recommended',                // React 규칙
    'plugin:react-hooks/recommended',          // React Hooks 규칙
    'plugin:import/errors',                    // import 관련 에러 탐지
    'plugin:import/warnings',                  // import 관련 경고 탐지
    'plugin:import/typescript',                // TS import 감지 보완
    'plugin:prettier/recommended',             // Prettier 연동
    'next/core-web-vitals',                    // Next.js 접근성/성능 규칙
    'next/typescript'                          // Next.js TypeScript 규칙
  ),

  // ✅ 추가적인 Flat Config 규칙 직접 작성
  {
    rules: {
      // Prettier 포맷팅 오류를 ESLint 에러로 보여줌
      'prettier/prettier': 'error',

      // 사용되지 않는 변수는 경고로 표시
      'no-unused-vars': 'warn',

      // console.log 사용 시 경고 (개발 시 확인용 로그 방지)
      'no-console': 'warn',

      // 항상 === 또는 !== 사용 강제
      eqeqeq: ['error', 'always'],

      // 가능한 경우 const 사용을 권장
      'prefer-const': 'warn',

      // Next.js에선 React import 불필요하므로 끔
      'react/react-in-jsx-scope': 'off',

      // export가 하나뿐일 경우 default export를 권장
      // 'import/prefer-default-export': 'error'
    },

    // 환경 변수 설정
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },

    // 모듈 import 관련 설정
    settings: {
      react: {
        version: 'detect' // React 버전 자동 감지
      }
    }
  }
];

// 모듈로 설정 내보내기
export default eslintConfig;
