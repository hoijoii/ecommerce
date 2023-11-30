<template>
  <div id="navbar">
    <div class="wrapper">
      <div class="title">
        <div class="sneakers">sneakers</div>
      </div>
      <div class="menu">
        <ul>
          <li v-for="tab in tabItems" :key="tab.id" class="item">{{ tab.name }}</li>
        </ul>
      </div>
      <div class="cart">
        <inline-svg :src="require('@/assets/images/icon-cart.svg')"/>
        <div class="alert" v-if="commonsStore.cart > 0">
          <div class="num">{{ commonsStore.cart }}</div>
        </div>
      </div>
      <div class="profile">
        <img src="@/assets/images/image-avatar.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, Ref } from 'vue';
import tabs from '@/assets/data/tabs-info.json';
import InlineSvg from 'vue-inline-svg';
import { useCommonsStore } from '@/stores/commons';

const tabItems = tabs.MENU;
const commonsStore = useCommonsStore();

</script>