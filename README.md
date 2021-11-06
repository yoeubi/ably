# ably

1. 프로젝트 실행 방법

yarn 사용했습니다.
npm install or yarn install
npm serve or yarn serve

2. 주 사용 라이브러리와 사용 의도

React, Vue 중에서 Vue를 선택했습니다.
선택한 이유는 작은 프로젝트인 경우 React 보단 Vue가 더 빠르게 개발할수 있어서 입니다.

3. 프로젝트 폴더 구조와 설계 의도

- api
- components
- router
- store
- utils
- views

4. 컴포넌트 구조와 설계 의도

5. (상태 관리를 사용한 경우) 상태 관리의 구조와 설계 의도

상태관리는 vuex를 사용해서 다음과 같이 구성했습니다.

- state
- mutation,

이러한 의도는 페이지간에 필요한 데이터는 email, issueToken,remainMillisecond, confirmToken 4개라서 간편하게 구현할려고 했습니다.
