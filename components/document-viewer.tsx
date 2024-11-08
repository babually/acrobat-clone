"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

export function DocumentViewer() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-full bg-accent/50">
      <div className="flex items-center justify-center p-8">
        <div className="w-[800px] space-y-8">
          <div className="aspect-[1/1.4] rounded-lg bg-white shadow-lg p-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Sample PDF Document</h1>
              <p className="text-muted-foreground">
                This is a sample PDF document viewer. In a real implementation, this would display the actual PDF content using a PDF rendering library.
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Features</h2>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Document navigation</li>
                  <li>Zoom controls</li>
                  <li>Search functionality</li>
                  <li>Bookmarks and annotations</li>
                  <li>Print and download options</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aspect-[1/1.4] rounded-lg bg-white shadow-lg p-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Additional Content</h2>
              <p className="text-muted-foreground">
                This represents a second page of the document. In a real PDF viewer, this would continue with the actual document content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}