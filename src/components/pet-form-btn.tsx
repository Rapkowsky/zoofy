import React from "react";
import { Button } from "./ui/button";

type PetFormBtnProps = {
    actionType: "add" | "edit";
};

const PetFormBtn = ({ actionType }: PetFormBtnProps) => {
    return (
        <Button type="submit" className="ml-auto mt-5">
            {actionType === "add" ? "Add Pet" : "Edit Pet"}
        </Button>
    );
};

export default PetFormBtn;
