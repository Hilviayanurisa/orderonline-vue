<template>
    <div class="container remove-margin remove-padding">
            <div class="fixed-top">
                <div class="row upside justify-content-center text-left remove-margin remove-padding">
                    <div class="col-md-3 col-sm-3 col-3">
                        <img @click="backss" class="back-blue" src="assets/icon/back-blue.svg">
                    </div>
                    <div class="col-md-6 col-sm-6 col-6 text-center text-bold">
                        Daftar Pelanggan
                    </div>
                    <div class="col-md-3 col-sm-3 col-3">
                    </div>
                </div>
            </div>
        <main class="padd">
            
            <div class="flex-100">
                <div class="flex-1 p-top80">
                    <div class="image m-bot40">
                    <img src="assets/icon/undraw-road-sign-mfpo.svg" class="img-fluid-logo"> 
                    </div>
                    <div class="text-center">
                        <h1>Nomor WhatsApp</h1>
                    </div>

                     <div class="tulis-log text-center m-bot36">
                        Silakan mengisi <b>nomor Whatsapp</b> Anda, kami akan mengirim kode OTP untuk <b>verifikasi.</b>
                    </div>
                    
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="nomer">+62</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Masukkan nomer anda..">
                    </div>
                    
                    <!-- <div class="input-group m-bot28">
                        <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Nomer Whatsapp anda *">
                    </div> -->
                    <div class="text-semi text-small text-center">
                        Belum punya akun?
                        <a class="text-link" href="# ">Daftar disini</a>
                    </div>
                </div>
            
                <div class="button m-bot20">
                    <button @click="goverif" class="btn-utama">
                        Lanjutkan
                    </button>
                </div>
                <div class="text-fade text-small text-center m-bot16">
                    Powered by Smartlink
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name:'login',
    methods: {
        backss(){
            this.$router.push('/startscreen')
        },
        goverif(){
            this.$router.push('/verifikasi')
        }
    }
    

}
</script>

