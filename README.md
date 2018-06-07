# actions
+ 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
+ 데이터 요청, Promise, ES6 async와 같은 비동기 처리는 모두 actions에 선언
```javascript
    // store.js
    state: {
        num: 10
    },
    mutations: {
        doubleNumber(state) {
            state.num * 2;
        }
    },
    actions: {
        delayDoubleNumber(context) {
            // context로 store의 메서드와 속성 접근
            context.commit('doubleNumber');
        }
    }
    //App.vue
    this.$store.dispatch('delayDoubleNumber');
```
## 비동기 코드예제 1
```javascript
    mutations: {
        addCounter(state) {
            state.count++
        }
    },
    actions: {
        delayAddCounter(context) {
            setTimeout(() => context.commit('addCounter'), 2000);
        }
    }

    // App.vue
    methods: {
        incermentCounter() {
            this.$store.dispatch('delayAddCounter');
        }
    }
```
## 비동기 코드예제 2
```javascript
    mutations: {
        setData(state, fetchedData) {
            state.product = fetchedData;
        }
    },
    actions: {
        fetchProductData(context) {
            return axios.get('url')
                .then(res => context.commit('setData', res));
        }
    }

    // App.vue
    methods: {
        getProduct() {
            this.$store.dispatch('fetchProductData');
        }
    }
```
### 왜 비동기 처리 로직은 actions에 선언 해야 할까 ?
+ 언제 어는 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
+ state 값의 변화를 추적하기 어렵기 떄문에 mutations 속성에는 동기 처리 로직만 넣어야 한다.