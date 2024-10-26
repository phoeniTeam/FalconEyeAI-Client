import axios from "axios";

export const handleImageDownload = async (imageUrl, imageName) => {
    try {

        if (imageUrl.endsWith('.jfif')) {

            imageUrl = imageUrl.slice(0, -5) + '.jpg';
        } else if (!imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.png')) {

            imageUrl += '.jpg';
        }

        const response = await axios.get(imageUrl, {
            responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const link = document.createElement('a');


        if (!imageName.includes('.')) {

            const fileExtension = imageUrl.endsWith('.png') ? '.png' : '.jpg';
            imageName += fileExtension;
        }

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