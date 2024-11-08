"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  FileText,
  Bookmark,
  PanelLeftClose,
  MessageSquare,
  FileSignature,
  Settings,
} from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-2 top-20"
        onClick={() => setIsOpen(true)}
      >
        <FileText className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="w-80 border-r bg-card">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Document</h2>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <PanelLeftClose className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Tabs defaultValue="outline" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="outline">
            <FileText className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="bookmarks">
            <Bookmark className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="comments">
            <MessageSquare className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="edit">
            <FileSignature className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="outline" className="m-0">
          <ScrollArea className="h-[calc(100vh-8rem)] p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Chapter 1: Introduction</h3>
                <div className="pl-4 text-sm text-muted-foreground">
                  <p>1.1 Overview</p>
                  <p>1.2 Getting Started</p>
                  <p>1.3 Basic Concepts</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Chapter 2: Core Features</h3>
                <div className="pl-4 text-sm text-muted-foreground">
                  <p>2.1 Document Management</p>
                  <p>2.2 PDF Tools</p>
                  <p>2.3 Advanced Features</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="bookmarks" className="m-0">
          <ScrollArea className="h-[calc(100vh-8rem)] p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">No bookmarks added</p>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="comments" className="m-0">
          <ScrollArea className="h-[calc(100vh-8rem)] p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">No comments yet</p>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="edit" className="m-0">
          <ScrollArea className="h-[calc(100vh-8rem)] p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Select a tool to edit the document</p>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="settings" className="m-0">
          <ScrollArea className="h-[calc(100vh-8rem)] p-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Document settings and preferences</p>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}