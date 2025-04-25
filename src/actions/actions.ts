"use server";

export async function addPet(pet) {
	await prisma.pet.create({
		data: pet,
	});
}
