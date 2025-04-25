"use client";
import { addPet } from "@/actions/actions";
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
	handleAddPet: (newPet: Omit<Pet, "id">) => void;
	handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => void;
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

	const handleAddPet = async (newPet: Omit<Pet, "id">) => {
		await addPet(newPet);
	};

	const handleEditPet = (petId: string, newPetData: Omit<Pet, "id">) => {
		setPets((prev) =>
			prev.map((pet) => {
				if (pet.id === petId) {
					return {
						id: pet.id,
						...newPetData,
					};
				}
				return pet;
			})
		);
	};

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
				handleAddPet,
				handleEditPet,
				selectedPet,
				numberOfPets,
			}}>
			{children}
		</PetContext.Provider>
	);
}
