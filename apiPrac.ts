// // Define the structure of the API response using an interface
// interface CatFact {
//   fact: string;
//   length: number;
// }

// // Function to fetch a cat fact using TypeScript
// const fetchCatFact = async (): Promise<void> => {
//   const apiUrl: string = 'https://catfact.ninja/fact';

//   try {
//       const response: Response = await fetch(apiUrl);

//       // Check if the response is not OK
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Parse the JSON response and type cast it
//       const data: CatFact = await response.json();

//       // Log the result to the console
//       console.log('Random Cat Fact:', data.fact);
//   } catch (error) {
//       console.error('There was an error fetching the cat fact:', error);
//   }
// };

// // Call the function to fetch a cat fact
// fetchCatFact();

// Create a generic type for the API response
type ApiResponse<T> = {
  data: T;
  status: string;
  message?: string;
};

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
      const response: Response = await fetch(url);

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: T = await response.json();
      return {
          data: data,
          status: 'success',
      };
  } catch (error) {
      console.error('Fetch error:', error);
      return {
          data: {} as T,
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
      };
  }
}

type DogImageResponse = {
  message: string;
  status: string;
};

const fetchDogImage = async (): Promise<void> => {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';

  const result = await fetchData<DogImageResponse>(apiUrl);

  if (result.status === 'success') {
      console.log('Random Dog Image URL:', result.data.message);
  } else {
      console.error('Error fetching dog image:', result.message);
  }
};

fetchDogImage();
