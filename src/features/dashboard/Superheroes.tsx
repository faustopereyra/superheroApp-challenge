import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllSuperheroes } from "./superheroSlice";
import { SuperheroCard } from "@/components/ui/card";
import Header from "@/components/ui/header";
import LoadingPlaceholder from "@/components/ui/loadingPlaceholder";

const SuperheroesDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { superheroes, status } = useAppSelector((state) => state.superhero);

  useEffect(() => {
    dispatch(fetchAllSuperheroes());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div>
        <Header />
        <div className="flex flex-wrap justify-center md:gap-4 gap-2   max-w-7xl mx-auto">
          {[...Array(24)].map((_, index) => (
            <LoadingPlaceholder key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center md:gap-4 gap-2   max-w-7xl mx-auto">
        {superheroes.map((hero) => (
          <SuperheroCard hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default SuperheroesDashboard;
