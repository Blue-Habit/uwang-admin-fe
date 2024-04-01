<script setup lang="ts">

const userStatisticsStore = useStatistic();

onMounted(async () => { 
  await userStatisticsStore.fetchStatistics();
});

const dataStatistic = ref<Array<Statistic>>([
  {
    icon: "/image/user.svg",
    title: "Jumlah Pengguna",
    amount: userStatisticsStore.statistics.totalUser,
    showStatistic: false,
  },
  {
    icon: "/image/at-sign.svg",
    title: "Jumlah Daftar Hari",
    amount: userStatisticsStore.statistics.userClaim,
    statistic: userStatisticsStore.statistics.userClaim,
    showStatistic: true,
  },
  {
    icon: "/image/activity.svg",
    title: "Jumlah pengguna aktif",
    amount: userStatisticsStore.statistics.activeUser,
    statistic: userStatisticsStore.statistics.activeUser,
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
    name: "tingkat akun",
    value: "tingkat_akun",
  },
  {
    name: "Jumlah Followers",
    value: "jumlah_followers",
  },
  {
    name: "Jumlah Posting",
    value: "jumlah_posting",
  },
  {
    name: "Jumlah Komentar",
    value: "jumlah_komentar",
  },
  {
    name: "Status Akun",
    value: "status_akun",
  },
];

const user = useTopUser();
onMounted(() => {
  user.getTopUser();
});
const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
});
</script>

<template>
  <MainLayout>
    <template #content>
      <div class="flex w-full flex-col gap-2">
        <HeaderPage headerText="Dashboard" :subtitleText="formattedDate"/>
        <div class="px-6">
          <StatisticDashboard :statistic="dataStatistic" />
        </div>
        <h1 class="px-6 text-2xl font-bold font-inter">List 7 peengguna teratas</h1>
        <DataTable :items="user.topUser" :headers="headers">
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
          <template #status_user="{ item }">
            <p
              class="bg-state-success-main text-white rounded-full px-2 py-1 w-fit"
            >
              {{ item.status }}
            </p>
          </template>
        </DataTable>
        <div v-if="user.isLoading">Loading......</div>
      </div>
    </template>
  </MainLayout>
</template>
