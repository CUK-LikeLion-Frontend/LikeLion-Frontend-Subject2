# 프론트엔드 교육과정 과제 1을 위한 저장소입니다.

## 1. 프레임워크와 라이브러리의 차이를 설명하고 Bootstrap과 reactbootstrap이 무엇인지 설명해주세요.

- 프레임워크의 특징
  1. 특정 개념들의 추상화를 제공하는 여러 클래스나 컴포넌트로 구성되어 있다.
  2. 추상적인 개념들이 문제를 해결하기 위해 같이 작업하는 방법을 정의한다.
  3. 컴포넌트들은 재사용이 가능하다.
  4. 높은 수준에서 패턴들을 조작할 수 있다.
- 라이브러리의 특징
  - 단순 활용가능한 도구들의 집합
  - 개발자가 만ㄷ느 클래스에서 호출하여 사용, 클래스들의 나열로 필요한 클래스를 불러서 사용하는 방식
- 차이점
  - 제어 흐름에 대한 주도성이 누구에게/어디에 있는가 에 있다.
  - 프레임워크 => 전체적인 흐름을 스스로가 쥐고 있으며 사용자는 그 안에서 필요한 코드를 짜 넣는다.
  - 라이브러리 => 사용자가 전체적인 흐름을 만든다.
  - [참고 블로그](https://webclub.tistory.com/458)

## 2. css에서 margin과 padding에 대해 설명해주세요.

- margin => Obejct와 화면과의 여백(외부)
- padding => Object 내의 여백(내부)
  [Margin과 Padding 차이](https://velog.io/@hyejin4169/CSS-margin-padding-%EC%B0%A8%EC%9D%B4%EC%A0%90%EA%B3%BC-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC)

## 3. css에서 Flex와 Grid에 대해 설명해주세요.

- Flex => 1차원으로 수평, 수직 영역 중 하나의 방향으로만 레이아웃을 나눌 수 있음.
- Grid => 2차원으로 수평, 수직 영역을 동시에 나눌 수 있음.

  [참고](https://free-eunb.tistory.com/86)

## 4. npm이 무엇인지 설명하고 package.json과 package-lock.json에 대해서 설명해주세요.

- Node.js는 CommonsJS를 따르는 모듈 시스템을 채택하여 Node.js에서 사용할 수 있는 모듈인 패키지를 개발자들이 업로드 또는 다운로드 할 수 있도록 하는 Node Package Manager 즉, NPM을 제공한다.
- NPM =>듈은 애플리케이션에 분리되어 개별적으로 존재하다가 애플리케이션 로드에 의해 호출된다. 모듈은 기능별로 분리되어 작성된다. 이에 따라 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command Line Interface)를 제공하는 것이 바로 NPM이다.
- Package.json => 많은 패키지를 사용하게 되고, 패키지의 버젼도 빈번하게 업데이트 되므로 프로젝트가 의존하고 있는 패키지를 일괄 관리 할 필요가 있다. 이에 NPM은 package.json 파일을 통해 프로젝트 정보와 패키지의 의존성을 관리한다.
- Package-lock.json => package.json의 정보가 부족하기 때문에 생성된다. 즉, 협업시 버전관리를 위해 더 상세한 정보를 포함하고 있다고 생각하면 된다.
  - [Node, NPM 이해하기](https://velog.io/@gyutato/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B3%B5%EC%8B%9D-%EC%9E%90%EC%8A%B5%EC%84%9C-%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-1.-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%85%8B%ED%8C%85) -[Package.json](https://1000hg.tistory.com/47)

## 5. SPA와 MPA에 대해서 설명해주세요.

- SPA(Single Page Application) => 한 개의 페이지로 구성된 어플리케이션.
  - 모든 정적 리소스를 최초 한 번에 다운로드한다. 그 이후 새로운 페이지 요청이 있을때, 페이지 갱신에 필요한 데이터만 전달 받아 페이지를 갱신한다.
  - CSR(Client Side Rendering)
  - Vue.js, React.js etc....
  - 장점
    - 필요한 리소스만 부분적으로 로딩
    - 서버의 템플릿 연산을 클라이언트로 분산
    - 컴포넌트별 개발 용이
  - 단점
    - 초기 구동 속도가 느림
    - SEO가 어려움
    - 보안 문제 => 클라이언트측의 쿠키를 제외하고 사용자에 대한 정보를 저장할 공간이 마땅치 않음.
- MPA(Multiple Page Application) => 여러 개의 페이지로 구성된 어플리케이션.

  - 새로운 페이지를 요청할 때마다 정적 리소스가 다운로드되고, 매번 전체 페이지가 다시 렌더링 된다.
  - Next.js, Gatsby etc...
  - 장점
    - SEO(Search Engine Optimization)관점에서 유리
    - 첫 로딩이 매우 짧다.
  - 단점
    - 새로운 페이지 요청마다 리로딩 발생
    - 서버 렌더링에 따른 부하
    - 모바일 앱 개발시 추가적인 백엔드 작업 필요 => 복잡성

- [SPA, MPA](https://hanamon.kr/spa-mpa-ssr-csr-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EB%9C%BB%EC%A0%95%EB%A6%AC/)

## 6. CSR과 SSR에 대해서 설명해주세요.

- CSR =>
  1. User가 Website 요청을 보냄.
  2. CDN(엔드 유저의 요청에 물리적으로 가까운 서버에서 요청을 응답하는 방식)이 HTML 파일과 JS로 접근할 수 있는 링크를 클라이언트로 보냄.
  3. 클라이언트는 HTML과 JS를 다운로드 받음.(이떄 유저는 아무것도 볼 수 없음.)
  4. 다운이 완료된 JS가 실행되고 데이터를 위한 API가 호출됨.
  5. 서버가 API로부터의 요청에 응답.
  6. API로부터 받아온 데이터를 placeholder자리에 넣어줌. 이때부터 페이지 상호작용이 가능함.
- SSR =>
  1. User가 Website 요청을 보냄.
  2. Server는 'Ready to Render' 즉, 즉시 렌더링 가능한 html파일을 만듦.
  3. 클라이언트에 전달되는 순간, 이미 렌더링 준비가 되어있기 때문에 HTML은 즉시 렌더링됨. 그러나 아직 JS가 읽히기 전이기 때문에 조작은 불가능함.
  4. 클라이언트가 JS를 다운받음.
  5. 브라우저가 JS 프레임워크를 실행
  6. JS까지 성공적으로 컴파일 되었기 때문에 기억하고 있던 사용자 조작이 실행되고 상호작용이 가능해짐.
- [CSR & SSR](https://hahahoho5915.tistory.com/52)

## 7. CRA의 프로젝트에서 public 폴더와 src 폴더에 대해 설명해주세요.

- Public => 정적 파일을 넣음, Webpack으로 처리되지 않고 원본이 build 폴더에 복사된다.
  - 파일이 후처리되거나 경량화 되지 않음.
  - 파일에서 오류가 발생할 경우 404오류를 발생시킨다.
- Public을 사용하는 경우
  1. 특정 이름을 가진 파일이 필요할 때
  2. 이미지 파일이 수천개 있어 경로를 동적으로 참조해야할 때
  3. 번들링 된 코드 밖에서 pace.js같은 작은 스크립트를 포함하고 싶을 때(??)
  4. webpack과 호환되지 않는 라이브러리를 사용해야 할 때
- [웹팩이란?](https://rosypark.tistory.com/549)
- [Public](https://bokjiho.medium.com/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-public-src-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%B0%A8%EC%9D%B4-fddb4f455c2a)

## 8. React Fragment에 대해 설명해주세요.

- React v16에 추가된 기능
- 컴포넌트가 여러 엘리먼트를 return 할 때 jsx규칙상 하나의 태그로 묶어 retrun 해줘야한다. 이떄 fragment를 사용하면 dom에 별도의 노드를 추가하지 않고 여러 자식을 그룹화 할 수 있다.

- [Fragment란?](https://velog.io/@dolarge/React-Fragment%EB%9E%80)

## 9. React의 useEffect에 대해 설명해주세요.

- 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook.
- 함수 컴포넌트에서도 Side Effect를 사용할 수 있다.

  1. 클래스형 컴포넌트에서는 생명주기 메소드를 사용할 수 있었는데, 이를 함수형 컴포넌트에서도 사용할 수 있게 되었다.
  2. 즉, 라이프사이클 훅을 대체할 수 있다.

- [useEffect](https://ko.legacy.reactjs.org/docs/hooks-effect.html)

## 10. React의 클래스형 컴포넌트와 함수형 컴포넌트의 생명주기를 비교해서 설명해주세요.

- 클래스형 컴포넌트

  - State와 LifeCycle API의 사용이 가능하다.
  - 임의 메서드를 정의할 수 있다.
  - class 키워드가 필요하며, Component를 상속받아야 한다.
  - 화면에 표시하기 위한 render() 메서드가 반드시 필요하다.
  - constructor 안에서 this.state를 통해 초기 값을 설정 가능하며, constructor 없이도 초기 값 설정이 가능하다. this.setState함수로 state의 값을 변경할 수 있다.
  - 컴포넌트가 DOM 위에 생성되기 전과 후의 데이터가 변경되어, 상태를 업데이트하기 전과 후로 실행되는 메서드들이다.
  - 생명주기 => 생성(mount) -> 업데이트(update) -> 제거(unmount)

- 함수형 컴포넌트

  - State와 LifeCycle API의 사용이 가능하다.(위의 useEffect hook으로)
  - 선언하기 편하다.
  - 메모리 자원을 클래스형 컴포넌트보다 덜 사용한다.
  - 빌드한 결과물의 크기가 클래스 컴포넌트보다 작다.
  - 함수 자체가 렌더 함수이기 때문에 render() 메서드를 사용하지 않아도 되고, Component를 상속받지 않아도 된다.
  - useState로 state를 핸들링한다.

- [클래스, 함수형 컴포넌트의 차이](https://soopiri.tistory.com/23)

## 11. React Router에서 Link와 useNavigate를 사용 판단 기준을 중점으로 설명해주세요

- Link =>
  - 클릭 시 바로 이동하는 로직 구현 시에 사용 용이(프로젝트 내에서 전환하는 경우에 사용)
  - DOM에서 <a>태그로 변환된다.
  - 지정한 경로로 바로 이동한다.
- useNavigate =>

  - 함수 호출을 통해 페이지를 이동한다.
  - 특정 조건을 충족할 경우 페이지 이동을 할 수 있다.

- [Link & useNavigate](https://velog.io/@seokkitdo/React-Link-useNavigate)

## 12. BrowserRouter와 HashRouter에 대해 설명해주세요

- BrowserRouter =>
  - HTML5의 history API를 활용하여 UI를 업데이트
  - 동적인 페이지에 적합하다.
  - 새로 고침하면 경로를 찾지 못해 에러가 발생한다.
  - 이를 해결하기 위해 서버에 추가적인 세팅 필요.
  - 배포가 복잡하다.
- HastRouter =>

  - URL의 hash를 활용한 라우터
  - 주소에 #가 붙는다.
  - 정적인 페이지에 적합하다.
  - 검색엔진으로 읽지 못한다.
  - 새로고침 해도 에러가 나지않는다.
  - 배포가 간편하다.

- [BrowserRouter & HashRouter](https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC)
