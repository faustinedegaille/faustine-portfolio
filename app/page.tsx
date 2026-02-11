"use client";

import { useCallback, useSyncExternalStore } from "react";
import { ProfileWidget } from "@/components/widgets/ProfileWidget";
import { SkillsWidget } from "@/components/widgets/SkillsWidget";
import { ContactWidget } from "@/components/widgets/ContactWidget";
import { FocusWidget } from "@/components/widgets/FocusWidget";
import { ExperienceWidget } from "@/components/widgets/ExperienceWidget";

function getHashSkill() {
  const hash = window.location.hash.slice(1);
  return hash.split("/")[0] || null;
}

function subscribeToHash(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

export default function Home() {
  const focusSkill = useSyncExternalStore(subscribeToHash, getHashSkill, () => null);

  const handleOpenFocus = useCallback((skill: string) => {
    window.history.pushState({ focusSkill: skill }, "", `#${skill}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, []);

  const handleCloseFocus = useCallback(() => {
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }, []);

  return (
    <main className="min-h-dvh md:h-dvh bg-[#f6f7fb] px-3 md:px-vp py-4 md:py-vpage md:overflow-hidden">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-3 md:gap-vg">
        <header className="shrink-0">
          <p className="text-xs md:text-v-xs text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-2xl md:text-v-h1 font-semibold leading-tight">
            Faustine Degaille
          </h1>
          <p className="text-sm md:text-v-sm text-muted-foreground">
            Développeuse front-end & web designer
          </p>
        </header>

        <section className="grid flex-1 grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-vg md:min-h-0 pb-4 md:pb-0">
          {focusSkill ? (
            <div className="col-span-1 md:col-span-2 md:row-span-2 min-h-[60dvh] md:h-full md:min-h-0">
              <FocusWidget skill={focusSkill} onClose={handleCloseFocus} />
            </div>
          ) : (
            <>
              <div className="md:h-full md:min-h-0">
                <ProfileWidget />
              </div>
              <div className="md:h-full md:min-h-0">
                <ExperienceWidget />
              </div>
              <div className="md:h-full md:min-h-0">
                <SkillsWidget onCtaClick={handleOpenFocus} />
              </div>
              <div className="md:h-full md:min-h-0">
                <ContactWidget />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
