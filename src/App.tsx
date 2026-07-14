import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TelegramGrowth from "@/pages/TelegramGrowth";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { FloatingWhatsApp } from "@/components/ui/GlobalWidgets";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <CursorSpotlight />
          <TelegramGrowth />
          <FloatingWhatsApp />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
