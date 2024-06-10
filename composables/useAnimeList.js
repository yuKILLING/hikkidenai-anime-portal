export default function useAnimeList() {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const currentPage = ref(1);
  const route = useRoute();
  const sortBy = ref('popularity');
  const { data: animeList, pending, refresh } = useFetch((page) => {
    return `${apiBase}/api/animes?page=${page || currentPage.value}&limit=25&order=${sortBy.value}`;
  }, {
    method: "GET",
  });

  const loadAnimeList = async (page) => {
    currentPage.value = page || currentPage.value;
    await refresh();
  };

  onMounted(loadAnimeList);

  return {
    animeList,
    loadAnimeList,
    currentPage,
    pending,
    sortBy
  };
}
