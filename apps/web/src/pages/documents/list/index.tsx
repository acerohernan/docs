import { Navbar } from "./navbar";
import { RecentDocuments } from "./recent-documents";
import { TemplateGallery } from "./template-gallery";

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
