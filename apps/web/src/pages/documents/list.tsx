import { Navbar } from "./components/navbar";
import { RecentDocuments } from "./components/recent-documents";
import { TemplateGallery } from "./components/template-gallery";

const DocumentListPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <TemplateGallery />
        <RecentDocuments />
      </main>
    </div>
  );
};

export default DocumentListPage;
