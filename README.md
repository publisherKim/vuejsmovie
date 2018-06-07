# helper
+ 헬퍼를 사용하고자 하는 vue 파일에서 아래와 같이 해당 헬퍼를 로딩
```javascript
    import {mapState} from 'vuex';
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        computed() {
            ...mapState['num'],
            mapGetters(['countNum'])
        },
        methods: {
            ...mapMutations['clickBtn'],
            ...mapActions(['asyncClickBtn'])
        }
    }
```