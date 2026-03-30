import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Monitor, Database, Workflow, Shield, Bot } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const protocolTabs = [
  {
    value: "protokol-01",
    icon: <Monitor className="h-auto w-4 shrink-0" />,
    label: "Protokół 01",
    content: {
      badge: "Fundament",
      title: "Google Workspace jako fundament AI",
      description:
        "Zanim wdrożysz AI, potrzebujesz solidnego fundamentu. Google Workspace to brama do wszystkich narzędzi — jedno konto, pełna kontrola. Nauczysz się jak ustawić domenę, emaile firmowe, Drive i Calendar tak, żeby AI miało na czym pracować.",
      buttonText: "Kup Protokół 01 — 799 PLN",
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "Google Workspace dashboard",
    },
  },
  {
    value: "protokol-02",
    icon: <Database className="h-auto w-4 shrink-0" />,
    label: "Protokół 02",
    content: {
      badge: "Sprzedaż",
      title: "CRM i sprzedaż bez Excela",
      description:
        "Koniec z Excelem i karteczkami. Zbudujesz bazę danych klientów, wdrożysz CRM (Pipedrive) i nauczysz się generować leady z LinkedIn, email i telefonów. Cały proces sprzedażowy krok po kroku.",
      buttonText: "Kup Protokół 02 — 999 PLN",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      imageAlt: "CRM dashboard z danymi sprzedażowymi",
    },
  },
  {
    value: "protokol-03",
    icon: <Workflow className="h-auto w-4 shrink-0" />,
    label: "Protokół 03",
    content: {
      badge: "Automatyzacja",
      title: "Automatyzacje n8n dla operacji i sprzedaży",
      description:
        "Przestań robić ręcznie to, co maszyna zrobi w 3 sekundy. n8n to silnik automatyzacji — połączysz CRM, email, kalendarz i AI w jeden workflow. Od prostych powiadomień po złożone pipeline'y sprzedażowe.",
      buttonText: "Kup Protokół 03 — 999 PLN",
      imageSrc:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      imageAlt: "Workflow automation diagram",
    },
  },
  {
    value: "protokol-04",
    icon: <Shield className="h-auto w-4 shrink-0" />,
    label: "Protokół 04",
    content: {
      badge: "Governance",
      title: "AI Governance i rollout zespołowy",
      description:
        "AI w firmie to nie zabawka jednej osoby. Nauczysz się jak wdrożyć AI w zespole, ustalić zasady korzystania, politykę danych i mierzyć ROI. Governance, który nie blokuje, ale przyspiesza.",
      buttonText: "Kup Protokół 04 — 1 499 PLN",
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt: "Zespół pracujący nad strategią AI",
    },
  },
  {
    value: "protokol-05",
    icon: <Bot className="h-auto w-4 shrink-0" />,
    label: "Protokół 05",
    content: {
      badge: "JARVIS",
      title: "Swój JARVIS — AI operator firmy",
      description:
        "Koronny moduł. Zbudujesz własnego AI operatora który zarządza Twoimi procesami, generuje raporty, pilnuje pipeline'u sprzedażowego i reaguje szybciej niż jakikolwiek pracownik. System testowany na 5 firmach Artura Myzera.",
      buttonText: "Kup Protokół 05 — 1 999 PLN",
      imageSrc:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      imageAlt: "AI Agent dashboard",
    },
  },
];

export function FeatureProtocols() {
  return (
    <section id="protokoly" className="py-32 section-dark">
      <div className="container-inner mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">5 Protokołów Wdrożeniowych</Badge>
          <h2 className="max-w-3xl text-display-md text-white">
            Od fundamentów do własnego AI operatora firmy
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Każdy protokół to zamknięty moduł z konkretnym rezultatem. Kupujesz krok po kroku — bez zobowiązań, bez abonamentu.
          </p>
        </div>
        <Tabs defaultValue={protocolTabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6 flex-wrap">
            {protocolTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary transition-colors"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {protocolTabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl text-white">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default FeatureProtocols;
