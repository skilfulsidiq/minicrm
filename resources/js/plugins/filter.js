import Vue from 'vue';
import moment from 'moment';

Vue.filter('currency', function (value) {
    let formatter = Intl.NumberFormat("NGN", {
        // style: "currency",
        minimumFractionDigits: 0
    }); //'₦ '+
    return '₦ ' + formatter.format(value);
})
Vue.filter('ready_currency', function (value) {
   
    return '₦ ' + value;
})
Vue.filter('capitalize', function (value) {
            if (!value) return ''
            value = value.toString()
})

Vue.filter('formatDate',function(value){

    return moment(String(value)).format('DD/MM/YYYY hh:mm')
})