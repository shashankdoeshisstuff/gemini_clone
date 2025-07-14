// InputArea.tsx
const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        sendMessage({
          id: Date.now().toString(),
          content: '',
          role: 'user',
          timestamp: new Date(),
          image: event.target.result as string
        });
      }
    };
    reader.readAsDataURL(file);
  }
};