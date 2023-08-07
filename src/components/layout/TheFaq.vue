<template>
  <div class="faq-wrapper">
    <div class="section-header">
      <h2 class="title">Frequently Asked <span>Questions</span></h2>
      <p>
        Nobis minus earum perferendis nemo cupiditate optio, rem neque incidunt
        quia laborum ut praesentium corporis quam exercitationem, atque illo aut
        excepturi cum.
      </p>
    </div>
    <div class="faq-item active open">
      <div class="faq-title">
        <span class="icon"></span>
        <h5 class="title">Can we choose corporation buses from anywhere?</h5>
      </div>
      <div class="faq-content">
        <p>
          Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima
          porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis
          iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis
          libero?
        </p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-title">
        <span class="icon"></span>
        <h5 class="title">Can we choose corporation buses from anywhere?</h5>
      </div>
      <div class="faq-content">
        <p>
          Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima
          porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis
          iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis
          libero?
        </p>
      </div>
    </div>
    <div class="faq-item">
      <div class="faq-title">
        <span class="icon"></span>
        <h5 class="title">Can we choose corporation buses from anywhere?</h5>
      </div>
      <div class="faq-content">
        <p>
          Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima
          porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis
          iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis
          libero?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  content: "";
  background: rgba(14, 158, 77, 0.9);
}

.faq-item .faq-title .icon::before {
  width: 20px;
  height: 2px;
  left: -50%;
  top: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
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
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
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
</style>