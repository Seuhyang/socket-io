# socket.io

<img src="https://img.shields.io/badge/nodejs-v16.17.1-important" />
<img src="https://img.shields.io/badge/express-v4.18.2-red" />
<img src="https://img.shields.io/badge/socket.io-v4.7.1-blue" />

<br>

## Intro
- socket io 사용해보기 위한 테스트 프로젝


## scripts
1. **`npm run build`**   
   1. compile   
2. **`npm run watch`**   
   1. real time compile
3. **`npm run dev`**   
   1. pm2로 개발환경으로 서버 실행

## 주의사항
- pm2가 package 에 포함이 되지 않음.

## util
- **util/socket.io.ts**
   1. socket.io를 router에서 사용하기 위해 분리
