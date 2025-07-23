"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { getUserLocale, setUserLocale } from "@/lib/locale";

export function LanguageToggle() {
  const locale = useLocale();

  const [, startTransition] = useTransition();

  const toggleLanguage = async () => {
    const userLocale = await getUserLocale();
    startTransition(() => {
      setUserLocale(userLocale === "en" ? "es" : "en");
    });
  };

  return (
    <Button
      size="icon"
      type="button"
      variant="ghost"
      className="px-2"
      onClick={toggleLanguage}
    >
      {locale === "en" ? "EN" : "ES"}
    </Button>
  );
}
