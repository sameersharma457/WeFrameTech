"use client";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import UploadsTable from "../components/ui/UploadsTable";

export default function UploadsPage() {
  const [file, setFile] = useState<File | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0] ?? null);

  const handleUpload = async () => {
    if (!file) return alert("Pick a file");
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    if (res.ok) alert("Uploaded");
    else alert("Upload failed");
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">My Uploads</h1>
      <div className="mb-4 flex flex-col sm:flex-row items-start gap-3">
        <input type="file" onChange={onChange} />
        <Button onClick={handleUpload}>Upload</Button>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <UploadsTable />
      </div>
    </div>
  );
}
