export const fetchCertifications = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/certifications/list`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };
  