# 멋사 과제 #2-4

---

**❗1. 프레임워크와 라이브러리의 차이를 설명하고 Bootstrap과 reactbootstrap이 무엇인지 설명해주세요.**
1. 프레임워크와 라이브러리의 차이:
   - 프레임워크: 소프트웨어 개발에 필요한 기본 구조와 틀을 제공하는 것으로, 개발자가 프로젝트에 대한 제어를 많이 넘겨받는 형태입니다. 일반적으로 프레임워크는 특정한 목적을 가지고 있으며, 특정한 방식으로 코드를 구조화하고 작성해야 합니다. 예를 들어, 웹 개발에서 Django, Ruby on Rails, Laravel 등이 프레임워크입니다.
   - 라이브러리: 특정 기능을 수행하기 위해 사용할 수 있는 도구나 코드의 집합입니다. 개발자가 필요할 때에만 라이브러리를 호출하여 사용할 수 있습니다. 라이브러리는 개발자에게 더 큰 자유도를 제공하며, 개발자가 코드의 흐름과 구조를 제어할 수 있습니다. 예를 들어, JavaScript의 jQuery, Python의 NumPy와 Pandas 등이 라이브러리입니다.

   Bootstrap:
   - Bootstrap은 반응형 웹 개발에 사용되는 가장 인기 있는 HTML, CSS, JavaScript 프레임워크입니다. 웹 사이트 및 웹 애플리케이션을 빠르게 구축하기 위해 사용됩니다.
   - Bootstrap은 그리드 시스템, 타이포그래피, 폼, 버튼, 네비게이션 등 다양한 사전 스타일링된 컴포넌트를 제공합니다. 또한, 반응형 디자인을 쉽게 구현할 수 있도록 도와주는 클래스도 포함되어 있습니다.
   - Bootstrap은 CSS와 JavaScript 파일로 구성되어 있습니다. HTML 문서에 Bootstrap의 파일을 포함하고, 해당 클래스와 구성 요소를 사용하여 웹 페이지를 디자인하고 스타일링할 수 있습니다.

   React-Bootstrap:
   - React-Bootstrap은 Bootstrap을 React 컴포넌트로 변환한 라이브러리입니다. 즉, Bootstrap의 스타일과 기능을 React 애플리케이션에 쉽게 통합할 수 있도록 도와줍니다.
   - React-Bootstrap은 React를 사용하는 개발자들에게 Bootstrap의 컴포넌트와 그리드 시스템 등을 쉽게 사용할 수 있는 API를 제공합니다. 이를 통해 React 애플리케이션을 빠르게 구축하고 스타일링할 수 있습니다.
   - React-Bootstrap은 Bootstrap의 CSS와 JavaScript 파일에 의존하며, React 컴포넌트를 통해 해당 기능을 사용할 수 있습니다.

---

**❗ 2. css에서 margin과 padding에 대해 설명해주세요.**
2. margin과 padding:
   - margin은 요소의 외부 여백을 나타냅니다. 요소 주변에 빈 공간을 만들어주며, 다른 요소와의 간격을 조절하는데 사용됩니다. margin은 요소의 외부에 적용되며, 다른 요소에 영향을 주지 않습니다.

   - padding은 요소의 내부 여백을 나타냅니다. 요소의 콘텐츠와 테두리 사이에 여백을 만들어주며, 요소의 내부 공간을 조절하는데 사용됩니다. padding은 요소의 내부에 적용되며, 요소 내부의 콘텐츠나 다른 요소에 영향을 줄 수 있습니다.

   margin과 padding은 모두 CSS의 속성으로 값을 지정하여 사용할 수 있으며, 일반적으로 픽셀(px) 단위나 백분율(%) 단위로 지정됩니다.

---

