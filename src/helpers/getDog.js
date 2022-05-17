const getDog = async () => {
    //con get syncawait
    //endpoint: Breed all
    const url = "https://api.thedogapi.com/v1/images/search";
    const res = await fetch(url);
    // const data = await res.json(); //devuelve array con un objeto
    // console.log('getDogs > data: ', data); // array with one object
    // console.log('getDogs > data[0]: ', data[0]); // object
    const [data] = await res.json(); //devuelve directamente el objeto (data[0])

    const { url: image, breeds: [breed] } = data;
    // breed = breeds[0]

    console.log('getDogs 1 > data: ', data);

    const dog = {
        image, // image:image (alias del destructuring de data)
        breed, /* data.breeds[0], */ /* { id: 1, name: "Labrador", } */
    }

    console.log('getDogs 2 > dog: ', dog);

    return dog;
}

export default getDog;