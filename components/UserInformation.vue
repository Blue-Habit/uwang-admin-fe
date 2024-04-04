<script setup lang="ts">
import { shortenId } from '~/common/shortenId';

interface Props {
  id: string;
  email: string;
  full_name: string;
  username: string;
  dateOfBirth: string;
  authProvider: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  user_profile: ProfileResponse;
}
const props = withDefaults(defineProps<Props>(), {
  id: "1551b951-5506-48cf-bb76-4804563e6287",
  email: "azkigm03@gmail.com",
  full_name: "Azkia Ajmal Fairuz",
  username: "azkik",
  dateOfBirth: "1999-03-25T00:00:00Z",
  authProvider: "basic",
  status: "Aktif",
  user_profile: [],
});

const isEmailVisible = ref(false);

function handleVisibilityEmail() {
  isEmailVisible.value = !isEmailVisible.value;
}


function hideEmail(email: string): string {
  const [username, domain] = email.split('@');
  const firstChar = username.charAt(0);
  const lastChar = username.charAt(username.length - 1);
  const hiddenUsername = `${firstChar}*****${lastChar}`;
  return `${hiddenUsername}@${domain}`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Menambahkan nol di depan jika bulan hanya satu digit
  const day = date.getDate().toString().padStart(2, '0'); // Menambahkan nol di depan jika tanggal hanya satu digit

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

</script>

<template>
  <div class="flex card font-inter p-4 rounded-lg bg-white shadow-md mx-auto">
    <div class="flex items-center">
      <div class="col w-20 h-20  rounded-full">
        <img class=""  src="/image/user-photo.svg" alt="" />
      </div>
      <div class="col ml-3">
        <h1 class="font-semibold text-lg text-main mb-1">
          {{ props.full_name }}
          <span class="text-secondary font-normal">#{{ shortenId(props.id) }}</span>
        </h1>
        <p class="text-sm text-secondary mb-1">@{{ props.username }}</p>
        <div class="flex gap-1">
          <p v-if="!isEmailVisible" class="text-sm text-secondary">{{ hideEmail(props.email) }}</p>
          <p v-else class="text-sm text-secondary">{{ props.email }}</p>
          <button @click="handleVisibilityEmail">
            <img v-if="isEmailVisible" src="/image/eye-on.svg" alt="" />
            <img v-else="!isEmailVisible" src="/image/eye-off.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex ml-[auto]">
      <div class="col">
        <p class="mt-5 text-gray-500">Tanggal lahir :</p>
        <p class="text-gray-500">Tanggal daftar :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{ formatDate(dateOfBirth) }}</p>
        <p>{{ formatDate(dateOfBirth) }}</p>
      </div>
    </div>
    <div class="flex ml-5">
      <div class="col">
        <p class="mt-5 text-gray-500">Followers :</p>
        <p class="text-gray-500">Postingan :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{ props.user_profile }}</p>
        <p>{{ props.user_profile }}</p>
      </div>
    </div>
    <div class="flex ml-5">
      <div class="col">
        <p class="mt-5 text-gray-500">Negara :</p>
        <p class="text-gray-500">Terakhir Aktif :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{ props.user_profile }}</p>
        <p>{{ props.user_profile }}</p>
      </div>
    </div>
    <button
      class="bg-green-500 text-white font-bold rounded w-16 h-8 mt-7 ml-5"
    >
      {{ props.status }}
    </button>
    <button class="border font-medium rounded w-24 h-10 py-2 mt-6 ml-5">
      Ubah status
    </button>
  </div>
</template>
