<template>
  <div id="container">
    <div class="product">
      <div class="images">
        <img :src="require(`@/assets/images/${nowImage}`)" class="big-img">
        <div class="thumbnails">
          <img v-for="img in ImageInfo" :key="img.id" :src="require(`@/assets/images/${img.thumbnail}`)">
        </div>
      </div>
      <div class="description">
        <div class="texts">
          <div class="company">SNEAKER COMPANY</div>
          <div class="prod-name">Fall Limited Edition Sneakers</div>
          <div class="prod-desc">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</div>
          <div class="price">
            <div class="num">$125.00</div>
            <div class="discount">50%</div>
          </div>
          <div class="original">$250.00</div>
          <div class="cart-btn">
            <div class="count">
              <inline-svg :src="require('@/assets/images/icon-minus.svg')" @click="minus"/>
              <div class="num">{{ prodCount }}</div>
              <inline-svg :src="require('@/assets/images/icon-plus.svg')" @click="plus"/>
            </div>
            <button class="add">
              <inline-svg :src="require('@/assets/images/icon-cart.svg')"/>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import productImages from '@/assets/data/prod-imgs.json';
import InlineSvg from 'vue-inline-svg';

const ImageInfo = productImages.PRODUCT_IMAGES;

const nowImage : Ref<string> = ref("image-product-1.jpg");

const prodCount : Ref<number> = ref(0);

const plus = () => {
  prodCount.value += 1;
}

const minus = () => {
  if (prodCount.value > 0) prodCount.value -= 1;
}

</script>
