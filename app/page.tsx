import { Button } from "@/components/ui/button";
import { DocumentViewer } from '@/components/document-viewer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container mx-auto px-4">
        <DocumentViewer />
      </div>
    </main>
  );
}