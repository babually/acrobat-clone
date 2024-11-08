"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ZoomIn,
  ZoomOut,
  Hand,
  MousePointer2,
  Printer,
  Download,
  Share2,
  RotateCcw,
  ScanLine,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Toolbar() {
  return (
    <div className="border-b bg-card">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <MousePointer2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Hand className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Select defaultValue="100">
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="75">75%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
                <SelectItem value="125">125%</SelectItem>
                <SelectItem value="150">150%</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search in document..."
              className="pl-8"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ScanLine className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}