**❗3. css에서 Flex와 Grid에 대해 설명해주세요**
3. Flex와 Grid:
   - Flexbox(Flexible Box Layout)는 요소를 수평 또는 수직 축을 기준으로 유연하게 배치할 수 있는 CSS 레이아웃 모델입니다. Flexbox는 1차원 레이아웃에 적합하며, 요소 간의 공간 배분, 정렬, 순서 변경 등을 쉽게 제어할 수 있습니다.

   - Grid는 그리드 시스템을 사용하여 요소를 2차원 그리드로 배치하는 CSS 레이아웃 모델입니다. Grid는 행(row)과 열(column)을 사용하여 요소의 배치를 정의하며, 복잡한 레이아웃을 만들기 위한 강력한 기능을 제공합니다.

   - Flexbox는 주로 요소의 순서를 변경하거나 요소를 정렬하고 공간을 분배하는 데 사용되며, 작은 규모의 레이아웃에 적합합니다. Grid는 더 복잡한 레이아웃을 구성하고 여러 요소를 배치하는 데 사용되며,
    대형 프로젝트나 전체 페이지의 레이아웃을 구성하는 데 적합합니다. Flexbox와 Grid는 함께 사용될 수도 있고, 각각의 장점을 적절히 활용하여 웹 페이지의 레이아웃을 조정하는 데 활용될 수 있습니다.

---

❗ 4. npm이 무엇인지 설명하고 package.json과 package-lock.json에
대해서 설명해주세요.

npm:

- npm(Node Package Manager)은 Node.js 기반의 패키지 관리자입니다. 프로젝트에서 필요한 외부 모듈(라이브러리, 프레임워크 등)을 손쉽게 설치하고 관리할 수 있습니다.
- npm은 JavaScript 패키지의 저장소 역할을 하며, 패키지를 검색하고 설치할 수 있는 명령어 인터페이스를 제공합니다.
- 프로젝트에서 사용하는 패키지를 package.json 파일에 기록하여 관리합니다.

package.json:

- package.json은 npm 프로젝트의 설정 파일입니다. 프로젝트의 메타데이터, 의존성 패키지 목록, 스크립트 등을 정의할 수 있습니다.
- package.json 파일은 프로젝트 루트 디렉토리에 위치하며, npm을 사용하여 패키지를 설치하거나 프로젝트를 빌드하고 실행하는 데 사용됩니다.

package-lock.json:

- package-lock.json은 npm 패키지 설치 시 생성되는 자동 생성 파일입니다.
- package-lock.json 파일은 패키지 설치 시 사용된 정확한 의존성 트리를 기록합니다. 이를 통해 다른 개발자가 동일한 의존성 트리를 생성하고 프로젝트를 일관성 있게 구축할 수 있습니다.
- package-lock.json 파일은 일반적으로 버전 관리 시스템에 포함되어 공유되며, npm이 패키지를 설치하거나 업데이트할 때 사용됩니다.

---

❗ 5. SPA와 MPA에 대해서 설명해주세요.

- SPA(Single-Page Application): SPA는 단일 HTML 페이지로 구성된 웹 애플리케이션입니다. 초기에 모든 필요한 리소스(HTML, CSS, JavaScript)를 로드한 후, 필요한 데이터만 동적으로 서버에서 가져와서 페이지를 업데이트합니다. 즉, 새로운 페이지를 로딩하지 않고 동적으로 콘텐츠를 변경하여 사용자 경험을 향상시킵니다. 대표적인 SPA 프레임워크로는 React, Angular, Vue.js가 있습니다.
- MPA(Multiple-Page Application): MPA는 여러 개의 독립적인 HTML 페이지로 구성된 웹 애플리케이션입니다. 각 페이지는 별도의 요청을 통해 서버로부터 로드되고, 페이지 간의 전환은 전통적인 방식으로 이루어집니다. 각 페이지는 별도의 리소스를 가지며, 전체 페이지를 새로 로드해야 합니다.

SPA는 사용자 경험과 성능 면에서 장점을 가지며, 웹 애플리케이션의 대부분에 적합합니다. MPA는 전통적인 웹 사이트나 특정 요구사항을 가진 애플리케이션에 적합할 수 있습니다.

---

❗6. CSR과 SSR에 대해서 설명해주세요.

