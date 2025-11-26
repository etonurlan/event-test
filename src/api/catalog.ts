export const fetchCatalog = async () => {
  const response = await fetch("https://appevent.ru/dev/task1/catalog");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке каталога");
  }
  return response.json();
};