<script setup>
const listUserStore = useListUser();

onMounted(async () => {
  await listUserStore.fetchUserWithPagination();
});
const headers = [
  {
    name: "No",
    value: "number",
  },
  {
    name: "ID user",
    value: "id",
  },
  {
    name: "Name",
    value: "full_name",
  },
  {
    name: "Email",
    value: "email",
  },
  {
    name: "username",
    value: "username",
  },
  {
    name: "Tanggal Lahir",
    value: "dateOfBirth",
  },
  {
    name: "Tanggal Daftar",
    value: "dateOfRegister",
  },
  {
    name: "Status",
    value: "status",
  },
];


</script>
<template>
  <MainLayout>
    <template #content>
      <div class="flex w-full flex-col gap-2">
        <HeaderPage
          header-text="Daftar Pengguna"
          subtitle-text="Lihat semua daftar pengguna terupdate"
        />
        <DataTable :items="listUserStore.data" :headers="headers">
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
              class="bg-state-success-main text-white rounded-full px-2 py-1 w-fit"
            >
              {{ item.status }}
            </p>
          </template>
          <template #id="{ item }">
            <p
              class="text-state-primary-main underline"
            >
              {{ item.id }}
            </p>
          </template>
        </DataTable>
      </div>
    </template>
  </MainLayout>
</template>
