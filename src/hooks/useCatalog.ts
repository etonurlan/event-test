import { useQuery } from "@tanstack/react-query";
import { fetchCatalog } from "../api/catalog";
import type { Products } from "../types";

export const useCatalog = () => {
  return useQuery<Products>({
    queryKey: ["catalog"],
    queryFn: fetchCatalog,
  });
};