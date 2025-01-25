

export const validateContact = (data: { name: string; email: string; phone: string }): string[] => {
    const errors: string[] = [];
    if (!data.name) errors.push("Name is required.");
    if (!data.email) errors.push("Email is required.");
    if (!data.phone) errors.push("Phone is required.");
    return errors;
  };
  