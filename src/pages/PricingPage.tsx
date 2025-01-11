import { Pricing } from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>
      <Pricing />
    </div>
  );
};

export default PricingPage;