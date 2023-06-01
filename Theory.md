# 심화이론

<br/>

## 1. npm이 무엇인지 설명하고 package.json에 대해서 설명해주세요.

- npm은 Node Packaged Manager의 약자임. Package는 모듈이라고도 불리는데 패키지나 모듈은 프로그램보다는 조금 작은 단위의 기능들을 의미함.
- npm은 node.js에서 사용하는 모듈들을 패키지로 만들어 관리하고 배포하고 있음.
- package.json은 개발자가 배포한 패키지에 대해, 다른 사람들이 관리하고 설치하기 쉽게 하기 위한 문서임.

  - 즉, npm이라는 오픈소스 패키지 생태계를 사용하기 위한 명세이자, 프로젝트의 의존성 관리를 위한 명세, 또 이 생태계로의 배포를 위한 명세라고 볼 수 있다.

- 출처 : https://hoya-kim.github.io/2021/09/14/package-json/

## 2. SPA와 MPA에 대해서 설명해주세요.

- SPA

  - SPA(Single Page Application)는 한 개(Single)의 Page로 구성된 Application이다.

  - CSR(Client Side Rendering) 방식으로 렌더링한다.
  - 단 한 번만 리소스(HTML, CSS, JavaScript)를 로딩한다. 그 후에는 데이터를 받아올 때만 서버와 통신한다.
  - 즉, 첫 요청시 딱 한 페이지만 불러오고 페이지 이동 시 기존 페이지의 내부를 수정해서 보여주는 방식이다.
  - 이를 클라이언트 관점에서 말하자면 최초 페이지를 로딩한 시점부터는 페이지 리로딩 없이 필요한 부분만 서버로 부터 받아서 화면을 갱신하는 것이다.
    필요한 부분만 갱신하기 때문에 네이티브 앱에 가까운 자연스러운 페이지 이동과 사용자 경험(UX)을 제공할 수 있다.
  - Angular, React, Vue 등 프론트엔드 기술들이 나오면서 크게 유행하고 있다.
  - <img src="https://hanamon.kr/spa-vs-mpa%ec%99%80-ssr-vs-csr-%ec%a0%95%eb%a6%ac/spa/">

- MPA

  - MPA(Multiple Page Application)는 여러 개(Single)의 Page로 구성된 Application이다.

  - SSR(Server Side Application) 방식으로 렌더링한다.
    새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스(HTML, CSS, JavaScript)가 다운로드된다. 페이지 이동하거나 새로고침하면 전체 페이지를 다시 렌더링한다.
  - <img src="https://hanamon.kr/spa-vs-mpa%ec%99%80-ssr-vs-csr-%ec%a0%95%eb%a6%ac/mpa/">

## 3. CSR과 SSR에 대해서 설명해주세요.

- CSR

  - Client Side Rendering의 약자

  - 렌더링이 클라이언트 쪽에서 일어난다. 즉, 서버는 요청을 받으면 클라이언트에 HTML과 JS를 보내준다. 클라이언트는 그것을 받아 렌더링을 시작한다.
  - <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmvAPF%2FbtrcM1fGQEJ%2FoqGeGnUFg9wXZOkClMC39k%2Fimg.png">
  - <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkJ0my%2FbtrcOM9GT1V%2FaKDCRhm77MfHF8ushplGi0%2Fimg.png">

- SSR

  - Server Side Rendering의 약자.
  - 말 그대로 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식이다.
  - <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6J4Fs%2FbtrcNnv3HWf%2F3f3KnWPKUBtlU7HshmcuOK%2Fimg.png">
  - <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGCZHY%2FbtrcOfdcohI%2FDKF2Cr2HHW5X8vNSaexEpK%2Fimg.png">

  - 출처 : https://proglish.tistory.com/216

## 4. CRA의 프로젝트에서 public 폴더와 src 폴더에 대해 설명해주세요.

- public 폴더

  - 정적인 자원을 저장하는 곳입니다. 이 폴더의 파일들은 웹 애플리케이션에서 직접 접근할 수 있다.

    - index.html: React 애플리케이션의 진입점인 HTML 파일. 이 파일은 브라우저에 표시되는 내용을 제어하며, React 컴포넌트가 마운트되는 대상 요소를 정의함.

    - 정적 자원 (이미지, 폰트 등): 웹 애플리케이션에서 사용되는 이미지, 폰트 및 기타 정적 파일은 "public" 폴더 내의 하위 폴더에 저장됨. 이들 파일은 상대 경로를 사용하여 접근할 수 있음.

