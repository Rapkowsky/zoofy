"use client";
import { Pet } from "@/lib/types";
import React, { createContext, useState } from "react";

type PetContextProviderProps = {
	data: Pet[];
	children: React.ReactNode;
};

type TPetContext = {
	pets: Pet[];
	selectedPetId: string | null;
	handleChangeSelectedPetId: (id: string) => void;
	handleCheckoutPet: (id: string) => void;
	selectedPet: Pet | undefined;
	numberOfPets: number;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
	data,
	children,
}: PetContextProviderProps) {
	// States
	const [pets, setPets] = useState(data);
	const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

	// Derived states
	const selectedPet = pets.find((pet) => pet.id === selectedPetId);
	const numberOfPets = pets.length;

	// Event handlers / Actions
	const handleCheckoutPet = (id: string) => {
		setPets((prev) => prev.filter((pet) => pet.id !== id));
		setSelectedPetId(null);
	};

	const handleChangeSelectedPetId = (id: string) => {
		setSelectedPetId(id);
	};

	return (
		<PetContext.Provider
			value={{
				pets,
				selectedPetId,
				handleChangeSelectedPetId,
				handleCheckoutPet,
				selectedPet,
				numberOfPets,
			}}>
			{children}
		</PetContext.Provider>
	);
}
