export default function useAnimeInfo() {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const route = useRoute();
  const info = ref(null);

  const loadAnimeInfo = async () => {
    try {
      info.value = await $fetch(
        `${apiBase}/api/animes/${route.params.id}`,
        {
          method: "GET",
        }
      );
      console.log(info.value)

    } catch (error) {
      console.error("Error loading anime info:", error);
      throw error;
    }
  };

  onMounted(loadAnimeInfo);

  return {
    loadAnimeInfo,
    info,
    apiBase,
  };
}
