function fileUploader() {
    return {
        file: null,
        tempName: "", // Menyimpan nama sementara sebelum disimpan
        handleFileUpload(event) {
            const uploadedFile = event.target.files[0];
            if (!uploadedFile) return;
            
            let isValid = uploadedFile.type === "application/pdf";
            this.file = {
                name: this.getFileNameWithoutExtension(uploadedFile.name),
                file: uploadedFile,
                isValid: isValid,
            };
            this.tempName = this.file.name;
            event.target.value = "";
        },
        removeFile() {
            this.file = null;
            this.tempName = "";
            document.getElementById("upload").value = "";
        },
        renameFile() {
            if (this.file && this.tempName.trim() !== "") {
                this.file.name = this.getFileNameWithoutExtension(this.tempName);
            }
        },
        getFileNameWithoutExtension(fileName) {
            const lastDotIndex = fileName.lastIndexOf(".");
            return lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;
        }
    };
}
