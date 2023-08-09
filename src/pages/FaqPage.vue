<template>
    <inner-banner v-for="con in faqPage" :key="con.slug" :title="con.title" :slug="con.slug" :bg="con.bg"></inner-banner>
    <!-- Faq Section Starts Here -->
    <section class="faq-section padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-center gy-5">
                <div class="col-lg-6">
                    <div class="faq-wrapper">
                        <faq-item v-for="(faq, index) in faqs" :key="index" :title="faq.title" :ans="faq.ans"></faq-item>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="faq-wrapper">
                        <faq-item v-for="(faq, index) in faqs2nd" :key="index" :title="faq.title" :ans="faq.ans"></faq-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Faq Section Ends Here -->
</template>

<script>
import FaqItem from '@/components/layout/FaqItem.vue';
import InnerBanner from '@/components/layout/InnerBanner.vue';
export default {
    components: {
        FaqItem,
        InnerBanner
    },
    computed: {
        faqs() {
            const startIndex = 0
            const totalHalf = Math.floor((this.$store.getters['faqs/faqs'].length / 2) + .5)
            return this.$store.getters['faqs/faqs'].slice(startIndex, totalHalf)
        },
        faqs2nd() {
            const endIndex = this.$store.getters['faqs/faqs'].length;
            const totalHalf = Math.floor((this.$store.getters['faqs/faqs'].length / 2) + .5)
            return this.$store.getters['faqs/faqs'].slice(totalHalf, endIndex)
        },
        faqPage() {
            return this.$store.getters['faqs/faqPage']
        }
    }
}
</script>

<style scoped>
.faq-wrapper {
    padding-right: 40px;
}

@media (max-width: 991px) {
    .faq-wrapper {
        padding-right: 0;
    }
}

@media (max-width: 1199px) {
    .faq-wrapper {
        padding-right: 10px;
    }
}


.faq-item {
    margin-bottom: 15px;
}

.faq-item:last-child {
    margin-bottom: 0;
}

.faq-item.open .faq-title .icon::after {
    -webkit-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg);
}

.faq-item.active .faq-content {
    display: block;
}

.faq-item .faq-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid rgba(14, 158, 77, 0.25);
    cursor: pointer;
}

.faq-item .faq-title .icon {
    position: relative;
}

.faq-item .faq-title .icon::after,
.faq-item .faq-title .icon::before {
    position: absolute;
    content: '';
    background: rgba(14, 158, 77, 0.9);
}

.faq-item .faq-title .icon::before {
    width: 20px;
    height: 2px;
    left: -50%;
    top: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all ease .3s;
    transition: all ease .3s;
}

@media (max-width: 767px) {
    .faq-item .faq-title .icon::before {
        width: 20px;
    }
}

.faq-item .faq-title .icon::after {
    height: 20px;
    width: 2px;
    left: 0;
    -webkit-transform: translateY(-49%);
    transform: translateY(-49%);
    -webkit-transition: all ease .3s;
    transition: all ease .3s;
}

@media (max-width: 767px) {
    .faq-item .faq-title .icon::after {
        height: 20px;
    }
}

.faq-item .faq-title .title {
    padding-left: 25px;
    margin: 0;
}

@media (max-width: 1199px) {
    .faq-item .faq-title .title {
        font-size: 18px;
    }
}

@media (max-width: 767px) {
    .faq-item .faq-title .title {
        padding-left: 20px;
    }
}

.faq-item .faq-content {
    padding: 15px;
    display: none;
}



.faq-wrapper-two {
    padding: 25px;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 15px 1px rgba(27, 39, 61, 0.07);
    box-shadow: 0 0 15px 1px rgba(27, 39, 61, 0.07);
    border: 1px solid rgba(27, 39, 61, 0.1);
}

@media (min-width: 1400px) {
    .faq-wrapper-two {
        padding: 35px 30px;
    }
}

@media (max-width: 575px) {
    .faq-wrapper-two {
        padding: 20px 15px;
    }
}

.faq-wrapper-two .faq-item-two {
    margin-bottom: 25px;
}

.faq-wrapper-two .faq-item-two:last-child {
    margin-bottom: 0;
}

.faq-wrapper-two .faq-item-two .title {
    margin-bottom: 5px;
}

.faq-wrapper-two .faq-item-two span {
    color: #1f1f1f;
    font-size: 18px;
    font-weight: 500;
}
</style>