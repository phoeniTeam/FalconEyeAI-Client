import axios from "axios";

export const handleImageDownload = async (imageUrl, imageName) => {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', imageName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Download failed:', error);
    }
};