- src 폴더

  - React 애플리케이션의 소스 코드를 포함하는 곳. 대부분의 개발 작업은 src 폴더 내에서 이루어진다.

  - index.js: React 애플리케이션의 진입점 JavaScript 파일임. 이 파일은 ReactDOM.render를 사용하여 React 컴포넌트를 실제 DOM에 렌더링한다.
  - 컴포넌트 파일들: "src" 폴더 내에는 여러 개의 컴포넌트 파일들이 위치함. 이들 파일은 주로 React 컴포넌트를 정의하고, 해당 컴포넌트의 동작과 표시를 관리하는 JavaScript 코드를 포함함.
  - 스타일 파일들: React 컴포넌트에 적용되는 CSS 스타일은 "src" 폴더 내의 파일들로 작성될 수 있음. 일반적으로는 CSS 모듈, CSS-in-JS 라이브러리 등을 사용하여 스타일을 모듈화하고 관리함.
  - 기타 JavaScript 파일들: React 애플리케이션에서 사용되는 유틸리티 함수, 상수 등의 기타 JavaScript 파일들도 "src" 폴더에 저장될 수 있음.

- 출처 : chatGPT

## 5. React 컴포넌트의 생명주기에 대해 설명해주세요.

## 6. useEffect의 동작 방식에 대해 설명해주세요

## 7. React Fragment에 대해 설명해주세요.

- React에서 컴포넌트가 여러 엘리먼트를 반환하도록 사용하는 것이 일반적인데, Fragment는 DOM에 의미 없는 div를 사용하지 않고 여러 하위 노드들을 그룹화해서 사용할 수 있다.

- `<Fragment>`를 축약해서 사용하는 방법은 <>를 이용면 됨. <>와 `<Fragment>`는 동일하게 취급된다. `<Fragment>`처럼 import 구문을 이용해서 가져와서 사용하지 않아도 되기 때문에 더 쉽게 `<Fragment>`를 사용할 수 있다. 또한 <></> 구문은 React에서만 동작하는 부분이니 다른 곳에서는 사용할 때 주의해야 한다.

- 단점

  - Fragment 축약을 사용하면 key 값을 설정할 수 없다. key 값을 사용해야 하는 경우에는 축약하지 않고 `<Fragment>`를 사용하면 됨.

## 8. React Router에서 Link와 useNavigate의 차이를 설명해주세요

## 9. BrowserRouter와 HashRouter에 대해 설명해주세요.

- BrowerRouter

  - SSR에 적합하다.

  - 새로고침하면 경로를 찾지 못해 에러가 발생한다.
  - HTML5 History API를 사용한다.
  - 주로 동적인 페이지에서 사용된다.
  - 따라서 배포가 좀 더 복잡하다.

- HashRouter

  - CSR에 적합하다.

  - 주소에 해쉬태그가 붙는다(#) -> index.html에서 index.html# 처럼 뒤에 붙는다

  - BrowserRouter와는 다르게 새로고침하여도 에러가 발생하지 않는다.
  - 검색 엔진이 찾지를 못한다.
  - 주로 정적인 페이지에서 사용된다.
  - 따라서 배포가 좀 더 간단하다.

## 10. 프레임워크와 라이브러리의 차이를 설명하고 Bootstrap과 react-bootstrap이 무엇인지 설명해주세요.

- eun 브랜치에 수업시간에 발표한 프레임워크와 라이브러리의 차이 ppt 첨부함

- Bootstrap

  - 부트스트랩(Bootstrap)은 트위터(Twitter)에서 개발한 웹 사이트를 쉽게 만들 수 있게 도와주는 HTML, CSS, JS 프레임워크다. 한 CSS로 다양한 기기에서 작동하며 여러 기능을 제공해 사용자가 쉽게 웹 사이트를 제작하고 유지, 보수할 수 있게 도와준다.

- React-Bootstrap

  - 리액트에서 css 작업을 원활하게 도와주는 라이브러리이다.

- 차이
  - Bootstrap은 상태값과 클래스를 사용하고, React-Bootstrap은 function과 hooks를 사용함. 가독성 면에서 React-bootstrap이 좋고 애니메이션 구현시 React-bootstrap이 더 유용함.
