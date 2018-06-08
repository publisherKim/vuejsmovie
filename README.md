# store module
+ 아래와 같은 store 구조를 어떻게 모듈화 할 수 있을까 ?
```javascript
    import Vue from 'vue'
    import Vuex from 'vuex'
    import * as getters from 'store/getters.js'
    import * as actions from 'store/actions.js'
    import * as mutations from 'store/mutations.js'

    export const store = new Vuex.Store({
        state: {},
        getters
        actions,
        mutations
    });
```