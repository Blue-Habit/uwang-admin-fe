<script setup>
const listUserStore = useListUser();
const route = useRouter();

onMounted(async () => {
  await listUserStore.fetchUserWithPagination();
});

function goToDetailUser(idUser) {
  route.push(`/user-management/detail-pengguna/${idUser}`);
}


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
const dataDummy = [
  {
    id: "d1948347-db5b-496f-9eff-82ca06d44b11",
    email: "fauzanramadhani06@gmail.com",
    full_name: "Fauzan Gracia Ramadhanj",
    username: "zans05_",
    dateOfBirth: "2001-12-05T00:00:00Z",
    dateOfRegister: "1999-03-25T00:00:00Z",
    status: "ACTIVE",
  },
  {
    id: "e0ef416e-d5bb-4ae4-8e0f-1ba4e533c958",
    email: "azkiajmal@gmail.com",
    full_name: "azkiaajmal fairuz",
    username: "azscki",
    dateOfBirth: "2003-08-03T00:00:00Z",
    dateOfRegister: "1999-03-25T00:00:00Z",
    status: "LOCKED",
  },
  {
    id: "1551b951-5506-48cf-bb76-4804563e6287",
    email: "azkigm03@gmail.com",
    full_name: "tes",
    username: "azkik",
    dateOfBirth: "1999-03-25T00:00:00Z",
    dateOfRegister: "1999-03-25T00:00:00Z",
    status: "ACTIVE",
  },
];

const dataUser = listUserStore.data;
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
