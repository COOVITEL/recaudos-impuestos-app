const token = import.meta.env.PUBLIC_COOVITEL_TOKEN;

export async function fetchTokenFromApi(): Promise<{ token: string; expiresInSeconds: number }> {
  const url = 'https://enviomensajes.coovitel.coop/recaudos-tunja/authenticateRecaudos/';

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    // Si se logró contactar al servidor pero no está OK
    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    const response = data.response_json
    return { token: response.access_token, expiresInSeconds: response.expires_in ?? 20 * 60 };

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Error de red o CORS:', error);
    } else {
      console.error('Error al obtener token:', error);
    }
    throw { token: "", expiresInSeconds: 0}; // lo re-lanzas si quieres que se maneje en otro lado
  }
}

export async function fetchCheckReferenceApi(datas: any) {
  const url = 'https://enviomensajes.coovitel.coop/recaudos-tunja/checkReference/';
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datas),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    // Si se logró contactar al servidor pero no está OK
    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
    }

    const response = await res.json();
    return response;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Error de red o CORS:', error);
    } else {
      console.error('Error al obtener token:', error);
    }
    throw error; // lo re-lanzas si quieres que se maneje en otro lado
  }
}

export async function fetchNotifyReferenceApi(datas: any) {
  const url = 'https://enviomensajes.coovitel.coop/recaudos-tunja/notityReference/';
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datas),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    // Si se logró contactar al servidor pero no está OK
    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
    }

    const response = await res.json();
    return response;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Error de red o CORS:', error);
    } else {
      console.error('Error al obtener token:', error);
    }
    throw error; // lo re-lanzas si quieres que se maneje en otro lado
  }
}