<script setup lang="ts">

const dataStatistic = ref<Array<Statistic>>([
  {
    icon: "image/user.svg",
    title: "Jumlah Pengguna",
    amount:100 ,
    showStatistic: false,
  },
  {
    icon: "image/at-sign.svg",
    title: "Jumlah Daftar Hari",
    amount:100,
    statistic: 100,
    showStatistic: true,
  },
  {
    icon: "image/activity.svg",
    title: "Jumlah pengguna aktif",
    amount:100,
    statistic: -40,
    showStatistic: true,
  },
]);

const headers = [
  {
    name: "No",
    value: "number",
  },
  {
    name: "username",
    value: "username",
  },
  {
    name: "email",
    value: "email",
  },
  {
    name: "status",
    value: "status_user",
  },
  {
    name: "action",
    value: "action",
  },
];

const items = [
  {
    username: "@johndoe",
    email: "johndoe@gmail.com",
    status_user: "active",
  },
  {
    username: "@jembut",
    email: "jembut@gmail.com",
    status_user: "inactive",
  },
];
</script>

<template>
  <div class="p-6">
    <h1 class="mb-5">preview</h1>
    <StatisticDashboard :statistic="dataStatistic" />

    <DataTable :items="items" :headers="headers">
      <template #actionHeader>
        <div class="w-full flex justify-between">
          <div class="flex gap-2">
            <ButtonTable text="Add Filter">
              <template #leadingIcon>
                <img src="image/filter.svg" alt="" />
              </template>
            </ButtonTable>
            <ButtonTable text="Sort">
              <template #leadingIcon>
                <img src="image/arrow-up.svg" alt="" />
              </template>
              <template #trailingIcon>
                <img src="image/chevron-down.svg" alt="" />
              </template>
            </ButtonTable>
            <SearchField search="a" />
          </div>
          <ButtonTable text="Add Filter">
            <template #leadingIcon>
              <img src="image/download.svg" alt="" />
            </template>
          </ButtonTable>
        </div>
      </template>
      <template #status_user="{ item }">
        <p class="bg-state-success-main text-white rounded-full px-2 py-1 w-fit">{{ item.status_user }}</p>
      </template>
    </DataTable>
    
  </div>
</template>