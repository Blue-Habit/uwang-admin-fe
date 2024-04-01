<script setup>

const route = useRoute();
const listUserStore = useListUser();

onMounted(async () => {
  await listUserStore.fetchUserWithPagination();
});


const dataDummy = {
  id: "1551b951-5506-48cf-bb76-4804563e6287",
  email: "azkigm03@gmail.com",
  full_name: "azkia ajmal fairuz",
  username: "azkik",
  dateOfBirth: "1999-03-25T00:00:00Z",
  dateOfRegister: "1999-03-25T00:00:00Z",
  status: "ACTIVE",
};

const headers = [
  {
    name: "No",
    value: "number",
  },
  {
    name: "ID Aktifitas",
    value: "id",
  },
  {
    name: "Nama Aktifitas",
    value: "full_name",
  },
  {
    name: "Tanggal & Waktu",
    value: "email",
  },
  {
    name: "Alamat IP",
    value: "username",
  },
  {
    name: "Informasi Perangkat",
    value: "dateOfBirth",
  },
  {
    name: "Pesan Aktifitas",
    value: "dateOfRegister",
  },
  {
    name: "Deteksi Aktifitas",
    value: "status",
  },
];
</script>
<template>
  <MainLayout>
    <template #content>
      <HeaderPage
        headerText="Detail Pengguna"
        :subtitleText="`Daftar Pengguna > ${dataDummy.full_name}`"
      />
      <div class="p-6 overflow-x-auto">
        <h1 class="font-semibold text-2xl">Infromasi Pengguna</h1>
        <UserInformation :data="dataDummy" />
      </div>
      <h1 class="font-semibold text-2xl">Aktifitas Pengguna</h1>
      <DataTable :items="dataDummy" :headers="headers">
        <template #actionHeader>
          <div class="w-full flex justify-between">
            <div class="flex gap-2">
              <ButtonTable text="Add Filter">
                <template #leadingIcon>
                  <img src="/image/filter.svg" alt="" />
                </template>
              </ButtonTable>
              <ButtonTable text="Sort">
                <template #leadingIcon>
                  <img src="/image/arrow-up.svg" alt="" />
                </template>
                <template #trailingIcon>
                  <img src="/image/chevron-down.svg" alt="" />
                </template>
              </ButtonTable>
            </div>
            <ButtonTable text="Add Filter">
              <template #leadingIcon>
                <img src="/image/download.svg" alt="" />
              </template>
            </ButtonTable>
          </div>
        </template>
        <template #status="{ item }">
          <p
            class="bg-state-success-surface border border-state-success-border  text-state-success-main rounded-full px-2 py-1 w-fit"
          >
            {{ item.status }}
          </p>
        </template>
        <template #id="{ item }">
          <a
            @click="goToDetailUser(item.id)"
            class="text-state-primary-main underline cursor-pointer"
          >
            {{ shortenId(item.id) }}
          </a>
        </template>
      </DataTable>
    </template>
  </MainLayout>
</template>
