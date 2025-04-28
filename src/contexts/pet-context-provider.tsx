"use client";
import { addPet, checkoutPet, editPet } from "@/actions/actions";
import { Pet } from "@/lib/types";
import React, { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

type PetContextProviderProps = {
	data: Pet[];
	children: React.ReactNode;
};

type TPetContext = {
	pets: Pet[];
	selectedPetId: string | null;
	selectedPet: Pet | undefined;
	numberOfPets: number;
	handleAddPet: (newPet: Omit<Pet, "id">) => Promise<void>;
	handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => Promise<void>;
	handleCheckoutPet: (id: string) => Promise<void>;
	handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
	data,
	children,
}: PetContextProviderProps) {
	// States

	const [optimisticPets, setOptimisticPets] = useOptimistic(
		data,
		(state, newPet) => {
			return [
				...state,
				{
					...newPet,
					id: Math.random().toString(),
				},
			];
		}
	);
	const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

	// Derived states
	const selectedPet = optimisticPets.find((pet) => pet.id === selectedPetId);
	const numberOfPets = optimisticPets.length;

	// Event handlers / Actions

	const handleAddPet = async (newPet: Omit<Pet, "id">) => {
		setOptimisticPets(newPet);
		const error = await addPet(newPet);
		if (error) {
			toast.warning(error.message);
			return;
		}
	};

	const handleEditPet = async (petId: string, newPetData: Omit<Pet, "id">) => {
		const error = await editPet(petId, newPetData);
		if (error) {
			toast.warning(error.message);
			return;
		}
	};

	const handleCheckoutPet = async (petId: string) => {
		await checkoutPet(petId);
		setSelectedPetId(null);
	};

	const handleChangeSelectedPetId = (id: string) => {
		setSelectedPetId(id);
	};

	return (
		<PetContext.Provider
			value={{
				pets: optimisticPets,
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
