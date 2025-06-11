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

<!-- aside 展示广告 -->
<template>
  <div class="gads">
  <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-3661157653310294"
      data-ad-slot="4009546088"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  </div>
</template>