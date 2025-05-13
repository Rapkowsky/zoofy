"use client";

import { usePetContext } from "@/lib/hooks";
import Image from "next/image";
import PetButton from "./pet-button";
import { Pet } from "@prisma/client";

export default function PetDetails() {
    const { selectedPet } = usePetContext();

    return (
        <section className="flex h-full w-full flex-col">
            {!selectedPet ? (
                <EmptyView />
            ) : (
                <>
                    <TopBar pet={selectedPet} />

                    <OtherInfo pet={selectedPet} />

                    <Notes pet={selectedPet} />
                </>
            )}
        </section>
    );
}

function EmptyView() {
    return (
        <p className="flex h-full items-center justify-center text-2xl font-medium">
            No pet selected
        </p>
    );
}

type Props = {
    pet: Pet;
};

function TopBar({ pet }: Props) {
    const { handleCheckoutPet } = usePetContext();
    return (
        <div className="flex flex-col items-start gap-5 border-b border-light bg-white px-5 py-5 xs:flex-row xs:items-center">
            <div className="flex items-center">
                <Image
                    src={pet.imageUrl}
                    alt="Selected pet image"
                    height={75}
                    width={75}
                    className="h-[75px] w-[75px] rounded-full object-cover"
                />

                <h2 className="ml-5 text-3xl font-semibold leading-7">
                    {pet.name}
                </h2>
            </div>

            <div className="flex w-full flex-col gap-3 xs:ml-auto xs:max-w-fit xs:flex-row">
                <PetButton actionType="edit">Edit </PetButton>
                <PetButton
                    actionType="checkout"
                    onClick={async () => await handleCheckoutPet(pet.id)}
                >
                    Checkout
                </PetButton>
            </div>
        </div>
    );
}

function OtherInfo({ pet }: Props) {
    return (
        <div className="flex justify-around px-5 py-10 text-center">
            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                    Owner name
                </h3>
                <p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
            </div>

            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                    Pet Age
                </h3>
                <p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
            </div>
        </div>
    );
}

function Notes({ pet }: Props) {
    return (
        <div className="mx-8">
            <h3 className="mb-2 text-[13px] font-medium uppercase text-zinc-700">
                Notes
            </h3>
            <section className="mb-9 flex-1 rounded-md border border-light bg-white px-7 py-5">
                {pet.notes}
            </section>
        </div>
    );
}
