export const convertImageToUrl = async (file : File) => await new Promise(resolve => {
    const reader = new FileReader();
    
    reader.addEventListener("load", () => resolve(reader.result))
    
    reader.readAsDataURL(file);
})