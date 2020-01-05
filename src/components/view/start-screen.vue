<template>
    <div class="container remove-margin remove-padding">
        <main class="padd">
            <div class="row justify-content-center align-items-center remove-padding remove-margin">
                <div class="row full remove-margin remove-padding justify-content-center align-items-center">
                    <div class="col-12 remove-padding">
                        <center>
                            <img src="assets/icon/blue-laundry-logo.svg" class="img-fluid">
                        </center>
                    </div>
                    <div class="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-12 remove-padding">
                        <div class="row text-center  m-bot36">
                            <div class="col-12 remove-padding">
                                <h1> Halo Pelanggan! </h1>
                            </div>
                            <div class="col-12 text-fade1 remove-padding">
                                Selamat datang di aplikasi Mobile Dreamwash
                            </div>
                        </div>

                        <div class="col-12 col-md-12 remove-padding">
                            <button class="btn-utama m-bot12">
                                            Daftar
                                        </button>
                            <button class="btn-log" @click="gologin">
                                            Login
                                        </button>
                        </div>
                    </div>

                    <div class="col-12 bawah m-bot20">
                        <div class="text-fade text-small text-center">
                            Powered by Smartlink
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'start-screen',
    methods:{
        gologin(){
            this.$router.push('/login')
        }
    }
    
}
</script>

<style scoped>

</style>