# mutations
+ state의 값을 변경할 수 있는 유일한 방법이자 메서드
+ 뮤테이션은 commit()으로 동작
```javascript
    // store.js
    state: {storeNum: 10},
    mutations: {
        printNumbers(state) {
            return statate.num
        },
        sumNumbers(state, anotherNum) {
            return state.num + anotherNum;
        },
        modifyState(state, payload) {
            console.log(payload.str)
            return state.storeNum += payload.num;
        }
    }
    // App.vue
    this.$store.commit('printNumbers');
    this.$store.commit('sumNumbers', 20);
    this.$store.commit('modifyState', {
        str: 'passed from payload',
        num: 20
    })
```
## 첫번째 인자는 state이다.