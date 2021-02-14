const customStyles = {
    ul: {
        // border: '2px solid red'
    },
    li: {
        display: 'inline-block',
        // width:'100px'

        // border: '2px dotted green'
    },
    a: {
        color: 'blue',
        // width:'100%;'
    },

};
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export const paginationMixin = {
    data() {
        return {
           pageOfItems: [],
            customStyles,
            customLabels
        }

    },
     methods: {
         onChangePage(pageOfItems) {
             this.pageOfItems = pageOfItems;
         }
     },
}