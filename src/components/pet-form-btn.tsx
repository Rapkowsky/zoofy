import React from "react";
import { Button } from "./ui/button";

type PetFormBtnProps = {
	actionType: "add" | "edit";
};

const PetFormBtn = ({ actionType }: PetFormBtnProps) => {
	return (
		<Button type="submit" className="mt-5 ml-auto">
			{actionType === "add" ? "Add Pet" : "Edit Pet"}
		</Button>
	);
};

export default PetFormBtn;
