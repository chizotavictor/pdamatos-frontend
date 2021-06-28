<template>
  <div class="p-0">
    <Loader :is-visible="isLoading"></Loader>
  </div>
</template>
<script>
export default {
  name: "BrowseTicketResult",
  data: () => ({
    isLoading: false
  })
};
</script>