- CSR(Client-Side Rendering): CSR은 클라이언트(브라우저)에서 JavaScript를 사용하여 동적으로 콘텐츠를 렌더링하는 방식입니다. 초기 페이지 요청 시 서버로부터 정적 리소스(HTML, CSS, JavaScript)만 받아오고, 데이터는 API를 통해 비동기적으로 가져와서 화면에 동적으로 업데이트합니다. 대부분의 SPA 프레임워크(React, Angular, Vue.js)가 CSR을 기반으로 동작합니다.
- SSR(Server-Side Rendering): SSR은 서버에서 요청을 받아 필요한 데이터를 서버에서 렌더링하여 완성된 HTML을 클라이언트로 전달하는 방식입니다. 서버에서 초기 렌더링을 수행하므로, 클라이언트에게는 완성된 HTML을 바로 전송하여 페이지의 초기 로딩 속도를 개선할 수 있습니다. 일반적으로 서버 프레임워크(Express.js, Next.js)를 사용하여 SSR을 구현합니다.

CSR은 초기 로딩 속도가 빠르고 인터랙티브한 사용자 경험을 제공합니다. SSR은 검색 엔진 최적화(SEO)와 초기 로딩 속도 개선에 유리하며, 서버에서 렌더링되므로 초기 페이지 로딩 시 사용자에게 빈 화면이 나타나지 않습니다.

---

❗ 7. CRA의 프로젝트에서 public 폴더와 src 폴더에 대해 설명해주세요.

- public 폴더: public 폴더에는 정적인 파일들이 위치합니다. index.html 파일이 주로 있는데, 이 파일은 React 애플리케이션의 진입점입니다. index.html에는 React 앱이 마운트되는 요소를 가지고 있고, 필요한 외부 리소스(스타일시트, JavaScript 파일 등)를 로드할 수 있습니다.
- src 폴더: src 폴더에는 실제로 React 애플리케이션의 소스 코드가 위치합니다. 주로 JavaScript나 TypeScript 파일, 컴포넌트, 스타일 파일 등이 들어 있습니다. React 컴포넌트를 정의하고 구성하여 앱의 로직과 뷰를 작성하는 곳입니다. CRA의 프로젝트 기본 구조는 src 폴더 안에 컴포넌트를 작성하고, index.js 파일에서 최상위 컴포넌트를 렌더링하는 방식으로 이루어집니다.

CRA는 React 애플리케이션을 초기화하고 기본적인 프로젝트 구조를 제공하는 도구입니다. public 폴더와 src 폴더는 이 구조에 따라 필요한 파일과 폴더를 포함하여 개발자가 React 앱을 작성하고 관리하는 데 사용됩니다.

---

❗ 8. React Fragment에 대해 설명해주세요.

- React Fragment는 JSX에서 여러 개의 자식 요소를 그룹화하기 위해 사용되는 특수한 컴포넌트입니다.
- JSX는 렌더링할 때 하나의 부모 요소를 가져야 하는데, 때로는 불필요한 추가 요소를 만들기 위해 불필요한 div 요소를 사용하는 것을 피하고 싶을 때 Fragment를 사용할 수 있습니다.
- Fragment는 렌더링되는 결과에는 영향을 주지 않고, 단지 자식 요소들을 그룹화하기 위해 사용됩니다.
- Fragment를 사용하는 방법은 **`<React.Fragment>`** 태그를 사용하거나, 단축 문법인 **`<>`**와 **`</>`**를 사용하여 감싸주는 것입니다.

---

❗ 9. React의 useEffect에 대해 설명해주세요.

- useEffect는 React의 훅(Hook) 중 하나로, 컴포넌트의 생명주기에 특정 동작을 연결하는 데 사용됩니다.
- useEffect는 컴포넌트가 렌더링될 때마다 실행되며, 종속성 배열에 지정된 값들이 변경될 때마다도 실행될 수 있습니다.
- useEffect의 주요 용도는 데이터 가져오기, 구독 설정, 이벤트 처리 등의 비동기 작업을 처리하거나, 컴포넌트의 상태나 DOM에 대한 변경을 수행하는 것입니다.
- useEffect는 부수 효과(Side Effect)를 처리하기 위해 사용되며, 필요한 정리(clean-up) 작업을 반환할 수도 있습니다.

