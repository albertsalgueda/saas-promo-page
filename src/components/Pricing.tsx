import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "9",
    features: ["5 Proyectos", "10GB Almacenamiento", "Soporte Email"],
  },
  {
    name: "Pro",
    price: "29",
    features: ["Proyectos Ilimitados", "100GB Almacenamiento", "Soporte 24/7", "API Access"],
    popular: true,
  },
  {
    name: "Empresa",
    price: "99",
    features: [
      "Todo en Pro",
      "500GB Almacenamiento",
      "Soporte Dedicado",
      "Personalización Total",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-saas-700">
          Planes y Precios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg bg-white shadow-lg animate-fadeIn ${
                plan.popular ? "ring-2 ring-saas-500 scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <span className="bg-saas-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-saas-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular ? "bg-saas-700 hover:bg-saas-800" : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                Comenzar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};