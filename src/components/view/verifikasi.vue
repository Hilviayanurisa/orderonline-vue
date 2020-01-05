<template>
    <div class="container remove-margin remove-padding">
       <div class="fixed-top">
            <div class="row upside justify-content-center text-left remove-padding remove-margin">
                <div class="col-md-3 col-sm-3 col-3">
                    <img  @click="backlgn" class="back-blue" src="assets/icon/back-blue.svg">
                </div>
                <div class="col-md-6 col-sm-6 col-6 text-center text-bold">
                    Daftar Pelanggan
                </div>
                <div class="col-md-3 col-sm-3 col-3">
                </div>
            </div>
        </div>
        <main class="flex-100 padd">
            <div class="flex-1 p-top80">
                <div class=" m-bot40">
                     <img src="assets/icon/undraw_personalization_triu.svg" class="img-fluid-logo">
                </div>
                <div>
                    <div class="row remove-margin remove-padding">
                        <div class="col-12 col-md-12 text-center">
                            <h1> Verifikasi</h1>
                        </div>
                    </div>

                    <div>
                        <div class="tulis-log text-center">
                            Kami telah mengirimkan kode verifikasi, silahkan periksa WhatsApp anda & masukkan kode pada kolom dibawah ini
                        </div>
                    </div>

                    <div class="col-12 col-md-12 m-bot28">
                        <center>
                            <div class="divOuter">
                                <div class="divInner">
                                    <input id="partitioned" type="text" maxlength="6">
                                </div>
                            </div>
                        </center>
                    </div>

                    <div class="col-12">
                        <div class="tulis-log text-center">
                            Kode dikirim ulang dalam
                            <a class="timer" id="timer">
                                <b> 00:54 </b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-dewe">
                    <button class="btn-lanjut btn-block btn-info m-bot24">
                                    Verifikasi
                                </button>
                    <div class="text-fade text-small text-center m-bot16">
                        <center>Powered by Smartlink</center>
                    </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'verifikasi',
     methods: {
        backlgn(){
            this.$router.push('/login')
        },
    }
}
</script>
