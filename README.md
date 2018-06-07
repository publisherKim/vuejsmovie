# vuex
+ 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트가 데이터 전달이 복잡해진다.
+ 이벤트 버스로 해결시 컴포넌트간 데이터 전달이 명시적이지 않음(추적이 어려움)
+ MVC 패턴에서 발생하는 구조적 오류를 해결
+ 컴포넌트 간 데이터 전달이 명시적임
+ 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제 해결 가능
## vuex 컨셉
+ state -> view -> actions 단방향 데이터 흐름
## vuex structure
+ 컴포넌트 -> 비동기로직 -> 동기로직 -> 상태 순
+ component -> actions -> mutations -> state
## vuex 설치하기
+ npm install vuex --save
## vuex settings
+ https://vuex.vuejs.org/kr/installation.html