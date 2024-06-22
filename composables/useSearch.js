export default function useSearch() {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const searchQuery = ref("");

  return {
    searchQuery,
  };
}
