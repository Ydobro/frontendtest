// @ is an alias to /src
import SiteWidget from '@/components/SiteWidget/SiteWidget.vue';
import ChessState from '@/components/ChessState/ChessState.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'chess-sidebar',
    components: {
        SiteWidget,
        ChessState,
    },
    computed: {
        ...mapState([
            'selected',
            'history',
        ]),
    },
    methods: {
        ...mapActions([
            'clearSelected',
            'clearHistory',
        ]),
    },
};
