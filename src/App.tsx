
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import HikingOaxacaAdventure from "./pages/blog/HikingOaxacaAdventure";
import KubernetesMonitoringKanvas from "./pages/blog/KubernetesMonitoringKanvas";
import OpenSourceContributionsMeshery from "./pages/blog/OpenSourceContributionsMeshery";
import DogsAndDevops from "./pages/blog/DogsAndDevops";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/hiking-oaxaca-adventure" element={<HikingOaxacaAdventure />} />
          <Route path="/blog/kubernetes-monitoring-kanvas" element={<KubernetesMonitoringKanvas />} />
          <Route path="/blog/open-source-contributions-meshery" element={<OpenSourceContributionsMeshery />} />
          <Route path="/blog/dogs-and-devops" element={<DogsAndDevops />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
