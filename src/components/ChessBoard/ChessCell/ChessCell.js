import { mapState, mapActions } from 'vuex';

export default {
    name: 'chess-cell',
    props: {
        position: {
            type: Number,
            requred: false,
            default: 1,
        },
    },
    data: () => ({
        selected: false,
    }),
    computed: {
        ...mapState({
            selectedList: 'selected',
        }),
        getClasses() {
            const aClasses = [];
            const position = this.position - 1;
            const row = Math.floor(position / 8);
            const col = position % 8;
            const dark = row % 2 === col % 2;

            // Set cell color 
            if (dark) {
                aClasses.push('chess-cell_dark');
            } else {
                aClasses.push('chess-cell_light');
            }

            // Set cell status
            if (this.selected) {
                aClasses.push('chess-cell_selected');
            }
            
            return aClasses;
        },
    },
    watch: {
        selectedList(aList) {
            if (this.selected && !aList.includes(this.position)) {
                this.selected = false;
            }
        },
    },
    methods: {
        ...mapActions({
            select: 'select', // map `this.select()` to `this.$store.dispatch('select')`
        }),
        onCellClick() {
            this.selected = !this.selected;

            const payload = {
                position: this.position,
                selected: this.selected,
            };

            this.select(payload);
        },
    },
};
