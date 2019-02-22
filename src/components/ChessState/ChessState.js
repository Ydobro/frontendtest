export default {
    name: 'chess-state',
    props: {
        items: {
            type: Array,
            requered: true,
            default: [],
        },
    },
    methods: {
        getPostitionName(position) {
            const index = position - 1;
            const row = Math.floor(index / 8);
            const col = index % 8;
            const alphabet = 'abcdefgh';
            
            return `${alphabet[col]}-${row + 1}`;
        },
    },
};
