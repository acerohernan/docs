import { Editor } from "./editor";
import { Navbar } from "./navbar";

const DocumentPage = () => {
  return (
    <div className="bg-[#F9FBFD] min-h-[100vh] h-full">
      <Navbar />
      <main>
        <Editor />
      </main>
    </div>
  );
};

export default DocumentPage;
