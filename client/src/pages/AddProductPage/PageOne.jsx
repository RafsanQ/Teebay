import { Title, TextInput, Button } from "@mantine/core";
import { useState } from "react";
import toast from 'react-hot-toast';

export function PageOne({ formData, setFormData, page, setPage }) {
    const [inputTitle, setInputTitle] = useState(formData.title);

    function handleNextPage() {
        if(inputTitle.trim().length === 0) {
          toast("Enter a valid title");
          return;
        }
        setPage(page + 1);
        setFormData({
          ...formData,
          title: inputTitle
      });
    }

    return (
        <div className="page">
            <Title
                sx={{
                    textAlign: "center",
                }}
                order={2}
            >
                Select Title for your Product
            </Title>
            <br />
            <TextInput
                placeholder="Title"
                required
                value={inputTitle}
                onChange={(e) => {
                    setInputTitle(e.target.value);
                }}
            />
            <br />
            <div className="bottomSection">
                {/* Next or submit button */}
                <Button color="violet" onClick={handleNextPage}>
                    Next
                </Button>
            </div>
        </div>
    );
}
