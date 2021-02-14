<template>
    <div>
        <div class="row row-xs">
          <div class="col-sm-6 col-md-6">
            <router-link to="/companies">
            <div class="card card-status">
              <div class="media">
                <i class="icon ion-ios-world-outline tx-purple"></i>
                <div class="media-body">
                  <h1>20</h1>
                  <p>Total Companies</p>
                </div><!-- media-body -->
              </div><!-- media -->
            </div><!-- card -->
            </router-link >
            </div>
          <!-- col-3 -->
          <div class="col-sm-6 col-md-6 mg-t-10 mg-sm-t-0">
              <router-link to="/employees">
                <div class="card card-status">
                  <div class="media">
                    <i class="icon ion-ios-people-outline tx-teal"></i>
                    <div class="media-body">
                      <h1>10</h1>
                      <p>Total Employee</p>
                    </div><!-- media-body -->
                  </div><!-- media -->
                </div><!-- card -->
               </router-link >
          </div><!-- col-3 -->
         <!-- col-3 -->
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>