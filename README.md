# Week2_Assignment\_\_Dashboard 📝

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 기능 📍](#2-구현-기능-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크]()

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 2주차 3번째 기업 과제
- 주제 : 대시보드 제작
- 기간 : 2022.02.07 ~ 2022.02.09

<br />

## 2. 구현 기능 📍

- 반응형 네비게이션바
  - 화면 크기에 따라 데스크톱, 모바일 버전 네비게이션바 생성
  - 모바일 버전 네비게이션바에서 메뉴 클릭시 좌측에서 메뉴바 생성
- 카드 필터링
  - 필터, 토글 클릭시 해당 카드만 화면에 필터
  - 필터, 토글 클릭시 필터링 리셋 버튼 생성
  - 필터링 리셋 버튼 클릭시 전체 필터 해제
- 반응형 대시보드
  - 화면 크기에 따라 카드 사이즈 및 개수 변화
  - 각 카드에 API로 받아온 정보 생성
  - 해당하는 카드가 없을 때, 혹은 데이터가 없을 때 빈 화면 구현

<br />

## 3. 프로젝트 구조 🌲

```bash
src
├── API
├── Assets
├── Components
│   ├── Common
│   │    ├── Card
│   │    ├── Filter
│   │    └── Toggle
│   ├── Dashboard
│   │    ├── FilterMenu
│   │    └── index.tsx
│   └── NavigationBar
│        ├── DesktopBar
│        ├── MobileBar
│        ├── Modal
│        └── index.tsx
├── Utils
│   ├── Constants
│   ├── Hooks
│   ├── Interface
│   └── Styles
│        ├── _mixins.scss
│        ├── _reset.scss
│        └── _variables.scss
├── App.scss
├── App.tsx
└── index.tsx
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                                     |
| ------------------------------------------ | ------------------------------------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 환경 설정, 반응형 네비게이션바 구현, 토글 및 필터링 로직 구현 |
| [정인권](https://github.com/developjik)    | 반응형 대시보드, 카드 레이아웃 구현                           |
| [현다솜](https://github.com/som-syom)      | 필터링 로직 및 필터 레이아웃 구현                             |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/PreOnBoarding-Team17/Week2_Dashboard.git
```

2. 프로젝트 패키지 설치

```plaintext
$ yarn install
```

3. 프로젝트 실행

```plaintext
concurrently 패키지가 설치돼있어 JSON-Server와 Client Server가 동시에 실행됩니다.
$ yarn dev
```
