<template>
    <div>
        <div class="error-404 coverdiv">
    <div class="error-code m-b-10 m-t-20">404 <i class="fa fa-warning"></i></div>
    <h2 class="font-bold">Oops 404! That page can’t be found.</h2>

    <div class="error-desc">
        Sorry, but the page you are looking for was either not found or does not exist. <br/>
        Try refreshing the page or click the button below to go back to the Homepage.
        <div><br/>
            <!-- <a class=" login-detail-panel-button btn" href="http://vultus.de/"> -->
            <v-btn large color="primary" outlined @click="goBack()">Go Back</v-btn>
            <!-- <a  class="btn btn-primary"><span class="glyphicon glyphicon-home"></span> Go back</a> -->
        </div>
    </div>
</div>
    </div>
</template>
<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.coverdiv{
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;

}
    .error-404 {
  margin: 0 auto;
  text-align: center;
}
.error-404 .error-code {
  bottom: 60%;
  color: #4686CC;
  font-size: 96px;
  line-height: 100px;
  font-weight: bold;
}
.error-404 .error-desc {
  font-size: 12px;
  color: #647788;
}
.error-404 .m-b-10 {
  margin-bottom: 10px!important;
}
.error-404 .m-b-20 {
  margin-bottom: 20px!important;
}
.error-404 .m-t-20 {
  margin-top: 20px!important;
}
</style>