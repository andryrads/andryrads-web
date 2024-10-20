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

  export const fetchItSkillsLanguage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/it-skills/list-language`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };

  export const fetchItSkillsFwlb = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/it-skills/list-fwlb`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };

  export const fetchItSkillsTechstack = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/it-skills/list-techstack`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };

  export const fetchItSkillsMultimedia = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/it-skills/list-multimedia`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  };

  