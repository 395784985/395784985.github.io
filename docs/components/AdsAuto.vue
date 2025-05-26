<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  try {
    window.addAds()
    console.log('AdUnit loaded')
  } catch (e) {
    console.log(e)
  }
})
</script>

<!-- 多重广告 -->
<template>
  <div class="gads">
  <ins class="adsbygoogle"
      style="display:block"
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-3661157653310294"
      data-ad-slot="6944705349"></ins>
    </div>
</template>