import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

import { OurFileRouter_t } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter_t>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter_t>();
