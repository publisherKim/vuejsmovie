# Vuex 
+ state: 여러컴포넌트에 공유되는 데이터 data
+ getters: 연산된 state  값을 접근하는 속성 computed
+ actions: 비동기 처리 로직을 선언하는 메서드 async methods
+ mutations: state 값을 변경하는 이벤트 로직 메서드 methods

## state
```javascript
    // Vue
    data : {
        message: 'Hello Vue.js!'
    }
    // Vuex
    state: {
        message: 'Hello Vue.js!'
    }
```
```html
    <!-- Vue -->
    <p>{{ message }}</p>
    <!-- Vuex -->
    <p>{{ this.$store.state.message}}</p>
```

## getters
```javascript
    // store.js
    state: {
        num: 10
    },
    getters: {
        getNumber(state) {
            return state.num;
        },
        doubleNumber(state) {
            return state.num * 2;
        }
    }
```
```html
    <p>{{ this.$store.getters.getNumber }}</p>
    <p>{{ this.$store.getters.doubleNumber }}</p>
```
### store todoItems 생성 storage를 통해서 데이터 바인딩