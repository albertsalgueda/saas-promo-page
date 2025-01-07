import { Boxes, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Todo Integrado",
    description: "Todas las herramientas que necesitas en un solo lugar",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Optimizado para brindarte la mejor experiencia",
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Tu información siempre protegida",
  },
  {
    icon: Users,
    title: "Colaborativo",
    description: "Trabaja en equipo de forma eficiente",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-saas-700">
          Características Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-100 hover:border-saas-200 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-saas-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};