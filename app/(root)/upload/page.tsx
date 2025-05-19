"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { ChangeEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}

      <form
        action=""
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter video title here..."
        />
        <FileInput />
      </form>
    </div>
  );
};

export default page;
