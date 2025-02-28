import LibraryPage from "@/components/Pages/LibraryPage/LibraryPage";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function LibraryRoute() {
  return (
    <Sidebar>
      <LibraryPage />
    </Sidebar>
  );
}
