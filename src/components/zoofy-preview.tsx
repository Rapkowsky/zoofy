import React from "react";
import zoofyPreview from "../../public/zoofy-preview-marketing.png";
import Image from "next/image";

export default function ZoofyPreview() {
    return <Image src={zoofyPreview} alt="Preview of Zoofy" />;
}
