export const STRAPI_BASE_URL = "https://wise-friend-099f0d1c69.strapiapp.com";

export async function getHomePage() {
  const response = await getStrapiData(
    `/api/home-page?fields[0]=cover&fields[1]=textCover&populate[events][populate][images][populate]=img&populate[stories][populate]=*`
  );
  return response?.data;
}

export async function getWhoWeAre() {
  const response = await getStrapiData(`/api/who-we-are`);
  return response?.data;
}

export async function getTeam() {
  const response = await getStrapiData(
    `/api/team?populate[team][populate][0]=img`
  );
  const data = response?.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sortedTeam = data.team.sort((a: any, b: any) => {
    return a.order - b.order;
  });
  return { ...data, team: sortedTeam };
}

export async function getContact() {
  const response = await getStrapiData(`/api/contact`);
  return response?.data;
}

export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
