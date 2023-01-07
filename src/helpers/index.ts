export const cutDescription = (description: string) => {
  const descriptionSplitted = description.split('. ');

  if (descriptionSplitted.length >= 3)
    return {
      title: descriptionSplitted[0],
      description: description.slice(descriptionSplitted[0].length),
    };

  return { title: description.slice(0, -15) + '...', description: null };
};
