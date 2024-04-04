<script setup lang="ts">
const isSidebarOpen = ref(true);

const sidebarContainerClasses = computed(() => ({
  'w-64': isSidebarOpen.value, 
  'w-12': !isSidebarOpen.value,
}));

function toogleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen font-inter">
    <div :class="sidebarContainerClasses">
      <Sidebar @toggle-sidebar="toogleSidebar" :is-sidebar-open="isSidebarOpen" />
    </div>

    <div class="flex-grow" >
        <main class="">
          <slot name="content"></slot>
        </main>
    </div>
  </div>
</template>
