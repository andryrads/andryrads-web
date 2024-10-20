  export const fetchSoftSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/soft-skills/list`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };
  
  export const fetchHardSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/hard-skills/list`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };
  