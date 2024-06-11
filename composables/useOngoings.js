export default function useOngoings() {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const ongoings = ref([]);

  const loadOngoings = async () => {
    try {
      const response = await $fetch(`${apiBase}/api/animes`, {
        method: "GET",
        params: {
          status: "ongoing",
          limit: 15,
          order: "popularity",
        },
      });
      ongoings.value = response;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  onMounted(loadOngoings);

  return {
    ongoings,
  };
}
