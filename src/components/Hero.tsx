import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-saas-50 to-white">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-saas-700 mb-6 animate-fadeIn">
          Revoluciona tu Productividad
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          La plataforma todo-en-uno que necesitas para llevar tu negocio al siguiente nivel
        </p>
        <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-saas-700 hover:bg-saas-800">
            Empezar Ahora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Ver Demo
          </Button>
        </div>
      </div>
    </div>
  );
};