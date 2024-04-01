<script setup>
const listUserStore = useListUser();
const {searchUserByQuery, result} = useSearchByQuery();
const route = useRouter();

const data = ref([]);
const searchInput = ref("");
async function onSearch() {
  await searchUserByQuery(searchInput.value);
  data.value = result;
}
async function performSearch() {
  if (searchInput.value.trim() !== "") {
    onSearch()
  } else {
    await listUserStore.fetchUserWithPagination();
    data.value = listUserStore.result;
  }
}


watchEffect(() => {
  performSearch();
});

onMounted(async () => {
  await listUserStore.fetchUserWithPagination();
  data.value = listUserStore.result.data;
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
</script>
<template>
  <MainLayout>
    <template #content>
      <div class="flex w-full flex-col">
        <HeaderPage
          header-text="Daftar Pengguna"
          subtitle-text="Lihat semua daftar pengguna terupdate"
        />
        <div class="p-6">
          <DataTable :items="listUserStore.result" :headers="headers">
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
                  <SearchField v-model:query="searchInput" @on-search="onSearch" @update:query="searchInput = $event" />
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
              <a
                @click="goToDetailUser(item.id)"
                class="text-state-primary-main underline cursor-pointer"
              >
                {{ shortenId(item.id) }}
              </a>
            </template>
          </DataTable>
        </div>
      </div>
    </template>
  </MainLayout>
</template>
