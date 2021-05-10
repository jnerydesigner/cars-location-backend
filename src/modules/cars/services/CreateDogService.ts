interface IDogProps {
  name: string;
  breed: string;
}

class CreateDogService {
  dogs = [];
  execute({ breed, name }: IDogProps) {
    const dog = {
      name,
      breed,
    };

    return dog;
  }
}

export default new CreateDogService();