---

❗ 10.React의 클래스형 컴포넌트와 함수형 컴포넌트의 생명주기를 비교
해서 설명해주세요.

- 클래스형 컴포넌트의 생명주기: 클래스형 컴포넌트는 다양한 생명주기 메서드를 가지고 있습니다. **`componentDidMount`**, **`componentDidUpdate`**, **`componentWillUnmount`** 등이 있으며, 컴포넌트의 마운트, 업데이트, 언마운트 등 다양한 단계에서 실행됩니다. 각 생명주기 메서드는 특정한 시점에 자동으로 호출되며, 상태 관리와 데이터 처리 등의 작업을 수행할 수 있습니다.
- 함수형 컴포넌트의 생명주기: 함수형 컴포넌트는 React 16.8 버전 이후부터 훅(Hook)이 도입되면서 생명주기와 관련된 작업을 **`useEffect`** 훅을 통해 처리할 수 있게 되었습니다. **`useEffect`** 훅은 함수형 컴포넌트의 렌더링 후에 실행되는 효과를 지정할 수 있습니다. **`useEffect`** 훅은 클래스형 컴포넌트의 생명주기 메서드와 비슷한 역할을 수행하며, 마운트, 업데이트, 언마운트 등 다양한 시점에서 작업을 수행할 수 있습니다.

함수형 컴포넌트의 장점은 코드의 간결성과 가독성을 높일 수 있고, 훅을 통해 상태 관리와 생명주기 작업을 통합할 수 있습니다.

---

❗11.React Router에서 Link와 useNavigate를 사용 판단 기준을 중
점으로 설명해주세요.

- Link: React Router의 Link 컴포넌트는 클릭하면 다른 경로로 전환하는 데 사용됩니다. **`<Link to="/path">`**와 같이 사용하며, 페이지 전환 시 브라우저의 새로고침 없이 애플리케이션을 업데이트합니다. Link는 내부적으로 HTML의 **`<a>`** 태그로 래핑되며, 클릭 이벤트를 처리하여 페이지 전환을 관리합니다.
- useNavigate: React Router v6에서 새롭게 도입된 훅으로, 함수형 컴포넌트에서 프로그래밍 방식으로 페이지 전환을 처리할 때 사용됩니다. useHistory 훅과 비슷한 역할을 수행하지만, useNavigate는 좀 더 직관적인 API를 제공합니다. useNavigate를 사용하면 **`const navigate = useNavigate();`**와 같이 navigate 함수를 얻을 수 있으며, 이를 호출하여 경로 전환을 수행할 수 있습니다.

Link는 주로 JSX 내에서 클릭 가능한 링크를 생성하고, useNavigate는 JavaScript 코드 내에서 페이지 전환을 수행할 때 사용합니다.

---

❗12. BrowserRouter와 HashRouter에 대해 설명해주세요

- BrowserRouter: BrowserRouter는 React Router의 라우터 컴포넌트 중 하나입니다. HTML5의 History API를 사용하여 라우팅을 처리합니다. BrowserRouter는 URL의 경로를 사용하여 라우팅을 처리하며, 서버 측에서 URL을 설정해야 합니다. BrowserRouter는 일반적으로 서버 측 구성을 필요로하며, 정적 파일 서버가 필요합니다. 즉, 서버가 클라이언트의 모든 경로를 인식하고 동적으로 처리해야 합니다.
- HashRouter: HashRouter는 URL의 해시 부분을 사용하여 라우팅을 처리하는 라우터 컴포넌트입니다. URL의 해시 부분은 서버로 전송되지 않으므로 서버 측 구성이 필요하지 않습니다. 주로 정적 파일 서버가 없는 경우에 사용됩니다. 예를 들어, **`http://example.com/#/path`**와 같은 형식으로 경로가 표현됩니다.

BrowserRouter는 일반적인 웹 호스팅 환경에서 사용되고, HashRouter는 정적 호스팅이나 클라이언트 사이드 라우팅이 필요한 환경에서 사용됩니다.