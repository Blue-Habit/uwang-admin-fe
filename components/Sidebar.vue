<script setup lang="ts">
const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["toggleSidebar"]);
const user = {
  name: "Marquez Pazeyo",
  avatar: "https://i.pravatar.cc/150?u=uwang@example.com",
  role: "Super Admin",
};
const items = ref([
  { text: "Dashboard", href: "/main/dashboard", icon: "/image/home.svg" },
  {
    text: "Manajemen User",
    icon: "/image/users.svg",
    submenu: [
      { text: "Daftar Pengguna", href: "/user-management/daftar-pengguna" },
      { text: "Log Aktivitas Pengguna", href: "/users/logs" },
    ],
    show: false,
  },
  { text: "Manajemen Akses", href: "/access", icon: "/image/settings.svg" },
]);

function toggleSidebar() {
  emit("toggleSidebar");
  
}

function logout() {
  // Implementasi logout
}

function toggleDropdown(itemText: string) {
  const item = items.value.find((i) => i.text === itemText);
  if (item) {
    item.show = !item.show;
  }
}

function isActive(item: any) {
  return window.location.pathname === item.href;
}

function handleItemClick(item: any) {
  if (!item.submenu) return;
  item.show = !item.show;
}
</script>

<template>
  <div
    :class="{ 'w-64': isSidebarOpen, 'w-12': !isSidebarOpen }"
    class="fixed inset-y-0 left-0 bg-white shadow-md h-screen overflow-y-auto flex flex-col transition-width duration-300"
  >
    <div class="flex items-center justify-center py-4 mb-8 mt-4 px-4 relative">
      <img
        :src="isSidebarOpen ? '/image/Logo-Uwang.svg' : '/image/Logo.svg'"
        alt="Logo"
        :class="{
          'w-30': isSidebarOpen,
          'h-6 w-6': !isSidebarOpen,
          absolute: !isSidebarOpen,
          'transition-all duration-300': true,
        }"
        class="h-auto"
      />
      <button
        @click="toggleSidebar"
        class="absolute"
        :class="{ 'right-4': isSidebarOpen, 'right-3 top-8': !isSidebarOpen }"
      >
        <span v-if="isSidebarOpen" class="font-bold text-lg"
          ><img src="/image/chevron-left.svg" alt="row-left"
        /></span>
        <span v-else
          ><img src="/image/chevron-right.svg" alt="row-right"
        /></span>
      </button>
    </div>

    <nav class="flex-1">
      <ul class="space-y-2">
        <li v-for="item in items" :key="item.text" class="group">
          <div
            class="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-200"
            :class="{ 'text-[#1041B7] font-semibold': isActive(item) }"
            @click="handleItemClick(item)"
          >
            <a v-if="!item.submenu" :href="item.href" class="flex items-center" >
              <img :src="item.icon" class="h-6 w-6 mr-3" alt="Icon" />
              <span v-show="isSidebarOpen">{{ item.text }}</span>
            </a>
            <div v-else class="flex items-center justify-between w-full">
              <div class="flex items-center">
                <img :src="item.icon" class="h-6 w-6 mr-3" alt="Icon" />
                <span  v-show="isSidebarOpen">{{ item.text }}</span>
              </div>
              <span
                v-show="isSidebarOpen"
                v-if="item.submenu"
                class="transition-transform transform"
                :class="{ 'rotate-180': item.show }"
              >
                <img src="/image/chevron-down.svg" alt="icon-down" />
              </span>
            </div>
          </div>
          <ul v-if="item.submenu && item.show" class="pl-8">
            <li
              v-for="subItem in item.submenu"
              :key="subItem.text"
              class="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-black"
            >
              <a :href="subItem.href">{{ subItem.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="mt-auto flex justify-center pb-4">
      <div v-if="isSidebarOpen" class="flex items-center space-x-4">
        <img
          v-if="user.avatar"
          :src="user.avatar"
          class="w-10 h-10 rounded-full object-cover"
          alt="Profile"
        />
        <div>
          <div class="text-black font-bold text-sm">{{ user.name }}</div>
          <div class="text-gray-600 text-xs">{{ user.role }}</div>
        </div>
      </div>
      <button
        @click="logout"
        :class="{ 'ml-3': isSidebarOpen, 'ml-0': !isSidebarOpen }"
      >
        <img src="/image/log-out.svg" class="h-6 w-6" alt="Logout Icon" />
      </button>
    </div>
  </div>
</template>
