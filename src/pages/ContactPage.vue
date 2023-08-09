<template>
    <inner-banner v-for="con in contactPage" :key="con.slug" :title="con.title" :slug="con.slug" :bg="con.bg"></inner-banner>

    <!-- Contact Section Starts Here-->
    <section class="contact-section padding-top padding-bottom overflow-hidden section-bg">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info-wrapper">
                    <h3 class="title">Let's get in touch</h3>
                    <p>We are open for any suggestion or just to have a chat</p>
                    <div class="info-item">
                        <div class="icon">
                            <i class="flaticon-location"></i>
                        </div>
                        <div class="content">
                            Address : 420 West Bengla Road
                            Suite Dhaka 1209
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon">
                            <i class="flaticon-call"></i>
                        </div>
                        <div class="content">
                            <a href="tel:02345">+98 934 328092</a>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon">
                            <i class="flaticon-envelope"></i>
                        </div>
                        <div class="content">
                            <a href="mailto:msdyuteorte@gmail.com">myjuddttoasd@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="contact-form-wrapper">
                    <h4 class="title">Have any Questions?</h4>
                    <form class="contact-form row gy-3">
                        <div class=" col-xl-6">
                            <div class="form--group">
                                <label for="name">Name <span>*</span></label>
                                <input id="name" type="text" class="form--control" required placeholder="Name">
                            </div>
                        </div>
                        <div class=" col-xl-6">
                            <div class="form--group">
                                <label for="email">Email <span>*</span></label>
                                <input id="email" type="email" class="form--control" required placeholder="Email">
                            </div>
                        </div>
                        <div class=" col-xl-6">
                            <div class="form--group">
                                <label for="num">Phone Number <span>*</span></label>
                                <input id="num" type="tel" class="form--control" required placeholder="Phone Number">
                            </div>
                        </div>
                        <div class=" col-xl-6">
                            <div class="form--group">
                                <label for="addr">Address <span>*</span></label>
                                <input id="addr" type="text" class="form--control" required placeholder="Address">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form--group">
                                <label for="msg">Your Message <span>*</span></label>
                                <textarea id="msg" class="form--control" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form--group">
                                <button class="contact-button">Send Us Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section Ends Here-->


    <!-- Map Section Starts Here-->
    <div class="map-wrapper">
        <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233554.83484850885!2d90.45326398634062!3d23.84368125869724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1629630584040!5m2!1sen!2sbd"
            style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <!-- Map Section Ends Here-->
</template>

<script>
import InnerBanner from '@/components/layout/InnerBanner.vue';
export default {
    components: {
        InnerBanner
    },
    computed: {
        contactPage() {
            return this.$store.getters['contact/contactPage']
        }
    }
}
</script>


<style scoped>
.contact-wrapper {
    border-radius: 10px;
    background: #fff;
    -webkit-box-shadow: 0 3px 15px rgba(27, 39, 61, 0.2);
    box-shadow: 0 3px 15px rgba(27, 39, 61, 0.2);
    overflow: hidden;
}

.contact-wrapper .title {
    margin-top: 0;
    margin-bottom: 25px;
}

.contact-form-wrapper {
    width: 60%;
    padding: 40px;
    padding-left: 60px;
}

@media (max-width: 1199px) {
    .contact-form-wrapper {
        padding-left: 40px;
    }
}

@media (max-width: 991px) {
    .contact-form-wrapper {
        width: 100%;
    }
}

@media (max-width: 767px) {
    .contact-form-wrapper {
        padding: 30px 25px;
    }
}

@media (max-width: 575px) {
    .contact-form-wrapper {
        padding: 25px 15px;
    }
}

.contact-form .form--group label {
    line-height: 1;
    font-weight: 600;
    color: #1f1f1f;
}

.contact-form .form--group label span {
    color: #f53b57;
}

.contact-form .form--group .form--control {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-bottom: 1px solid rgba(27, 39, 61, 0.12);
    border-radius: 0;
    padding-left: 0;
}

.contact-form .form--group .form--control:focus {
    border-color: rgba(14, 158, 77, 0.7);
}

.contact-form .form--group ::-webkit-input-placeholder {
    color: #777;
}

.contact-form .contact-button {
    height: 45px;
    color: rgba(255, 255, 255, 0.95);
    width: auto;
}

.contact-info-wrapper {
    width: 40%;
    padding: 40px;
    position: relative;
}

@media (max-width: 991px) {
    .contact-info-wrapper {
        width: 100%;
    }
}

@media (max-width: 767px) {
    .contact-info-wrapper {
        padding: 30px 25px;
    }
}

@media (max-width: 575px) {
    .contact-info-wrapper {
        padding: 25px 15px;
    }
}

.contact-info-wrapper::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(27, 39, 61, 0.4);
}

.contact-info-wrapper * {
    color: rgba(255, 255, 255, 0.9);
}

.contact-info-wrapper .title {
    position: relative;
    color: #fff;
    margin-bottom: 15px;
}

.contact-info-wrapper>p {
    position: relative;
    max-width: 250px;
    margin-bottom: 30px;
}

.contact-info-wrapper .info-item {
    position: relative;
    z-index: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 25px;
}

.contact-info-wrapper .info-item .icon {
    width: 55px;
    height: 55px;
    font-size: 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
}

.contact-info-wrapper .info-item .content {
    max-width: 250px;
    width: calc(100% - 55px);
    padding-left: 15px;
}

.contact-info-wrapper .info-item .content a {
    word-break: break-all;
}

.map-wrapper {
    margin-bottom: -8px;
}

.map-wrapper .map {
    width: 100%;
    height: 450px;
}
</style>