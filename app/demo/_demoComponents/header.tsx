import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="max-w-5xl space-y-3">
      <h1 className="sm:text-3xl md:text-5xl text-2xl">
        Your Ideas, Documents, & Plans. Unified.Welcome to{" "}
        <span className="underline">Otion</span>
      </h1>
      <h2 className="text-xl">
        Fast workspace were you can edit more fater happends.
      </h2>
      <Button>Enter Otion</Button>
    </div>
  );
};
