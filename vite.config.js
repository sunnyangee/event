import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 배포 시 상대 경로 사용
  build: {
    outDir: 'dist', // 빌드 결과물 저장 디렉토리
  },
});
