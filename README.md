# 프로젝트 구조화와 모듈화 방법2
+ 앱이 비대해져서 1개의 store로는 관리가 힘들때  modules 속성 사용
```javascript
    import Vue from 'vue';
    import Vuex from 'vuex';
    import todo from 'modules/todo.js'

    export const store = new Vuex.Store({
        state: {},
        getters,
        mutations
    });
```