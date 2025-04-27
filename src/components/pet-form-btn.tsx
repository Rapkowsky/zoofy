import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const PetFormBtn = ({ actionType }) => {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending} className="mt-5 ml-auto">
			{actionType === "add" ? "Add Pet" : "Edit Pet"}
		</Button>
	);
};

export default PetFormBtn;
